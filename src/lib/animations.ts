import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			damping: 12,
			stiffness: 100,
		},
	},
}

export const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
}

export const scaleIn: Variants = {
	hidden: { scale: 0.8, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			type: 'spring',
			damping: 15,
			stiffness: 200,
		},
	},
}

export const slideInLeft: Variants = {
	hidden: { x: -100, opacity: 0, rotate: -5 },
	visible: {
		x: 0,
		opacity: 1,
		rotate: 0,
		transition: {
			type: 'spring',
			damping: 20,
			stiffness: 100,
		},
	},
}

export const slideInRight: Variants = {
	hidden: { x: 100, opacity: 0, rotate: 5 },
	visible: {
		x: 0,
		opacity: 1,
		rotate: 0,
		transition: {
			type: 'spring',
			damping: 20,
			stiffness: 100,
		},
	},
}

export const fadeIn: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
}

export const bounceIn: Variants = {
	hidden: { scale: 0.3, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			type: 'spring',
			damping: 10,
			stiffness: 100,
			mass: 1,
		},
	},
}

export const rotateIn: Variants = {
	hidden: { rotate: -180, opacity: 0, scale: 0.5 },
	visible: {
		rotate: 0,
		opacity: 1,
		scale: 1,
		transition: {
			type: 'spring',
			damping: 15,
			stiffness: 100,
		},
	},
}

export const floatIn: Variants = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			damping: 12,
			stiffness: 100,
		},
	},
}

export const zoomIn: Variants = {
	hidden: { scale: 0.5, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			type: 'spring',
			damping: 15,
			stiffness: 200,
		},
	},
}

export const flipIn: Variants = {
	hidden: {
		rotateX: 90,
		opacity: 0,
		transformOrigin: 'top',
	},
	visible: {
		rotateX: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			damping: 20,
			stiffness: 100,
		},
	},
}

// Hover animations
export const hoverScale: Variants = {
	hover: {
		scale: 1.05,
		transition: {
			type: 'spring',
			stiffness: 400,
			damping: 10,
		},
	},
}

export const hoverRotate: Variants = {
	hover: {
		rotate: 360,
		transition: {
			duration: 0.6,
			ease: 'easeInOut',
		},
	},
}

export const hoverBounce: Variants = {
	hover: {
		y: -5,
		transition: {
			type: 'spring',
			stiffness: 400,
			damping: 10,
		},
	},
}

export const hoverGlow: Variants = {
	hover: {
		boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)',
		transition: {
			duration: 0.3,
		},
	},
}

export const hoverShake: Variants = {
	hover: {
		rotate: [0, -5, 5, -5, 5, 0],
		transition: {
			duration: 0.5,
		},
	},
}

export const hoverPulse: Variants = {
	hover: {
		scale: [1, 1.05, 1],
		transition: {
			duration: 0.5,
			repeat: Infinity,
		},
	},
}
