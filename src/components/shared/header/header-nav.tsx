import { DialogContext } from '@/components/ui/dialog'
import { useContext } from 'react'
import { Link } from 'react-router'

interface Props {
	className?: string
}

export function HeaderNav({ className }: Props) {
	const closeDialog = useContext(DialogContext)?.closeDialog

	return (
		<nav className={className}>
			<ul className='flex items-center gap-8'>
				<li onClick={closeDialog}>
					<Link to='/'>Home</Link>
				</li>
				<li onClick={closeDialog}>
					<Link to='/blog'>Blog</Link>
				</li>
				<li onClick={closeDialog}>
					<Link to='/about'>About</Link>
				</li>
				<li onClick={closeDialog}>
					<Link to='/contacts'>Contacts</Link>
				</li>
			</ul>
		</nav>
	)
}
