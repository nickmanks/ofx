import React from 'react';
import {Provider} from 'react-redux';
import Quote from '.';
import {component} from '#src/testing/snapshots';
import {storyStore} from '#src/testing/helpers';

component('Quote Widget').when('standard', ()=> {
  const store = storyStore();

  return (
    <Provider store={store}>
      <Quote />
    </Provider>
  );
});
