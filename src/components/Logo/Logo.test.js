import React from 'react'
import renderer from 'react-test-renderer'
import Logo from './Logo'

test('Logo renders', () => {
	renderer.create(<Logo />)
})
