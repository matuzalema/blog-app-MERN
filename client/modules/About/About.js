import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h2>About</h2>
      </div>
    );
  }
}

About.propTypes = {
};

export default About;
