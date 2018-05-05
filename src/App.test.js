import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('Should render as expected', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  })
});