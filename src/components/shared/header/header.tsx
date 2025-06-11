import { Dialog } from '@/components/ui/dialog'
import { MenuIcon } from 'lucide-react'
import { Container } from '../container'
import { Logo } from '../logo'
import { HeaderNav } from './header-nav'

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
		</header>
	)
}
