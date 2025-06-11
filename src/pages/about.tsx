import {
	AboutHero,
	BlogAuthors,
	ContactUs,
	OurMission,
	Stats,
} from '@/components/about'
import { staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'

export function AboutPage() {
	return (
		<motion.div initial='hidden' animate='visible' variants={staggerContainer}>
			<AboutHero />
			<OurMission />
			<BlogAuthors />
			<Stats />
			<ContactUs />
		</motion.div>
	)
}
