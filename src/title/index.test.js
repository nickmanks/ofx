import React from 'react';
import {Helmet} from 'react-helmet';
import {mount} from 'enzyme';
import Title from '.';

describe('<Title />', ()=> {
  it('sets document title with correct OFX title', ()=> {
    mount(<Title>Title</Title>);

    const helmet = Helmet.peek();
    expect(helmet.title).toBe('Title | OFX');
  });

  it('sets default title if no children passed to Title', ()=> {
    mount(<Title />);

    const helmet = Helmet.peek();
    expect(helmet.title).toBe('OFX');
  });
});
