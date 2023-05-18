import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const Feedback = () => {
	const [open, setOpen] = useState(false)

	const onClickChange = () => {
		setOpen((prev) => !prev)
	}

	return (
		<div className='relative'>
			<div
				onClick={onClickChange}
				className='flex items-center mr-2 transition select hover:bg-gray-100'
			>
				<Image
					src='/message.svg'
					alt='Feedback'
					className='mr-2 opacity-50 cursor-pointer'
					width={16}
					height={16}
				/>
				<span>Feedback?</span>
			</div>
			{open && (
				<div className='absolute right-0 p-6 bg-white border top-12'>
					Zendesk form here
				</div>
			)}
		</div>
	)
}

export default Feedback
