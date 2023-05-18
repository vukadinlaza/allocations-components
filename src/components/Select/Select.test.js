import React from 'react'
import renderer from 'react-test-renderer'
import Select from './Select'

test('Select renders', () => {
	renderer.create(<Select />)
})
