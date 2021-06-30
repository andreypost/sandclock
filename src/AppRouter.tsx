import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { publicRoutes } from './routes'
import { HOME_ROUTE } from 'utils/routes.constants'
import Spiner from 'Spiner'

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<Spiner />}>
      <Switch>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact={true} />
        ))}
        {/* {user ? privatRoutes.map(({ path, Component }) => <Route key={path} path={path} component={Component} exact={true} />) : null} */}
        <Redirect to={HOME_ROUTE} />
      </Switch>
    </Suspense>
  )
}

export default AppRouter
