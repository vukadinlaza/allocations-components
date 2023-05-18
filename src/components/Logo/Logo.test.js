import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Logo from './Logo'

test('Logo renders', () => {
	render(<Logo />)
	const logo = screen.getByTestId('logo')

	fireEvent.click(logo)
})
