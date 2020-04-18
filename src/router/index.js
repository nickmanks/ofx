import React from 'react';
import PropTypes from 'prop-types';
import {Router, Route, Switch} from 'react-router';
import Render from './render';
import ErrorPage from './error';
import history from '#src/history';

const AppRouter = ({routes})=> (
  <Router history={history}>
    <Switch>
      {routes.map((route, idx)=> (
        <Route
          key={idx}
          exact={route.exact}
          path={route.path}
          render={(props)=> (
            <Render
              title={route.title}
              meta={route.meta}
              auth={route.auth}
              component={route.component}
              routedProps={props}
              color={route.color}
            />
          )}
        />
      ))}
      <Route component={ErrorPage} />
    </Switch>
  </Router>
);
AppRouter.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object)
};

export default AppRouter;
