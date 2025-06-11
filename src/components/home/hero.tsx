import 'swiper/css'
import 'swiper/css/pagination'

import { motion } from 'framer-motion'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const slides = [
	{
		id: 1,
		title: 'Advanced Crushing Technology',
		subtitle: 'Engineering Excellence',
		description: 'Revolutionary crushing systems designed for maximum efficiency and durability',
		image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
		stats: { value: '5000+', label: 'TPH Capacity' }
	},
	{
		id: 2,
		title: 'Precision Mixing Solutions',
		subtitle: 'Innovation at Work',
		description: 'State-of-the-art mixing equipment delivering consistent results across industries',
		image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop',
		stats: { value: '99.8%', label: 'Precision Rate' }
	},
	{
		id: 3,
		title: 'Complete Screening Systems',
		subtitle: 'Total Solutions',
		description: 'Comprehensive screening technology for optimal material separation and processing',
		image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
		stats: { value: '25+', label: 'Years Experience' }
	},
]

export function Hero() {
	return (
		<section className='relative w-full h-screen overflow-hidden'>
			<style>
				{`
					.hero-swiper .swiper-pagination {
						position: absolute;
						right: 40px !important;
						top: 50% !important;
						transform: translateY(-50%) !important;
						left: auto !important;
						width: auto !important;
						display: flex;
						flex-direction: column;
						gap: 16px;
						z-index: 20;
					}
					.hero-swiper .swiper-pagination-bullet {
						background: transparent !important;
						border: 2px solid rgba(251, 191, 36, 0.5) !important;
						opacity: 1 !important;
						width: 16px !important;
						height: 16px !important;
						margin: 0 !important;
						position: relative;
						transition: all 0.3s ease;
					}
					.hero-swiper .swiper-pagination-bullet::after {
						content: '';
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						width: 6px;
						height: 6px;
						background: #f59e0b;
						border-radius: 50%;
						opacity: 0;
						transition: all 0.3s ease;
					}
					.hero-swiper .swiper-pagination-bullet-active {
						background: rgba(251, 191, 36, 0.2) !important;
						border-color: #f59e0b !important;
						transform: scale(1.2);
					}
					.hero-swiper .swiper-pagination-bullet-active::after {
						opacity: 1;
					}
				`}
			</style>

			{/* Animated background grid */}
			<div className='absolute inset-0 bg-slate-900'>
				<div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="27" cy="7" r="1"/%3E%3Ccircle cx="47" cy="7" r="1"/%3E%3Ccircle cx="7" cy="27" r="1"/%3E%3Ccircle cx="27" cy="27" r="1"/%3E%3Ccircle cx="47" cy="27" r="1"/%3E%3Ccircle cx="7" cy="47" r="1"/%3E%3Ccircle cx="27" cy="47" r="1"/%3E%3Ccircle cx="47" cy="47" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
			</div>

			<Swiper
				modules={[Autoplay, Pagination, EffectFade]}
				effect='fade'
				spaceBetween={0}
				slidesPerView={1}
				pagination={{ clickable: true }}
				loop={true}
				autoplay={{
					delay: 7000,
					disableOnInteraction: false,
				}}
				className='hero-swiper w-full h-full'
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={slide.id}>
						<div className='relative w-full h-full'>
							{/* Background image with parallax effect */}
							<motion.div
								initial={{ scale: 1.1 }}
								animate={{ scale: 1 }}
								transition={{ duration: 2, ease: 'easeOut' }}
								className='absolute inset-0 bg-cover bg-center'
								style={{ backgroundImage: `url(${slide.image})` }}
							/>
							
							{/* Gradient overlays */}
							<div className='absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40' />
							<div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30' />

							{/* Industrial pattern overlay */}
							<div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M50 50L25 25L50 0L75 25L50 50Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20' />
							
							{/* Content */}
							<div className='relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24'>
								<div className='max-w-4xl'>
									{/* Industry badge */}
									<motion.div
										initial={{ opacity: 0, x: -50 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.5, duration: 0.8 }}
										className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm mb-6'
									>
										<motion.div
											animate={{ rotate: [0, 360] }}
											transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
											className='w-3 h-3 rounded-sm bg-gradient-to-br from-amber-400 to-orange-500'
										/>
										<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.2em]'>
											{slide.subtitle}
										</span>
									</motion.div>

									{/* Main title */}
									<motion.h1
										initial={{ opacity: 0, y: 50 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.7, duration: 1 }}
										className='text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6'
									>
										<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
											{slide.title.split(' ').slice(0, -1).join(' ')}
										</span>
										<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
											{slide.title.split(' ').slice(-1)[0]}
										</span>
									</motion.h1>

									{/* Description */}
									<motion.p
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 1, duration: 0.8 }}
										className='text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-8 max-w-3xl'
									>
										{slide.description}
									</motion.p>

									{/* Stats and CTA */}
									<motion.div
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 1.3, duration: 0.8 }}
										className='flex flex-col sm:flex-row items-start sm:items-center gap-6'
									>
										{/* Stat display */}
										<div className='flex items-center gap-4'>
											<div className='text-center'>
												<div className='text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
													{slide.stats.value}
												</div>
												<div className='text-sm font-medium text-amber-300 uppercase tracking-wider'>
													{slide.stats.label}
												</div>
											</div>
											<div className='w-px h-16 bg-gradient-to-b from-amber-500/50 to-orange-500/50' />
										</div>

										{/* CTA Button */}
										<motion.button
											whileHover={{ scale: 1.05, x: 10 }}
											whileTap={{ scale: 0.95 }}
											className='group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl font-bold text-white shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300'
										>
											<span className='relative z-10 flex items-center gap-3'>
												
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M13 7l5 5m0 0l-5 5m5-5H6'
													/>
												
											</span>
											<div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
										</motion.button>
									</motion.div>
								</div>
							</div>

							{/* Animated technical elements */}
							<div className='absolute bottom-8 left-8 flex items-center gap-4 text-gray-400'>
								<motion.div
									animate={{ rotate: 360 }}
									transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
									className='w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full'
								/>
								<span className='text-sm font-medium uppercase tracking-wider'>
									Industrial Engineering
								</span>
							</div>

							{/* Slide number */}
							<div className='absolute top-8 right-8 text-amber-400 font-bold text-lg'>
								{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Bottom decorative line */}
			<div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500' />
		</section>
	)
}
