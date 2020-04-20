import LazyHome from '#src/views/Home/lazy';
import LazyQuote from '#src/views/Quote/lazy';

export const routes = [
  {
    title: 'Money Transfer Quote',
    path: '/',
    exact: true,
    auth: false,
    component: LazyHome
  },
  {
    title: 'Your Personalised Quote',
    path: '/result',
    exact: true,
    auth: false,
    component: LazyQuote
  }
];
