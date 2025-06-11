import { ArticleCardCompact } from '@/components/shared/article-card/article-card-compact'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { X, Sparkles, TrendingUp } from 'lucide-react'
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
					/* Современные CSS переменные */
					:root {
						--primary-red: #ef4444;
						--primary-red-dark: #dc2626;
						--primary-red-light: #fca5a5;
						--gradient-primary: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 25%, #ff4757 50%, #c44569 75%, #8e44ad 100%);
						--gradient-secondary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
						--gradient-accent: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
						--shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
						--shadow-glow: 0 0 40px rgba(239, 68, 68, 0.3);
						--blur-backdrop: blur(20px);
					}

					/* Основные анимации страницы */
					.blog-page {
						animation: pageEntry 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
						position: relative;
						overflow-x: hidden;
					}

					/* Компактный герой секшн */
					.hero-section {
						background: var(--gradient-primary);
						position: relative;
						min-height: 45vh;
						display: flex;
						align-items: center;
						overflow: hidden;
					}

					.hero-section::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: 
							radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
							radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
							radial-gradient(circle at 40% 60%, rgba(255, 107, 107, 0.4) 0%, transparent 40%);
						animation: gradientShift 8s ease-in-out infinite;
					}

					.hero-content {
						position: relative;
						z-index: 10;
						text-align: center;
						color: white;
					}

					.hero-title {
						font-size: clamp(2.5rem, 7vw, 4.5rem);
						font-weight: 900;
						margin-bottom: 1.5rem;
						line-height: 1.1;
						animation: titleSpectacular 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
						opacity: 0;
						text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
					}

					.hero-highlight {
						background: linear-gradient(135deg, #fff 0%, #ffeaa7 50%, #fdcb6e 100%);
						background-clip: text;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						position: relative;
						display: inline-block;
					}

					.hero-highlight::after {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(253, 203, 110, 0.8));
						filter: blur(20px);
						opacity: 0.6;
						z-index: -1;
						animation: glowPulse 3s ease-in-out infinite;
					}

					.hero-description {
						font-size: 1.1rem;
						margin-bottom: 2rem;
						opacity: 0.95;
						animation: descriptionSlide 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards;
						opacity: 0;
						max-width: 550px;
						margin-left: auto;
						margin-right: auto;
						text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
					}

					/* Фильтр бейдж с glassmorphism эффектом */
					.filter-badge {
						background: rgba(255, 255, 255, 0.25);
						backdrop-filter: var(--blur-backdrop);
						border: 1px solid rgba(255, 255, 255, 0.3);
						border-radius: 50px;
						padding: 0.75rem 1.5rem;
						display: inline-flex;
						align-items: center;
						gap: 0.75rem;
						color: white;
						font-weight: 600;
						box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
						animation: badgeFloat 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
						opacity: 0;
						transform: translateY(20px);
					}

					.filter-button {
						background: rgba(255, 255, 255, 0.2);
						border: none;
						border-radius: 50%;
						width: 28px;
						height: 28px;
						display: flex;
						align-items: center;
						justify-content: center;
						transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
						cursor: pointer;
					}

					.filter-button:hover {
						background: rgba(255, 255, 255, 0.4);
						transform: scale(1.1) rotate(90deg);
					}

					/* Плавающие декоративные элементы */
					.floating-element {
						position: absolute;
						border-radius: 50%;
						background: rgba(255, 255, 255, 0.1);
						backdrop-filter: blur(10px);
					}

					.floating-1 {
						width: 60px;
						height: 60px;
						top: 25%;
						left: 12%;
						animation: float1 6s ease-in-out infinite;
					}

					.floating-2 {
						width: 80px;
						height: 80px;
						top: 65%;
						right: 18%;
						animation: float2 8s ease-in-out infinite 2s;
					}

					.floating-3 {
						width: 45px;
						height: 45px;
						bottom: 25%;
						left: 25%;
						animation: float3 7s ease-in-out infinite 4s;
					}

					/* Компактная секция статей */
					.articles-section {
						background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
						position: relative;
						padding: 4rem 0 6rem;
					}

					.articles-section::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						height: 120px;
						background: linear-gradient(180deg, rgba(239, 68, 68, 0.05) 0%, transparent 100%);
					}

					/* Единообразная сетка карточек */
					.articles-grid {
						display: grid;
						grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
						gap: 1.5rem;
						animation: gridReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards;
						opacity: 0;
						transform: translateY(30px);
					}

					.article-item {
						opacity: 0;
						transform: translateY(30px) scale(0.98);
						animation: articleReveal 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
					}

					/* Единообразные карточки статей */
					.article-card {
						background: white;
						border-radius: 18px;
						overflow: hidden;
						box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
						border: 1px solid rgba(239, 68, 68, 0.08);
						transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
						position: relative;
						height: 100%;
						display: flex;
						flex-direction: column;
					}

					.article-card::before {
						content: '';
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: var(--gradient-primary);
						opacity: 0;
						transition: opacity 0.5s ease;
						z-index: 0;
					}

					.article-card:hover {
						transform: translateY(-12px) scale(1.015);
						box-shadow: 0 20px 50px rgba(239, 68, 68, 0.15);
						border-color: rgba(239, 68, 68, 0.2);
					}

					.article-card:hover::before {
						opacity: 0.03;
					}

					/* Обеспечиваем одинаковую высоту всех компонентов карточек */
					.article-card > * {
						position: relative;
						z-index: 1;
					}

					/* Компактная пустая страница */
					.no-articles {
						text-align: center;
						padding: 4rem 0;
						animation: noArticlesReveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
						opacity: 0;
					}

					.no-articles-icon {
						width: 100px;
						height: 100px;
						margin: 0 auto 1.5rem;
						background: var(--gradient-accent);
						border-radius: 50%;
						display: flex;
						align-items: center;
						justify-content: center;
						box-shadow: var(--shadow-xl);
						animation: iconBounce 2s ease-in-out infinite;
					}

					.no-articles-title {
						font-size: 2rem;
						font-weight: 800;
						margin-bottom: 1rem;
						background: var(--gradient-primary);
						background-clip: text;
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}

					.cta-button {
						background: var(--gradient-primary);
						color: white;
						border: none;
						padding: 0.875rem 2rem;
						border-radius: 50px;
						font-weight: 600;
						font-size: 1rem;
						box-shadow: 0 6px 20px rgba(239, 68, 68, 0.25);
						transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
						cursor: pointer;
						margin-top: 1.5rem;
					}

					.cta-button:hover {
						transform: translateY(-2px) scale(1.05);
						box-shadow: 0 12px 30px rgba(239, 68, 68, 0.35);
					}

					/* Keyframes для анимаций */
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

					@keyframes gradientShift {
						0%, 100% { transform: scale(1) rotate(0deg); }
						50% { transform: scale(1.05) rotate(3deg); }
					}

					@keyframes titleSpectacular {
						from {
							opacity: 0;
							transform: translateY(40px) scale(0.95);
						}
						60% {
							opacity: 1;
							transform: translateY(-5px) scale(1.02);
						}
						to {
							opacity: 1;
							transform: translateY(0) scale(1);
						}
					}

					@keyframes descriptionSlide {
						from {
							opacity: 0;
							transform: translateY(25px);
						}
						to {
							opacity: 0.95;
							transform: translateY(0);
						}
					}

					@keyframes badgeFloat {
						from {
							opacity: 0;
							transform: translateY(15px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes glowPulse {
						0%, 100% {
							opacity: 0.6;
							transform: scale(1);
						}
						50% {
							opacity: 0.85;
							transform: scale(1.05);
						}
					}

					@keyframes float1 {
						0%, 100% { transform: translateY(0px) rotate(0deg); }
						33% { transform: translateY(-15px) rotate(120deg); }
						66% { transform: translateY(8px) rotate(240deg); }
					}

					@keyframes float2 {
						0%, 100% { transform: translateY(0px) rotate(0deg); }
						50% { transform: translateY(-20px) rotate(180deg); }
					}

					@keyframes float3 {
						0%, 100% { transform: translateY(0px) rotate(0deg); }
						25% { transform: translateY(-10px) rotate(90deg); }
						75% { transform: translateY(10px) rotate(270deg); }
					}

					@keyframes gridReveal {
						from {
							opacity: 0;
							transform: translateY(30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes articleReveal {
						from {
							opacity: 0;
							transform: translateY(30px) scale(0.98);
						}
						60% {
							opacity: 1;
							transform: translateY(-5px) scale(1.01);
						}
						to {
							opacity: 1;
							transform: translateY(0) scale(1);
						}
					}

					@keyframes noArticlesReveal {
						from {
							opacity: 0;
							transform: translateY(30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}

					@keyframes iconBounce {
						0%, 100% { transform: translateY(0px); }
						50% { transform: translateY(-8px); }
					}

					/* Адаптивность для единообразных карточек */
					@media (max-width: 1200px) {
						.articles-grid {
							grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
						}
					}

					@media (max-width: 768px) {
						.hero-title {
							font-size: clamp(1.75rem, 7vw, 2.5rem);
							margin-bottom: 1rem;
						}
						
						.hero-description {
							font-size: 1rem;
							margin-bottom: 1.5rem;
						}
						
						.articles-grid {
							grid-template-columns: 1fr;
							gap: 1rem;
						}
						
						.hero-section {
							min-height: 40vh;
							padding: 3rem 0;
						}

						.articles-section {
							padding: 3rem 0 4rem;
						}

						.floating-element {
							display: none;
						}
					}

					@media (max-width: 480px) {
						.articles-grid {
							grid-template-columns: 1fr;
							gap: 1rem;
						}

						.hero-section {
							min-height: 35vh;
							padding: 2rem 0;
						}

						.articles-section {
							padding: 2rem 0 3rem;
						}
					}

					/* Динамические задержки для статей - компактные */
					${Array.from({ length: 15 }, (_, i) => `
						.article-item:nth-child(${i + 1}) {
							animation-delay: ${0.05 + i * 0.08}s;
						}
					`).join('')}
				`}
			</style>
			
			<div className='blog-page'>
				{/* Компактный Hero Section */}
				<section className='hero-section'>
					{/* Плавающие декоративные элементы */}
					<div className='floating-element floating-1' />
					<div className='floating-element floating-2' />
					<div className='floating-element floating-3' />
					
					{/* Дополнительные световые эффекты */}
					<div className='absolute top-0 left-1/4 w-72 h-72 bg-white opacity-8 rounded-full blur-3xl' />
					<div className='absolute bottom-0 right-1/4 w-60 h-60 bg-yellow-200 opacity-15 rounded-full blur-3xl' />
					
					<Container>
						<div className='hero-content'>
							<h1 className='hero-title'>
								Discover Amazing{' '}
								<span className='hero-highlight'>
									<Sparkles className='inline-block w-8 h-8 mb-1' />
									Articles
								</span>
							</h1>
							<p className='hero-description'>
								Dive into a world of knowledge with our carefully curated collection 
								of expert insights, industry trends, and breakthrough discoveries.
							</p>
							{type && (
								<div className='filter-badge'>
									<TrendingUp className='w-4 h-4' />
									<span>Exploring: <strong>{type}</strong></span>
									<button
										onClick={clearFilter}
										className='filter-button'
										aria-label='Clear filter'
									>
										<X className='w-3 h-3' />
									</button>
								</div>
							)}
						</div>
					</Container>
				</section>

				{/* Компактная секция статей с единообразными карточками */}
				<section className='articles-section'>
					<Container>
						<div className='articles-grid'>
							{articles?.map((article, index) => (
								<div
									key={article.id}
									className='article-item'
									style={{ animationDelay: `${0.05 + index * 0.08}s` }}
								>
									<div className='article-card'>
										<ArticleCardCompact article={article} />
									</div>
								</div>
							))}
						</div>

						{articles?.length === 0 && (
							<div className='no-articles'>
								<div className='no-articles-icon'>
									<Sparkles className='w-10 h-10 text-white' />
								</div>
								<h3 className='no-articles-title'>
									Ready for Amazing Content?
								</h3>
								<p className='text-lg text-gray-600 leading-relaxed max-w-xl mx-auto'>
									{type
										? `We're preparing incredible "${type}" articles just for you. Meanwhile, explore our full collection!`
										: 'Our team of experts is crafting exceptional articles. Stay tuned for incredible insights coming your way!'}
								</p>
								{type && (
									<button
										onClick={clearFilter}
										className='cta-button'
									>
										🚀 Explore All Articles
									</button>
								)}
							</div>
						)}
					</Container>
				</section>
			</div>
		</>
	)
}
