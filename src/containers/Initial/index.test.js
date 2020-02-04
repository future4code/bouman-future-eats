import React from 'react';
import renderer from 'react-test-renderer';
import { InitialPage } from './index'

test('initial page snapshot', () => {
    const tree = renderer
        .create(<InitialPage/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});