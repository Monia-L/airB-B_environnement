import React from 'react';
import renderer from 'react-test-renderer';
import { View, Button } from 'react-native';

import App from './App';

describe('App', () => {
  const creatApp = renderer.create(<App />);
  const test = creatApp.root;
  it('renders View', () => {
    expect(test.findByType(View)).toBeTruthy();
  });

  describe('within View', () => {
    it('renders Button with title "Touch me"', () => {
      expect(test.findByType(Button).props.title).toBe('Touch me !');
    });
  });
});
