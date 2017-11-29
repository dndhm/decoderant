import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const Heading = ({ classes, level }) => {
  const TagName = `h${level}`;

  return (
    <TagName />
  );
};

Heading.propTypes = {
  classes: PropTypes.object.isRequired,
  level: PropTypes.oneOf([1,2,3]).isRequired,
};

export default injectSheet(styles)(Heading);
