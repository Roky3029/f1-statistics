// 'use client'

// import Drivers from './Drivers'
// import Constructors from './Constructors'
// import Title from '@/components/Title'
// import { useState } from 'react'

// export default function TabSwitcher() {
// 	const [tab, setTab] = useState('drivers')

// 	return (
// 		<div className='space-y-5 flex w-full flex-col items-center justify-center text-2xl'>
// 			<Title text='Championship standings' small />
// 			<Tabs aria-label='Options' className='flex items-center justify-center'>
// 				<Tab
// 					key='drivers'
// 					title='Drivers'
// 					className='flex items-center justify-center flex-col text-xl px-4 py-2 w-full'
// 				>
// 					<Drivers />
// 				</Tab>
// 				<Tab
// 					key='constructors'
// 					title='Constructors'
// 					className='flex items-center justify-center flex-col text-xl px-4 py-2 w-full'
// 				>
// 					<Constructors />
// 				</Tab>
// 			</Tabs>
// 		</div>
// 	)
// }

'use client'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import Drivers from './Drivers'
import Constructors from './Constructors'

function MyTabs() {
	return (
		<Tab.Group>
			<Tab.List className='w-full pt-10 flex justify-center items-center gap-10'>
				<Tab as={Fragment}>
					{({ selected }) => (
						<button
							className={
								selected
									? 'bg-f1 opacity-70 px-5 py-3 text-white rounded-lg shadow-md text-lg scale-110'
									: 'bg-slate-400 px-5 py-3 rounded-lg shadow-md text-lg'
							}
						>
							Drivers
						</button>
					)}
				</Tab>
				<Tab as={Fragment}>
					{({ selected }) => (
						<button
							className={
								selected
									? 'bg-f1 opacity-70 px-5 py-3 text-white rounded-lg shadow-md text-lg scale-110'
									: 'bg-slate-400 px-5 py-3 rounded-lg shadow-md text-lg'
							}
						>
							Constructors
						</button>
					)}
				</Tab>
			</Tab.List>
			<Tab.Panels className='w-full'>
				<Tab.Panel>
					<Drivers />
				</Tab.Panel>
				<Tab.Panel>
					<Constructors />
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	)
}

export default MyTabs
