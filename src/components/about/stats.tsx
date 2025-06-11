import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'

export function Stats() {
	const industrialStats = [
		{ 
			number: '5000+', 
			label: 'TPH Processing Capacity',
			unit: 'Tons Per Hour',
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className='w-8 h-8'>
					<path d="M19.5,6A1.5,1.5 0 0,1 21,7.5A1.5,1.5 0 0,1 19.5,9H18.97L17.5,15.5A1.5,1.5 0 0,1 16,17H8A1.5,1.5 0 0,1 6.5,15.5L5.03,9H4.5A1.5,1.5 0 0,1 3,7.5A1.5,1.5 0 0,1 4.5,6H19.5M9.69,10L10.19,12.5H13.81L14.31,10H9.69Z" />
				</svg>
			)
		},
		{ 
			number: '650+', 
			label: 'Industrial Projects',
			unit: 'Completed Worldwide',
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className='w-8 h-8'>
					<path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
				</svg>
			)
		},
		{ 
			number: '99.8%', 
			label: 'System Uptime',
			unit: 'Operational Reliability',
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className='w-8 h-8'>
					<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,15.2L16.2,16.2Z" />
				</svg>
			)
		},
	]

	return (
		<section className='py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden'>
			{/* Industrial background patterns */}
			<div className='absolute inset-0'>
				<div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M60 60L30 30L60 0L90 30L60 60ZM60 120L30 90L60 60L90 90L60 120Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
				<div className='absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-3xl' />
				<div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-orange-500/8 to-transparent rounded-full blur-3xl' />
			</div>

			{/* Animated technical elements */}
			<div className='absolute top-16 left-16 opacity-8'>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
					className='w-32 h-32 text-amber-500/20'
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</svg>
				</motion.div>
			</div>

			<div className='max-w-7xl mx-auto px-4 relative z-10'>
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className='text-center mb-20'
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
							Performance Metrics
						</span>
						<div className='w-px h-5 bg-amber-500/50' />
						<span className='text-gray-400 text-xs uppercase tracking-wider'>
							Real-Time Data
						</span>
					</motion.div>

					{/* Main heading */}
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className='text-5xl md:text-6xl font-black mb-4 leading-none'
					>
						<span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
							By the
						</span>{' '}
						<span className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
							Numbers
						</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className='text-xl text-gray-400 max-w-3xl mx-auto'
					>
						Engineering excellence measured through proven industrial performance
					</motion.p>
				</motion.div>

				{/* Stats grid */}
				<motion.div
					variants={staggerContainer}
					initial='hidden'
					animate='visible'
					className='grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12'
				>
					{industrialStats.map((stat, index) => (
						<motion.div 
							key={stat.label} 
							variants={fadeInUp}
							className='group relative'
						>
							{/* Glow effect */}
							<div className='absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							
							{/* Card container */}
							<motion.div 
								whileHover={{ y: -8, scale: 1.02 }}
								transition={{ duration: 0.3 }}
								className='relative backdrop-blur-sm bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:border-amber-500/30 transition-all duration-500 text-center'
							>
								{/* Icon container */}
								<motion.div
									initial={{ scale: 0.5, rotate: -180 }}
									animate={{ scale: 1, rotate: 0 }}
									transition={{ 
										delay: index * 0.2 + 0.3,
										type: 'spring', 
										stiffness: 200, 
										damping: 15 
									}}
									className='w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/25 group-hover:shadow-amber-500/40 transition-shadow duration-500'
								>
									<motion.div
										whileHover={{ rotate: 360 }}
										transition={{ duration: 0.6 }}
										className='text-white'
									>
										{stat.icon}
									</motion.div>
								</motion.div>

								{/* Number display */}
								<motion.h3
									initial={{ opacity: 0, scale: 0.5 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ 
										delay: index * 0.2,
										type: 'spring',
										stiffness: 200
									}}
									className='text-6xl md:text-7xl font-black mb-4'
								>
									<span className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
										{stat.number}
									</span>
								</motion.h3>

								{/* Label and unit */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 + 0.1 }}
								>
									<p className='text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300'>
										{stat.label}
									</p>
									<p className='text-sm text-gray-400 uppercase tracking-wider font-medium'>
										{stat.unit}
									</p>
								</motion.div>

								{/* Progress indicator */}
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: '100%' }}
									transition={{ delay: index * 0.2 + 0.5, duration: 1.5 }}
									className='mt-6 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full'
								/>

								{/* Corner decorations */}
								<div className='absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								<div className='absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-orange-500/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</motion.div>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom section with additional info */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.2, duration: 0.8 }}
					className='text-center mt-20'
				>
					{/* Technical separator */}
					<div className='flex items-center justify-center gap-6 mb-8'>
						<div className='w-24 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
						<motion.div
							animate={{ 
								rotate: [0, 360],
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
							Continuous Performance Monitoring
						</span>
						<motion.div
							animate={{ 
								rotate: [-360, 0],
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
						<div className='w-24 h-px bg-gradient-to-l from-transparent to-orange-500/50' />
					</div>

					{/* Additional stats */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 1.4, duration: 0.8 }}
						className='inline-flex items-center gap-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6'
					>
						<div className='text-center'>
							<div className='text-2xl font-black text-amber-400'>25+</div>
							<div className='text-xs text-gray-500 uppercase tracking-wider'>Years Experience</div>
						</div>
						<div className='w-px h-12 bg-slate-600' />
						<div className='text-center'>
							<div className='text-2xl font-black text-orange-400'>50+</div>
							<div className='text-xs text-gray-500 uppercase tracking-wider'>Countries Served</div>
						</div>
						<div className='w-px h-12 bg-slate-600' />
						<div className='text-center'>
							<div className='text-2xl font-black text-red-400'>24/7</div>
							<div className='text-xs text-gray-500 uppercase tracking-wider'>Support Available</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
