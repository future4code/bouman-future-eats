import React from 'react'
import renderer from 'react-test-renderer'
import OngoingOrder from './index'

test("Ongoing order snapshot", ( ) => {
    const tree= renderer.create(<OngoingOrder text={''}/>).toJSON()

    expect(tree).toMatchSnapshot()
})