import LazyQuote from '#src/views/Quote/lazy';
import LazyResult from '#src/views/Result/lazy';

export const routes = [
  {
    title: 'Money Transfer Quote',
    path: '/',
    exact: true,
    auth: false,
    component: LazyQuote
  },
  {
    title: 'Your Personalised Quote',
    path: '/result',
    exact: true,
    auth: false,
    component: LazyResult
  }
];
