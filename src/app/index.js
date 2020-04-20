import React, {Suspense} from 'react';
import Page from '#src/page';
import AppRouter from '#src/router';
import Spinner from '#src/components/Spinner';
import {routes} from '#src/router/routes';

const App = ()=> (
  <Suspense fallback={<Spinner fullscreen />}>
    <Page>
      <AppRouter routes={routes} />
    </Page>
  </Suspense>
);

export default App;
