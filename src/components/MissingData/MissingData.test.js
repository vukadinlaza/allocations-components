import React from 'react'
import renderer from 'react-test-renderer'
import MissingData from './MissingData'

test('MissingData renders', () => {
	renderer.create(<MissingData />)
})
