'use client'

import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

const reviews = [
	{
		name: 'Michael Schmidt',
		company: 'TechStart GmbH',
		role: 'CEO',
		rating: 5,
		text: 'Gentle Webdesign hat unsere Vision perfekt umgesetzt. Die Kommunikation war exzellent und das Ergebnis übertrifft unsere Erwartungen bei weitem.',
		project: 'E-Commerce Platform',
	},
	{
		name: 'Sarah Weber',
		company: 'Digital Solutions AG',
		role: 'Product Manager',
		rating: 5,
		text: 'Professionelle Arbeit auf höchstem Niveau. Das Team hat unser CRM-System modernisiert und die Integration mit Azure Cloud war nahtlos.',
		project: 'CRM Modernization',
	},
	{
		name: 'Thomas Müller',
		company: 'Innovation Labs',
		role: 'CTO',
		rating: 5,
		text: 'Die KI-Integration in unsere Plattform hat unseren Kundenservice revolutioniert. Hervorragende technische Expertise und kreative Lösungsansätze.',
		project: 'AI Chatbot System',
	},
	{
		name: 'Laura Fischer',
		company: 'CreativeHub',
		role: 'Marketing Director',
		rating: 5,
		text: 'Ein außergewöhnliches Team! Die neue Website ist nicht nur wunderschön, sondern auch extrem performant. Unsere Conversion Rate hat sich verdoppelt.',
		project: 'Corporate Website',
	},
]

const Reviews = () => {
	return (
		<section id="reviews" className="py-44 relative overflow-hidden bg-black">
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-black" />
				<div className="absolute top-1/4 right-0 w-96 h-96 bg-aquamarine/5 rounded-full blur-[100px]" />
				<div className="absolute bottom-1/4 left-0 w-96 h-96 bg-tropical-indigo/5 rounded-full blur-[100px]" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-24"
				>
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="inline-block px-6 py-2 bg-tropical-indigo/10 border border-tropical-indigo/30 rounded-full text-tropical-indigo font-semibold mb-6"
					>
						Kundenstimmen
					</motion.span>
					<h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
						<span className="block">Was unsere Kunden</span>
						<span className="block text-gradient">über uns sagen</span>
					</h2>
					<p className="text-xl md:text-2xl text-ghost-white/70 max-w-3xl mx-auto">
						Zufriedene Kunden sind unser bester Beweis für Qualität und Engagement
					</p>
				</motion.div>

				{/* Reviews Grid */}
				<div className="grid md:grid-cols-2 gap-12">
					{reviews.map((review, index) => (
						<motion.div
							key={review.name}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ y: -10 }}
							className="group"
						>
							<div className="relative h-full bg-gradient-to-br from-oxford-blue to-oxford-blue/50 border border-aquamarine/20 rounded-3xl p-12 hover:border-aquamarine/50 transition-all duration-500 overflow-hidden">
								{/* Hover Glow */}
								<div className="absolute inset-0 bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								<div className="relative z-10 flex flex-col h-full">
									{/* Stars */}
									<div className="flex gap-2 mb-8">
										{[...Array(review.rating)].map((_, i) => (
											<motion.div
												key={i}
												initial={{ opacity: 0, scale: 0 }}
												whileInView={{ opacity: 1, scale: 1 }}
												viewport={{ once: true }}
												transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
											>
												<HiStar className="text-aquamarine text-2xl" />
											</motion.div>
										))}
									</div>

									{/* Review Text */}
									<p className="text-ghost-white/90 text-xl leading-relaxed mb-8 flex-grow">
										"{review.text}"
									</p>

									{/* Project Tag */}
									<div className="mb-8">
										<span className="inline-block px-4 py-2 bg-tropical-indigo/20 border border-tropical-indigo/30 rounded-full text-tropical-indigo text-base font-medium">
											{review.project}
										</span>
									</div>

									{/* Author */}
									<div className="border-t border-ghost-white/10 pt-8">
										<div className="flex items-center gap-4">
											{/* Avatar */}
											<motion.div
												whileHover={{ scale: 1.1 }}
												className="w-20 h-20 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue font-bold text-2xl shadow-lg"
											>
												{review.name.charAt(0)}
											</motion.div>

											{/* Info */}
											<div>
												<h4 className="font-bold text-ghost-white text-lg group-hover:text-aquamarine transition-colors duration-300">
													{review.name}
												</h4>
												<p className="text-base text-ghost-white/60">
													{review.role}, {review.company}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
				>
					{[
						{ number: '98%', label: 'Kundenzufriedenheit' },
						{ number: '100+', label: 'Erfolgreiche Projekte' },
						{ number: '50+', label: 'Happy Clients' },
						{ number: '5★', label: 'Durchschnittliche Bewertung' },
					].map((stat, index) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
							className="text-center p-6 bg-gradient-to-br from-oxford-blue to-oxford-blue/50 border border-aquamarine/20 rounded-3xl"
						>
							<div className="text-5xl md:text-6xl font-bold text-gradient mb-2">
								{stat.number}
							</div>
							<div className="text-ghost-white/60 text-sm">
								{stat.label}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Reviews;
