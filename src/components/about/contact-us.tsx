import { motion } from 'framer-motion'
import { Link } from 'react-router'

export function ContactUs() {
	return (
		<section className='py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden'>
			{/* Industrial background patterns */}
			<div className='absolute inset-0'>
				<div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M40 40L20 20L40 0L60 20L40 40ZM40 80L20 60L40 40L60 60L40 80Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
				<div className='absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-3xl' />
				<div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-orange-500/8 to-transparent rounded-full blur-3xl' />
			</div>

			{/* Animated machinery elements */}
			<div className='absolute top-16 left-16 opacity-10'>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
					className='w-32 h-32 text-amber-500'
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</svg>
				</motion.div>
			</div>

			<div className='absolute bottom-16 right-16 opacity-8'>
				<motion.div
					animate={{ rotate: -360 }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
					className='w-24 h-24 text-orange-500/30'
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M19.5,6A1.5,1.5 0 0,1 21,7.5A1.5,1.5 0 0,1 19.5,9H18.97L17.5,15.5A1.5,1.5 0 0,1 16,17H8A1.5,1.5 0 0,1 6.5,15.5L5.03,9H4.5A1.5,1.5 0 0,1 3,7.5A1.5,1.5 0 0,1 4.5,6H19.5M9.69,10L10.19,12.5H13.81L14.31,10H9.69Z" />
					</svg>
				</motion.div>
			</div>

			<div className='max-w-6xl mx-auto px-4 text-center relative z-10'>
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='mb-16'
				>
					{/* Industry badge */}
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
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
							Engineering Consultation
						</span>
						<div className='w-px h-5 bg-amber-500/50' />
						<span className='text-gray-400 text-xs uppercase tracking-wider'>
							Expert Support
						</span>
					</motion.div>

					{/* Main heading */}
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className='text-6xl md:text-7xl font-black mb-6 leading-none'
					>
						<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
							Ready to
						</span>
						<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
							Optimize?
						</span>
					</motion.h2>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className='text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-8'
					>
						Let our engineering team design the perfect{' '}
						<span className='text-amber-400 font-semibold'>crushing & mixing solution</span>{' '}
						for your industrial requirements
					</motion.p>

					{/* Technical stats */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						className='flex flex-wrap items-center justify-center gap-8 mb-12'
					>
						<div className='flex items-center gap-2'>
							<motion.div
								animate={{ scale: [1, 1.2, 1] }}
								transition={{ duration: 2, repeat: Infinity }}
								className='w-3 h-3 rounded-full bg-green-500'
							/>
							<span className='text-sm font-medium text-gray-400'>24/7 Support Available</span>
						</div>
						<div className='w-px h-4 bg-gray-600' />
						<div className='flex items-center gap-2'>
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
								className='w-3 h-3 border border-amber-500 border-t-transparent rounded-full'
							/>
							<span className='text-sm font-medium text-gray-400'>Global Engineering Team</span>
						</div>
						<div className='w-px h-4 bg-gray-600' />
						<div className='flex items-center gap-2'>
							<div className='w-3 h-3 rounded-full bg-blue-500 animate-pulse' />
							<span className='text-sm font-medium text-gray-400'>Custom Solutions</span>
						</div>
					</motion.div>
				</motion.div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.8 }}
					className='relative'
				>
					{/* Background glow */}
					<div className='absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl' />
					
					{/* Main CTA container */}
					<div className='relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 shadow-2xl'>
						{/* Contact button */}
						<Link to='/contacts'>
							<motion.button
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
								className='group relative px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl text-white text-xl font-bold shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 mb-8'
							>
								<span className='relative z-10 flex items-center gap-4'>
									<svg
										className='w-6 h-6'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
										/>
									</svg>
									Start Engineering Consultation
									
								</span>
								<div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</motion.button>
						</Link>

						{/* Additional contact options */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1.2, duration: 0.8 }}
							className='grid grid-cols-1 md:grid-cols-3 gap-6'
						>
							{/* Emergency hotline */}
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className='p-6 bg-slate-800/50 border border-slate-600/50 rounded-2xl hover:border-red-500/30 transition-all duration-300'
							>
								<div className='w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center'>
									<svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
										<path d="M20,15.5C18.8,15.5 17.5,15.3 16.4,14.9C16.3,14.9 16.2,14.9 16.1,14.9C15.8,14.9 15.6,15 15.4,15.2L13.21,17.43C10.38,15.94 8.06,13.62 6.57,10.79L8.82,8.54C9.1,8.26 9.18,7.82 9.07,7.4C8.7,6.3 8.5,5 8.5,3.5C8.5,3.22 8.28,3 8,3H3.5C3.22,3 3,3.22 3,3.5C3,13.28 10.73,21 20.5,21C20.78,21 21,20.78 21,20.5V16C21,15.72 20.78,15.5 20.5,15.5H20Z" />
									</svg>
								</div>
								<h3 className='text-lg font-bold text-red-400 mb-2'>Emergency Support</h3>
								<p className='text-gray-400 text-sm'>24/7 Technical Hotline</p>
							</motion.div>

							{/* Email support */}
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className='p-6 bg-slate-800/50 border border-slate-600/50 rounded-2xl hover:border-amber-500/30 transition-all duration-300'
							>
								<div className='w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center'>
									<svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
										<path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
									</svg>
								</div>
								<h3 className='text-lg font-bold text-amber-400 mb-2'>Email Support</h3>
								<p className='text-gray-400 text-sm'>Technical Documentation</p>
							</motion.div>

							{/* On-site service */}
							<motion.div
								whileHover={{ scale: 1.02, y: -2 }}
								className='p-6 bg-slate-800/50 border border-slate-600/50 rounded-2xl hover:border-orange-500/30 transition-all duration-300'
							>
								<div className='w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center'>
									<svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
										<path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
									</svg>
								</div>
								<h3 className='text-lg font-bold text-orange-400 mb-2'>On-Site Service</h3>
								<p className='text-gray-400 text-sm'>Field Engineering</p>
							</motion.div>
						</motion.div>

						{/* Corner decorations */}
						<div className='absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl' />
						<div className='absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-orange-500/30 rounded-bl-xl' />
					</div>
				</motion.div>

				{/* Bottom technical info */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.4, duration: 0.8 }}
					className='mt-16 flex items-center justify-center gap-6'
				>
					<div className='w-20 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
					<motion.div
						animate={{ 
							rotate: 360,
							scale: [1, 1.1, 1]
						}}
						transition={{ 
							duration: 6, 
							repeat: Infinity,
							ease: 'easeInOut'
						}}
						className='w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full'
					/>
					<span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
						Engineering Excellence Since 1998
					</span>
					<motion.div
						animate={{ 
							rotate: -360,
							scale: [1, 1.1, 1]
						}}
						transition={{ 
							duration: 6, 
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 3
						}}
						className='w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full'
					/>
					<div className='w-20 h-px bg-gradient-to-l from-transparent to-orange-500/50' />
				</motion.div>
			</div>
		</section>
	)
}
