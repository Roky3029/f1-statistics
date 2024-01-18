import { AnimatePresence, motion } from 'framer-motion'

interface Props {
	isActive: boolean
	children: React.ReactNode
}

const Fade: React.FC<Props> = ({ children, isActive }) => {
	return (
		<AnimatePresence>
			{isActive && (
				<motion.div
					initial={{ opacity: 0, y: '100%' }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: '-100%', display: 'none' }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Fade
