import React from 'react';
import { create } from 'react-test-renderer';

import App from './';

describe('App', () => {
	test('should render correctly', () => {
		const tree = create(<App />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
