import React from 'react'
import renderer from 'react-test-renderer'
import Button from './Button'

test('Button renders', () => {
	renderer.create(<Button />)
})
