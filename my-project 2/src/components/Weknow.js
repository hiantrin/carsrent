import React from 'react'
import {useState, useEffect} from 'react'

const Weknow = () => {
	const [ctext, changetext] = useState(false)

	const changecolor = () => {
		changetext(!ctext);
	}
    return (
        <div className="xl:flex justify-center items-center w-screen py-16 mx-auto bg-gray-500 mt-32">
            <div className="ml-6 xl:ml-0 flex flex-col xl:w-2/5 mt-8 mr-14">
                <h1 className="text-white text-4xl font-bold font-sans mb-6 "> We Know </h1>
                <h1 className="font-serif text-gray-300 text-base">The difference is in the details and that’s why our car rental services, in the tourism and business industry, stand out for their quality and good taste, to offer you an unique experience</h1>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 relative right-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
				</svg>
            </div>
			<div className="xl:h-32 w-0.5 bg-white mr-20"></div>
			<div className="ml-6 xl:ml-0">
				<h1 className="text-white text-sm  font-bold mb-3">CALL NOW</h1>
				<h1 className="text-red-500 font-bold text-2xl mb-10">06 55 62 68 91</h1>
				<div className="h-10 bg-white w-32 xl:w-44 animate-bounce flex justify-center items-center rounded hover:bg-red-500"
				onMouseEnter={changecolor} onMouseLeave={changecolor}>
					<h1 className={!ctext ? 'text-black font-bold' : 'text-white font-bold'}>CALL</h1>
				</div>
			</div>
        </div>
    )
}

export default Weknow
