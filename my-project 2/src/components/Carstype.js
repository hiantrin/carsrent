import React from 'react'
import {useState, useEffect} from 'react'

const Carstype = () => {
	const [id, changeid] = useState(0)
    return (
        <div className="flex w-screen h-60 mt-20">
			<div className="w-1/3 h-96 economic flex flex-col items-center justify-end"
			onMouseEnter={() => changeid(1)} onMouseLeave={() => changeid(0)}>
				<h1 className="mb-8 text-xs xl:text-lg text-white font-bold font-serif">Are you looking for an economic car?</h1>
				<div className={(id === 1) ? 'bg-red-500 flex justify-center items-center mb-8 h-9 w-32 rounded-xl animate-bounce cursor-pointer' : 'hidden'}>
					<h1 className="text-white font-bold font-serif mr-1">Check</h1>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</div>
			</div>
			<div className="w-1/3 h-96 suv flex flex-col items-center justify-end"
			onMouseEnter={() => changeid(2)} onMouseLeave={() => changeid(0)}>
				<h1 className="mb-8 text-xs xl:text-lg text-white font-bold font-serif">Are you looking for an suv car?</h1>
				<div className={(id === 2) ? 'bg-red-500 flex justify-center items-center mb-8 h-9 w-32 rounded-xl animate-bounce cursor-pointer' : 'hidden'}>
					<h1 className="text-white font-bold font-serif mr-1">Check</h1>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</div>
			</div>
			<div className="w-1/3 h-96 sport-car flex flex-col items-center justify-end"
			onMouseEnter={() => changeid(3)} onMouseLeave={() => changeid(0)}>
				<h1 className="mb-8 text-xs xl:text-lg text-white font-bold font-serif">Are you looking for a sport car?</h1>
				<div className={(id === 3) ? 'bg-red-500 flex justify-center items-center mb-8 h-9 w-32 rounded-xl animate-bounce cursor-pointer' : 'hidden'}>
					<h1 className="text-white font-bold font-serif mr-1">Check</h1>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</div>
			</div>
        </div>
    )
}

export default Carstype
