import { motion } from 'framer-motion'

export function AboutHero() {
	return (
		<section className='h-screen relative flex items-center justify-center overflow-hidden'>
			{/* Background Image with industrial theme */}
			<div
				className='absolute inset-0 z-0'
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070")',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				{/* Multiple overlay layers for depth */}
				<div className='absolute inset-0 bg-gradient-to-br from-slate-950/90 via-gray-900/80 to-slate-900/90' />
				<div className='absolute inset-0 bg-gradient-to-t from-slate-900/95 via-transparent to-slate-900/40' />
			</div>

			{/* Industrial pattern overlay */}
			<div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M50 50L25 25L50 0L75 25L50 50Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30' />

			{/* Animated background elements */}
			<div className='absolute top-20 left-20 opacity-10'>
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

			<div className='absolute bottom-20 right-20 opacity-8'>
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

			{/* Main content */}
			<motion.div
				initial={{ opacity: 0, y: 80 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='text-center relative z-10 max-w-6xl mx-auto px-8'
			>
				{/* Industry badge */}
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
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
					<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.3em]'>
						Engineering Excellence
					</span>
					<div className='w-px h-5 bg-amber-500/50' />
					<span className='text-gray-400 text-xs uppercase tracking-wider'>
						Since 1998
					</span>
				</motion.div>

				{/* Main heading */}
				<motion.h1
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 1 }}
					className='text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none'
				>
					<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
						About
					</span>
					<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-4'>
						Our Vision
					</span>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.8 }}
					className='text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto text-gray-300 leading-relaxed mb-12'
				>
					Pioneering the future of{' '}
					<span className='text-amber-400 font-bold'>industrial processing</span>{' '}
					through cutting-edge{' '}
					<span className='text-orange-400 font-bold'>mixing & crushing technology</span>
				</motion.p>

				{/* Technical specifications */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.3, duration: 0.8 }}
					className='flex flex-wrap items-center justify-center gap-8 md:gap-12'
				>
					<div className='flex items-center gap-4'>
						<div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl'>
							<span className='text-white font-black text-xl'>5000+</span>
						</div>
						<div className='text-left'>
							<div className='text-sm font-bold text-amber-300 uppercase tracking-wider'>TPH</div>
							<div className='text-xs text-gray-500'>Max Capacity</div>
						</div>
					</div>

					<div className='w-px h-12 bg-gradient-to-b from-amber-500/50 to-orange-500/50 hidden md:block' />

					<div className='flex items-center gap-4'>
						<div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl'>
							<span className='text-white font-black text-xl'>99.8%</span>
						</div>
						<div className='text-left'>
							<div className='text-sm font-bold text-orange-300 uppercase tracking-wider'>Uptime</div>
							<div className='text-xs text-gray-500'>Reliability</div>
						</div>
					</div>

					<div className='w-px h-12 bg-gradient-to-b from-orange-500/50 to-red-500/50 hidden md:block' />

					<div className='flex items-center gap-4'>
						<div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-2xl'>
							<span className='text-white font-black text-xl'>25+</span>
						</div>
						<div className='text-left'>
							<div className='text-sm font-bold text-red-300 uppercase tracking-wider'>Years</div>
							<div className='text-xs text-gray-500'>Experience</div>
						</div>
					</div>
				</motion.div>
			</motion.div>

			{/* Bottom technical elements */}
			<div className='absolute bottom-8 left-8 flex items-center gap-4 text-gray-400'>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
					className='w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full'
				/>
				<span className='text-sm font-medium uppercase tracking-wider'>
					Industrial Processing
				</span>
				<div className='w-px h-4 bg-gray-600' />
				<div className='flex items-center gap-2'>
					<motion.div
						animate={{ scale: [1, 1.2, 1] }}
						transition={{ duration: 2, repeat: Infinity }}
						className='w-2 h-2 rounded-full bg-green-500'
					/>
					<span className='text-xs'>Systems Online</span>
				</div>
			</div>

			{/* Company ID in top right */}
			<div className='absolute top-8 right-8 text-right'>
				<div className='text-amber-400 font-bold text-lg'>M&C Solutions</div>
				<div className='text-xs text-gray-500 uppercase tracking-wider'>EST. 1998</div>
			</div>

			{/* Animated scroll indicator */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.8, duration: 0.8 }}
				className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
					className='w-6 h-10 border-2 border-amber-500/50 rounded-full flex justify-center'
				>
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
						className='w-1 h-3 bg-amber-500 rounded-full mt-2'
					/>
				</motion.div>
			</motion.div>

			{/* Bottom gradient line */}
			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ delay: 2, duration: 2, ease: 'easeOut' }}
				className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 origin-left'
			/>
		</section>
	)
}
