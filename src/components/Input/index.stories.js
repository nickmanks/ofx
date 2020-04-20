import React from 'react';
import Input from '.';
import {component} from '#src/testing/snapshots';

component('Input')
  .when('standard', ()=> (
    <Input
      name={'first'}
      type={'text'}
      placeholder={'First Name'}
      label={'First Name'}
    />
  ))
  .when('with error', ()=> (
    <Input
      name={'first'}
      type={'text'}
      placeholder={'First Name'}
      label={'First Name'}
      error={{message: 'Required'}}
    />
  ))
  .when('amount type', ()=> (
    <Input
      id={'amount'}
      name={'amount'}
      type={'amount'}
      placeholder={'Amount'}
      label={'Amount'}
      error={{message: 'Required'}}
    />
  ));
