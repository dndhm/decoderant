import React from 'react';
import { create } from 'react-test-renderer';

import Project from './';

describe('Project', () => {
	test('should render correctly', () => {
		const tree = create(
			<Project
				description="This is my website."
				tags={['React', 'NodeJS']}
				title="DECODERANT"
			/>
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
