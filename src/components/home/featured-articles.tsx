import { useGetArticles } from '@/hooks/useArticles'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import { ArticleCardLarge } from '../shared/article-card/article-card-large'
import { Container } from '../shared/container'

export const FeaturedArticles: FC = () => {
	const { data: articles } = useGetArticles()
	const featuredArticles = articles?.sort(() => Math.random() - 0.5).slice(0, 2)

	return (
		featuredArticles && (
			<section className='py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden'>
				{/* Industrial background elements */}
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-amber-500/5 to-transparent rounded-full blur-3xl' />
					<div className='absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-orange-500/5 to-transparent rounded-full blur-3xl' />
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent' />
				</div>

				{/* Gear animation background */}
				<div className='absolute top-20 right-20 opacity-5'>
					<motion.div
						animate={{ rotate: 360 }}
						transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
						className='w-32 h-32'
					>
						<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full text-amber-500'>
							<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
						</svg>
					</motion.div>
				</div>

				<Container className='relative z-10'>
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
							className='inline-flex items-center gap-3 px-8 py-4 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm mb-8'
						>
							<motion.div
								animate={{ rotate: [0, 90, 180, 270, 360] }}
								transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
								className='w-3 h-3 rounded-sm bg-gradient-to-br from-amber-400 to-orange-500'
							/>
							<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.2em]'>
								Industry Insights
							</span>
							<div className='w-px h-4 bg-amber-500/50' />
							<span className='text-gray-400 text-xs uppercase tracking-wider'>
								Technical Excellence
							</span>
						</motion.div>

						{/* Main heading */}
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className='text-6xl md:text-7xl font-black mb-6 leading-none'
						>
							<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
								Engineering
							</span>
							<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
								Spotlight
							</span>
						</motion.h2>

						{/* Subtitle */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6, duration: 0.8 }}
							className='max-w-3xl mx-auto'
						>
							<p className='text-xl md:text-2xl text-gray-400 leading-relaxed mb-6'>
								Cutting-edge insights from the world of{' '}
								<span className='text-amber-400 font-semibold'>mixing & crushing</span> technology
							</p>
							<div className='flex items-center justify-center gap-6 text-sm text-gray-500'>
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 rounded-full bg-amber-500 animate-pulse' />
									<span>Latest Research</span>
								</div>
								<div className='w-px h-4 bg-gray-600' />
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 rounded-full bg-orange-500 animate-pulse' />
									<span>Industry Leaders</span>
								</div>
								<div className='w-px h-4 bg-gray-600' />
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 rounded-full bg-red-500 animate-pulse' />
									<span>Technical Innovations</span>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Articles grid */}
					<motion.div
						initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8, duration: 1 }}
						className='relative'
					>
						{/* Decorative connecting line */}
						<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-amber-500/30 to-transparent hidden md:block' />
						
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16'>
							{featuredArticles.map((article, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: index === 0 ? -60 : 60 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 1 + index * 0.3, duration: 0.8, type: 'spring', stiffness: 100 }}
									className='relative group'
								>
									{/* Article number */}
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
										className='absolute -top-6 -left-6 z-20 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/25'
									>
										<span className='text-white font-black text-xl'>
											{String(index + 1).padStart(2, '0')}
										</span>
									</motion.div>

									{/* Glow effect */}
									<div className='absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
									
									{/* Article wrapper */}
									<div className='relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-2 hover:border-amber-500/30 transition-all duration-500'>
										<ArticleCardLarge article={article} />
									</div>

									{/* Corner accent */}
									<div className='absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-500/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Bottom decoration */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 1.5, duration: 0.8 }}
						className='flex items-center justify-center mt-20'
					>
						<div className='flex items-center gap-4'>
							<div className='w-16 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
							<motion.div
								animate={{ rotate: 360 }}
								transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
								className='w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full'
							/>
							<span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
								Industrial Excellence
							</span>
							<motion.div
								animate={{ rotate: -360 }}
								transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
								className='w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full'
							/>
							<div className='w-16 h-px bg-gradient-to-l from-transparent to-orange-500/50' />
						</div>
					</motion.div>
				</Container>
			</section>
		)
	)
}
