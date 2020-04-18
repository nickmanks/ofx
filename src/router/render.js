import React, {Fragment, Suspense} from 'react';
import PropTypes from 'prop-types';
import Protected from './protected';
import Title from '#src/title';
import Spinner from '#src/components/Spinner';

const Render = ({color, title, auth, component: Component, routedProps})=> (
  <Fragment>
    <Title>{title}</Title>
    <Suspense fallback={<Spinner fullscreen />}>
      {auth ? (
        <Protected component={Component} routedProps={routedProps} />
      ) : (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            background: color
          }}
        >
          <Component {...routedProps} />
        </div>
      )}
    </Suspense>
  </Fragment>
);
Render.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  auth: PropTypes.bool,
  component: PropTypes.any,
  routedProps: PropTypes.any
};

export default Render;
