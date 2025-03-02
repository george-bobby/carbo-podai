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
		<footer className='bg-[#E8F5E9] py-12'>
			<div className='container mx-auto px-4 sm:px-6 md:px-12 text-gray-700'>
				<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8'>
					{/* Navigation Links */}
					<div>
						<h2 className='text-[#2E7D32] font-bold text-xl mb-4'>Carbo</h2>
						<p className='text-sm text-[#388E3C] mb-6'>
							Carbon Footprint Tracker
						</p>
						<div className='space-y-3'>
							{[
								{ icon: <FaHome />, label: 'Dashboard', href: '/dashboard' },
								{
									icon: <FaCalculator />,
									label: 'Carbon Calculator',
									href: '/calculator',
								},
								{ icon: <FaNewspaper />, label: 'Climate News', href: '/news' },
								{
									icon: <FaComments />,
									label: 'EcoChat Assistant',
									href: '/chatbot',
								},
								{
									icon: <FaLeaf />,
									label: 'Eco Learning Center',
									href: '/ecocenter',
								},
								{
									icon: <FaShoppingCart />,
									label: 'Sustainable Shop',
									href: '/shop',
								},
							].map(({ icon, label, href }, index) => (
								<div
									key={index}
									className='flex items-center gap-3 text-[#388E3C]'
								>
									{icon}
									<Link
										href={href}
										className='text-sm hover:text-[#1B5E20] transition duration-300'
									>
										{label}
									</Link>
								</div>
							))}
						</div>
					</div>

					{/* Our Mission */}
					<div>
						<h3 className='text-[#2E7D32] font-semibold text-lg mb-4'>
							Our Mission
						</h3>
						<p className='text-sm text-[#388E3C] leading-relaxed mb-4'>
							REDUCE, TRACK, IMPROVE
						</p>
						<p className='text-sm text-[#388E3C] leading-relaxed mb-6'>
							Carbo is dedicated to empowering individuals and organizations to
							measure, understand, and reduce their carbon footprint through
							accessible tools and actionable insights.
						</p>
						<h3 className='text-[#2E7D32] font-semibold text-lg mb-4'>
							Our Vision
						</h3>
						<p className='text-sm text-[#388E3C] leading-relaxed'>
							A world where every person understands their environmental impact
							and has the tools to make meaningful changes toward a sustainable
							future.
						</p>
					</div>

					{/* Contact & Connect */}
					<div className='flex flex-col items-center md:items-start text-center md:text-left'>
						<div className='mb-4 w-32 h-32 flex items-center justify-center bg-[#C8E6C9] rounded-full'>
							<FaLeaf className='text-[#2E7D32] text-5xl' />
						</div>
						<h3 className='text-[#2E7D32] font-semibold text-lg mb-3'>
							Connect With Us
						</h3>
						<p className='text-sm text-[#388E3C] leading-relaxed max-w-md mb-6'>
							Join our community of eco-conscious individuals working together
							to combat climate change. Share your journey, learn from others,
							and be part of the solution to create a more sustainable planet.
						</p>
						<button
							onClick={scrollToTop}
							className='flex items-center gap-2 bg-[#2E7D32] text-white px-4 py-2 rounded-md hover:bg-[#1B5E20] transition duration-300'
						>
							<FaChevronUp />
							Back to Top
						</button>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className='mt-12 border-t border-[#C8E6C9] pt-6 text-center text-[#388E3C] text-sm'>
					<p>Copyright © Carbo 2025. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
