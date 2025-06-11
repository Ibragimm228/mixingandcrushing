import { getArticleLink } from '@/lib/utils'
import type { IArticle } from '@/types/interfaces'
import { Link } from 'react-router'

export function ArticleCardLarge({ article }: { article: IArticle }) {
	return (
		<Link to={getArticleLink(article)}>
			<article className='group h-[400px] cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
				<div className='h-full w-full overflow-hidden'>
					<img
						src={article.image}
						alt={article.title}
						className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
					/>
				</div>

				<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />

				<div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white'>
					<div className='flex items-center gap-2 sm:gap-4 mb-2 sm:mb-3'>
						<span className='px-2 sm:px-3 py-1 bg-red-600 rounded-full text-xs sm:text-sm'>
							{article.type}
						</span>
						<span className='text-xs sm:text-sm opacity-80'>
							{article.reading_time}
						</span>
					</div>

					<h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-red-100 transition-colors duration-300'>
						{article.title}
					</h3>

					<p className='text-sm sm:text-base text-gray-200 mb-3 sm:mb-4 line-clamp-2'>
						{article.summary}
					</p>

					<button className='text-sm sm:text-base text-red-400 font-semibold hover:text-red-300 transition-colors duration-300'>
						Read More →
					</button>
				</div>
			</article>
		</Link>
	)
}
