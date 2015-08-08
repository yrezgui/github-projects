import expect from 'expect';
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Header from './index';

describe('Header component', function () {
  it('renders without problems', function () {
    const profileData = {
      name: 'Elon Musk',
      avatar_url: '/musk.png'
    };

    // Render Header with a specified profile in the document
    let header = TestUtils.renderIntoDocument(
      <Header profile={profileData} />
    );

    let profileView = TestUtils.findRenderedDOMComponentWithClass(header, 'right');
    let image = TestUtils.findRenderedDOMComponentWithTag(profileView, 'img');

    // We can't test it equally because browsers add the host to the attribute
    expect(image.getDOMNode().src).toMatch(/\/musk\.png$/);
    expect(profileView.getDOMNode().textContent.trim()).toBe('Elon Musk');
  });
});
