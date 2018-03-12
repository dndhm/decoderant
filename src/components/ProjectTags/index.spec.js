import React from 'react';
import { create } from 'react-test-renderer';

import ProjectTags, { tags } from './';

describe('ProjectTags', () => {
	tags.forEach(tag => {
		test(`should render correctly for given tag: ${tag}`, () => {
			const tree = create(
				<ProjectTags tags={[tag]} />
			)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});

		test('should render correctly with multiple tags', () => {
			const tree = create(
				<ProjectTags tags={tags} />
			)
				.toJSON();
			expect(tree).toMatchSnapshot();
		});
	});
});
