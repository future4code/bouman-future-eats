import React from 'react';
import renderer from 'react-test-renderer';
import { HeaderNav } from './index'

test('initial page snapshot', () => {
    const tree = renderer
        .create (<HeaderNav display="flex" menuText="Busca"/>)
        .toJSON();
    expect(tree).toMatchSnapshot()
  })