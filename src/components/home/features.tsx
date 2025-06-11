import type { FC } from 'react'
import { Container } from '../shared/container'

export const Features: FC = () => {
	const features = [
		{
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path d="M19.5,6A1.5,1.5 0 0,1 21,7.5A1.5,1.5 0 0,1 19.5,9H18.97L17.5,15.5A1.5,1.5 0 0,1 16,17H8A1.5,1.5 0 0,1 6.5,15.5L5.03,9H4.5A1.5,1.5 0 0,1 3,7.5A1.5,1.5 0 0,1 4.5,6H19.5M9.69,10L10.19,12.5H13.81L14.31,10H9.69Z" />
				</svg>
			),
			number: "5000+",
			unit: "TPH",
			title: "Processing Capacity",
			description: "Maximum throughput achieved with our advanced crushing and screening systems"
		},
		{
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
				</svg>
			),
			number: "25+",
			unit: "Years",
			title: "Engineering Excellence",
			description: "Decades of expertise in designing and optimizing mixing and crushing solutions"
		},
		{
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,15.2L16.2,16.2Z" />
				</svg>
			),
			number: "99.8%",
			unit: "Uptime",
			title: "Operational Reliability",
			description: "Industry-leading equipment availability with comprehensive maintenance support"
		}
	]

	return (
		<section className='py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden'>
			<style>
				{`
					/* Оптимизированные CSS анимации */
					.features-section {
						animation: fadeIn 1s ease-out forwards;
					}
					
					.section-header {
						animation: slideDown 0.8s ease-out forwards;
					}
					
					.performance-badge {
						animation: scaleIn 0.8s ease-out 0.2s forwards;
						opacity: 0;
					}
					
					.badge-icon {
						animation: rotate 4s ease-in-out infinite;
					}
					
					.feature-card-1 {
						animation: bounceInUp 0.8s ease-out 0.4s forwards;
						opacity: 0;
					}
					
					.feature-card-2 {
						animation: bounceInUp 0.8s ease-out 0.6s forwards;
						opacity: 0;
					}
					
					.feature-card-3 {
						animation: bounceInUp 0.8s ease-out 0.8s forwards;
						opacity: 0;
					}
					
					.icon-container-1 {
						animation: iconSpin 0.8s ease-out 0.7s forwards;
						opacity: 0;
						transform: scale(0.5) rotate(-180deg);
					}
					
					.icon-container-2 {
						animation: iconSpin 0.8s ease-out 0.9s forwards;
						opacity: 0;
						transform: scale(0.5) rotate(-180deg);
					}
					
					.icon-container-3 {
						animation: iconSpin 0.8s ease-out 1.1s forwards;
						opacity: 0;
						transform: scale(0.5) rotate(-180deg);
					}
					
					.number-display-1 {
						animation: numberPop 0.8s ease-out 0.9s forwards;
						opacity: 0;
						transform: scale(0.5);
					}
					
					.number-display-2 {
						animation: numberPop 0.8s ease-out 1.1s forwards;
						opacity: 0;
						transform: scale(0.5);
					}
					
					.number-display-3 {
						animation: numberPop 0.8s ease-out 1.3s forwards;
						opacity: 0;
						transform: scale(0.5);
					}
					
					.feature-content-1 {
						animation: fadeInUp 0.8s ease-out 1.1s forwards;
						opacity: 0;
					}
					
					.feature-content-2 {
						animation: fadeInUp 0.8s ease-out 1.3s forwards;
						opacity: 0;
					}
					
					.feature-content-3 {
						animation: fadeInUp 0.8s ease-out 1.5s forwards;
						opacity: 0;
					}
					
					.bottom-decoration {
						animation: fadeInUp 0.8s ease-out 1.2s forwards;
						opacity: 0;
					}
					
					.rotating-gear {
						animation: rotateGear 15s linear infinite;
					}
					
					.feature-card {
						transition: all 0.5s ease;
					}
					
					.feature-card:hover {
						transform: translateY(-8px) scale(1.02);
						border-color: rgba(251, 191, 36, 0.3);
					}
					
					.feature-card:hover .glow-effect {
						opacity: 1;
					}
					
					.feature-card:hover .corner-accent {
						opacity: 1;
					}
					
					.feature-card:hover .feature-title {
						color: rgb(252 211 77);
					}
					
					.feature-card:hover .icon-bg {
						box-shadow: 0 25px 50px -12px rgba(251, 191, 36, 0.4);
					}
					
					.icon-hover {
						transition: transform 0.6s ease;
					}
					
					.feature-card:hover .icon-hover {
						transform: rotate(360deg);
					}
					
					.glow-effect {
						opacity: 0;
						transition: opacity 0.5s ease;
					}
					
					.corner-accent {
						opacity: 0;
						transition: opacity 0.3s ease;
					}
					
					.pulse-dot-1 {
						animation: pulse 2s ease-in-out infinite;
					}
					
					.pulse-dot-2 {
						animation: pulse 2s ease-in-out infinite 1s;
					}

					@keyframes fadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}
					
					@keyframes slideDown {
						from {
							opacity: 0;
							transform: translateY(-30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes scaleIn {
						from {
							opacity: 0;
							transform: scale(0.8);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}
					
					@keyframes bounceInUp {
						from {
							opacity: 0;
							transform: translateY(60px) scale(0.9);
						}
						60% {
							opacity: 1;
							transform: translateY(-10px) scale(1.05);
						}
						to {
							opacity: 1;
							transform: translateY(0) scale(1);
						}
					}
					
					@keyframes iconSpin {
						from {
							opacity: 0;
							transform: scale(0.5) rotate(-180deg);
						}
						to {
							opacity: 1;
							transform: scale(1) rotate(0deg);
						}
					}
					
					@keyframes numberPop {
						from {
							opacity: 0;
							transform: scale(0.5);
						}
						70% {
							transform: scale(1.1);
						}
						to {
							opacity: 1;
							transform: scale(1);
						}
					}
					
					@keyframes fadeInUp {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes rotateGear {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}
					
					@keyframes rotate {
						from {
							transform: rotate(0deg);
						}
						to {
							transform: rotate(360deg);
						}
					}
					
					@keyframes pulse {
						0%, 100% {
							opacity: 0.5;
							transform: scale(1);
						}
						50% {
							opacity: 1;
							transform: scale(1.2);
						}
					}
				`}
			</style>

			{/* Industrial background elements */}
			<div className='absolute inset-0'>
				<div className='absolute top-0 left-0 w-full h-full opacity-2'>
					<div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)]' 
						 style={{ backgroundSize: '80px 80px' }} />
				</div>
				<div className='absolute top-20 right-20 w-64 h-64 bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-3xl' />
				<div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-orange-500/8 to-transparent rounded-full blur-3xl' />
			</div>

			{/* Animated gears */}
			<div className='absolute top-16 left-16 opacity-10'>
				<div className='rotating-gear w-24 h-24 text-amber-500'>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</svg>
				</div>
			</div>

			<Container className='relative z-10 features-section'>
				{/* Section header */}
				<div className='section-header text-center mb-20'>
					<div className='performance-badge inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-6'>
						<div className='badge-icon w-2 h-2 rounded-full bg-amber-400' />
						<span className='text-amber-300 font-bold text-sm uppercase tracking-wider'>
							Performance Metrics
						</span>
					</div>
					
					<h2 className='text-5xl md:text-6xl font-black mb-4'>
						<span className='bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
							Proven
						</span>{' '}
						<span className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
							Results
						</span>
					</h2>
					
					<p className='text-xl text-gray-400 max-w-2xl mx-auto'>
						Industry-leading performance in crushing, mixing, and screening technology
					</p>
				</div>

				{/* Features grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
					{features.map((feature, index) => (
						<div key={index} className={`feature-card-${index + 1} group relative`}>
							{/* Card background with gradient border */}
							<div className='glow-effect absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl' />
							
							<div className='feature-card relative backdrop-blur-sm bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 rounded-3xl p-8 shadow-2xl'>
								{/* Icon container */}
								<div className={`icon-container-${index + 1} w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/25 icon-bg`}>
									<div className='icon-hover text-white'>
										{feature.icon}
									</div>
								</div>

								{/* Number display */}
								<div className={`number-display-${index + 1} text-center mb-6`}>
									<div className='text-5xl md:text-6xl font-black mb-2'>
										<span className='bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent'>
											{feature.number}
										</span>
									</div>
									<div className='text-sm font-bold text-amber-300 uppercase tracking-widest'>
										{feature.unit}
									</div>
								</div>

								{/* Content */}
								<div className={`feature-content-${index + 1} text-center`}>
									<h3 className='feature-title text-xl font-bold mb-4 text-white transition-colors duration-300'>
										{feature.title}
									</h3>
									<p className='text-gray-400 leading-relaxed'>
										{feature.description}
									</p>
								</div>

								{/* Corner decorations */}
								<div className='corner-accent absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-500/50 rounded-tr-xl' />
								<div className='corner-accent absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-orange-500/50 rounded-bl-xl' />
							</div>
						</div>
					))}
				</div>

				{/* Bottom decoration */}
				<div className='bottom-decoration text-center mt-16'>
					<div className='flex items-center justify-center gap-4'>
						<div className='w-20 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
						<div className='pulse-dot-1 w-3 h-3 rounded-full bg-amber-500' />
						<span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
							Industrial Excellence Since 1998
						</span>
						<div className='pulse-dot-2 w-3 h-3 rounded-full bg-orange-500' />
						<div className='w-20 h-px bg-gradient-to-l from-transparent to-orange-500/50' />
					</div>
				</div>
			</Container>
		</section>
	)
}
