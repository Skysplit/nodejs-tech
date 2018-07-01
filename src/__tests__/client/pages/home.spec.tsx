import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '@client/pages/home';

describe('<HomePage />', () => {
  const setup = (props = {}) => {
    const wrapper = shallow(<HomePage {...props} />);
    return { wrapper, props };
  };

  describe('#render', () => {
    test('should display component', () => {
      const { wrapper } = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
