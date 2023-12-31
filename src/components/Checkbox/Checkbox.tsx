import Image from 'next/image'
import React, { FunctionComponent, useState } from 'react'
import { ICheckboxProps } from './props'

const Checkbox: FunctionComponent<ICheckboxProps> = ({
	// onChange,
	label,
	selected,
	className
}) => {
	const onChangeHandler = () => {
		!selected
	}

	return (
		<div
			className={`flex items-start my-3 cursor-pointer ${className}`}
			data-testid="checkbox"
			onClick={onChangeHandler}
		>
			<Image
				src={selected ? './checkbox_checked.svg' : './checkbox_empty.svg'}
				alt='checkbox'
				className={`mr-2 ${selected ? '' : 'opacity-50'}`}
				width={20}
				height={20}
			/>
			{label && <p className='leading-1'>{label}</p>}
		</div>
	)
}

export default Checkbox
