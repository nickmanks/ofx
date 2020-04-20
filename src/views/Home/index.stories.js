import React from 'react';
import {Provider} from 'react-redux';
import Home from '.';
import {component} from '#src/testing/snapshots';
import {storyStore} from '#src/testing/helpers';

component('Home View').when('standard', ()=> {
  const store = storyStore();

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
});
