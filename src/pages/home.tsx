import {
	FAQ,
	FeaturedArticles,
	Features,
	Hero,
	LatestArticles,
	Testimonials,
	WhyUs,
} from '@/components/home'
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'

export function HomePage() {
	return (
		<motion.div initial='hidden' animate='visible' variants={staggerContainer}>
			<motion.div variants={fadeIn}>
				<Hero />
			</motion.div>

			<motion.div variants={fadeInUp}>
				<Features />
			</motion.div>

			<motion.div variants={fadeInUp}>
				<WhyUs />
			</motion.div>

			<motion.div variants={fadeInUp}>
				<Testimonials />
			</motion.div>

			<motion.div variants={fadeInUp}>
				<FeaturedArticles />
			</motion.div>

			<motion.div variants={fadeInUp}>
				<LatestArticles />
			</motion.div>

			<motion.div variants={fadeInUp}>
				<FAQ />
			</motion.div>
		</motion.div>
	)
}
