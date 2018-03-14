import React from 'react';
import propTypes from 'prop-types';
import injectStaticSheet from 'inject-static-sheet';

import colors, {
	PROJECT_SLATE,
	WHITE,
} from '../../constants/colors';

import Heading from '../Heading';
import Paragraph from '../Paragraph';
import ProjectTags, { tags } from '../ProjectTags';

const styles = {
	container: {
		background: colors[PROJECT_SLATE],
		'text-align': 'center',
	},
	content: {
		padding: '10px',
	},
	description: {
		margin: '0 auto 10px',
		width: '80%',
	},
};

const Project = ({
	activeTag,
	classes,
	description,
	tags,
	title,
}) => (
	<div className={classes.container}>
		<div className={classes.content}>
			<Heading color={WHITE} level={3}>{title}</Heading>
			<ProjectTags active={activeTag} tags={tags} />
			<div className={classes.description}>
				<Paragraph>{description}</Paragraph>
			</div>
		</div>
	</div>
);

Project.propTypes = {
	activeTag: propTypes.oneOf(tags),
	classes: propTypes.object,
	description: propTypes.node.isRequired,
	tags: propTypes.arrayOf(
		propTypes.oneOf(tags)
	).isRequired,
	title: propTypes.string.isRequired,
};

export default injectStaticSheet(styles, 'Project')(Project);
