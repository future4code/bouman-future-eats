import React from 'react'
import renderer from 'react-test-renderer'
import {ActionButton} from './index'

test("Button snapshot", ( ) => {
    const tree= renderer.create(<ActionButton text={''}/>).toJSON()

    expect(tree).toMatchSnapshot()
})