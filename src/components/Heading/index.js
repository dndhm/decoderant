import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';

import styles from './styles';

const Heading = ({ children, classes, level }) => {
	const TagName = `h${level}`;
	const headingClasses = classNames(
		classes.heading,
		classes[`h${level}`
		]);

	return (
		<TagName className={headingClasses}>{children}</TagName>
	);
};

Heading.defaultProps = {
	level: 1,
};

Heading.propTypes = {
	children: PropTypes.node.isRequired,
	classes: PropTypes.object.isRequired,
	level: PropTypes.oneOf([1, 2, 3]),
};

export default injectSheet(styles)(Heading);
