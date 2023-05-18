import React from 'react'
import renderer from 'react-test-renderer'
import None from './None'

test('Test renders', () => {
	renderer.create(<None />)
})
