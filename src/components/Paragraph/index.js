import React from 'react';
import propTypes from 'prop-types';
import injectStaticSheet from 'inject-static-sheet';

import colors, { MID_GREY } from '../../constants/colors';

const styles = {
	paragraph: {
		color: colors[MID_GREY],
		'font-family': '"EB Garamond", serif',
		'font-size': '13px',
		'line-height': '18px',
	},
};

const Paragraph = ({ children, classes }) => (
	<p className={classes.paragraph}>{children}</p>
);

Paragraph.propTypes = {
	children: propTypes.node.isRequired,
	classes: propTypes.object,
};

export default injectStaticSheet(styles, 'Paragraph')(Paragraph);
