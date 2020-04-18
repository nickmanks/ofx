/* istanbul ignore file */

import {lazy} from 'react';

const LazyQuote = lazy(()=> import(/* webpackChunkName: "QuoteView" */ '.'));

export default LazyQuote;
