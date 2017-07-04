const path = require('path')
const fs = require('fs')
const React = require('react')
const {renderToString} = require('react-dom/server')
const {StaticRouter} = require('react-router-dom')

const {default: App} = require('../src/containers/App/App')
const { matchPath } = require('react-router-dom')
const {default: routes} = require('../src/routes/index')

module.exports = function universalLoader (req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }

    let promises = []
    routes.some(route => {
      // use `matchPath` here
      const match = matchPath(req.url, route)
      if (match) {
        if (route.component.fetchData) { // Only do if the container has fetchData method
          promises.push(route.component.fetchData(match))
        }
      }
      return match
    })
    Promise.all(promises).then(response => {
      const context = {}
      const markup = renderToString(
        <StaticRouter
          location={req.url}
          context={context}>
          <App initialData={response[0]} />
        </StaticRouter>
      )

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        redirect(301, context.url)
      } else {
        // we're good, send the response
        const RenderedApp = htmlData.replace('{{SSR}}', markup).replace('appData', JSON.stringify(response[0]))
        res.status(200).send(RenderedApp)
      }
    }, (error) => {
      // handleError(res, error)
      throw new Error(res, error)
    })
  })
}
