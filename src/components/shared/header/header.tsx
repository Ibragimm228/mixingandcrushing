import { Dialog } from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetArticles } from '@/hooks/useArticles'
import { ChevronLeft, ChevronRight, MenuIcon } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router'
import { Container } from '../container'
import { Logo } from '../logo'
import { HeaderNav } from './header-nav'

interface ScrollButtonProps {
	direction: 'left' | 'right'
	onClick: () => void
}

const ScrollButton = ({ direction, onClick }: ScrollButtonProps) => (
	<button
		onClick={onClick}
		className='z-10 p-2 hover:bg-neutral-200 rounded-full bg-black text-white'
		style={{ [direction]: 0 }}
		aria-label={`Scroll ${direction}`}
	>
		{direction === 'left' ? (
			<ChevronLeft className='w-5 h-5' />
		) : (
			<ChevronRight className='w-5 h-5' />
		)}
	</button>
)

interface BlogTypeLinkProps {
	type: string
}

const BlogTypeLink = ({ type }: BlogTypeLinkProps) => (
	<Link
		to={`/blog?type=${type}`}
		className='whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors'
	>
		{type}
	</Link>
)

const SubHeader = () => {
	const { data: articles, isLoading } = useGetArticles()
	const types = new Set(
		articles
			?.map(article => article.type)
			.filter((type): type is string => type !== undefined)
	)
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const scrollAmount = 200
			scrollContainerRef.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			})
		}
	}

	if (isLoading) {
		return (
			<div className='w-full border-b border-neutral-200 bg-neutral-50'>
				<Container>
					<div className='flex items-center gap-4 justify-between'>
						<ScrollButton direction='left' onClick={() => scroll('left')} />
						<div className='flex items-center gap-4 py-3 overflow-x-auto scrollbar-hide'>
							{[1, 2, 3, 4, 5].map(i => (
								<Skeleton key={i} className='w-[200px] h-[38px]' />
							))}
						</div>
						<ScrollButton direction='right' onClick={() => scroll('right')} />
					</div>
				</Container>
			</div>
		)
	}

	return (
		!!types.size && (
			<div className='w-full border-b border-neutral-200 bg-neutral-50'>
				<Container>
					<div className='flex items-center gap-4 justify-between'>
						<ScrollButton direction='left' onClick={() => scroll('left')} />
						<div
							ref={scrollContainerRef}
							className='flex items-center gap-4 py-3 overflow-x-auto scrollbar-hide'
							style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
						>
							{Array.from(types).map(type => (
								<BlogTypeLink key={type} type={type} />
							))}
						</div>
						<ScrollButton direction='right' onClick={() => scroll('right')} />
					</div>
				</Container>
			</div>
		)
	)
}

const MainHeader = () => (
	<div className='w-full border-b border-neutral-200'>
		<Container className='flex items-center justify-between py-4'>
			<Logo />
			<HeaderNav className='max-sm:hidden' />

			<Dialog title='Menu' trigger={<MenuIcon className='sm:hidden' />}>
				<HeaderNav className='[&_ul]:flex-col [&_ul]:pt-4' />
			</Dialog>
		</Container>
	</div>
)

export function Header() {
	return (
		<header>
			<MainHeader />
			<SubHeader />
		</header>
	)
}
