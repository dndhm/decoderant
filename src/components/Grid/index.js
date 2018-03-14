import React from 'react';
import propTypes from 'prop-types';
import injectStaticSheet from 'inject-static-sheet';

const styles = {
	container: {
		display: 'grid',
		'grid-template-columns': 'repeat(auto-fit, minmax(320px, 1fr))',
		'grid-gap': '10px',
		'max-width': '960px',
		margin: '0 auto',
	},
};

const Grid = ({ children, classes }) => (
	<div className={classes.container}>{children}</div>
);

Grid.propTypes = {
	children: propTypes.node.isRequired,
	classes: propTypes.object,
};

export default injectStaticSheet(styles, 'Grid')(Grid);
