import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { renderAtRoot } from './index';

describe("test Index", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it("should call renderAtRoot with correct args", () => {
        const renderSpy = jest.fn();
        jest.spyOn(ReactDOM, 'render').mockImplementation(renderSpy);
        renderAtRoot();
        expect(renderSpy).toHaveBeenCalled();
        expect(renderSpy.mock.calls[0].length).toBe(2);
        const wrapper = shallow(renderSpy.mock.calls[0][0]);
        expect(toJson(wrapper)).toMatchSnapshot();
        const appRootNode = renderSpy.mock.calls[0][1];
        expect(appRootNode.textContent).toBe('test');
    });
});