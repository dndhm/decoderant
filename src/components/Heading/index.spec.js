import React from 'react';
import { mount } from 'enzyme';

import Heading from './';

describe('Heading', () => {
  describe('level prop', () => {
    [1,2,3].map(level => {
      const component = mount(<Heading level={level} />);
      const tagName = `h${level}`;

      test(`renders ${tagName} tag for ${level}`, () => {
        expect(component.find(tagName).length).toEqual(1);
      });
    });
  });
});
