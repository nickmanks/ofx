import React from 'react';
import {Provider} from 'react-redux';
import Quote from '.';
import {component} from '#src/testing/snapshots';
import {storyStore} from '#src/testing/helpers';

component('Quote View').when('standard', ()=> {
  const store = storyStore({
    exchange: {
      fetching: false,
      rate: 0.763,
      from: 'AUD',
      to: 'USD',
      amount: '23,000',
      exchange: 16732.21
    }
  });

  return (
    <Provider store={store}>
      <Quote />
    </Provider>
  );
});
