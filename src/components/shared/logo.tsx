import { motion } from 'framer-motion'
import { Link } from 'react-router'

export function Logo() {
	return (
		<Link
			to='/'
			className='flex items-center gap-3 hover:opacity-90 transition-all duration-300 group'
		>
			{/* Logo image container */}
			<motion.div
				whileHover={{ scale: 1.05, rotate: 5 }}
				transition={{ duration: 0.3 }}
				className='relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl shadow-amber-500/25 group-hover:shadow-amber-500/40'
			>
				{/* Industrial gear background */}
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
					className='absolute inset-0 opacity-20'
				>
					<svg viewBox="0 0 24 24" fill="white" className='w-full h-full'>
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</svg>
				</motion.div>

				{/* Main logo image - используем промышленную картинку */}
				<img
					src="https://chinacrusher.org/wp-content/uploads/2022/07/cropped-810-removebg-preview.png"
					alt="Industrial Equipment"
					className='w-8 h-8 rounded-lg object-cover relative z-10'
				/>

				{/* Glowing border effect */}
				<div className='absolute inset-0 rounded-xl border-2 border-amber-400/30 group-hover:border-amber-400/60 transition-colors duration-300' />
			</motion.div>

			{/* Company text */}
			<div className='flex flex-col'>
				<motion.h1
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					className='text-xl font-black text-gray-900 group-hover:text-amber-600 transition-colors duration-300'
				>
					<span className='bg-gradient-to-r from-gray-900 to-gray-700 group-hover:from-amber-600 group-hover:to-orange-600 bg-clip-text text-transparent'>
						MIXING
					</span>
				</motion.h1>
				<motion.span
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.1 }}
					className='text-sm font-bold text-gray-600 group-hover:text-orange-600 transition-colors duration-300 uppercase tracking-wider'
				>
					& CRUSHING
				</motion.span>
			</div>

			{/* Technical indicator */}
			<motion.div
				animate={{ 
					scale: [1, 1.1, 1],
					opacity: [0.5, 1, 0.5]
				}}
				transition={{ duration: 2, repeat: Infinity }}
				className='w-2 h-2 rounded-full bg-green-500 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
			/>
		</Link>
	)
}
