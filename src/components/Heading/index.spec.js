import React from 'react';
import { create } from 'react-test-renderer';

import Heading from './';

describe('Heading', () => {
	[1, 2, 3].forEach(level =>
		test(`renders correctly for given level: ${level}`, () => {
			const tree = create(
				<Heading level={level}>Heading</Heading>
			).toJSON();

			expect(tree).toMatchSnapshot();
		})
	);
});
