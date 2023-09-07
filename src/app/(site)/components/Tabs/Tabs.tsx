'use client'

import React from 'react'
import { Tabs, Tab } from '@nextui-org/react'
import Drivers from './Drivers'
import Constructors from './Constructors'
import Title from '@/components/Title'

export default function TabSwitcher() {
	return (
		<div className='space-y-5 flex w-full flex-col items-center justify-center text-2xl'>
			<Title text='Championship standings' small />
			<Tabs aria-label='Options' className='flex items-center justify-center'>
				<Tab
					key='drivers'
					title='Drivers'
					className='flex items-center justify-center flex-col text-xl px-4 py-2 w-full'
				>
					<Drivers />
				</Tab>
				<Tab
					key='constructors'
					title='Constructors'
					className='flex items-center justify-center flex-col text-xl px-4 py-2 w-full'
				>
					<Constructors />
				</Tab>
			</Tabs>
		</div>
	)
}
