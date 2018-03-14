import React from 'react';
import { create } from 'react-test-renderer';

import colors from '../../constants/colors';

import Heading from './';

describe('Heading', () => {
	[1, 2, 3].forEach(level =>
		test(`should render correctly for given level: ${level}`, () => {
			const tree = create(
				<Heading level={level}>Heading</Heading>
			).toJSON();

			expect(tree).toMatchSnapshot();
		})
	);

	Object.keys(colors).forEach(colorKey => {
		test(`should render correctly for given color: ${colorKey}`, () => {
			const tree = create(
				<Heading color={colorKey}>>Heading</Heading>
			).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});
});
