import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import injectStaticSheet from 'inject-static-sheet';

import colors, { MID_GREY } from '../../constants/colors';

const styles = {
	list: {
		margin: '10px auto',
		'text-align': 'center',
		'padding-top': '10px',
		position: 'relative',
		'&:after': {
			'border-top': `1px solid ${colors[MID_GREY]}`,
			content: '""',
			'margin-left': '-10%',
			position: 'absolute',
			top: 0,
			left: '50%',
			width: '20%',
		},
	},
	listItem: {
		color: colors[MID_GREY],
		cursor: 'pointer',
		display: 'inline',
		'font-size': '11px',
		'margin-right': '3px',
		'padding-left': '10px',
		'text-transform': 'uppercase',
		transition: 'all .2s ease-in',
	},
	'listItem:nth-of-type(1)': {
		'padding-left': 0,
	},
	activeItem: {
		transform: 'translateX(2px) scale(1.003)',
	},
};

const ProjectTags = ({
	active,
	classes,
	tags,
}) => (
	<ul className={classes.list}>
		{tags.map((tag, index) => {
			const classNames = classnames(
				classes.listItem,
				{
					activeItem: tag === active,
				}
			);

			return (
				<li
					className={classNames}
					key={index}
				>
					{tag}
				</li>
			);
		})}
	</ul>
);

export const tags = [
	'Backbone',
	'CSS',
	'JS',
	'Neo4j',
	'NodeJS',
	'Phonegap',
	'PHP',
	'React',
	'Redux',
	'Responsive',
	'Wordpress',
	'Social media',
];

ProjectTags.propTypes = {
	active: propTypes.oneOf(tags),
	classes: propTypes.object,
	tags: propTypes.arrayOf(
		propTypes.oneOf(tags)
	).isRequired,
};

export default injectStaticSheet(styles, 'ProjectTags')(ProjectTags);
