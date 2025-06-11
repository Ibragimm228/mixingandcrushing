import type { FC } from 'react'
import { motion } from 'framer-motion'
import { ArticleCardCompact } from '../shared/article-card/article-card-compact'
import { useGetArticles } from '@/hooks/useArticles'
import { Container } from '../shared/container'

export const LatestArticles: FC = () => {
	const { data: articles } = useGetArticles()
	const latestArticles = articles
		?.sort(
			(a, b) =>
				new Date(b.published_date || 0).getTime() -
				new Date(a.published_date || 0).getTime()
		)
		.slice(0, 6)

	return (
		latestArticles && (
			<section className='py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden'>
				{/* Industrial background elements */}
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M60 60L30 30L60 0L90 30L60 60ZM60 120L30 90L60 60L90 90L60 120Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
					<div className='absolute top-10 right-10 w-96 h-96 bg-gradient-radial from-amber-500/8 to-transparent rounded-full blur-3xl' />
					<div className='absolute bottom-10 left-10 w-80 h-80 bg-gradient-radial from-orange-500/6 to-transparent rounded-full blur-3xl' />
				</div>

				{/* Animated machinery elements */}
				<div className='absolute top-20 left-20 opacity-5'>
					<motion.div
						animate={{ rotate: [0, 360] }}
						transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
						className='w-32 h-32 text-amber-500/50'
					>
						<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
							<path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
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
									scale: [1, 1.2, 1],
									rotate: [0, 180, 360]
								}}
								transition={{ 
									duration: 3, 
									repeat: Infinity, 
									ease: 'easeInOut' 
								}}
								className='w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-sm'
							/>
							<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.25em]'>
								Technical Publications
							</span>
							<div className='w-px h-5 bg-amber-500/50' />
							<span className='text-gray-400 text-xs uppercase tracking-wider'>
								Latest Research
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
								Intelligence
							</span>
						</motion.h2>

						{/* Subtitle with technical info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6, duration: 0.8 }}
							className='max-w-4xl mx-auto'
						>
							<p className='text-xl md:text-2xl text-gray-400 leading-relaxed mb-8'>
								Expert insights on crushing technology, mixing innovations, and screening solutions from{' '}
								<span className='text-amber-400 font-semibold'>industry leaders</span>
							</p>
							
							{/* Technical metrics */}
							<div className='flex flex-wrap items-center justify-center gap-8 text-sm'>
								<div className='flex items-center gap-2'>
									<motion.div
										animate={{ rotate: 360 }}
										transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
										className='w-3 h-3 border border-amber-500 border-t-transparent rounded-full'
									/>
									<span className='text-gray-500'>Real-time Updates</span>
								</div>
								<div className='w-px h-4 bg-gray-600' />
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
									<span className='text-gray-500'>Expert Validated</span>
								</div>
								<div className='w-px h-4 bg-gray-600' />
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 rounded-full bg-blue-500 animate-pulse' />
									<span className='text-gray-500'>Technical Focus</span>
								</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Articles container */}
					<motion.div
						initial={{ opacity: 0, y: 60 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.8, duration: 1 }}
						className='relative'
					>
						{/* Decorative side elements */}
						<div className='absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500/50 via-orange-500/30 to-transparent rounded-full hidden lg:block' />
						<div className='absolute -right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-500/30 to-amber-500/50 rounded-full hidden lg:block' />

						{/* Articles grid */}
						<div className='w-full mx-auto flex flex-col gap-6'>
							{latestArticles.map((article, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ 
										delay: 0.1 * index, 
										duration: 0.8,
										type: 'spring',
										stiffness: 100
									}}
									className='group relative'
								>
									{/* Article number indicator */}
									<motion.div
										whileHover={{ scale: 1.1, rotate: 5 }}
										className='absolute -left-4 top-4 z-20 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl shadow-amber-500/25'
									>
										<span className='text-white font-black text-sm'>
											{String(index + 1).padStart(2, '0')}
										</span>
									</motion.div>

									{/* Glow effect on hover */}
									<div className='absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

									{/* Article wrapper with industrial styling */}
									<div className='relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2 hover:border-amber-500/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-500/10'>
										<ArticleCardCompact article={article} />
									</div>

									{/* Technical corner accents */}
									<div className='absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
									<div className='absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-orange-500/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Bottom section with call-to-action */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
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
							<span className='text-sm font-medium text-gray-500 uppercase tracking-wider px-4'>
								Advancing Industrial Technology
							</span>
							<motion.div
								animate={{ 
									rotate: [360, 0],
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

						{/* CTA Button */}
						<motion.button
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className='group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl font-bold text-white shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300'
						>
							<span className='relative z-10 flex items-center gap-3'>
								Explore All Articles
								
							</span>
							<div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
						</motion.button>
					</motion.div>
				</Container>
			</section>
		)
	)
}
