import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

const Title = ({children})=> (
  <Helmet>
    <title>{children ? `${children} | OFX` : 'OFX'}</title>
  </Helmet>
);
Title.propTypes = {
  children: PropTypes.string
};

export default Title;
