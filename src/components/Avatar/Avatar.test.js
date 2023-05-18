import React from 'react'
import renderer from 'react-test-renderer'
import AvatarComponent from './Avatar'

test('Avatar renders', () => {
	renderer.create(<AvatarComponent />)
})
