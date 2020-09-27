/* eslint-disable no-undef */

import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('Initial Tests', () => {
  it('renders a Sample Component', () => {
    const wrapper = shallow(<App />);

    // Check if an element in the Component exists
    expect(wrapper.find(<h1>Hello from React/JavaScript!!!</h1>)).toBeTruthy();
  });
});
