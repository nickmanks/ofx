import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {location} from '#src/globals';

const Protected = ({authenticated, component: Component, routedProps})=> (
  <Fragment>
    {authenticated ? (
      <Fragment>
        <Component {...routedProps} />
      </Fragment>
    ) : (
      <Redirect
        to={`/login?redirect=${location.pathname}&params=${location.search}`}
      />
    )}
  </Fragment>
);
Protected.propTypes = {
  authenticated: PropTypes.bool,
  component: PropTypes.any,
  routedProps: PropTypes.object
};

const mapStateToProps = ({auth})=> ({
  authenticated: auth.authenticated
});

export default connect(mapStateToProps)(Protected);
