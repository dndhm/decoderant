import React from 'react';
import propTypes from 'prop-types';
import injectStaticSheet from 'inject-static-sheet';

import colors, { MID_GREY } from '../../constants/colors';

const styles = {
	list: {
		margin: '0 auto 10px',
		'text-align': 'center',
	},
	listItem: {
		color: colors[MID_GREY],
		display: 'inline',
		'font-size': '11px',
		'margin-right': '3px',
		'padding-left': '10px',
		'text-transform': 'uppercase',
	},
	'listItem:nth-of-type(1)': {
		'padding-left': 0,
	}
};

const ProjectTags = ({ classes, tags }) => (
	<ul className={classes.list}>
		{tags.map((tag, index) => (
			<li
				className={classes.listItem}
				key={index}
			>
				{tag}
			</li>
		))}
	</ul>
);

export const tags = [
	'Backbone',
	'CSS',
	'JS',
	'Phonegap',
	'PHP',
	'React',
	'Redux',
	'Responsive',
	'Wordpress',
];

ProjectTags.propTypes = {
	classes: propTypes.object,
	tags: propTypes.arrayOf(
		propTypes.oneOf(tags)
	).isRequired,
};

export default injectStaticSheet(styles, 'ProjectTags')(ProjectTags);
