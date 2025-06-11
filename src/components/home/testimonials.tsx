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
			<style>
				{`
					/* Оптимизированные CSS анимации */
					.testimonials-section {
						animation: fadeIn 1s ease-out forwards;
					}
					
					.section-header {
						animation: slideDown 0.8s ease-out forwards;
					}
					
					.industry-badge {
						animation: scaleIn 0.6s ease-out 0.2s forwards;
						opacity: 0;
					}
					
					.badge-icon {
						animation: badgeIconPulse 4s ease-in-out infinite;
					}
					
					.main-heading {
						animation: slideUp 0.8s ease-out 0.4s forwards;
						opacity: 0;
					}
					
					.subtitle-content {
						animation: slideUp 0.8s ease-out 0.6s forwards;
						opacity: 0;
					}
					
					.rotating-gear {
						animation: rotate 20s linear infinite;
					}
					
					.testimonial-card-0 {
						animation: testimonialFadeIn 0.8s ease-out 0.8s forwards;
						opacity: 0;
					}
					
					.testimonial-card-1 {
						animation: testimonialFadeIn 0.8s ease-out 1s forwards;
						opacity: 0;
					}
					
					.testimonial-card-2 {
						animation: testimonialFadeIn 0.8s ease-out 1.2s forwards;
						opacity: 0;
					}
					
					.equipment-badge-0 {
						animation: badgeScale 0.8s ease-out 0.9s forwards;
						opacity: 0;
						transform: scale(0.8);
					}
					
					.equipment-badge-1 {
						animation: badgeScale 0.8s ease-out 1.1s forwards;
						opacity: 0;
						transform: scale(0.8);
					}
					
					.equipment-badge-2 {
						animation: badgeScale 0.8s ease-out 1.3s forwards;
						opacity: 0;
						transform: scale(0.8);
					}
					
					.avatar-container-0 {
						animation: avatarScale 0.8s ease-out 0.9s forwards;
						opacity: 0;
						transform: scale(0.8);
					}
					
					.avatar-container-1 {
						animation: avatarScale 0.8s ease-out 1.1s forwards;
						opacity: 0;
						transform: scale(0.8);
					}
					
					.avatar-container-2 {
						animation: avatarScale 0.8s ease-out 1.3s forwards;
						opacity: 0;
						transform: scale(0.8);
					}
					
					.quote-content-0 {
						animation: fadeInText 0.8s ease-out 1s forwards;
						opacity: 0;
					}
					
					.quote-content-1 {
						animation: fadeInText 0.8s ease-out 1.2s forwards;
						opacity: 0;
					}
					
					.quote-content-2 {
						animation: fadeInText 0.8s ease-out 1.4s forwards;
						opacity: 0;
					}
					
					.rating-container-0 {
						animation: ratingScale 0.8s ease-out 1.1s forwards;
						opacity: 0;
						transform: scale(0.5);
					}
					
					.rating-container-1 {
						animation: ratingScale 0.8s ease-out 1.3s forwards;
						opacity: 0;
						transform: scale(0.5);
					}
					
					.rating-container-2 {
						animation: ratingScale 0.8s ease-out 1.5s forwards;
						opacity: 0;
						transform: scale(0.5);
					}
					
					.star-0 {
						animation: starDrop 0.6s ease-out 1.2s forwards;
						opacity: 0;
						transform: scale(0) rotate(-180deg);
					}
					
					.star-1 {
						animation: starDrop 0.6s ease-out 1.3s forwards;
						opacity: 0;
						transform: scale(0) rotate(-180deg);
					}
					
					.star-2 {
						animation: starDrop 0.6s ease-out 1.4s forwards;
						opacity: 0;
						transform: scale(0) rotate(-180deg);
					}
					
					.star-3 {
						animation: starDrop 0.6s ease-out 1.5s forwards;
						opacity: 0;
						transform: scale(0) rotate(-180deg);
					}
					
					.star-4 {
						animation: starDrop 0.6s ease-out 1.6s forwards;
						opacity: 0;
						transform: scale(0) rotate(-180deg);
					}
					
					.bottom-section {
						animation: slideUp 0.8s ease-out 1s forwards;
						opacity: 0;
					}
					
					.testimonial-card {
						transition: all 0.5s ease;
					}
					
					.testimonial-card:hover {
						transform: translateY(-8px) scale(1.02);
						border-color: rgba(251, 191, 36, 0.3);
					}
					
					.testimonial-card:hover .glow-effect {
						opacity: 1;
					}
					
					.testimonial-card:hover .corner-accent {
						opacity: 1;
					}
					
					.testimonial-card:hover .client-name {
						color: rgb(252 211 77);
					}
					
					.avatar-hover {
						transition: all 0.6s ease;
					}
					
					.testimonial-card:hover .avatar-hover {
						transform: rotate(360deg) scale(1.1);
					}
					
					.star-hover {
						transition: all 0.3s ease;
					}
					
					.star-hover:hover {
						transform: scale(1.3) rotate(360deg);
					}
					
					.glow-effect {
						opacity: 0;
						transition: opacity 0.5s ease;
					}
					
					.corner-accent {
						opacity: 0;
						transition: opacity 0.3s ease;
					}
					
					.tech-indicator {
						animation: rotate 8s linear infinite;
					}
					
					.pulse-dot-1 {
						animation: pulseDot 3s ease-in-out infinite;
					}
					
					.pulse-dot-2 {
						animation: pulseDot 3s ease-in-out infinite 1.5s;
					}

					@keyframes fadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}
					
					@keyframes slideDown {
						from {
							opacity: 0;
							transform: translateY(-40px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes scaleIn {
						from {
							opacity: 0;
							transform: scale(0.8);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}
					
					@keyframes slideUp {
						from {
							opacity: 0;
							transform: translateY(30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes testimonialFadeIn {
						from {
							opacity: 0;
							transform: translateY(60px) scale(0.9);
						}
						60% {
							opacity: 1;
							transform: translateY(-10px) scale(1.05);
						}
						to {
							opacity: 1;
							transform: translateY(0) scale(1);
						}
					}
					
					@keyframes badgeScale {
						from {
							opacity: 0;
							transform: scale(0.8);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}
					
					@keyframes avatarScale {
						from {
							opacity: 0;
							transform: scale(0.8);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}
					
					@keyframes fadeInText {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}
					
					@keyframes ratingScale {
						from {
							opacity: 0;
							transform: scale(0.5);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}
					
					@keyframes starDrop {
						from {
							opacity: 0;
							transform: scale(0) rotate(-180deg);
						}
						60% {
							transform: scale(1.2) rotate(0deg);
						}
						to {
							opacity: 1;
							transform: scale(1) rotate(0deg);
						}
					}
					
					@keyframes badgeIconPulse {
						0%, 100% {
							transform: scale(1) rotate(0deg);
						}
						25% {
							transform: scale(1.3) rotate(90deg);
						}
						50% {
							transform: scale(1) rotate(180deg);
						}
						75% {
							transform: scale(1.3) rotate(270deg);
						}
					}
					
					@keyframes rotate {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}
					
					@keyframes pulseDot {
						0%, 100% {
							transform: scale(1);
							opacity: 0.5;
						}
						50% {
							transform: scale(1.2);
							opacity: 1;
						}
					}
				`}
			</style>

			{/* Industrial background elements */}
			<div className='absolute inset-0'>
				<div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M50 0L100 50L50 100L0 50Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
				<div className='absolute top-20 right-20 w-80 h-80 bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-3xl' />
				<div className='absolute bottom-20 left-20 w-96 h-96 bg-gradient-radial from-orange-500/8 to-transparent rounded-full blur-3xl' />
			</div>

			{/* Animated industrial elements */}
			<div className='absolute top-16 left-16 opacity-8'>
				<div className='rotating-gear w-24 h-24 text-amber-500/20'>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</svg>
				</div>
			</div>

			<Container className='relative z-10 testimonials-section'>
				{/* Section header */}
				<div className='section-header text-center mb-20'>
					{/* Industry badge */}
					<div className='industry-badge inline-flex items-center gap-4 px-8 py-4 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm mb-8'>
						<div className='badge-icon w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-sm' />
						<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.25em]'>
							Client Success Stories
						</span>
						<div className='w-px h-5 bg-amber-500/50' />
						<span className='text-gray-400 text-xs uppercase tracking-wider'>
							Proven Results
						</span>
					</div>

					{/* Main heading */}
					<h2 className='main-heading text-6xl md:text-7xl font-black mb-6 leading-none'>
						<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
							Industry
						</span>
						<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
							Leaders
						</span>
					</h2>

					{/* Subtitle */}
					<p className='subtitle-content text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto'>
						Testimonials from engineering professionals who trust our{' '}
						<span className='text-amber-400 font-semibold'>mixing & crushing solutions</span>
					</p>
				</div>

				{/* Testimonials grid */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12'>
					{testimonials.map((testimonial, index) => (
						<div key={index} className={`testimonial-card-${index} group relative`}>
							{/* Glow effect */}
							<div className='glow-effect absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-3xl blur-xl' />
							
							{/* Card container */}
							<div className='testimonial-card relative backdrop-blur-sm bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 rounded-3xl p-8 shadow-2xl hover:border-amber-500/30 transition-all duration-500'>
								{/* Equipment badge */}
								<div className={`equipment-badge-${index} absolute -top-4 left-8 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white text-xs font-bold shadow-xl`}>
									{testimonial.equipment}
								</div>

								{/* Header with avatar and info */}
								<div className={`avatar-container-${index} flex items-center mb-8 pt-4`}>
									<div className='avatar-hover relative w-20 h-20 rounded-2xl overflow-hidden mr-6 shadow-xl'>
										<div className='absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20' />
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className='w-full h-full object-cover'
										/>
										<div className='absolute inset-0 border-2 border-amber-500/30 rounded-2xl' />
									</div>
									<div>
										<h3 className='client-name text-xl font-bold text-white mb-1 transition-colors duration-300'>
											{testimonial.name}
										</h3>
										<p className='text-amber-400 font-semibold text-sm mb-1'>
											{testimonial.role}
										</p>
										<p className='text-gray-500 text-xs uppercase tracking-wider'>
											{testimonial.company}
										</p>
									</div>
								</div>

								{/* Quote */}
								<div className={`quote-content-${index} relative mb-8`}>
									<div className='absolute -top-2 -left-2 w-8 h-8 text-amber-500/30'>
										<svg fill="currentColor" viewBox="0 0 24 24" className='w-full h-full'>
											<path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
										</svg>
									</div>
									<p className='text-gray-300 leading-relaxed text-lg pl-6 italic'>
										{testimonial.text}
									</p>
								</div>

								{/* Rating stars */}
								<div className={`rating-container-${index} flex items-center justify-between`}>
									<div className='flex text-amber-400'>
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className={`star-${i} star-hover w-6 h-6 mr-1`}
												fill='currentColor'
												viewBox='0 0 20 20'
											>
												<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
											</svg>
										))}
									</div>
									
									{/* Technical indicator */}
									<div className='tech-indicator w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full' />
								</div>

								{/* Corner decorations */}
								<div className='corner-accent absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl' />
								<div className='corner-accent absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-orange-500/30 rounded-bl-xl' />
							</div>
						</div>
					))}
				</div>

				{/* Bottom section */}
				<div className='bottom-section text-center mt-20'>
					<div className='flex items-center justify-center gap-6'>
						<div className='w-20 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
						<div className='pulse-dot-1 w-4 h-4 rounded-full bg-amber-500' />
						<span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
							Trusted by Industry Leaders Worldwide
						</span>
						<div className='pulse-dot-2 w-4 h-4 rounded-full bg-orange-500' />
						<div className='w-20 h-px bg-gradient-to-l from-transparent to-orange-500/50' />
					</div>
				</div>
			</Container>
		</section>
	)
}
