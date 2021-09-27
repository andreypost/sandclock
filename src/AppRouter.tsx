import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { publicRoutes } from './routes'
import { HOME_ROUTE } from 'utils/routes.constants'

const AppRouter = () => {
  return (
    <HashRouter>
      {/* <BrowserRouter basename="/"> */}
      <Switch>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact={true} />
        ))}
        {/* {user ? privatRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact={true} />) : null} */}
        <Redirect to={HOME_ROUTE} />
      </Switch>
      {/* </BrowserRouter> */}
    </HashRouter>
  )
}

export default AppRouter
