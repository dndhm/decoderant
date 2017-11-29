import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from './styles';

const Heading = ({ children, classes, level }) => {
  const TagName = `h${level}`;

  return (
    <TagName>{children}</TagName>
  );
};

Heading.defaultProps = {
  level: 1,
};

Heading.propTypes = {
  classes: PropTypes.object.isRequired,
  level: PropTypes.oneOf([1,2,3]),
};

export default injectSheet(styles)(Heading);
