import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from '../../../src/counter/counter';

describe('<Counter/>', () => {
  it('should render correctly', () => {
    const component = shallow(<Counter />);

    expect(component).toMatchSnapshot();
  });
});