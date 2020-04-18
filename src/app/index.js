import React, {Suspense} from 'react';
import AppRouter from '#src/router';
import Spinner from '#src/components/Spinner';
import {routes} from '#src/router/routes';

const App = ()=> (
  <Suspense fallback={<Spinner fullscreen />}>
    <AppRouter routes={routes} />
  </Suspense>
);

export default App;
