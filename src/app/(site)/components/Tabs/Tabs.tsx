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
