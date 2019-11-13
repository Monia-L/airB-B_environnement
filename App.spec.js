import React from 'react';
import renderer from 'react-test-renderer';
import { View, Button } from 'react-native';

import App from './App';

describe('App', () => {
  const creatApp = renderer.create(<App />);
  it('renders View', () => {
    const viewTest = creatApp.root;
    expect(viewTest.findByType(View)).toBeTruthy();
  });

  describe('within View', () => {
    it('renders Button with title "Show alert"', () => {
      const buttonTest = creatApp.root;
      expect(buttonTest.findByType(Button).props.title).toBe('Touch me !');
    });
  });
});
