import { fadeInUp } from '@/lib/animations'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function OurMission() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<section className='py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden'>
			{/* Industrial background patterns */}
			<div className='absolute inset-0'>
				<div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M50 50L25 25L50 0L75 25L50 50Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
				<div className='absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-amber-500/8 to-transparent rounded-full blur-3xl' />
				<div className='absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-orange-500/6 to-transparent rounded-full blur-3xl' />
			</div>

			{/* Animated industrial elements */}
			<div className='absolute top-16 right-16 opacity-10'>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
					className='w-32 h-32 text-amber-500/30'
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</svg>
				</motion.div>
			</div>

			<div className='absolute bottom-16 left-16 opacity-8'>
				<motion.div
					animate={{ rotate: -360 }}
					transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
					className='w-24 h-24 text-orange-500/20'
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M19.5,6A1.5,1.5 0 0,1 21,7.5A1.5,1.5 0 0,1 19.5,9H18.97L17.5,15.5A1.5,1.5 0 0,1 16,17H8A1.5,1.5 0 0,1 6.5,15.5L5.03,9H4.5A1.5,1.5 0 0,1 3,7.5A1.5,1.5 0 0,1 4.5,6H19.5M9.69,10L10.19,12.5H13.81L14.31,10H9.69Z" />
					</svg>
				</motion.div>
			</div>

			<div className='px-4 max-w-7xl mx-auto relative z-10'>
				<motion.div
					ref={ref}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					variants={fadeInUp}
					className='text-center'
				>
					{/* Industry badge */}
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className='inline-flex items-center gap-4 px-8 py-4 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm mb-8'
					>
						<motion.div
							animate={{ 
								rotate: [0, 360],
								scale: [1, 1.2, 1]
							}}
							transition={{ 
								duration: 4, 
								repeat: Infinity, 
								ease: 'easeInOut' 
							}}
							className='w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-sm'
						/>
						<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.25em]'>
							Our Commitment
						</span>
						<div className='w-px h-5 bg-amber-500/50' />
						<span className='text-gray-400 text-xs uppercase tracking-wider'>
							Engineering Excellence
						</span>
					</motion.div>

					{/* Main heading */}
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className='text-6xl md:text-7xl font-black mb-8 leading-none'
					>
						<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
							Our
						</span>
						<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
							Mission
						</span>
					</motion.h2>

					{/* Mission content */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className='max-w-5xl mx-auto mb-12'
					>
						<p className='text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8'>
							We are dedicated to{' '}
							<span className='text-amber-400 font-bold'>revolutionizing industrial processing</span>{' '}
							through innovative crushing, mixing, and screening solutions. Our mission is to{' '}
							<span className='text-orange-400 font-bold'>engineer excellence</span>{' '}
							that maximizes efficiency, reliability, and performance across all industrial applications.
						</p>
						
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
							transition={{ delay: 0.8, duration: 0.8 }}
							className='bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl'
						>
							<p className='text-xl text-gray-400 leading-relaxed'>
								Every piece of equipment we design embodies our commitment to{' '}
								<span className='text-amber-300 font-semibold'>precision engineering</span>,{' '}
								<span className='text-orange-300 font-semibold'>sustainable innovation</span>, and{' '}
								<span className='text-red-300 font-semibold'>uncompromising quality</span>{' '}
								– delivering solutions that don't just meet industry standards, but define them.
							</p>
						</motion.div>
					</motion.div>

					{/* Mission pillars */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
						transition={{ delay: 1, duration: 0.8 }}
						className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'
					>
						{/* Innovation */}
						<motion.div
							whileHover={{ scale: 1.05, y: -5 }}
							className='group relative'
						>
							<div className='absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							<div className='relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-amber-500/30 transition-all duration-300'>
								<div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-xl'>
									<svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
										<path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M8.5,7A0.5,0.5 0 0,0 8,7.5A0.5,0.5 0 0,0 8.5,8H9.5A0.5,0.5 0 0,0 10,7.5A0.5,0.5 0 0,0 9.5,7H8.5M16.5,7A0.5,0.5 0 0,0 16,7.5A0.5,0.5 0 0,0 16.5,8H17.5A0.5,0.5 0 0,0 18,7.5A0.5,0.5 0 0,0 17.5,7H16.5M8.5,9A0.5,0.5 0 0,0 8,9.5A0.5,0.5 0 0,0 8.5,10H11.5A0.5,0.5 0 0,0 12,9.5A0.5,0.5 0 0,0 11.5,9H8.5M14.5,9A0.5,0.5 0 0,0 14,9.5A0.5,0.5 0 0,0 14.5,10H17.5A0.5,0.5 0 0,0 18,9.5A0.5,0.5 0 0,0 17.5,9H14.5M8.5,11A0.5,0.5 0 0,0 8,11.5A0.5,0.5 0 0,0 8.5,12H13.5A0.5,0.5 0 0,0 14,11.5A0.5,0.5 0 0,0 13.5,11H8.5Z" />
									</svg>
								</div>
								<h3 className='text-xl font-bold text-amber-300 mb-2'>Innovation</h3>
								<p className='text-gray-400 text-sm'>Pioneering next-generation technology</p>
							</div>
						</motion.div>

						{/* Reliability */}
						<motion.div
							whileHover={{ scale: 1.05, y: -5 }}
							className='group relative'
						>
							<div className='absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							<div className='relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300'>
								<div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-xl'>
									<svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
										<path d="M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
									</svg>
								</div>
								<h3 className='text-xl font-bold text-orange-300 mb-2'>Reliability</h3>
								<p className='text-gray-400 text-sm'>99.8% uptime across all systems</p>
							</div>
						</motion.div>

						{/* Excellence */}
						<motion.div
							whileHover={{ scale: 1.05, y: -5 }}
							className='group relative'
						>
							<div className='absolute inset-0 bg-gradient-to-r from-red-500/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							<div className='relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300'>
								<div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-xl'>
									<svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
										<path d="M5,16L3,14L5,12L5.25,12.25L7.75,14.75L5.25,17.25L5,17L5,16M12,18.5L9.5,16L12,13.5L14.5,16L12,18.5M19,16L17.25,17.25L14.75,14.75L17.25,12.25L19,14L19,16M12,5.5L14.5,8L12,10.5L9.5,8L12,5.5M12,1L21,5V10.09C21,16.09 17.91,21.36 12,23C6.09,21.36 3,16.09 3,10.09V5L12,1Z" />
									</svg>
								</div>
								<h3 className='text-xl font-bold text-red-300 mb-2'>Excellence</h3>
								<p className='text-gray-400 text-sm'>Engineering standards beyond industry norms</p>
							</div>
						</motion.div>
					</motion.div>

					{/* Bottom technical indicators */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ delay: 1.2, duration: 0.8 }}
						className='flex items-center justify-center gap-8'
					>
						<div className='w-24 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
						<motion.div
							animate={{ 
								rotate: 360,
								scale: [1, 1.1, 1]
							}}
							transition={{ 
								duration: 8, 
								repeat: Infinity,
								ease: 'easeInOut'
							}}
							className='w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full'
						/>
						<span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
							Committed to Industrial Excellence Since 1998
						</span>
						<motion.div
							animate={{ 
								rotate: -360,
								scale: [1, 1.1, 1]
							}}
							transition={{ 
								duration: 8, 
								repeat: Infinity,
								ease: 'easeInOut',
								delay: 4
							}}
							className='w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full'
						/>
						<div className='w-24 h-px bg-gradient-to-l from-transparent to-orange-500/50' />
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
