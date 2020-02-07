import React from 'react'
import renderer from 'react-test-renderer'
import DishCard from './index'

test("Dish card snapshot", ( ) => {
    const tree= renderer.create(<DishCard text={''}/>).toJSON()

    expect(tree).toMatchSnapshot()
})