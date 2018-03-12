import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import injectStaticSheet from 'inject-static-sheet';

import colors, { MID_GREY } from '../../constants/colors';

const styles = {
	list: {
		margin: '0 auto 10px',
		'text-align': 'center',
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
	activeTag,
	classes,
	tags,
}) => (
	<ul className={classes.list}>
		{tags.map((tag, index) => {
			const classNames = classnames(
				classes.listItem,
				{
					activeItem: tag === activeTag,
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
	'Phonegap',
	'PHP',
	'React',
	'Redux',
	'Responsive',
	'Wordpress',
];

ProjectTags.propTypes = {
	activeTag: propTypes.oneOf(tags),
	classes: propTypes.object,
	tags: propTypes.arrayOf(
		propTypes.oneOf(tags)
	).isRequired,
};

export default injectStaticSheet(styles, 'ProjectTags')(ProjectTags);
