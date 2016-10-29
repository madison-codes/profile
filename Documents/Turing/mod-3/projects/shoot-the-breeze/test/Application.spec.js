import React from 'react';

import { shallow, mount, render, spys } from 'enzyme';
import { assert, expect } from 'chai';

import Application from '../lib/components/Application';
import SortButton from '../lib/components/SortButton';
import UserList from '../lib/components/UserList';

describe('Application states', () => {
  var message =   {
    key: '-KSAMLo5iSmClrZSPFXv',
    content:  '1',
    createdAt:  1474438196301,
    user: {
        displayName: 'Madison Kerndt' ,
        email: 'madison.kerndt@gmail.com',
        uid: 'eDnoVr1f5OZlySEszpbYSI2IcxG2'
    }
  };

  var message2 =   {
    key: '-KS9Mid4HGVWZxqxn4OQ',
    content:  'hello',
    createdAt:  1474421516861,
    user: {
        displayName: 'Madison Kerndt' ,
        email: 'madison.kerndt@gmail.com',
        uid: 'eDnoVr1f5OZlySEszpbYSI2IcxG2'
    }
  };
  context('Constructor', () => {
    it('renders as a <section>', () => {
      const wrapper = shallow(<Application />);
      assert.equal(wrapper.type(), 'section');
    });
  });
});
