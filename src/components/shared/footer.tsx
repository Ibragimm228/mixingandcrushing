import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { Container } from './container'

export function Footer() {
	return (
		<footer className='relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 border-t border-amber-500/20 overflow-hidden'>
			{/* Industrial background patterns */}
			<div className='absolute inset-0'>
				<div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M30 30L15 15L30 0L45 15L30 30ZM30 60L15 45L30 30L45 45L30 60Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
				<div className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-amber-500/5 to-transparent rounded-full blur-3xl' />
				<div className='absolute top-0 left-0 w-80 h-80 bg-gradient-radial from-orange-500/3 to-transparent rounded-full blur-3xl' />
			</div>

			{/* Animated technical elements */}
			<div className='absolute top-4 right-4 opacity-10'>
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
					className='w-16 h-16 text-amber-500'
				>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</svg>
				</motion.div>
			</div>

			<Container className='relative z-10'>
				{/* Top border with gradient */}
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5, ease: 'easeOut' }}
					className='h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-full mb-12 origin-left'
				/>

				<div className='py-12'>
					{/* Main footer content */}
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12'>
						{/* Company info */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className='lg:col-span-1'
						>
							<div className='flex items-center gap-4 mb-6'>
								<motion.div
									animate={{ rotate: [0, 360] }}
									transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
									className='w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-xl'
								>
									<svg viewBox="0 0 24 24" fill="white" className='w-6 h-6'>
										<path d="M19.5,6A1.5,1.5 0 0,1 21,7.5A1.5,1.5 0 0,1 19.5,9H18.97L17.5,15.5A1.5,1.5 0 0,1 16,17H8A1.5,1.5 0 0,1 6.5,15.5L5.03,9H4.5A1.5,1.5 0 0,1 3,7.5A1.5,1.5 0 0,1 4.5,6H19.5M9.69,10L10.19,12.5H13.81L14.31,10H9.69Z" />
									</svg>
								</motion.div>
								<div>
									<h3 className='text-2xl font-black bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
										MIXING & CRUSHING
									</h3>
									<p className='text-xs text-gray-400 uppercase tracking-wider font-medium'>
										Engineering Solutions
									</p>
								</div>
							</div>
							
							<p className='text-gray-400 leading-relaxed mb-6'>
								Leading practitioners in engineering mixing and mining crushing and screening industry.{' '}
								<span className='text-amber-400 font-semibold'>Delivering excellence since 1998.</span>
							</p>

							{/* Technical status */}
							<div className='flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50'>
								<motion.div
									animate={{ scale: [1, 1.2, 1] }}
									transition={{ duration: 2, repeat: Infinity }}
									className='w-3 h-3 rounded-full bg-green-500'
								/>
								<span className='text-sm font-medium text-gray-300'>
									Systems Operational
								</span>
								<div className='ml-auto text-xs text-gray-500'>24/7</div>
							</div>
						</motion.div>

						{/* Navigation links */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='lg:col-span-2'
						>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
								{/* Products */}
								<div>
									<h4 className='text-amber-300 font-bold text-sm uppercase tracking-wider mb-6'>
										Products
									</h4>
									<nav className='space-y-4'>
										<Link
											to='/'
											className='group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300'
										>
											<motion.div
												whileHover={{ x: 5 }}
												className='w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
											<span>Crushers</span>
										</Link>
										<Link
											to='/blog'
											className='group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300'
										>
											<motion.div
												whileHover={{ x: 5 }}
												className='w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
											<span>Mixers</span>
										</Link>
										<Link
											to='/about'
											className='group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300'
										>
											<motion.div
												whileHover={{ x: 5 }}
												className='w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
											<span>Screens</span>
										</Link>
									</nav>
								</div>

								{/* Services */}
								<div>
									<h4 className='text-amber-300 font-bold text-sm uppercase tracking-wider mb-6'>
										Services
									</h4>
									<nav className='space-y-4'>
										<Link
											to='/contacts'
											className='group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300'
										>
											<motion.div
												whileHover={{ x: 5 }}
												className='w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
											<span>Engineering</span>
										</Link>
										<Link
											to='/privacy-policy'
											className='group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300'
										>
											<motion.div
												whileHover={{ x: 5 }}
												className='w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
											<span>Maintenance</span>
										</Link>
									</nav>
								</div>

								{/* Company */}
								<div>
									<h4 className='text-amber-300 font-bold text-sm uppercase tracking-wider mb-6'>
										Company
									</h4>
									<nav className='space-y-4'>
										<Link
											to='/about'
											className='group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300'
										>
											<motion.div
												whileHover={{ x: 5 }}
												className='w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
											<span>About Us</span>
										</Link>
										<Link
											to='/contacts'
											className='group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300'
										>
											<motion.div
												whileHover={{ x: 5 }}
												className='w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
											<span>Contact</span>
										</Link>
									</nav>
								</div>

								{/* Legal */}
								<div>
									<h4 className='text-amber-300 font-bold text-sm uppercase tracking-wider mb-6'>
										Legal
									</h4>
									<nav className='space-y-4'>
										<Link
											to='/privacy-policy'
											className='group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300'
										>
											<motion.div
												whileHover={{ x: 5 }}
												className='w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
											<span>Privacy</span>
										</Link>
										<Link
											to='/blog'
											className='group flex items-center gap-2 text-gray-400 hover:text-amber-300 transition-all duration-300'
										>
											<motion.div
												whileHover={{ x: 5 }}
												className='w-1 h-1 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											/>
											<span>Terms</span>
										</Link>
									</nav>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Bottom section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className='pt-8 border-t border-slate-700/50'
					>
						<div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
							{/* Copyright */}
							<div className='flex items-center gap-4'>
								<p className='text-gray-500 text-sm'>
									© {new Date().getFullYear()}{' '}
									<span className='text-amber-400 font-semibold'>
										MIXING & CRUSHING SOLUTIONS
									</span>
									. All rights reserved.
								</p>
								<div className='w-px h-4 bg-gray-600' />
								<span className='text-xs text-gray-600 uppercase tracking-wider'>
									Est. 1998
								</span>
							</div>

							{/* Technical info */}
							<div className='flex items-center gap-6'>
								<div className='flex items-center gap-2 text-xs text-gray-500'>
									<motion.div
										animate={{ rotate: 360 }}
										transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
										className='w-3 h-3 border border-amber-500/50 border-t-amber-500 rounded-full'
									/>
									<span>Engineering Excellence</span>
								</div>
								<div className='flex items-center gap-2 text-xs text-gray-500'>
									<div className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
									<span>Online Services</span>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</Container>

			{/* Bottom gradient line */}
			<motion.div
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
				className='h-1 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500 origin-right'
			/>
		</footer>
	)
}
