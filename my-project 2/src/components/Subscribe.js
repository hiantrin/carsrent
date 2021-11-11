import React from 'react'
import {useState, useEffect} from 'react'

const Subscribe = () => {
	const [animate, changeanimate] = useState(0)
    return (
        <div className="mt-60">
			<div className="items-center h-28 w-screen relative top-96 justify-between hidden xl:flex">
				<div className="flex w-1/2">
					<div className="h-28 w-full bg-red-600 flex justify-end items-center">
						<h1 className="text-white font-bold font-serif text-4xl mr-36">Our services</h1>
					</div>
					<span className="triangle-f"></span>
				</div>
				<div className="flex w-1/2">
					<span className="triangle-fo"></span>
					<div className="h-14 w-full bg-black flex  items-center">
						<h1 className="text-white font-bold font-serif text-lg ml-20">We provide best services</h1>
					</div>
				</div>
			</div>
        	<div className="mt-0 h-80 w-screen bg-gray-200 xl:flex justify-center items-center">
           		<div className="flex flex-col xl:mr-40">
                	<h1 className="ml-2 mb-4 xl:mb-0 xl:ml-0 text-gray-700 font-bold font-serif text-3xl mt-10 xl:mt-0">Subscribe</h1>
                	<h1 className="ml-2 mb-6 xl:mb-0 xl:ml-0 text-base text-gray-500">You Can Follow Us By E Mail</h1>
            	</div>
            	<div className="h-14 subscribe-w bg-white flex items-center ml-2 xl:ml-0">
                	<svg xmlns="http://www.w3.org/2000/svg" className=" h-6 w-6 text-gray-300 ml-1 xl:ml-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                	</svg>
                	<input type="text" className="w-44 xl:w-96 xl:mr-9 focus:outline-none px-4 py-1" placeholder="Your email address"></input>
					<div className="h-12 w-32 xl:w-40 bg-red-500 rounded flex justify-center items-center cursor-pointer">
                	   	<h1 className="text-white font-serif text-sm">SUBSCRIBE</h1>
                	</div>
                </div>
            </div>
			<div className="lg:h-96 w-screen bg-gray-500 pb-20 lg:pb-0 lg:flex justify-center items-center pt-10">
				<div className="w-full flex flex-col justify-center items-center lg:hidden">
					<h1 className="text-2xl font-bold font-serif text-white">Our Services</h1>
					<h1 className="text-lg mt-2 text-white">We provide best services</h1>
				</div>
				<div className="flex lg:justify-center lg:items-center ml-2 lg:ml-14 mt-10">
					<div className="w-24 h-24 lg:w-28 lg:h-28  flex justify-center items-center bg-white rounded-xl hover:bg-red-500 cursor-pointer"
					onMouseEnter={() => changeanimate(1)} onMouseLeave={() => changeanimate(0)}>
						<svg xmlns="http://www.w3.org/2000/svg" className={(animate === 1) ? 'text-white h-8 w-8 animate-bounce mt-2' : 'text-black h-8 w-8'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<div className="flex flex-col">
						<h1 className="text-white text-xl lg:text-2xl ml-6 lg:ml-4 font-bold lg:mt-3">Offer location</h1>
						<div className="ml-6 lg:ml-4 w-48 lg:w-60 mt-3">
							<h1 className="font-serif text-base text-gray-300">we provide our dear client by a map which they can find closest any agence location nearby to their places.</h1>
						</div>
					</div>
				</div>
				<div className=" flex lg:justify-center lg:items-center ml-2 lg:ml-14 mt-10">
					<div className="w-24 h-24 lg:w-28 lg:h-28 flex justify-center items-center bg-white rounded-xl hover:bg-red-500 cursor-pointer"
					onMouseEnter={() => changeanimate(2)} onMouseLeave={() => changeanimate(0)}>
						<svg xmlns="http://www.w3.org/2000/svg" className={(animate === 2) ? 'text-white h-8 w-8 animate-bounce mt-2' : 'text-black h-8 w-8'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
					<div className="flex flex-col">
						<h1 className="text-white text-xl lg:text-2xl ml-6 lg:ml-4 font-bold lg:mt-3">Customer service</h1>
						<div className="ml-6 lg:ml-4 w-48 lg:w-60 mt-3">
							<h1 className="font-serif text-base text-gray-300">we provide our dear client by a 24/7 client support which can they ask for help or about a problems.</h1>
						</div>
					</div>
				</div>
			</div>

        </div>
    )
}

export default Subscribe
