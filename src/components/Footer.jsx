'use client';
import React from 'react';
import {
	FaHome,
	FaCalculator,
	FaNewspaper,
	FaComments,
	FaLeaf,
	FaShoppingCart,
	FaChevronUp,
	FaTwitter,
	FaInstagram,
	FaLinkedin,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
	// Function to scroll to the top of the page
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth', // Smooth scroll effect
		});
	};

	return (
		<footer className='bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16'>
			<div className='container mx-auto px-4 sm:px-6 md:px-12'>
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12'>
					{/* Navigation Links */}
					<div>
						<div className='flex items-center mb-6'>
							<FaLeaf className='text-emerald-400 text-2xl mr-2' />
							<h2 className='font-bold text-2xl tracking-tight text-emerald-400'>
								Carbo
							</h2>
						</div>
						<p className='text-sm text-gray-300 mb-8 font-light'>
							Making carbon footprint tracking simple and actionable
						</p>
						<div className='space-y-4'>
							{[
								{
									icon: <FaHome className='text-emerald-400' />,
									label: 'Dashboard',
									href: '/dashboard',
								},
								{
									icon: <FaCalculator className='text-emerald-400' />,
									label: 'Carbon Calculator',
									href: '/calculator',
								},
								{
									icon: <FaNewspaper className='text-emerald-400' />,
									label: 'Climate News',
									href: '/news',
								},
								{
									icon: <FaComments className='text-emerald-400' />,
									label: 'EcoChat Assistant',
									href: '/chatbot',
								},
								{
									icon: <FaLeaf className='text-emerald-400' />,
									label: 'Eco Learning Center',
									href: '/ecocenter',
								},
								{
									icon: <FaShoppingCart className='text-emerald-400' />,
									label: 'Sustainable Shop',
									href: '/shop',
								},
							].map(({ icon, label, href }, index) => (
								<div key={index} className='flex items-center gap-3 group'>
									<div className='text-emerald-400'>{icon}</div>
									<Link
										href={href}
										className='text-sm text-gray-300 hover:text-emerald-400 transition-colors duration-300 group-hover:translate-x-1 inline-block transform transition-transform'
									>
										{label}
									</Link>
								</div>
							))}
						</div>
					</div>

					{/* Our Mission */}
					<div>
						<h3 className='text-emerald-400 font-semibold text-lg mb-6 tracking-wide'>
							OUR MISSION
						</h3>
						<div className='relative mb-8'>
							<div className='absolute left-0 top-0 w-16 h-1 bg-emerald-400'></div>
						</div>
						<p className='text-emerald-500 font-medium text-sm tracking-widest mb-4'>
							REDUCE · TRACK · IMPROVE
						</p>
						<p className='text-gray-300 leading-relaxed mb-8 text-sm font-light'>
							Carbo is dedicated to empowering individuals and organizations to
							measure, understand, and reduce their carbon footprint through
							accessible tools and actionable insights.
						</p>
						<h3 className='text-emerald-400 font-semibold text-lg mb-6 tracking-wide'>
							OUR VISION
						</h3>
						<p className='text-gray-300 leading-relaxed text-sm font-light'>
							A world where every person understands their environmental impact
							and has the tools to make meaningful changes toward a sustainable
							future.
						</p>
					</div>

					{/* Contact & Connect */}
					<div className='flex flex-col items-center md:items-start text-center md:text-left'>
						<div className='mb-6'>
							<div className='mb-4 w-24 h-24 flex items-center justify-center bg-emerald-900/50 rounded-full border-2 border-emerald-400/30 backdrop-blur-sm'>
								<FaLeaf className='text-emerald-400 text-4xl' />
							</div>
							<h3 className='text-emerald-400 font-semibold text-lg mb-4 tracking-wide'>
								CONNECT WITH US
							</h3>
							<p className='text-gray-300 leading-relaxed max-w-md mb-8 text-sm font-light'>
								Join our community of eco-conscious individuals working together
								to combat climate change. Share your journey, learn from others,
								and be part of the solution.
							</p>

							{/* Social Media Icons */}
							<div className='flex space-x-4 mb-8 justify-center md:justify-start'>
								<a
									href='#'
									className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300'
								>
									<FaTwitter className='text-white' />
								</a>
								<a
									href='#'
									className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300'
								>
									<FaInstagram className='text-white' />
								</a>
								<a
									href='#'
									className='w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-emerald-600 transition-colors duration-300'
								>
									<FaLinkedin className='text-white' />
								</a>
							</div>

							<button
								onClick={scrollToTop}
								className='flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 group'
							>
								<FaChevronUp className='group-hover:-translate-y-1 transition-transform duration-300' />
								Back to Top
							</button>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className='mt-16 border-t border-slate-700/50 pt-8 text-center text-gray-400 text-sm font-light flex flex-col md:flex-row justify-between items-center'>
					<p>© Carbo 2025. All rights reserved.</p>
					<div className='flex space-x-6 mt-4 md:mt-0'>
						<a
							href='#'
							className='hover:text-emerald-400 transition-colors duration-300'
						>
							Privacy Policy
						</a>
						<a
							href='#'
							className='hover:text-emerald-400 transition-colors duration-300'
						>
							Terms of Service
						</a>
						<a
							href='#'
							className='hover:text-emerald-400 transition-colors duration-300'
						>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
