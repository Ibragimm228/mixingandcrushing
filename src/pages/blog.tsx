import { ArticleCardCompact } from '@/components/shared/article-card/article-card-compact'
import { ArticleCardLarge } from '@/components/shared/article-card/article-card-large'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { X } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	const type = searchParams.get('type')

	const { data } = useGetArticles()
	const filteredByTypeArticles = type
		? data?.filter(article => article.type === type)
		: data
	const articles = filteredByTypeArticles?.sort((a, b) => {
		return (
			new Date(b.published_date ?? '').getTime() -
			new Date(a.published_date ?? '').getTime()
		)
	})

	const clearFilter = () => {
		navigate('/blog')
	}

	return (
		<>
			<style>
				{`
					/* Оптимизированные CSS анимации */
					.blog-page {
						animation: pageEntry 0.8s ease-out forwards;
					}
					
					.hero-section {
						animation: heroSlideDown 0.6s ease-out forwards;
					}
					
					.hero-title {
						animation: titleFadeUp 0.8s ease-out 0.2s forwards;
						opacity: 0;
					}
					
					.hero-description {
						animation: descriptionFadeUp 0.8s ease-out 0.4s forwards;
						opacity: 0;
					}
					
					.filter-badge {
						animation: badgeScale 0.6s ease-out 0.6s forwards;
						opacity: 0;
						transform: scale(0.8);
					}
					
					.articles-grid {
						animation: gridFadeUp 0.8s ease-out 0.3s forwards;
						opacity: 0;
					}
					
					.article-item {
						opacity: 0;
						animation: articleStagger 0.6s ease-out forwards;
					}
					
					.article-item:nth-child(1) { animation-delay: 0.5s; }
					.article-item:nth-child(2) { animation-delay: 0.6s; }
					.article-item:nth-child(3) { animation-delay: 0.7s; }
					.article-item:nth-child(4) { animation-delay: 0.8s; }
					.article-item:nth-child(5) { animation-delay: 0.9s; }
					.article-item:nth-child(6) { animation-delay: 1s; }
					.article-item:nth-child(7) { animation-delay: 1.1s; }
					.article-item:nth-child(8) { animation-delay: 1.2s; }
					.article-item:nth-child(9) { animation-delay: 1.3s; }
					.article-item:nth-child(10) { animation-delay: 1.4s; }
					
					.no-articles {
						animation: noArticlesFade 0.8s ease-out forwards;
						opacity: 0;
					}
					
					.filter-button {
						transition: all 0.3s ease;
					}
					
					.filter-button:hover {
						background-color: rgb(254, 226, 226);
						transform: scale(1.1);
					}
					
					.filter-button:active {
						transform: scale(0.9);
					}
					
					.filter-icon {
						transition: transform 0.3s ease;
					}
					
					.filter-button:hover .filter-icon {
						transform: rotate(90deg);
					}
					
					.hero-highlight {
						background: linear-gradient(135deg, rgb(239, 68, 68), rgb(220, 38, 38));
						background-clip: text;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						animation: highlightPulse 3s ease-in-out infinite;
					}
					
					.article-wrapper {
						transition: all 0.5s ease;
					}
					
					.article-wrapper:hover {
						transform: translateY(-8px);
					}
					
					.article-large-card {
						border-radius: 1rem;
						overflow: hidden;
						box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
						transition: all 0.5s ease;
						border: 1px solid rgba(239, 68, 68, 0.1);
					}
					
					.article-large-card:hover {
						box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.25);
						transform: scale(1.02);
						border-color: rgba(239, 68, 68, 0.3);
					}
					
					.article-compact-card {
						border-radius: 0.75rem;
						overflow: hidden;
						box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
						transition: all 0.4s ease;
						border: 1px solid rgba(239, 68, 68, 0.05);
					}
					
					.article-compact-card:hover {
						box-shadow: 0 20px 25px -5px rgba(239, 68, 68, 0.15);
						transform: scale(1.01);
						border-color: rgba(239, 68, 68, 0.2);
					}
					
					.decorative-bg-1 {
						animation: floatSlow 8s ease-in-out infinite;
					}
					
					.decorative-bg-2 {
						animation: floatSlow 8s ease-in-out infinite 4s;
					}

					@keyframes pageEntry {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes heroSlideDown {
						from {
							opacity: 0;
							transform: translateY(-30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes titleFadeUp {
						from {
							opacity: 0;
							transform: translateY(40px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes descriptionFadeUp {
						from {
							opacity: 0;
							transform: translateY(30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes badgeScale {
						from {
							opacity: 0;
							transform: scale(0.8);
						}
						60% {
							transform: scale(1.1);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}
					
					@keyframes gridFadeUp {
						from {
							opacity: 0;
							transform: translateY(50px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes articleStagger {
						from {
							opacity: 0;
							transform: translateY(60px) scale(0.95);
						}
						60% {
							opacity: 1;
							transform: translateY(-10px) scale(1.02);
						}
						to {
							opacity: 1;
							transform: translateY(0) scale(1);
						}
					}
					
					@keyframes noArticlesFade {
						from {
							opacity: 0;
							transform: translateY(40px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes highlightPulse {
						0%, 100% {
							filter: brightness(1);
							text-shadow: none;
						}
						50% {
							filter: brightness(1.2);
							text-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
						}
					}
					
					@keyframes floatSlow {
						0%, 100% {
							transform: translateY(0) scale(1);
						}
						50% {
							transform: translateY(-20px) scale(1.05);
						}
					}
				`}
			</style>

			<div className='blog-page'>
				{/* Hero Section */}
				<section className='hero-section relative py-20 bg-gradient-to-br from-red-50 to-white overflow-hidden'>
					{/* Декоративные фоновые элементы */}
					<div className='decorative-bg-1 absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-red-100/60 to-transparent rounded-full blur-3xl' />
					<div className='decorative-bg-2 absolute bottom-0 left-0 w-80 h-80 bg-gradient-radial from-red-50/80 to-transparent rounded-full blur-3xl' />
					
					{/* Дополнительные декоративные элементы */}
					<div className='absolute top-1/4 left-1/4 w-2 h-2 bg-red-300 rounded-full opacity-30' />
					<div className='absolute top-3/4 right-1/3 w-1 h-1 bg-red-400 rounded-full opacity-40' />
					<div className='absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-200 rounded-full opacity-25' />
					
					<Container>
						<div className='text-center max-w-3xl mx-auto relative z-10'>
							<h1 className='hero-title text-5xl font-bold mb-6 text-gray-800'>
								Our Latest <span className='hero-highlight'>Articles</span>
							</h1>
							<p className='hero-description text-xl text-gray-600 mb-8 leading-relaxed'>
								Stay informed with the latest insights, tips, and updates from our
								team of phlebotomy experts.
							</p>
							{type && (
								<div className='filter-badge inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium shadow-lg'>
									<span>Filtered by: <strong>{type}</strong></span>
									<button
										onClick={clearFilter}
										className='filter-button p-1 hover:bg-red-200 rounded-full transition-colors'
										aria-label='Clear filter'
									>
										<X className='filter-icon w-4 h-4' />
									</button>
								</div>
							)}
						</div>
					</Container>
				</section>

				{/* Articles Section */}
				<section className='py-16 bg-white relative'>
					{/* Subtle background pattern */}
					<div className='absolute inset-0 opacity-5 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ef4444" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
					
					<Container>
						<div className='articles-grid grid grid-cols-1 gap-8 relative z-10'>
							{articles?.map((article, index) => (
								<div
									key={article.id}
									className='article-item article-wrapper'
								>
									{index % 4 === 0 ? (
										<div className='article-large-card'>
											<ArticleCardLarge article={article} />
										</div>
									) : (
										<div className='article-compact-card'>
											<ArticleCardCompact article={article} />
										</div>
									)}
								</div>
							))}
						</div>

						{articles?.length === 0 && (
							<div className='no-articles text-center py-12'>
								<div className='max-w-md mx-auto'>
									<div className='w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center'>
										<svg className='w-8 h-8 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
										</svg>
									</div>
									<h3 className='text-2xl font-semibold text-gray-800 mb-4'>
										No articles found
									</h3>
									<p className='text-gray-600 leading-relaxed'>
										{type
											? `No articles found in the "${type}" category. Try removing the filter to see all available articles.`
											: 'No articles available at the moment. Please check back later for new content.'}
									</p>
									{type && (
										<button
											onClick={clearFilter}
											className='mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium'
										>
											Show All Articles
										</button>
									)}
								</div>
							</div>
						)}
					</Container>
				</section>
			</div>
		</>
	)
}
