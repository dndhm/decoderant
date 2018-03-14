import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import injectStaticSheet from 'inject-static-sheet';

import colors, { BLACK } from '../../constants/colors';

const colorKeys = Object.keys(colors);

const styles = {
	heading: {
		letterSpacing: '0.05em',
		display: 'block',
		fontFamily: '"Oswald", sans-serif',
		textAlign: 'center',
		textTransform: 'uppercase',
		margin: '0 auto',
	},
	h1: {
		'font-size': '20px',
		'letter-spacing': '0.05em',
	},
	h2: {
		borderTop: '1px solid #b7b7b7',
		paddingTop: '10px',
	},
	h3: {
		'font-size': '12px',
	},

	...colorKeys.reduce((acc, colorKey) => ({
		...acc,
		[`color-${colorKey}`]: {
			color: colors[colorKey],
		},
	}), {}),
};

const Heading = ({
	children,
	classes,
	color,
	level,
}) => {
	const TagName = `h${level}`;
	const headingClasses = classNames(
		classes.heading,
		classes[`h${level}`],
		classes[`color-${color}`]
	);

	return (
		<TagName className={headingClasses}>{children}</TagName>
	);
};

Heading.defaultProps = {
	color: BLACK,
	level: 1,
};

Heading.propTypes = {
	children: propTypes.node.isRequired,
	classes: propTypes.object,
	color: propTypes.oneOf(colorKeys),
	level: propTypes.oneOf([1, 2, 3]),
};

export default injectStaticSheet(styles, 'Heading')(Heading);
