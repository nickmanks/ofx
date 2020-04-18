import React from 'react';
import Result from '.';
import {component} from '#src/testing/snapshots';

component('Result View').when('standard', ()=> <Result />);
