import React from 'react';
import propTypes from 'prop-types';
import injectStaticSheet from 'inject-static-sheet';

const styles = {
	container: {
		'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
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
