import React from 'react';
import CountUp from '.';
import {component} from '#src/testing/snapshots';

component('CountUp').when('standard', ()=> <CountUp start={0} end={0.743} />);
