'use client'

import { useEffect } from 'react'
import Avatar from '../../components/Avatar'

interface DataProps {
	author: string
	introduction: boolean
	date: string
}

const Data: React.FC<DataProps> = ({ author, introduction, date }) => {
	useEffect(() => {
		if (introduction) {
			localStorage.setItem('visited', JSON.stringify(true))
		}
	}, [])

	return (
		<div className='w-1/2 bg-white px-3 py-4 rounded-lg shadow-md flex items-center justify-between gap-10'>
			<div className='flex items-center justify-center gap-5'>
				<Avatar author={author} />
				<p>{author === 'M' ? 'Miguel' : 'David'}</p>
			</div>

			<p>{date}</p>
		</div>
	)
}

export default Data
