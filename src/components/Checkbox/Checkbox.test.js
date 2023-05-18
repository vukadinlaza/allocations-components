import React from 'react'
import renderer from 'react-test-renderer'
import Checkbox from './Checkbox'

test('Changes status on click', () => {
	const component = renderer.create(<Checkbox />)
	const tree = component.toJSON()

	renderer.act(() => {
		tree.props.onClick()
	})
})
