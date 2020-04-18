/* istanbul ignore file */

import {lazy} from 'react';

const LazyResult = lazy(()=> import(/* webpackChunkName: "ResultView" */ '.'));

export default LazyResult;
