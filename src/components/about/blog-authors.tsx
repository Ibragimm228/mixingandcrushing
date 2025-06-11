import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'

const AUTHORS = [
	{
		name: 'Marcus Chen',
		role: 'Chief Engineering Officer',
		expertise: 'Crushing Systems & Rock Processing',
		experience: '15+ Years Experience',
		specialization: 'Jaw & Cone Crushers',
		image: '/valerie.jpg',
		certifications: ['P.Eng', 'MBA'],
		projects: '200+'
	},
	{
		name: 'Sarah Thompson',
		role: 'Mixing Technology Director',
		expertise: 'High-Intensity Mixing Solutions',
		experience: '12+ Years Experience',
		specialization: 'Industrial Mixers & Blenders',
		image: '/douglas.jpg',
		certifications: ['Ph.D', 'CEM'],
		projects: '150+'
	},
	{
		name: 'David Rodriguez',
		role: 'Screening Systems Expert',
		expertise: 'Vibrating Screens & Separation',
		experience: '18+ Years Experience',
		specialization: 'Multi-Deck Screening',
		image: '/beth.jpg',
		certifications: ['P.Eng', 'PMP'],
		projects: '300+'
	},
]

export function BlogAuthors() {
	return (
		<section className='py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden'>
			{/* Industrial background patterns */}
			<div className='absolute inset-0'>
				<div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M60 60L30 30L60 0L90 30L60 60ZM60 120L30 90L60 60L90 90L60 120Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
				<div className='absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-amber-500/8 to-transparent rounded-full blur-3xl' />
				<div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-orange-500/6 to-transparent rounded-full blur-3xl' />
			</div>

			{/* Animated machinery elements */}
			<div className='absolute top-16 left-16 opacity-8'>
				<motion.div
					animate={{ rotate: [0, 360] }}
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
					initial={{ opacity: 0, y: -40 }}
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
							Engineering Team
						</span>
						<div className='w-px h-5 bg-amber-500/50' />
						<span className='text-gray-400 text-xs uppercase tracking-wider'>
							Technical Excellence
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
							Industry
						</span>
						<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
							Experts
						</span>
					</motion.h2>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className='text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto'
					>
						Meet the engineering minds behind our{' '}
						<span className='text-amber-400 font-semibold'>cutting-edge industrial solutions</span>
					</motion.p>
				</motion.div>

				{/* Authors grid */}
				<motion.div
					variants={staggerContainer}
					initial='hidden'
					animate='visible'
					className='grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12'
				>
					{AUTHORS.map((author, index) => (
						<motion.div
							key={author.name}
							variants={fadeInUp}
							transition={{ delay: index * 0.2 }}
							className='group relative'
						>
							{/* Glow effect */}
							<div className='absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							
							{/* Card container */}
							<motion.div 
								whileHover={{ y: -8, scale: 1.02 }}
								transition={{ duration: 0.3 }}
								className='relative backdrop-blur-sm bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:border-amber-500/30 transition-all duration-500'
							>
								{/* Experience badge */}
								<motion.div
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ delay: index * 0.2 + 0.3 }}
									className='absolute -top-4 right-8 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white text-xs font-bold shadow-xl'
								>
									{author.experience}
								</motion.div>

								{/* Avatar section */}
								<motion.div
									initial={{ scale: 0.8, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ delay: index * 0.2 + 0.1 }}
									className='relative mb-8 pt-4'
								>
									<motion.div
										whileHover={{ rotate: 5, scale: 1.05 }}
										transition={{ duration: 0.3 }}
										className='relative w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-2xl'
									>
										<div className='absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20' />
										<img
											src={author.image}
											alt={author.name}
											className='w-full h-full object-cover'
										/>
										<div className='absolute inset-0 border-2 border-amber-500/30 rounded-2xl' />
									</motion.div>

									{/* Projects counter */}
									<motion.div
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{ delay: index * 0.2 + 0.5 }}
										className='absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex flex-col items-center justify-center shadow-xl'
									>
										<span className='text-white font-black text-sm'>{author.projects}</span>
										<span className='text-white text-xs font-bold'>Projects</span>
									</motion.div>
								</motion.div>

								{/* Content */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.2 + 0.2 }}
									className='text-center mb-6'
								>
									<h3 className='text-2xl font-bold mb-2 text-white group-hover:text-amber-300 transition-colors duration-300'>
										{author.name}
									</h3>
									<p className='text-amber-400 font-bold text-lg mb-3'>
										{author.role}
									</p>
									<p className='text-gray-400 text-sm mb-4 leading-relaxed'>
										{author.expertise}
									</p>
									<div className='text-xs text-gray-500 font-medium'>
										Specializes in: <span className='text-amber-300'>{author.specialization}</span>
									</div>
								</motion.div>

								{/* Certifications */}
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: index * 0.2 + 0.4 }}
									className='flex items-center justify-center gap-3 mb-6'
								>
									{author.certifications.map((cert) => (
										<motion.div
											key={cert}
											whileHover={{ scale: 1.1 }}
											className='px-3 py-1 bg-slate-700/50 border border-amber-500/30 rounded-lg text-xs font-bold text-amber-300'
										>
											{cert}
										</motion.div>
									))}
								</motion.div>

								{/* Technical indicator */}
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: index * 0.2 + 0.6 }}
									className='flex items-center justify-center gap-3'
								>
									<motion.div
										animate={{ rotate: 360 }}
										transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
										className='w-6 h-6 border-2 border-amber-500/30 border-t-amber-500 rounded-full'
									/>
									<span className='text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Engineering Professional
									</span>
								</motion.div>

								{/* Corner decorations */}
								<div className='absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								<div className='absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-orange-500/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</motion.div>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1 }}
					className='text-center mt-20'
				>
					<div className='flex items-center justify-center gap-6'>
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
							Combined 45+ Years of Engineering Excellence
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
				</motion.div>
			</div>
		</section>
	)
}
