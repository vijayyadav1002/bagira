import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Counter } from '../../../src/counter/counter';
jest.useFakeTimers();

describe('<Counter/>', () => {
  it('should render correctly', () => {
    const component = shallow(<Counter />);
    expect(setTimeout).toHaveBeenCalled();
    expect(toJson(component)).toMatchSnapshot();
  });
});