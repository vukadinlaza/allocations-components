import React, { FunctionComponent } from 'react'
import { CircularProgress } from '@mui/material'
import { IButtonProps } from './props'

const Button: FunctionComponent<IButtonProps> = ({
	onClick,
	loading,
	disabled,
	label,
	className,
	children,
}) => {
	return (
		<button
			onClick={onClick ? onClick : () => {}}
			className={`mt-4 btn primary ${className} ${
				loading ? 'loading' : ''
			} ${disabled ? 'disabled' : ''}`}
			disabled={disabled || loading}
		>
			{children}
			{loading && <CircularProgress color='inherit' size={12} />}
			{!loading && label}
		</button>
	)
}

export default Button
