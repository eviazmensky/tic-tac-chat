import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';

describe('app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('should add', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
    expect(wrapper.instance().adds(1,2)).toEqual(3);
  })
});
