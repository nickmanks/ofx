import React from 'react';
import PropTypes from 'prop-types';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Render from '#src/router/render';

export const Unprotected = ()=> <h1>Unprotected</h1>;
export const Protected = ()=> <h1>Protected</h1>;
export const ProtectedUnauth = ()=> <h1>ProtectedUnauth</h1>;
export const Title = ()=> <h1>Title</h1>;
export const NoTitle = ()=> <h1>NoTitle</h1>;

export const mockRoutes = [
  {
    title: 'Unprotected',
    path: '/unprotected',
    exact: true,
    auth: false,
    component: Unprotected
  },
  {
    title: 'Protected',
    path: '/protected',
    exact: true,
    auth: true,
    component: Protected
  },
  {
    title: 'Protected Unauthenticated',
    path: '/protected-unauth',
    exact: true,
    auth: true,
    component: ProtectedUnauth
  },
  {
    title: undefined,
    path: '/no-title',
    exact: true,
    auth: false,
    component: NoTitle
  },
  {
    title: 'Title',
    path: '/title',
    exact: true,
    auth: false,
    component: Title
  }
];

export const MockSwitch = ({routes})=> (
  <Switch>
    {routes.map((route, idx)=> (
      <Route
        key={idx}
        exact={route.exact}
        path={route.path}
        render={(props)=> (
          <Render
            title={route.title}
            auth={route.auth}
            component={route.component}
            routedProps={props}
          />
        )}
      />
    ))}
  </Switch>
);
MockSwitch.propTypes = {
  routes: PropTypes.array
};
MockSwitch.defaultProps = {
  routes: mockRoutes
};

const MockRouter = ({store, history, routes})=> (
  <Provider store={store}>
    <Router history={history}>
      <MockSwitch routes={routes} />
    </Router>
  </Provider>
);
MockRouter.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
  routes: PropTypes.array
};
MockRouter.defaultProps = {
  routes: mockRoutes
};

export default MockRouter;
