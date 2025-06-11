import { useEffect, useRef, useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'

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
	const [imagesLoaded, setImagesLoaded] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const swiperRef = useRef(null)

	// Предварительная загрузка изображений
	useEffect(() => {
		const preloadImages = async () => {
			const imagePromises = slides.map(slide => {
				return new Promise((resolve, reject) => {
					const img = new Image()
					img.onload = resolve
					img.onerror = reject
					img.src = slide.image
				})
			})

			try {
				await Promise.all(imagePromises)
				setImagesLoaded(true)
				// Задержка для плавного появления
				setTimeout(() => setIsVisible(true), 100)
			} catch (error) {
				console.error('Error preloading images:', error)
				setImagesLoaded(true)
				setIsVisible(true)
			}
		}

		preloadImages()
	}, [])

	return (
		<section 
			className='relative w-full h-screen overflow-hidden'
			style={{
				contain: 'layout style paint',
				willChange: 'auto'
			}}
		>
			<style>
				{`
					/* Оптимизированные стили для предотвращения CLS */
					.hero-container {
						position: relative;
						width: 100%;
						height: 100vh;
						contain: layout style paint;
					}

					.hero-swiper {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						opacity: 0;
						transition: opacity 0.5s ease-in-out;
					}

					.hero-swiper.loaded {
						opacity: 1;
					}

					.hero-swiper .swiper-pagination {
						position: absolute !important;
						right: 40px !important;
						top: 50% !important;
						transform: translateY(-50%) !important;
						left: auto !important;
						width: auto !important;
						display: flex;
						flex-direction: column;
						gap: 16px;
						z-index: 20;
						contain: layout;
					}

					.hero-swiper .swiper-pagination-bullet {
						background: transparent !important;
						border: 2px solid rgba(251, 191, 36, 0.5) !important;
						opacity: 1 !important;
						width: 16px !important;
						height: 16px !important;
						margin: 0 !important;
						position: relative;
						transition: border-color 0.3s ease, transform 0.3s ease;
						will-change: transform;
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
						transition: opacity 0.3s ease;
						will-change: opacity;
					}

					.hero-swiper .swiper-pagination-bullet-active {
						background: rgba(251, 191, 36, 0.2) !important;
						border-color: #f59e0b !important;
						transform: scale(1.2);
					}

					.hero-swiper .swiper-pagination-bullet-active::after {
						opacity: 1;
					}

					/* Предварительно зарезервированные размеры для контента */
					.slide-content {
						transform: translateY(30px);
						opacity: 0;
						transition: transform 0.8s ease-out, opacity 0.8s ease-out;
						will-change: transform, opacity;
						contain: layout;
					}

					.slide-content.visible {
						transform: translateY(0);
						opacity: 1;
					}

					.industry-badge {
						height: 48px; /* Фиксированная высота */
						opacity: 0;
						transform: translateX(-30px);
						transition: transform 0.6s ease-out 0.3s, opacity 0.6s ease-out 0.3s;
						will-change: transform, opacity;
					}

					.industry-badge.visible {
						opacity: 1;
						transform: translateX(0);
					}

					.main-title {
						min-height: 200px; /* Зарезервированная высота для заголовка */
						opacity: 0;
						transform: translateY(20px);
						transition: transform 0.8s ease-out 0.5s, opacity 0.8s ease-out 0.5s;
						will-change: transform, opacity;
					}

					.main-title.visible {
						opacity: 1;
						transform: translateY(0);
					}

					.description {
						min-height: 80px; /* Зарезервированная высота для описания */
						opacity: 0;
						transform: translateY(20px);
						transition: transform 0.6s ease-out 0.7s, opacity 0.6s ease-out 0.7s;
						will-change: transform, opacity;
					}

					.description.visible {
						opacity: 1;
						transform: translateY(0);
					}

					.stats-cta {
						height: 80px; /* Фиксированная высота */
						opacity: 0;
						transform: translateY(20px);
						transition: transform 0.6s ease-out 0.9s, opacity 0.6s ease-out 0.9s;
						will-change: transform, opacity;
					}

					.stats-cta.visible {
						opacity: 1;
						transform: translateY(0);
					}

					.cta-button {
						transition: transform 0.2s ease, box-shadow 0.2s ease;
						will-change: transform;
					}

					.cta-button:hover {
						transform: scale(1.02) translateX(5px);
						box-shadow: 0 20px 40px -12px rgba(251, 191, 36, 0.3);
					}

					.cta-button:active {
						transform: scale(0.98);
					}

					/* Оптимизированные анимации вращения */
					.rotating-element {
						animation: rotate 8s linear infinite;
						will-change: transform;
						contain: layout;
					}

					.badge-icon {
						animation: rotate 4s linear infinite;
						will-change: transform;
					}

					@keyframes rotate {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}

					/* Skeleton для загрузки */
					.loading-skeleton {
						background: linear-gradient(
							90deg,
							rgba(255, 255, 255, 0.1) 25%,
							rgba(255, 255, 255, 0.2) 50%,
							rgba(255, 255, 255, 0.1) 75%
						);
						background-size: 200% 100%;
						animation: loading 2s infinite;
					}

					@keyframes loading {
						0% {
							background-position: 200% 0;
						}
						100% {
							background-position: -200% 0;
						}
					}

					/* Оптимизация для изображений */
					.slide-image {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						object-fit: cover;
						will-change: auto;
						contain: layout;
					}

					.slide-background {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;
						will-change: auto;
						contain: layout;
					}

					/* Медиа-запросы для отзывчивости без смещений */
					@media (max-width: 768px) {
						.main-title {
							min-height: 150px;
						}
						.description {
							min-height: 100px;
						}
						.hero-swiper .swiper-pagination {
							right: 20px !important;
						}
					}
				`}
			</style>

			{/* Статичный фон для предотвращения смещений */}
			<div className='absolute inset-0 bg-slate-900'>
				<div 
					className='absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)]' 
					style={{ 
						backgroundSize: '60px 60px',
						contain: 'layout style paint'
					}} 
				/>
			</div>

			{/* Loading skeleton */}
			{!imagesLoaded && (
				<div className='absolute inset-0 z-20 flex items-center justify-center'>
					<div className='loading-skeleton w-full h-32 rounded-lg mx-8' />
				</div>
			)}

			{/* Основной контент */}
			<div className='hero-container'>
				<Swiper
					ref={swiperRef}
					modules={[Autoplay, Pagination, EffectFade]}
					effect='fade'
					spaceBetween={0}
					slidesPerView={1}
					pagination={{ clickable: true }}
					loop={true}
					autoplay={{
						delay: 7000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true
					}}
					className={`hero-swiper w-full h-full ${imagesLoaded ? 'loaded' : ''}`}
					onSwiper={(swiper) => {
						// Дополнительная оптимизация после инициализации
						if (swiper && imagesLoaded) {
							swiper.update()
						}
					}}
				>
					{slides.map((slide, index) => (
						<SwiperSlide key={slide.id}>
							<div className='relative w-full h-full'>
								{/* Оптимизированное фоновое изображение */}
								<div
									className='slide-background'
									style={{ 
										backgroundImage: imagesLoaded ? `url(${slide.image})` : 'none',
										backgroundColor: imagesLoaded ? 'transparent' : '#1e293b'
									}}
								/>
								
								{/* Оптимизированные overlays */}
								<div className='absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/40' />
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/30' />
								
								{/* Content с зарезервированными размерами */}
								<div className='relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24'>
									<div className='max-w-4xl'>
										<div className={`slide-content ${isVisible ? 'visible' : ''}`}>
											{/* Industry badge */}
											<div className={`industry-badge inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 backdrop-blur-sm mb-6 ${isVisible ? 'visible' : ''}`}>
												<div className='badge-icon w-3 h-3 rounded-sm bg-gradient-to-br from-amber-400 to-orange-500' />
												<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.2em]'>
													{slide.subtitle}
												</span>
											</div>

											{/* Main title */}
											<h1 className={`main-title text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 ${isVisible ? 'visible' : ''}`}>
												<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
													{slide.title.split(' ').slice(0, -1).join(' ')}
												</span>
												<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
													{slide.title.split(' ').slice(-1)[0]}
												</span>
											</h1>

											{/* Description */}
											<p className={`description text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-8 max-w-3xl ${isVisible ? 'visible' : ''}`}>
												{slide.description}
											</p>

											{/* Stats and CTA */}
											<div className={`stats-cta flex flex-col sm:flex-row items-start sm:items-center gap-6 ${isVisible ? 'visible' : ''}`}>
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
													
												</div>

												{/* CTA Button */}
												
											</div>
										</div>
									</div>
								</div>

								{/* Технические элементы */}
								<div className='absolute bottom-8 left-8 flex items-center gap-4 text-gray-400'>
									<div className='rotating-element w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full' />
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
			</div>

			{/* Bottom decorative line */}
			<div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500' />
		</section>
	)
}
