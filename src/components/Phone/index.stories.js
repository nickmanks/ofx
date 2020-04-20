import React from 'react';
import Phone from '.';
import {component} from '#src/testing/snapshots';

component('Phone').when('standard', ()=> (
  <Phone id={'phone'} name={'phone'} label={'Telephone / Mobile'} />
));
