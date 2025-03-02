'use client';
import React from 'react';
import { useUser } from '@clerk/nextjs';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import BarGraph from './barGraph';
import PieChart from './pieChart';
import EquivalenciesTable from './eqvTable';
import CarbonComparison from './CarbonComparison';
import CarbonGauge from './CarbonGauge';
import LineChart from './LineChart';
import RadarChart from './RadarChart';
import {
	FaLeaf,
	FaChartLine,
	FaChartPie,
	FaTable,
	FaChartBar,
	FaGauge,
	FaRadar,
	FaBalanceScale,
} from 'react-icons/fa';

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
			<div className='absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl'></div>

			{/* Foreground content */}
			<div className='container mx-auto px-4 py-10 md:py-16'>
				{/* Dashboard Header */}
				<div className='mb-10 text-center space-y-3'>
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
				<div className='space-y-6'>
					{/* Top Row: Gauge and Line Chart */}
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
						<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
							<h2 className='text-xl font-bold mb-4 text-white flex items-center gap-2'>
								<div className='h-8 w-8 rounded-md bg-emerald-900/50 flex items-center justify-center text-emerald-400'>
									<FaChartBar />
								</div>
								Carbon Status
							</h2>
							<CarbonGauge clerkId={user?.id} />
						</div>
						<div className='lg:col-span-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
							<h2 className='text-xl font-bold mb-4 text-white flex items-center gap-2'>
								<div className='h-8 w-8 rounded-md bg-emerald-900/50 flex items-center justify-center text-emerald-400'>
									<FaChartLine />
								</div>
								Carbon Trends
							</h2>
							<LineChart clerkId={user?.id} />
						</div>
					</div>

					{/* Middle Row: Pie Chart and Radar Chart */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
						<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
							<h2 className='text-xl font-bold mb-4 text-white flex items-center gap-2'>
								<div className='h-8 w-8 rounded-md bg-emerald-900/50 flex items-center justify-center text-emerald-400'>
									<FaChartPie />
								</div>
								Impact by Category
							</h2>
							<PieChart clerkId={user?.id} />
						</div>
						<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
							<h2 className='text-xl font-bold mb-4 text-white flex items-center gap-2'>
								<div className='h-8 w-8 rounded-md bg-emerald-900/50 flex items-center justify-center text-emerald-400'>
									<FaChartBar />
								</div>
								Category Breakdown
							</h2>
							<RadarChart clerkId={user?.id} />
						</div>
					</div>

					{/* Third Row: Bar Graph */}
					<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
						<h2 className='text-xl font-bold mb-4 text-white flex items-center gap-2'>
							<div className='h-8 w-8 rounded-md bg-emerald-900/50 flex items-center justify-center text-emerald-400'>
								<FaChartBar />
							</div>
							Monthly Carbon Footprint
						</h2>
						<BarGraph clerkId={user?.id} />
					</div>

					{/* Fourth Row: Comparison and Equivalencies */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
						<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
							<h2 className='text-xl font-bold mb-4 text-white flex items-center gap-2'>
								<div className='h-8 w-8 rounded-md bg-emerald-900/50 flex items-center justify-center text-emerald-400'>
									<FaBalanceScale />
								</div>
								National Comparison
							</h2>
							<CarbonComparison clerkId={user?.id} />
						</div>
						<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-emerald-500/30'>
							<EquivalenciesTable clerkId={user?.id} />
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className='mt-10 text-center'>
					<p className='text-gray-400 text-sm'>
						© 2025 Carbon Footprint Tracker • Helping you reduce your
						environmental impact
					</p>
				</div>
			</div>
		</div>
	);
}
