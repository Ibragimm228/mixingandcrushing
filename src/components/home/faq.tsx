import { fadeInUp } from '@/lib/animations'
import { AnimatePresence, motion } from 'framer-motion'
import type { FC } from 'react'
import { useState } from 'react'
import { Container } from '../shared/container'

const faqs = [
	{
		question: 'What types of materials can your crushing equipment handle?',
		answer:
			'Our advanced crushing systems can process a wide range of materials including hard rock, limestone, granite, concrete, asphalt, and various ores. We engineer solutions for materials with compressive strengths up to 350 MPa.',
	},
	{
		question: 'How do you ensure optimal mixing ratios in your equipment?',
		answer:
			'We utilize precision-controlled mixing systems with advanced weighing technology and automated dosing mechanisms. Our equipment maintains mixing accuracy within ±2% tolerance for consistent product quality.',
	},
	{
		question: 'What is the typical capacity range of your screening solutions?',
		answer:
			'Our screening equipment ranges from 50 TPH for smaller operations to over 1000 TPH for large-scale mining and quarrying applications. We customize solutions based on your specific throughput requirements.',
	},
	{
		question: 'Do you provide maintenance and technical support?',
		answer:
			'Yes, we offer comprehensive maintenance programs, 24/7 technical support, spare parts supply, and on-site training. Our experienced engineers ensure maximum uptime and optimal performance of your equipment.',
	},
	{
		question: 'How energy-efficient are your crushing and mixing systems?',
		answer:
			'Our latest generation equipment incorporates energy-saving technologies that reduce power consumption by up to 30% compared to conventional systems, while maintaining superior performance and productivity.',
	},
]

export const FAQ: FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	return (
		<section className='py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
			{/* Industrial background pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3Ccircle cx="27" cy="7" r="1"/%3E%3Ccircle cx="47" cy="7" r="1"/%3E%3Ccircle cx="7" cy="27" r="1"/%3E%3Ccircle cx="27" cy="27" r="1"/%3E%3Ccircle cx="47" cy="27" r="1"/%3E%3Ccircle cx="7" cy="47" r="1"/%3E%3Ccircle cx="27" cy="47" r="1"/%3E%3Ccircle cx="47" cy="47" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
			</div>

			<Container>
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-20'
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6'
					>
						<div className='w-2 h-2 rounded-full bg-amber-400 animate-pulse' />
						<span className='text-amber-300 font-semibold text-sm uppercase tracking-wider'>
							ENGINEERING EXPERTISE
						</span>
					</motion.div>
					
					<h2 className='text-5xl md:text-6xl font-black mb-6'>
						<span className='bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
							Technical
						</span>
						<br />
						<span className='bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent'>
							Solutions
						</span>
					</h2>
					
					<p className='text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed'>
						Expert answers to your mixing, crushing, and screening engineering questions
					</p>
				</motion.div>

				<div className='max-w-4xl mx-auto'>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							variants={fadeInUp}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							transition={{ delay: index * 0.15 }}
							className='mb-6 group'
						>
							<motion.div
								whileHover={{ scale: 1.02 }}
								className='relative backdrop-blur-sm bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-slate-600/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-500/10 transition-all duration-500'
							>
								{/* Gradient border effect */}
								<div className='absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
								
								<motion.button
									whileTap={{ scale: 0.98 }}
									className='w-full px-8 py-6 text-left flex justify-between items-center relative z-10'
									onClick={() => setOpenIndex(openIndex === index ? null : index)}
								>
									<div className='flex items-center gap-4'>
										<motion.div
											animate={{ 
												rotate: openIndex === index ? 90 : 0,
												scale: openIndex === index ? 1.1 : 1 
											}}
											transition={{ duration: 0.3 }}
											className='w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg'
										>
											<svg
												className='w-6 h-6 text-white'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth='2.5'
													d='M12 4v16M4 12h16'
												/>
											</svg>
										</motion.div>
										
										<div>
											<span className='text-xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300'>
												{faq.question}
											</span>
											<div className='text-sm text-gray-400 mt-1'>
												Click to expand technical details
											</div>
										</div>
									</div>

									<motion.div
										animate={{ rotate: openIndex === index ? 180 : 0 }}
										transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
										className='w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center'
									>
										<svg
											className='w-5 h-5 text-amber-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M19 9l-7 7-7-7'
											/>
										</svg>
									</motion.div>
								</motion.button>

								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.4, ease: 'easeInOut' }}
											className='overflow-hidden relative z-10'
										>
											<motion.div
												initial={{ opacity: 0, y: -20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -20 }}
												transition={{ delay: 0.1, duration: 0.3 }}
												className='px-8 pb-8'
											>
												<div className='w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-6' />
												
												<div className='flex gap-4'>
													<div className='w-1 h-full bg-gradient-to-b from-amber-500 to-orange-600 rounded-full flex-shrink-0' />
													<p className='text-gray-300 leading-relaxed text-lg'>
														{faq.answer}
													</p>
												</div>
											</motion.div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.6 }}
					className='text-center mt-16'
				>
					<div className='inline-flex items-center gap-2 text-gray-400'>
						<div className='w-12 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
						<span className='text-sm font-medium'>Need specific technical consultation?</span>
						<div className='w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50' />
					</div>
				</motion.div>
			</Container>
		</section>
	)
}
