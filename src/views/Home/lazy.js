/* istanbul ignore file */

import {lazy} from 'react';

const LazyHome = lazy(()=> import(/* webpackChunkName: "HomeView" */ '.'));

export default LazyHome;
