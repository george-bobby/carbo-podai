'use client';
import React from 'react';
import { useUser } from '@clerk/nextjs';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import BarGraph from './barGraph';
import PieChart from './pieChart';
import EquivalenciesTable from './eqvTable';
import { FaLeaf } from 'react-icons/fa';

Chart.register(CategoryScale);

export default function UserProfile() {
	const { user } = useUser();

	const formattedDate = user?.createdAt
		? new Date(user.createdAt).toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
		  })
		: '';

	return (
		<div className='relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen'>
			{/* Background Elements */}
			<div className='absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl'></div>
			<div className='absolute top-60 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl'></div>

			{/* Foreground content */}
			<div className='container mx-auto px-4 py-16 md:py-20'>
				{/* Dashboard Header */}
				<div className='mb-12 text-center space-y-3'>
					<div className='inline-block px-4 py-1 bg-emerald-900/50 rounded-full mb-2 backdrop-blur-sm border border-emerald-500/20'>
						<p className='text-xs md:text-sm font-medium text-emerald-400 tracking-wide'>
							YOUR CARBON DASHBOARD
						</p>
					</div>
					<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
						Welcome,{' '}
						<span className='text-emerald-400'>
							{user?.firstName || 'User'}
						</span>
					</h1>
					<p className='text-gray-300 text-md max-w-2xl mx-auto leading-relaxed font-light'>
						Tracking your environmental impact since {formattedDate}
					</p>
				</div>

				{/* Dashboard Content */}
				<div className='space-y-8'>
					{/* Row 1: Pie Chart and Equivalencies Table */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
							<h2 className='text-xl font-bold mb-6 text-white flex items-center gap-2'>
								<div className='h-8 w-8 rounded-md bg-emerald-900/50 flex items-center justify-center text-emerald-400'>
									<FaLeaf />
								</div>
								Impact by Category
							</h2>
							<PieChart clerkId={user?.id} />
						</div>
						<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
							<EquivalenciesTable clerkId={user?.id} />
						</div>
					</div>

					{/* Row 2: Bar Graph */}
					<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
						<h2 className='text-xl font-bold mb-6 text-white flex items-center gap-2'>
							<div className='h-8 w-8 rounded-md bg-emerald-900/50 flex items-center justify-center text-emerald-400'>
								<FaLeaf />
							</div>
							Monthly Carbon Footprint
						</h2>
						<BarGraph clerkId={user?.id} />
					</div>
				</div>
			</div>
		</div>
	);
}
