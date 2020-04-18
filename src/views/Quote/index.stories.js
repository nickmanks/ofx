import React from 'react';
import Quote from '.';
import {component} from '#src/testing/snapshots';

component('Quote View').when('standard', ()=> <Quote />);
