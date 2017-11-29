import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Heading from '../Heading';
import styles from './styles';

const App = ({ classes }) => (
  <Heading level={1} />
);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(App);
