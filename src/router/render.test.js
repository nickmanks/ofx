import React from 'react';
import {mount} from 'enzyme';
import {createBrowserHistory} from 'history';
import MockRouter, {
  Unprotected,
  Protected,
  ProtectedUnauth
} from '#src/testing/mock-router';
import {testStore} from '#src/testing/helpers';

describe('<Render />', ()=> {
  let history = null;

  beforeEach(()=> {
    history = createBrowserHistory();
    history.push('/foo');
  });

  it('renders an unprotected route component', ()=> {
    const store = testStore({
      auth: {authenticated: false}
    });

    history.push('/unprotected');

    const wrapper = mount(<MockRouter store={store} history={history} />);

    const unprotected = wrapper.find(Unprotected);

    expect(unprotected.length).toBe(1);
  });

  it('renders a protected route component if authenticated', ()=> {
    const store = testStore({
      auth: {authenticated: true}
    });

    history.push('/protected');

    const wrapper = mount(<MockRouter store={store} history={history} />);

    const unprotected = wrapper.find(Protected);

    expect(unprotected.length).toBe(1);
  });

  it('does not render a protected route if unauthenticated', ()=> {
    const store = testStore({
      auth: {authenticated: false}
    });

    history.push('/protected-unauth');

    const wrapper = mount(<MockRouter store={store} history={history} />);

    const unprotected = wrapper.find(ProtectedUnauth);

    expect(unprotected.length).toBe(0);
  });

  // eslint-disable-next-line max-len
  it('it redirects to signin with redirect query param if unauthenticated', ()=> {
    const store = testStore({
      auth: {authenticated: false}
    });

    history.push('/protected-unauth');

    mount(<MockRouter store={store} history={history} />);

    expect(history.location.pathname).toBe('/login');
    expect(history.location.search).toBe('?redirect=/protected-unauth&params=');
  });
});
