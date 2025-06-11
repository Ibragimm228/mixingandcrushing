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
			<style>
				{`
					/* Оптимизированные CSS анимации */
					.faq-header {
						animation: fadeInUp 0.8s ease-out forwards;
					}
					
					.faq-badge {
						animation: fadeInScale 1s ease-out 0.2s forwards;
						opacity: 0;
					}
					
					.faq-item {
						animation: fadeInUp 0.6s ease-out forwards;
						opacity: 0;
					}
					
					.faq-item:nth-child(1) { animation-delay: 0.1s; }
					.faq-item:nth-child(2) { animation-delay: 0.25s; }
					.faq-item:nth-child(3) { animation-delay: 0.4s; }
					.faq-item:nth-child(4) { animation-delay: 0.55s; }
					.faq-item:nth-child(5) { animation-delay: 0.7s; }
					
					.faq-card {
						transition: all 0.3s ease;
					}
					
					.faq-card:hover {
						transform: scale(1.02);
						box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.1);
					}
					
					.faq-card:hover .gradient-border {
						opacity: 1;
					}
					
					.faq-card:hover .question-text {
						color: rgb(252 211 77);
					}
					
					.faq-button {
						transition: all 0.2s ease;
					}
					
					.faq-button:active {
						transform: scale(0.98);
					}
					
					.icon-container {
						transition: all 0.3s ease;
					}
					
					.icon-container.open {
						transform: rotate(90deg) scale(1.1);
					}
					
					.chevron-icon {
						transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
					}
					
					.chevron-icon.open {
						transform: rotate(180deg);
					}
					
					.answer-content {
						max-height: 0;
						opacity: 0;
						overflow: hidden;
						transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
					}
					
					.answer-content.open {
						max-height: 500px;
						opacity: 1;
					}
					
					.answer-inner {
						transform: translateY(-20px);
						transition: transform 0.3s ease 0.1s;
					}
					
					.answer-content.open .answer-inner {
						transform: translateY(0);
					}
					
					.pulse-dot {
						animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
					}
					
					.consultation-footer {
						animation: fadeInUp 0.8s ease-out 0.6s forwards;
						opacity: 0;
					}

					@keyframes fadeInUp {
						from {
							opacity: 0;
							transform: translateY(30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes fadeInScale {
						from {
							opacity: 0;
							transform: scale(0.8);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}
					
					@keyframes pulse {
						0%, 100% {
							opacity: 1;
						}
						50% {
							opacity: 0.5;
						}
					}
				`}
			</style>

			{/* Упрощенный background pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)]' 
					 style={{ backgroundSize: '60px 60px' }} />
			</div>

			<Container>
				<div className='faq-header text-center mb-20'>
					<div className='faq-badge inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6'>
						<div className='pulse-dot w-2 h-2 rounded-full bg-amber-400' />
						<span className='text-amber-300 font-semibold text-sm uppercase tracking-wider'>
							ENGINEERING EXPERTISE
						</span>
					</div>
					
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
				</div>

				<div className='max-w-4xl mx-auto'>
					{faqs.map((faq, index) => (
						<div key={index} className='faq-item mb-6 group'>
							<div className='faq-card relative backdrop-blur-sm bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-slate-600/50 rounded-2xl overflow-hidden shadow-2xl'>
								{/* Gradient border effect */}
								<div className='gradient-border absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-orange-500/20 opacity-0 transition-opacity duration-500' />
								
								<button
									className='faq-button w-full px-8 py-6 text-left flex justify-between items-center relative z-10'
									onClick={() => setOpenIndex(openIndex === index ? null : index)}
								>
									<div className='flex items-center gap-4'>
										<div className={`icon-container w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg ${openIndex === index ? 'open' : ''}`}>
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
										</div>
										
										<div>
											<span className='question-text text-xl font-bold text-white transition-colors duration-300'>
												{faq.question}
											</span>
											<div className='text-sm text-gray-400 mt-1'>
												Click to expand technical details
											</div>
										</div>
									</div>

									<div className='w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center'>
										<svg
											className={`chevron-icon w-5 h-5 text-amber-400 ${openIndex === index ? 'open' : ''}`}
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
									</div>
								</button>

								<div className={`answer-content relative z-10 ${openIndex === index ? 'open' : ''}`}>
									<div className='answer-inner px-8 pb-8'>
										<div className='w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-6' />
										
										<div className='flex gap-4'>
											<div className='w-1 h-full bg-gradient-to-b from-amber-500 to-orange-600 rounded-full flex-shrink-0' />
											<p className='text-gray-300 leading-relaxed text-lg'>
												{faq.answer}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='consultation-footer text-center mt-16'>
					<div className='inline-flex items-center gap-2 text-gray-400'>
						<div className='w-12 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
						<span className='text-sm font-medium'>Need specific technical consultation?</span>
						<div className='w-12 h-px bg-gradient-to-l from-transparent to-amber-500/50' />
					</div>
				</div>
			</Container>
		</section>
	)
}
