import React from 'react';
import { RandomGifsComponent } from './RandomGifsComponent';
import { shallow } from 'enzyme';
import { Spinner } from "@blueprintjs/core";


describe('<RandomGifsComponent />', () => {
  it('Should render as expected default', () => {
    const wrapper = shallow(
      <RandomGifsComponent />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render without numberOfImages and Timer', () => {
    const wrapper = shallow(
      <RandomGifsComponent
        showNumberOfImages={false}
        showTimer={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  })

  it('Should render with Spinner', () => {
    const wrapper = shallow(
      <RandomGifsComponent loading={true} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(<Spinner />)).toEqual(true);
  })

  it('Should render with error message', () => {
    const wrapper = shallow(
      <RandomGifsComponent error={true} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(
      <span className="RandomGifsComponent__error">There was an error</span>
    )).toEqual(true);
  })

  it('Should render with notFound message', () => {
    const wrapper = shallow(
      <RandomGifsComponent notFound={true} />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.contains(
      <span className="RandomGifsComponent__error">Gifs not found</span>
    )).toEqual(true);
  })

  it('Should call fetchGifs when submit', () => {
    const fetchGifs = jest.fn();
    const wrapper = shallow(
      <RandomGifsComponent fetchGifs={fetchGifs} />
    );
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() })
    expect(fetchGifs).toHaveBeenCalled();
  })

  it('Should call fetchGifs when click on button', () => {
    const fetchGifs = jest.fn();
    const wrapper = shallow(
      <RandomGifsComponent fetchGifs={fetchGifs} />
    );
    wrapper.find('Button').simulate('click', { preventDefault: jest.fn() })
    expect(fetchGifs).toHaveBeenCalled();
  })

  it('Should change value of category state when onChange', () => {
    const wrapper = shallow(
      <RandomGifsComponent />
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
      <RandomGifsComponent />
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
      <RandomGifsComponent />
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
