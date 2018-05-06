import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { Spinner } from "@blueprintjs/core";


describe('<App />', () => {
  it('Should render as expected default', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render without numberOfImages and Timer', () => {
    const wrapper = shallow(
      <App
        showNumberOfImages={false}
        showTimer={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render with Spinner', () => {
    const wrapper = shallow(
      <App loading={true} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(<Spinner />)).toEqual(true);

  })

  it('Should render with error message', () => {
    const wrapper = shallow(
      <App error={true} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(
      <span className="App__error">There was an error</span>
    )).toEqual(true);
  })

  it('Should render with notFound message', () => {
    const wrapper = shallow(
      <App notFound={true} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(
      <span className="App__error">Gifs not found</span>
    )).toEqual(true);
  })

  it('Should call fetchGifs when submit', () => {
    const fetchGifs = jest.fn();
    const wrapper = shallow(
      <App fetchGifs={fetchGifs} />
    );
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() })
    expect(fetchGifs).toHaveBeenCalled();
  })

  it('Should call fetchGifs when click on button', () => {
    const fetchGifs = jest.fn();
    const wrapper = shallow(
      <App fetchGifs={fetchGifs} />
    );
    wrapper.find('Button').simulate('click', { preventDefault: jest.fn() })
    expect(fetchGifs).toHaveBeenCalled();
  })

  it('Should change value of category state when onChange', () => {
    const wrapper = shallow(
      <App />
    );
    wrapper.find('Input').first().simulate('change', {
      target: {
        name: 'category',
        value: 'pizza'
      }
    })
    expect(wrapper.state().category).toBe('pizza')
  })

  it('Should change value of numberofImages state when onChange', () => {
    const wrapper = shallow(
      <App />
    );
    wrapper.find('Input').first().simulate('change', {
      target: {
        name: 'numberOfImages',
        value: '10'
      }
    })
    expect(wrapper.state().numberOfImages).toBe('10')
  })

  it('Should change value of timer state when onChange', () => {
    const wrapper = shallow(
      <App />
    );
    wrapper.find('Input').first().simulate('change', {
      target: {
        name: 'timer',
        value: '7'
      }
    })
    expect(wrapper.state().timer).toBe('7')
  })
});
