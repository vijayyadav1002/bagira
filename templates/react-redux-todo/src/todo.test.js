import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Todo from './todo';

describe('<Todo/>', function () {
    it('should render todo', function () {
        const component = shallow(<Todo/>);
        expect(toJson(component)).toMatchSnapshot();
    });
});