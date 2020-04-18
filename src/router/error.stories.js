import React from 'react';
import ErrorPage from './error';
import {component} from '#src/testing/snapshots';

component('Error Page').when('404', ()=> <ErrorPage />);
