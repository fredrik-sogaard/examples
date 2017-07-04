import Home from '../containers/Home/Home'
import Work from '../containers/Work/Work'
import NoMatch from '../components/NoMatch/NoMatch'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/work/:slug',
    component: Work
  },
  {
    component: NoMatch
  }
]

export default routes
