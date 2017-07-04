import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App/App'
import registerServiceWorker from './registerServiceWorker'

// Grab the state from script injected into the server-generated HTML
let props = document.getElementById('app-data').textContent

// Get rid of unwanted stuff to get a clean json boject
props = props.replace('<![CDATA[', '').replace(']]>', '').replace("'", '').replace("'", '')

// Check if props is the real data or just the placeholder and json parse it
const initialData = props.length > 21 ? JSON.parse(props) : false

ReactDOM.render(
  <BrowserRouter>
    <App {...initialData} />
  </BrowserRouter>, document.getElementById('root')
)
// registerServiceWorker()
