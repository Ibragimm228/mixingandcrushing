import { ArticleCardCompact } from '@/components/shared/article-card/article-card-compact'
import { ArticleCardLarge } from '@/components/shared/article-card/article-card-large'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'
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
			{/* Hero Section */}
			<section className='relative py-20 bg-gradient-to-br from-red-50 to-white overflow-hidden'>
				<Container>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className='text-center max-w-3xl mx-auto'
					>
						<h1 className='text-5xl font-bold mb-6 text-gray-800'>
							Our Latest <span className='text-red-600'>Articles</span>
						</h1>
						<p className='text-xl text-gray-600 mb-8'>
							Stay informed with the latest insights, tips, and updates from our
							team of phlebotomy experts.
						</p>
						{type && (
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								className='inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium'
							>
								<span>Filtered by: {type}</span>
								<button
									onClick={clearFilter}
									className='p-1 hover:bg-red-200 rounded-full transition-colors'
									aria-label='Clear filter'
								>
									<X className='w-4 h-4' />
								</button>
							</motion.div>
						)}
					</motion.div>
				</Container>
			</section>

			{/* Articles Section */}
			<section className='py-16 bg-white'>
				<Container>
					<motion.div
						variants={staggerContainer}
						initial='hidden'
						animate='visible'
						className='grid grid-cols-1 gap-8'
					>
						{articles?.map((article, index) => (
							<motion.div
								key={article.id}
								variants={fadeInUp}
								transition={{ delay: index * 0.1 }}
							>
								{index % 4 === 0 ? (
									<ArticleCardLarge article={article} />
								) : (
									<ArticleCardCompact article={article} />
								)}
							</motion.div>
						))}
					</motion.div>

					{articles?.length === 0 && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className='text-center py-12'
						>
							<h3 className='text-2xl font-semibold text-gray-800 mb-4'>
								No articles found
							</h3>
							<p className='text-gray-600'>
								{type
									? `No articles found in the "${type}" category.`
									: 'No articles available at the moment.'}
							</p>
						</motion.div>
					)}
				</Container>
			</section>
		</>
	)
}
