import React from 'react';
import Select from '.';
import {component} from '#src/testing/snapshots';

const options = [
  {value: 'AUD', label: 'Australian Dollar (AUD)'},
  {value: 'USD', label: 'American Dollar (USD)'},
  {value: 'GBP', label: 'British Pounds (GBP)'}
];

component('Select')
  .when('standard', ()=> (
    <Select placeholder={'From Currency'} options={options} zIndex={4} />
  ))
  .when('with error', ()=> (
    <Select
      placeholder={'From Currency'}
      options={options}
      error={{message: 'Required'}}
      zIndex={4}
    />
  ));
