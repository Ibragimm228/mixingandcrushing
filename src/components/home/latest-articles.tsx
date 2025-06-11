import type { FC } from 'react'
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
				<style>
					{`
						/* Оптимизированные CSS анимации */
						.latest-section {
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
							animation: badgeRotate 3s ease-in-out infinite;
						}
						
						.main-heading {
							animation: slideUp 0.8s ease-out 0.4s forwards;
							opacity: 0;
						}
						
						.subtitle-content {
							animation: slideUp 0.8s ease-out 0.6s forwards;
							opacity: 0;
						}
						
						.rotating-spinner {
							animation: rotate 4s linear infinite;
						}
						
						.pulse-dot-green {
							animation: pulse 2s ease-in-out infinite;
						}
						
						.pulse-dot-blue {
							animation: pulse 2s ease-in-out infinite 1s;
						}
						
						.articles-container {
							animation: slideUp 1s ease-out 0.8s forwards;
							opacity: 0;
						}
						
						.article-item-0 {
							animation: slideInLeft 0.8s ease-out 1s forwards;
							opacity: 0;
						}
						
						.article-item-1 {
							animation: slideInRight 0.8s ease-out 1.1s forwards;
							opacity: 0;
						}
						
						.article-item-2 {
							animation: slideInLeft 0.8s ease-out 1.2s forwards;
							opacity: 0;
						}
						
						.article-item-3 {
							animation: slideInRight 0.8s ease-out 1.3s forwards;
							opacity: 0;
						}
						
						.article-item-4 {
							animation: slideInLeft 0.8s ease-out 1.4s forwards;
							opacity: 0;
						}
						
						.article-item-5 {
							animation: slideInRight 0.8s ease-out 1.5s forwards;
							opacity: 0;
						}
						
						.bottom-section {
							animation: slideUp 0.8s ease-out 1.2s forwards;
							opacity: 0;
						}
						
						.rotating-machinery {
							animation: rotateMachinery 25s linear infinite;
						}
						
						.rotating-gear-1 {
							animation: rotateGearForward 6s ease-in-out infinite;
						}
						
						.rotating-gear-2 {
							animation: rotateGearReverse 6s ease-in-out infinite 3s;
						}
						
						.article-card {
							transition: all 0.5s ease;
						}
						
						.article-card:hover {
							transform: scale(1.02);
							border-color: rgba(251, 191, 36, 0.3);
							box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.1);
						}
						
						.article-card:hover .glow-effect {
							opacity: 1;
						}
						
						.article-card:hover .corner-accent {
							opacity: 1;
						}
						
						.article-number {
							transition: all 0.3s ease;
						}
						
						.article-card:hover .article-number {
							transform: scale(1.1) rotate(5deg);
						}
						
						.glow-effect {
							opacity: 0;
							transition: opacity 0.5s ease;
						}
						
						.corner-accent {
							opacity: 0;
							transition: opacity 0.3s ease;
						}
						
						.cta-button {
							transition: all 0.3s ease;
						}
						
						.cta-button:hover {
							transform: scale(1.05) translateY(-2px);
							box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.4);
						}
						
						.cta-button:active {
							transform: scale(0.95);
						}
						
						.cta-button:hover .button-overlay {
							opacity: 1;
						}
						
						.button-overlay {
							opacity: 0;
							transition: opacity 0.3s ease;
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
						
						@keyframes slideInLeft {
							from {
								opacity: 0;
								transform: translateX(-60px);
							}
							to {
								opacity: 1;
								transform: translateX(0);
							}
						}
						
						@keyframes slideInRight {
							from {
								opacity: 0;
								transform: translateX(60px);
							}
							to {
								opacity: 1;
								transform: translateX(0);
							}
						}
						
						@keyframes badgeRotate {
							0%, 100% {
								transform: scale(1) rotate(0deg);
							}
							25% {
								transform: scale(1.2) rotate(180deg);
							}
							50% {
								transform: scale(1) rotate(360deg);
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
						
						@keyframes rotateMachinery {
							from {
								transform: rotate(0deg);
							}
							to {
								transform: rotate(360deg);
							}
						}
						
						@keyframes rotateGearForward {
							0%, 100% {
								transform: rotate(0deg) scale(1);
							}
							50% {
								transform: rotate(360deg) scale(1.1);
							}
						}
						
						@keyframes rotateGearReverse {
							0%, 100% {
								transform: rotate(360deg) scale(1);
							}
							50% {
								transform: rotate(0deg) scale(1.1);
							}
						}
						
						@keyframes pulse {
							0%, 100% {
								opacity: 1;
								transform: scale(1);
							}
							50% {
								opacity: 0.5;
								transform: scale(1.2);
							}
						}
					`}
				</style>

				{/* Industrial background elements */}
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-0 w-full h-full opacity-2'>
						<div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)]' 
							 style={{ backgroundSize: '120px 120px' }} />
					</div>
					<div className='absolute top-10 right-10 w-96 h-96 bg-gradient-radial from-amber-500/8 to-transparent rounded-full blur-3xl' />
					<div className='absolute bottom-10 left-10 w-80 h-80 bg-gradient-radial from-orange-500/6 to-transparent rounded-full blur-3xl' />
				</div>

				{/* Animated machinery elements */}
				<div className='absolute top-20 left-20 opacity-5'>
					<div className='rotating-machinery w-32 h-32 text-amber-500/50'>
						<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
							<path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
						</svg>
					</div>
				</div>

				<Container className='relative z-10 latest-section'>
					{/* Section header */}
					<div className='section-header text-center mb-20'>
						{/* Industry badge */}
						<div className='industry-badge inline-flex items-center gap-4 px-8 py-4 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm mb-8'>
							<div className='badge-icon w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-sm' />
							<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.25em]'>
								Technical Publications
							</span>
							<div className='w-px h-5 bg-amber-500/50' />
							<span className='text-gray-400 text-xs uppercase tracking-wider'>
								Latest Research
							</span>
						</div>

						{/* Main heading */}
						<h2 className='main-heading text-6xl md:text-7xl font-black mb-6 leading-none'>
							<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
								Industry
							</span>
							<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
								Intelligence
							</span>
						</h2>

						{/* Subtitle with technical info */}
						<div className='subtitle-content max-w-4xl mx-auto'>
							<p className='text-xl md:text-2xl text-gray-400 leading-relaxed mb-8'>
								Expert insights on crushing technology, mixing innovations, and screening solutions from{' '}
								<span className='text-amber-400 font-semibold'>industry leaders</span>
							</p>
							
							{/* Technical metrics */}
							<div className='flex flex-wrap items-center justify-center gap-8 text-sm'>
								<div className='flex items-center gap-2'>
									<div className='rotating-spinner w-3 h-3 border border-amber-500 border-t-transparent rounded-full' />
									<span className='text-gray-500'>Real-time Updates</span>
								</div>
								<div className='w-px h-4 bg-gray-600' />
								<div className='flex items-center gap-2'>
									<div className='pulse-dot-green w-2 h-2 rounded-full bg-green-500' />
									<span className='text-gray-500'>Expert Validated</span>
								</div>
								<div className='w-px h-4 bg-gray-600' />
								<div className='flex items-center gap-2'>
									<div className='pulse-dot-blue w-2 h-2 rounded-full bg-blue-500' />
									<span className='text-gray-500'>Technical Focus</span>
								</div>
							</div>
						</div>
					</div>

					{/* Articles container */}
					<div className='articles-container relative'>
						{/* Decorative side elements */}
						<div className='absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500/50 via-orange-500/30 to-transparent rounded-full hidden lg:block' />
						<div className='absolute -right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-500/30 to-amber-500/50 rounded-full hidden lg:block' />

						{/* Articles grid */}
						<div className='w-full mx-auto flex flex-col gap-6'>
							{latestArticles.map((article, index) => (
								<div
									key={index}
									className={`article-item-${index} group relative`}
								>
									{/* Article number indicator */}
									<div className='article-number absolute -left-4 top-4 z-20 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl shadow-amber-500/25'>
										<span className='text-white font-black text-sm'>
											{String(index + 1).padStart(2, '0')}
										</span>
									</div>

									{/* Glow effect on hover */}
									<div className='glow-effect absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl blur-xl' />

									{/* Article wrapper with industrial styling */}
									<div className='article-card relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-2'>
										<ArticleCardCompact article={article} />
									</div>

									{/* Technical corner accents */}
									<div className='corner-accent absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-500/30 rounded-tr-xl' />
									<div className='corner-accent absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-orange-500/30 rounded-bl-xl' />
								</div>
							))}
						</div>
					</div>

					{/* Bottom section with call-to-action */}
					<div className='bottom-section text-center mt-20'>

						
					</div>
				</Container>
			</section>
		)
	)
}
