import type { FC } from 'react'
import { Container } from '../shared/container'

export const WhyUs: FC = () => {
	return (
		<section className='py-28 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 relative overflow-hidden'>
			<style>
				{`
					/* Оптимизированные CSS анимации */
					.whyus-section {
						animation: fadeIn 1s ease-out forwards;
					}
					
					.section-header {
						animation: slideDown 0.8s ease-out forwards;
					}
					
					.industry-badge {
						animation: scaleIn 0.6s ease-out 0.2s forwards;
						opacity: 0;
					}
					
					.badge-icon {
						animation: badgeRotateScale 4s ease-in-out infinite;
					}
					
					.main-heading {
						animation: slideUp 0.8s ease-out 0.4s forwards;
						opacity: 0;
					}
					
					.subtitle-text {
						animation: slideUp 0.8s ease-out 0.6s forwards;
						opacity: 0;
					}
					
					.rotating-gear {
						animation: rotate 15s linear infinite;
					}
					
					.features-container {
						animation: slideInLeft 0.8s ease-out 0.8s forwards;
						opacity: 0;
					}
					
					.feature-item-1 {
						animation: flipIn 0.8s ease-out 1s forwards;
						opacity: 0;
					}
					
					.feature-item-2 {
						animation: flipIn 0.8s ease-out 1.2s forwards;
						opacity: 0;
					}
					
					.feature-item-3 {
						animation: flipIn 0.8s ease-out 1.4s forwards;
						opacity: 0;
					}
					
					.image-container {
						animation: slideInRight 0.8s ease-out 0.8s forwards;
						opacity: 0;
					}
					
					.stats-card-1 {
						animation: bounceIn 0.8s ease-out 1.3s forwards;
						opacity: 0;
					}
					
					.stats-card-2 {
						animation: bounceIn 0.8s ease-out 1.5s forwards;
						opacity: 0;
					}
					
					.bottom-decoration {
						animation: slideUp 0.8s ease-out 1.7s forwards;
						opacity: 0;
					}
					
					.feature-card {
						transition: all 0.5s ease;
					}
					
					.feature-card:hover {
						background-color: rgba(30, 41, 59, 0.5);
						border-color: rgba(251, 191, 36, 0.3);
						transform: translateY(-4px) scale(1.02);
					}
					
					.feature-card:hover .glow-effect {
						opacity: 1;
					}
					
					.feature-card:hover .feature-title {
						color: rgb(252 211 77);
					}
					
					.feature-card:hover .icon-bg {
						background: linear-gradient(135deg, rgb(245, 158, 11), rgb(234, 88, 12));
					}
					
					.feature-card:hover .icon-color {
						color: white;
					}
					
					.icon-hover {
						transition: transform 0.6s ease;
					}
					
					.feature-card:hover .icon-hover {
						transform: rotate(360deg);
					}
					
					.image-hover {
						transition: all 0.5s ease;
					}
					
					.image-hover:hover {
						transform: scale(1.05);
					}
					
					.image-hover:hover .image-glow {
						opacity: 1;
					}
					
					.stats-hover {
						transition: all 0.5s ease;
					}
					
					.stats-hover:hover {
						transform: scale(1.1);
					}
					
					.stats-hover:hover .stats-glow {
						opacity: 1;
					}
					
					.glow-effect {
						opacity: 0;
						transition: opacity 0.5s ease;
					}
					
					.image-glow {
						opacity: 0;
						transition: opacity 0.5s ease;
					}
					
					.stats-glow {
						opacity: 0;
						transition: opacity 0.5s ease;
					}
					
					.rotating-spinner {
						animation: rotate 8s linear infinite;
					}
					
					.pulse-indicator {
						animation: pulseScale 2s ease-in-out infinite;
					}
					
					.operational-status {
						animation: operationalPulse 2s ease-in-out infinite;
					}
					
					.tech-spinner-1 {
						animation: rotateScale 6s ease-in-out infinite;
					}
					
					.tech-spinner-2 {
						animation: rotateScaleReverse 6s ease-in-out infinite 3s;
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
							transform: translateY(-40px);
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
					
					@keyframes slideUp {
						from {
							opacity: 0;
							transform: translateY(30px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					
					@keyframes slideInLeft {
						from {
							opacity: 0;
							transform: translateX(-60px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					
					@keyframes slideInRight {
						from {
							opacity: 0;
							transform: translateX(60px);
						}
						to {
							opacity: 1;
							transform: translateX(0);
						}
					}
					
					@keyframes flipIn {
						from {
							opacity: 0;
							transform: rotateY(-90deg) scale(0.8);
						}
						60% {
							transform: rotateY(10deg) scale(1.05);
						}
						to {
							opacity: 1;
							transform: rotateY(0deg) scale(1);
						}
					}
					
					@keyframes bounceIn {
						from {
							opacity: 0;
							transform: scale(0.3) translateY(60px);
						}
						50% {
							opacity: 1;
							transform: scale(1.1) translateY(-10px);
						}
						70% {
							transform: scale(0.9) translateY(5px);
						}
						to {
							opacity: 1;
							transform: scale(1) translateY(0);
						}
					}
					
					@keyframes badgeRotateScale {
						0%, 100% {
							transform: rotate(0deg) scale(1);
						}
						25% {
							transform: rotate(90deg) scale(1.2);
						}
						50% {
							transform: rotate(180deg) scale(1);
						}
						75% {
							transform: rotate(270deg) scale(1.2);
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
					
					@keyframes pulseScale {
						0%, 100% {
							transform: scale(1);
						}
						50% {
							transform: scale(1.2);
						}
					}
					
					@keyframes operationalPulse {
						0%, 100% {
							transform: scale(1);
							opacity: 1;
						}
						50% {
							transform: scale(1.2);
							opacity: 0.8;
						}
					}
					
					@keyframes rotateScale {
						0%, 100% {
							transform: rotate(0deg) scale(1);
						}
						50% {
							transform: rotate(360deg) scale(1.1);
						}
					}
					
					@keyframes rotateScaleReverse {
						0%, 100% {
							transform: rotate(0deg) scale(1);
						}
						50% {
							transform: rotate(-360deg) scale(1.1);
						}
					}
				`}
			</style>

			{/* Industrial background patterns */}
			<div className='absolute inset-0'>
				<div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.02"%3E%3Cpath d="M40 40L20 20L40 0L60 20L40 40ZM40 80L20 60L40 40L60 60L40 80Z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]' />
				<div className='absolute top-20 right-20 w-96 h-96 bg-gradient-radial from-amber-500/8 to-transparent rounded-full blur-3xl' />
				<div className='absolute bottom-20 left-20 w-80 h-80 bg-gradient-radial from-orange-500/6 to-transparent rounded-full blur-3xl' />
			</div>

			{/* Animated industrial gear */}
			<div className='absolute top-16 right-16 opacity-10'>
				<div className='rotating-gear w-32 h-32 text-amber-500'>
					<svg viewBox="0 0 24 24" fill="currentColor" className='w-full h-full'>
						<path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
					</svg>
				</div>
			</div>

			<Container className='relative z-10 whyus-section'>
				{/* Section header */}
				<div className='section-header text-center mb-20'>
					{/* Industry badge */}
					<div className='industry-badge inline-flex items-center gap-4 px-8 py-4 rounded-full border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm mb-8'>
						<div className='badge-icon w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-sm' />
						<span className='text-amber-300 font-bold text-sm uppercase tracking-[0.25em]'>
							Engineering Excellence
						</span>
						<div className='w-px h-5 bg-amber-500/50' />
						<span className='text-gray-400 text-xs uppercase tracking-wider'>
							Proven Solutions
						</span>
					</div>

					{/* Main heading */}
					<h2 className='main-heading text-6xl md:text-7xl font-black mb-6 leading-none'>
						<span className='block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent'>
							Industry
						</span>
						<span className='block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2'>
							Advantage
						</span>
					</h2>

					{/* Subtitle */}
					<p className='subtitle-text text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto'>
						Why industry leaders choose our{' '}
						<span className='text-amber-400 font-semibold'>crushing & mixing solutions</span>
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					{/* Features list */}
					<div className='features-container space-y-8'>
						{/* Engineering Expertise */}
						<div className='feature-item-1 group relative'>
							<div className='glow-effect absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl blur-xl' />
							<div className='feature-card relative flex items-start space-x-6 hover:bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50'>
								<div className='icon-hover flex-shrink-0 w-16 h-16 icon-bg bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300'>
									<svg className='icon-color w-8 h-8 text-amber-500 transition-colors duration-300' fill='currentColor' viewBox='0 0 24 24'>
										<path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
									</svg>
								</div>
								<div>
									<h3 className='feature-title text-2xl font-bold mb-3 text-white transition-colors duration-300'>
										Engineering Expertise
									</h3>
									<p className='text-gray-400 leading-relaxed text-lg'>
										25+ years of specialized engineering in crushing, mixing, and screening technology with industry-leading innovation
									</p>
								</div>
							</div>
						</div>

						{/* Maximum Performance */}
						<div className='feature-item-2 group relative'>
							<div className='glow-effect absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl blur-xl' />
							<div className='feature-card relative flex items-start space-x-6 hover:bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50'>
								<div className='icon-hover flex-shrink-0 w-16 h-16 icon-bg bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300'>
									<svg className='icon-color w-8 h-8 text-amber-500 transition-colors duration-300' fill='currentColor' viewBox='0 0 24 24'>
										<path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
									</svg>
								</div>
								<div>
									<h3 className='feature-title text-2xl font-bold mb-3 text-white transition-colors duration-300'>
										Maximum Performance
									</h3>
									<p className='text-gray-400 leading-relaxed text-lg'>
										Optimized throughput up to 5000+ TPH with 99.8% uptime and energy-efficient operation across all equipment lines
									</p>
								</div>
							</div>
						</div>

						{/* Complete Solutions */}
						<div className='feature-item-3 group relative'>
							<div className='glow-effect absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl blur-xl' />
							<div className='feature-card relative flex items-start space-x-6 hover:bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50'>
								<div className='icon-hover flex-shrink-0 w-16 h-16 icon-bg bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300'>
									<svg className='icon-color w-8 h-8 text-amber-500 transition-colors duration-300' fill='currentColor' viewBox='0 0 24 24'>
										<path d="M19.5,6A1.5,1.5 0 0,1 21,7.5A1.5,1.5 0 0,1 19.5,9H18.97L17.5,15.5A1.5,1.5 0 0,1 16,17H8A1.5,1.5 0 0,1 6.5,15.5L5.03,9H4.5A1.5,1.5 0 0,1 3,7.5A1.5,1.5 0 0,1 4.5,6H19.5M9.69,10L10.19,12.5H13.81L14.31,10H9.69Z" />
									</svg>
								</div>
								<div>
									<h3 className='feature-title text-2xl font-bold mb-3 text-white transition-colors duration-300'>
										Complete Solutions
									</h3>
									<p className='text-gray-400 leading-relaxed text-lg'>
										End-to-end engineering from design and manufacturing to installation, commissioning, and 24/7 technical support
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Image and stats section */}
					<div className='relative'>
						<div className='image-container relative'>
							<div className='image-hover relative aspect-square rounded-3xl overflow-hidden shadow-2xl'>
								<div className='image-glow absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-xl' />
								<div className='absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20' />
								<img
									src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'
									alt='Industrial crushing and mixing equipment'
									className='w-full h-full object-cover'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent' />
								
								{/* Overlay technical specs */}
								<div className='absolute bottom-6 left-6 text-white'>
									<div className='text-sm font-medium text-amber-300 mb-1'>OPERATIONAL STATUS</div>
									<div className='flex items-center gap-2'>
										<div className='operational-status w-3 h-3 rounded-full bg-green-500' />
										<span className='text-sm font-bold'>ACTIVE PRODUCTION</span>
									</div>
								</div>
							</div>
						</div>

						{/* Statistics cards */}
						<div className='stats-card-1 stats-hover absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-2xl shadow-2xl'>
							<div className='stats-glow absolute inset-0 bg-gradient-to-r from-amber-500/50 to-orange-500/50 rounded-2xl blur-xl' />
							<div className='rotating-spinner absolute top-4 right-4 w-6 h-6 border-2 border-white/30 border-t-white rounded-full' />
							<div className='text-4xl font-black mb-2'>5000+</div>
							<div className='text-sm font-bold uppercase tracking-wider'>TPH Capacity</div>
						</div>

						<div className='stats-card-2 stats-hover absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/30 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-sm'>
							<div className='stats-glow absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl blur-xl' />
							<div className='text-3xl font-black mb-1 text-amber-400'>99.8%</div>
							<div className='text-xs font-bold uppercase tracking-wider text-gray-400'>Uptime Rate</div>
						</div>
					</div>
				</div>

				{/* Bottom decoration */}
				<div className='bottom-decoration text-center mt-20'>
					<div className='flex items-center justify-center gap-6'>
						<div className='w-24 h-px bg-gradient-to-r from-transparent to-amber-500/50' />
						<div className='tech-spinner-1 w-8 h-8 border-2 border-amber-500/30 border-t-amber-500 rounded-full' />
						<span className='text-sm font-medium text-gray-500 uppercase tracking-wider'>
							Engineered for Excellence
						</span>
						<div className='tech-spinner-2 w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full' />
						<div className='w-24 h-px bg-gradient-to-l from-transparent to-orange-500/50' />
					</div>
				</div>
			</Container>
		</section>
	)
}
