import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import App from '.';
import AppRouter from '#src/router';
import {store} from '#src/store';

describe('<App />', ()=> {
  it('renders the application router', ()=> {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const router = wrapper.find(AppRouter);

    expect(router.length).toBe(1);
  });
});
