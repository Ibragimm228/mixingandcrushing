import { fadeInUp } from '@/lib/animations'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { Container } from '../shared/container'

const testimonials = [
	{
		name: 'Marcus Thompson',
		role: 'Chief Mining Engineer',
		company: 'Global Mining Corp',
		image: '/logan.jpg',
		text: 'Their crushing systems have increased our throughput by 40% while reducing operational costs. The precision and reliability are unmatched in the industry.',
		equipment: 'Jaw Crushers & Cone Crushers'
	},
	{
		name: 'Sarah Chen',
		role: 'Plant Operations Manager',
		company: 'Industrial Solutions Ltd',
		image: '/clifford.jpg',
		text: 'The mixing technology delivered consistent results across all our production lines. Downtime reduced to virtually zero since implementation.',
		equipment: 'High-Intensity Mixers'
	},
	{
		name: 'David Rodriguez',
		role: 'Process Engineering Director',
		company: 'Advanced Materials Inc',
		image: '/beth.jpg',
		text: 'Outstanding screening efficiency and build quality. Their engineering team provided exceptional support throughout the entire installation process.',
		equipment: 'Vibrating Screens & Separators'
	},
]

export const Testimonials: FC = () => {
	return (
		<section className='py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden'>
			{/* Industrial background elements */}
			<div className='absolute inset-0'>
				<div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M50 0L100 50L50 100L0 50Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
				<div className='absolute top-20 right-20 w-80 h-80 bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-3xl' />
				<div className='absolute bottom-20 left-20 w-96 h-96 bg-gradient-radial from-orange-500/8 to-transparent rounded-full blur-3xl' />
			</div>

			{/* Animated industrial elements */}
			<div className='absolute top-16 left-16 opacity-8'>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
					className='w-24 h-24 text-amber-500/20'
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</svg>
				</motion.div>
			</div>

			<Container className='relative z-10'>
				{/* Section header */}
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className='text-center mb-20'
				>
					{/* Industry badge */}
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className='inline-flex items-center gap-4 px-8 py-4 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm mb-8'
					>
						<motion.div
							animate={{ 
								scale: [1, 1.3, 1],
								rotate: [0, 90, 180, 270, 360]
							}}
							transition={{ 
								duration: 4, 
								repeat: Infinity, 
								ease: 'easeInOut' 
							}}
							className='w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-sm'
						/>
						<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.25em]'>
							Client Success Stories
						</span>
						<div className='w-px h-5 bg-amber-500/50' />
						<span className='text-gray-400 text-xs uppercase tracking-wider'>
							Proven Results
						</span>
					</motion.div>

					{/* Main heading */}
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4, duration: 0.8 }}
						className='text-6xl md:text-7xl font-black mb-6 leading-none'
					>
						<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
							Industry
						</span>
						<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
							Leaders
						</span>
					</motion.h2>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className='text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto'
					>
						Testimonials from engineering professionals who trust our{' '}
						<span className='text-amber-400 font-semibold'>mixing & crushing solutions</span>
					</motion.p>
				</motion.div>

				{/* Testimonials grid */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12'>
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							variants={fadeInUp}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							whileHover={{ scale: 1.02, y: -8 }}
							className='group relative'
						>
							{/* Glow effect */}
							<div className='absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
							
							{/* Card container */}
							<motion.div 
								className='relative backdrop-blur-sm bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:border-amber-500/30 transition-all duration-500'
							>
								{/* Equipment badge */}
								<motion.div
									initial={{ scale: 0.8, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 + 0.1 }}
									className='absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white text-xs font-bold shadow-xl'
								>
									{testimonial.equipment}
								</motion.div>

								{/* Header with avatar and info */}
								<motion.div
									initial={{ scale: 0.8, opacity: 0 }}
									whileInView={{ scale: 1, opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 + 0.1 }}
									className='flex items-center mb-8 pt-4'
								>
									<motion.div
										whileHover={{ rotate: 360, scale: 1.1 }}
										transition={{ duration: 0.6 }}
										className='relative w-20 h-20 rounded-2xl overflow-hidden mr-6 shadow-xl'
									>
										<div className='absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20' />
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className='w-full h-full object-cover'
										/>
										<div className='absolute inset-0 border-2 border-amber-500/30 rounded-2xl' />
									</motion.div>
									<div>
										<h3 className='text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300'>
											{testimonial.name}
										</h3>
										<p className='text-amber-400 font-semibold text-sm mb-1'>
											{testimonial.role}
										</p>
										<p className='text-gray-500 text-xs uppercase tracking-wider'>
											{testimonial.company}
										</p>
									</div>
								</motion.div>

								{/* Quote */}
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 + 0.2 }}
									className='relative mb-8'
								>
									<div className='absolute -top-2 -left-2 w-8 h-8 text-amber-500/30'>
										<svg fill="currentColor" viewBox="0 0 24 24" className='w-full h-full'>
											<path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
										</svg>
									</div>
									<p className='text-gray-300 leading-relaxed text-lg pl-6 italic'>
										{testimonial.text}
									</p>
								</motion.div>

								{/* Rating stars */}
								<motion.div
									initial={{ opacity: 0, scale: 0.5 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.2 + 0.3 }}
									className='flex items-center justify-between'
								>
									<div className='flex text-amber-400'>
										{[...Array(5)].map((_, i) => (
											<motion.svg
												key={i}
												initial={{ scale: 0, rotate: -180 }}
												whileInView={{ scale: 1, rotate: 0 }}
												viewport={{ once: true }}
												transition={{ 
													delay: index * 0.2 + 0.3 + i * 0.1,
													type: 'spring',
													stiffness: 200
												}}
												whileHover={{ scale: 1.3, rotate: 360 }}
												className='w-6 h-6 mr-1'
												fill='currentColor'
												viewBox='0 0 20 20'
											>
												<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
											</motion.svg>
										))}
									</div>
									
									{/* Technical indicator */}
									<motion.div
										animate={{ rotate: 360 }}
										transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
										className='w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full'
									/>
								</motion.div>

								{/* Corner decorations */}
								<div className='absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								<div className='absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-orange-500/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
							</motion.div>
						</motion.div>
					))}
				</div>

				{/* Bottom section */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 1 }}
					className='text-center mt-20'
				>
					<div className='flex items-center justify-center gap-6'>
						<div className='w-20 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
						<motion.div
							animate={{ 
								scale: [1, 1.2, 1],
								opacity: [0.5, 1, 0.5]
							}}
							transition={{ duration: 3, repeat: Infinity }}
							className='w-4 h-4 rounded-full bg-amber-500'
						/>
						<span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
							Trusted by Industry Leaders Worldwide
						</span>
						<motion.div
							animate={{ 
								scale: [1, 1.2, 1],
								opacity: [0.5, 1, 0.5]
							}}
							transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
							className='w-4 h-4 rounded-full bg-orange-500'
						/>
						<div className='w-20 h-px bg-gradient-to-l from-transparent to-orange-500/50' />
					</div>
				</motion.div>
			</Container>
		</section>
	)
}
