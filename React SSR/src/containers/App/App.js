import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'
import routes from '../../routes'
import './App.css'

const PropsRoute = ({ location, component: Component, initialData, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} initialData={initialData} />
  )} />
)

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <main className='h-100'>
        <Route render={({ location }) => (
          <CSSTransitionGroup
            transitionName='fade'
            transitionAppear
            transitionAppearTimeout={300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <Switch key={location.key} location={location}>
              {routes.map((route, key) => {
                return (
                  <PropsRoute {...route} key={key} initialData={this.props.initialData} />
                )
              })}
            </Switch>
          </CSSTransitionGroup>
        )}
      />
      </main>
    )
  }
}

export default App
