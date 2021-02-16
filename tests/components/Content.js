import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Content from 'src/components/Content';
import Card from 'src/components/Card';

import recipesData from 'src/data';

describe('Content Component', () => {
  const wrapper = shallow(<Content title="Test" recipes={recipesData} />);

  it('should have a className content', () => {
    expect(wrapper.props().className).to.be.equal('content');
  });

  it('should have a title', () => {
    expect(wrapper.find('h1')).to.have.lengthOf(1);
    expect(wrapper.find('h1').text()).to.be.equal('Test');
  });

  it('should have 2 Cards components', () => {
    expect(wrapper.find(Card)).to.have.lengthOf(2);
  });
});
