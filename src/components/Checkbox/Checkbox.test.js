import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Checkbox from './Checkbox'

test('Changes status on click', () => {
	render(<Checkbox />)
	const checkbox = screen.getByTestId('checkbox')

	fireEvent.click(checkbox)
})
