import React from 'react'
import renderer from 'react-test-renderer'
import Feedback from './Feedback'

test('Feedback renders', () => {
	renderer.create(<Feedback />)
})
