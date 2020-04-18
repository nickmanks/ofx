import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import AppRouter from '.';
import ErrorPage from './error';
import history from '#src/history';
import {testStore} from '#src/testing/helpers';

const AuthRoute = ()=> <h1>Auth Route</h1>;
const NonAuthRoute = ()=> <h1>Non Auth Route</h1>;
const Login = ()=> <h1>Login</h1>;

const routes = [
  {
    title: 'Auth',
    path: '/auth-route',
    exact: true,
    auth: true,
    component: AuthRoute
  },
  {
    title: 'Non Auth',
    path: '/non-auth-route',
    exact: true,
    auth: false,
    component: NonAuthRoute
  },
  {
    title: 'Login',
    path: '/login',
    exact: true,
    auth: false,
    component: Login
  }
];

describe('<AppRouter />', ()=> {
  it('shows the auth route when authenticated', ()=> {
    history.push('/auth-route');
    const store = testStore({
      auth: {
        authenticated: true,
        accessToken: 'test-token'
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter routes={routes} />
      </Provider>
    );

    const authRoute = wrapper.find(AuthRoute);

    expect(authRoute.length).toBe(1);

    wrapper.unmount();
  });

  it('shows login if routing to auth route and unauthenticated', ()=> {
    history.push('/auth-route');
    const store = testStore({
      auth: {
        authenticated: false,
        accessToken: null
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter routes={routes} />
      </Provider>
    );

    const login = wrapper.find(Login);

    expect(login.length).toBe(1);

    wrapper.unmount();
  });

  it('shows non auth route if unauthenticated', ()=> {
    history.push('/non-auth-route');
    const store = testStore({
      auth: {
        authenticated: false,
        accessToken: null
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter routes={routes} />
      </Provider>
    );

    const nonAuth = wrapper.find(NonAuthRoute);

    expect(nonAuth.length).toBe(1);

    wrapper.unmount();
  });

  it('invalid route - shows 404 page', ()=> {
    history.push('/does-not-exist');
    const store = testStore({
      auth: {
        authenticated: true
      }
    });
    const wrapper = mount(
      <Provider store={store}>
        <AppRouter routes={routes} />
      </Provider>
    );

    wrapper.update();

    const notFound = wrapper.find(ErrorPage);

    expect(notFound.length).toBe(1);

    wrapper.unmount();
  });
});
