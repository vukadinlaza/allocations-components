import React from 'react'
import renderer from 'react-test-renderer'
import DangerZone from './DangerZone'

test('DangerZone renders', () => {
	renderer.create(<DangerZone />)
})
