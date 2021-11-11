import React from 'react'
import {useState, useEffect} from 'react'

const Chooseus = () => {
	const [co, changeco] = useState(0)

	
	const changec = (id) => {
		changeco(id)
	}
    return (
		<div className="flex flex-col justify-center items-center">
        	<div className="w-screen h-60 flex justify-center items-center">
				<div className="hidden xl:flex  mr-40">
					<span className="triangle-l"></span>
					<div className="h-4 w-96 bg-gray-200"></div>
					<span className="triangle-r"></span>
					<span className="triangle-b"></span>
					<span className="triangle-r"></span>
					<span className="triangle-b"></span>
					<span className="triangle-r"></span>
					<span className="triangle-b"></span>
					<span className="triangle-r"></span>
				</div>
				<h1 className="text-2xl xl:text-4xl font-bold ml-3">Why choose us</h1>
				<svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 h-6 w-6 relative bottom-6 left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
        	</div>
			<div className=" lg:grid lg:grid-cols-2 lg:gap-2 lg:border-dashed lg:border lg:border-gray-300 lg:rounded-xs lg:space-x-12 lg:pb-10 mb-32 lg:pr-12">
				<div className="lg:ml-12 w-80 lg:w-96 border-dashed border border-gray-300 rounded-lg flex mt-16  pb-12 hover:bg-gray-50"
				onMouseEnter={() => changec(1)} onMouseLeave={() => changec(0)}>
					<h1 className={(co !== 1 ) ? 'ml-8 text-lg text-gray-300 font-bold mt-8' : 'ml-8 text-lg text-red-500 font-bold mt-8'}>01</h1>
					<div className="flex flex-col mt-9 ml-4 pr-5">
						<h1 className="text-gray-700 font-bold mb-4">Financing Made Easy</h1>
						<h1 className="text-gray-500 text-sm">Our stress-free finance department that can find financial solutions to save you money.</h1>
					</div>
				</div>
				<div className="w-80 lg:w-96 border-dashed border border-gray-300 rounded-lg flex mt-16  pb-12 hover:bg-gray-50"
				onMouseEnter={() => changec(2)} onMouseLeave={() => changec(0)}>
					<h1 className={(co !== 2 ) ? 'ml-8 text-lg text-gray-300 font-bold mt-8' : 'ml-8 text-lg text-red-500 font-bold mt-8'}>02</h1>
					<div className="flex flex-col mt-9 ml-4 pr-5">
						<h1 className="text-gray-700 font-bold mb-4">Trusted By Thousands</h1>
						<h1 className="text-gray-500 text-sm">Our stress-free finance department that can find financial solutions to save you money.</h1>
					</div>
				</div>
				<div className="w-80 lg:w-96 border-dashed border border-gray-300 rounded-lg flex mt-16  pb-12 hover:bg-gray-50"
				onMouseEnter={() => changec(3)} onMouseLeave={() => changec(0)}>
					<h1 className={(co !== 3 ) ? 'ml-8 text-lg text-gray-300 font-bold mt-8' : 'ml-8 text-lg text-red-500 font-bold mt-8'}>03</h1>
					<div className="flex flex-col mt-9 ml-4 pr-5">
						<h1 className="text-gray-700 font-bold mb-4">Financing Made Easy</h1>
						<h1 className="text-gray-500 text-sm">Our stress-free finance department that can find financial solutions to save you money.</h1>
					</div>
				</div>
				<div className="w-80 lg:w-96 border-dashed border border-gray-300 rounded-lg flex mt-16  pb-12 hover:bg-gray-50"
				onMouseEnter={() => changec(4)} onMouseLeave={() => changec(0)}>
					<h1 className={(co !== 4 ) ? 'ml-8 text-lg text-gray-300 font-bold mt-8' : 'ml-8 text-lg text-red-500 font-bold mt-8'}>04</h1>
					<div className="flex flex-col mt-9 ml-4 pr-5">
						<h1 className="text-gray-700 font-bold mb-4">Trusted By Thousands</h1>
						<h1 className="text-gray-500 text-sm">Our stress-free finance department that can find financial solutions to save you money.</h1>
					</div>
				</div>
			</div>
			<div className="flex">
				<h1 className="xl:mr-20 text-gray-500 font-mono">Explore our first class limousine & car rental services</h1>
				<div className="hidden xl:flex justify-center items-center">
					<span className="triangle-b"></span>
					<span className="triangle-r"></span>
					<span className="triangle-b"></span>
					<span className="triangle-r"></span>
					<span className="triangle-b"></span>
					<span className="triangle-r"></span>
					<span className="triangle-b"></span>
					<div className="h-4 w-96 bg-gray-200"></div>
					<span className="triangle-t"></span>
				</div>
			</div>
		</div>
    )
}

export default Chooseus
