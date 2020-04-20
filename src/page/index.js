import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '#src/components/Navbar';
// import Footer from '#src/components/Footer';
import styles from './index.scss';

const Page = ({children})=> (
  <div>
    <Navbar />
    <div className={styles.page}>{children}</div>
    {/* <Footer /> */}
  </div>
);
Page.propTypes = {
  children: PropTypes.any
};

export default Page;
