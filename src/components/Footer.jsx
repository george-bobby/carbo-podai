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
		<footer className='bg-[#D7ECD9] py-10'>
			<div className='container mx-auto px-4 sm:px-6 md:px-12 text-gray-300'>
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Navigation Links */}
					<div>
						<h2 className='text-[#376d08] font-bold text-lg'>Carbo</h2>
						<p className='text-sm text-[#376d08]'>Carbon Footprint Tracker</p>
						<div className='mt-4 space-y-4'>
							<div className='flex items-center text-[#376d08] gap-4'>
								<FaHome className='text-l flex-shrink-0' />
								<Link
									href='/dashboard'
									className='text-sm text-[#376d08] hover:text-[#4b9a0b] transition sm:text-base'
								>
									Dashboard
								</Link>
							</div>
							<div className='flex items-center text-[#376d08] gap-4'>
								<FaCalculator className='text-l flex-shrink-0' />
								<Link
									href='/calculator'
									className='text-sm text-[#376d08] hover:text-[#4b9a0b] transition sm:text-base'
								>
									Carbon Calculator
								</Link>
							</div>
							<div className='flex items-center text-[#376d08] gap-4'>
								<FaNewspaper className='text-l flex-shrink-0' />
								<Link
									href='/news'
									className='text-sm text-[#376d08] hover:text-[#4b9a0b] transition sm:text-base'
								>
									Climate News
								</Link>
							</div>
							<div className='flex items-center text-[#376d08] gap-4'>
								<FaComments className='text-l flex-shrink-0' />
								<Link
									href='/chatbot'
									className='text-sm text-[#376d08] hover:text-[#4b9a0b] transition sm:text-base'
								>
									EcoChat Assistant
								</Link>
							</div>
							<div className='flex items-center text-[#376d08] gap-4'>
								<FaLeaf className='text-l flex-shrink-0' />
								<Link
									href='/ecocenter'
									className='text-sm text-[#376d08] hover:text-[#4b9a0b] transition sm:text-base'
								>
									Eco Learning Center
								</Link>
							</div>
							<div className='flex items-center text-[#376d08] gap-4'>
								<FaShoppingCart className='text-l flex-shrink-0' />
								<Link
									href='/shop'
									className='text-sm text-[#376d08] hover:text-[#4b9a0b] transition sm:text-base'
								>
									Sustainable Shop
								</Link>
							</div>
						</div>
					</div>

					{/* Our Mission */}
					<div>
						<h3 className='text-[#376d08] font-serif text-base sm:text-lg font-semibold mb-4'>
							Our Mission
						</h3>
						<p className='font-serif text-sm sm:text-base leading-relaxed text-[#376d08]'>
							REDUCE, TRACK, IMPROVE
						</p>
						<p className='font-serif text-sm sm:text-base leading-relaxed text-[#376d08] mt-4'>
							Carbo is dedicated to empowering individuals and organizations to
							measure, understand, and reduce their carbon footprint through
							accessible tools and actionable insights.
						</p>
						<h3 className='text-[#376d08] font-serif text-base sm:text-lg font-semibold mt-6 mb-4'>
							Our Vision
						</h3>
						<p className='font-serif text-sm sm:text-base leading-relaxed text-[#376d08]'>
							A world where every person understands their environmental impact
							and has the tools to make meaningful changes toward a sustainable
							future.
						</p>
					</div>

					{/* Contact & Connect */}
					<div className='flex flex-col items-center md:items-start text-center md:text-left'>
						<div className='mb-2 w-48 h-48 flex items-center justify-center'>
							<FaLeaf className='text-[#376d08] text-6xl' />
						</div>
						<h3 className='text-[#376d08] font-serif text-base sm:text-lg font-semibold mb-3'>
							Connect With Us
						</h3>
						<p className='font-serif text-sm sm:text-base leading-relaxed text-[#376d08] max-w-md'>
							Join our community of eco-conscious individuals working together
							to combat climate change. Share your journey, learn from others,
							and be part of the solution to create a more sustainable planet.
						</p>
						<div className='mt-4'>
							<button
								onClick={scrollToTop}
								className='flex items-center gap-2 bg-[#376d08] text-white px-4 py-2 rounded-md hover:bg-[#4b9a0b] transition'
							>
								<FaChevronUp />
								Back to Top
							</button>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className='mt-10 border-t border-gray-500 pt-6 text-center text-[#376d08] text-sm'>
					<p>Copyright © Carbo 2025. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
