import React from 'react';
import propTypes from 'prop-types';
import injectStaticSheet from 'inject-static-sheet';

import colors, {
	PROJECT_SLATE,
	WHITE,
} from '../../constants/colors';
import Paragraph from '../Paragraph';

const styles = {
	container: {
		background: colors[PROJECT_SLATE],
	},
	heading: {
		color: colors[WHITE],
		'font-size': '12px',
		padding: '20px 0 10px',
		'margin-bottom': '10px',
	},
};

const Project = ({ classes, description, title }) => (
	<div className={classes.container}>
		<h3 className={classes.heading}>{title}</h3>
		<Paragraph>{description}</Paragraph>
	</div>
);

Project.propTypes = {
	classes: propTypes.object,
	description: propTypes.node.isRequired,
	title: propTypes.string.isRequired,
};

export default injectStaticSheet(styles, 'Project')(Project);
