import React from 'react'
import {Carousel} from '3d-react-carousal'
import img1 from '../images/pp.jpeg'

const Contents2 = () => {
	let slides = [
		<img src={img1} alt="1" />,
		<img src={img1} alt="2" />,
		<img src={img1} alt="3" />,

	];
    return (
        <div className="w-screen mt-4 flex flex-col justify-center items-center mt-10">
            <div className="h-1/4 w-screen lg:w-3/4 flex justify-center mb-10 mx-4 py-2 lg:py-0">
                <div className="w-1/3 h-full lg:flex lg:mr-5">
					<div className="w-1/3 h-10 lg:h-40 lg:w-40 mx-auto mb-3 lg:mx-0 lg:mb-0 flex justify-center items-center">
                    	<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  lg:h-20 lg:w-20 text-gray-300 m-0 lg:mr-4 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    	</svg>
					</div>
                    <div className="flex flex-col lg:mt-12">
                        <h1 className="text-sm lg:text-2xl mx-auto mb-2 lg:mx-0 lg:mb-5 font-mono font-bold text-gray-600">CAR SUPPORT</h1>
                        <h1 className="text-xs lg:text-base text-gray-600 mx-auto lg:mx-0">24/7 enterprise-level support, talk to agent, solve whatever problems you have, reclame a client or ownership and give feedbacks.</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto lg:mx-0 text-gray-300 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
						</svg>
                    </div>
                </div>
                <div className="w-1/3 h-full lg:flex lg:mr-5">
					<div className="w-1/3 h-10 lg:h-40 lg:w-40 mx-auto mb-3 lg:mx-0 lg:mb-0 flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 lg:h-20 lg:w-20 text-gray-300 m-0 lg:mr-4 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</div>
                    <div className="flex flex-col lg:mt-12">
                        <h1 className="text-sm lg:text-2xl mx-auto mb-2 lg:mx-0 lg:mb-5 font-mono font-bold text-gray-600">LOCALISATION</h1>
                        <h1 className="text-xs lg:text-base text-gray-600">multiple localisation of cars rent agence in any city in morocco, get your car in any city, choose your car and go to nearby agence.</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto lg:mx-0 text-gray-300 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
						</svg>
                    </div>
                </div>
                <div className="w-1/3 h-full lg:flex">
					<div className="w-1/3 h-10 lg:h-40 lg:w-40 mx-auto mb-3 lg:mx-0 lg:mb-0 flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 lg:h-20 lg:w-20 text-gray-300 m-0 lg:mr-4 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</div>
                    <div className="flex flex-col lg:mt-12">
                        <h1 className="text-sm lg:text-2xl mx-auto mb-2 lg:mx-0 lg:mb-5 font-mono font-bold text-gray-600">RESERVATION</h1>
                        <h1 className="text-xs lg:text-base text-gray-600">24/7 enterprise-level support, talk to agent, solve whatever problems you have, reclame a client or ownership and give feedbacks.</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto lg:mx-0 text-gray-300 cursor-pointer hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
						</svg>
                    </div>
                </div>
            </div>
			<div className="h-1/6 w-full lg:w-3/4 flex justify-center items-center mb-6 mt-10 lg:mt-2 mx-2 lg:mx-0">
				<hr className="text-gray-300  h-0.5 w-2/5 rounded"></hr>
				<div className="flex flex-col justify-center items-center text-gray-300">
                	<h1 className="text-sm lg:text-5xl italic font-bold font-mono">locate</h1>
                	<h1 className="text-sm  lg:text-5xl italic font-bold font-mono">Me</h1>
            	</div>
				<hr className="text-gray-300 h-0.5 w-2/5 rounded"></hr>
			</div>
			<div className="w-11/12 flex flex-col items-center">
				<h1 className="text-base lg:text-4xl font-bold font-serif mt-4 mb-4">First Class Car Rental </h1>
				<h1 className="text-gray-500 font-serif text-xs lg:text-lg mb-4 lg:mb-20">We offer professional car rental & limousine services in our range of high-end vehicles</h1>
				<div className="w-full">
					<Carousel slides={slides}/>
				</div>
			</div>
        </div>
    )
}

export default Contents2
