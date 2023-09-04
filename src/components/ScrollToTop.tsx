'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollToTop = () => {
	const [showTopBtn, setShowTopBtn] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowTopBtn(true)
			} else {
				setShowTopBtn(false)
			}
		})
	}, [])

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div
			className={`lg:relative hidden ${
				showTopBtn ? 'opacity-100' : 'opacity-0'
			} transition-all`}
		>
			<button
				onClick={goToTop}
				className='w-16 h-16 grid place-content-center p-3 fixed bottom-10 right-6 z-20 bg-f1 border-2 border-white rounded-full text-white cursor-pointer transition-all hover:bg-white hover:text-f1 hover:border-f1'
			>
				<AiOutlineArrowUp size={30} />
			</button>
		</div>
	)
}

export default ScrollToTop
