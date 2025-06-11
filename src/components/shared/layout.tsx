import { Outlet } from 'react-router'
import { Footer } from './footer'
import { Header } from './header/header'
import { ScrollToTop } from './scroll-to-top'

export function Layout() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />
			<main className='flex-grow'>
				<Outlet />
			</main>
			<ScrollToTop />
			<Footer />
		</div>
	)
}
