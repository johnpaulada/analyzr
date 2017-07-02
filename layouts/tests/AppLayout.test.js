import React from 'react';
import AppLayout from '../AppLayout';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<AppLayout />).toJSON();
  expect(rendered).toBeTruthy();
});
