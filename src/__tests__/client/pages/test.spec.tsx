import React from 'react';
import { shallow } from 'enzyme';
import TestPage from '@client/pages/test';

describe('<HomePage />', () => {
  const setup = (props = {}) => {
    const wrapper = shallow(<TestPage {...props} />);
    return { wrapper, props };
  };

  describe('#render', () => {
    test('should display component', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
