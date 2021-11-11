import {useState, useEffect} from 'react'
import img1 from '../images/car.pnj.jpeg'
import img2 from '../images/pp.jpeg'

const Contents3 = () => {
	const arr = [{id: 1, url: img1 , price: '50.00$', name: 'AUDI RS3', year: '2018', gas: 'gasoil', passager: 5, hp: 220, doors: 5, type: 'electronic', show: true}, 
	{id: 1, url: img2 , price: '70.00$', name: 'AUDI RS5', year: '2018', gas: 'gasoil', passager: 5, hp: 220, doors: 5, type: 'dynamic', show: true},
	{id: 1, url: img2 , price: '70.00$', name: 'AUDI RS5', year: '2018', gas: 'gasoil', passager: 5, hp: 220, doors: 5, type: 'dynamic', show: true},
	{id: 1, url: img2 , price: '70.00$', name: 'AUDI RS5', year: '2018', gas: 'gasoil', passager: 5, hp: 220, doors: 5, type: 'dynamic', show: true},];
	const arr2 = {id: 2, name: 'zobi', url: img2};
	const [arrow, setarr] = useState(arr);

	const ido = {};

	const tog = () => {
		setarr(arr)
	}
	const tog2 = () => {
		setarr(arr2)
	}

	const [id, changeid] = useState(ido)
    return (
		<div className="flex flex-col">
        	<div className="w-80 xl:w-2/3 mt-10 xl:flex  xl:justify-between mx-auto">
            	<div className=" xl:w-2/3 h-32  flex flex-col mx-auto">
                	<div className="w-72 xl:w-96 flex justify-end">
                    	<h1 className="text-xs xl:text-sm font-bold text-red-500 mr-1">OFFERS</h1>
                    	<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  xl:mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    	</svg>
                	</div>
                	<h1 className="text-2xl lg:text-4xl font-bold ml-3 ">Great Rental For You</h1>
                	<h1 className="text-xs lg:text-base text-gray-500 ml-3">What a kind of Car You Want?</h1>	
        		</div>
        		<div className=" grid grid-cols-2 gap-2 lg:flex  lg:mx-auto  w-80 xl:w-auto ">
           			<div className="flex justify-center items-center ">
					   <h1 className=" py-2 px-12 text-sm lg:text-base font-bold border-dashed border-2 border-gray-300 rounded-sm text-gray-500 hover:bg-red-500 hover:border-red-500 hover:text-white">AUDI</h1>
					</div>
					<div className="flex justify-center items-center">
						<h1 className=" py-2 px-10  text-sm lg:text-base font-bold border-dashed border-2 border-gray-300 rounded-sm text-gray-500 hover:bg-red-500 hover:border-red-500 hover:text-white">BMW</h1> 
					</div>
					<div className="flex justify-center items-center"
					onClick={tog}>
						<h1 className="py-2 px-6 text-sm lg:text-base font-bold border-dashed border-2 border-gray-300 rounded-sm text-gray-500 hover:bg-red-500 hover:border-red-500 hover:text-white">MERCEDES</h1>
					</div>
					<div className="flex justify-center items-center"
					onClick={tog2}>
						<h1 className="py-2 px-6 text-sm lg:text-base font-bold border-dashed border-2 border-gray-300 rounded-sm text-gray-500 hover:bg-red-500 hover:border-red-500 hover:text-white">PORSCHE</h1>
					</div>
        		</div>
			</div>
			<div className="xl:w-2/3 flex flex-col mx-auto xl:grid xl:grid-cols-3 xl:gap-2">
			{arrow.map((arra) => {
				

			return(
				<div className=" div-img mb-10 w-80 "
				onMouseEnter={() => changeid(arra)} onMouseLeave={() => changeid(ido)}
				>
						 <div className={ (id === arra) ? 'hidden' : 'flex justify-center items-center w-44 h-14 bg-white button-div-img mx-auto border-dashed border border-gray-300 rounded-lg'}>
							<h1 className="font-bold font-serif text-red-500">{arra.price}<span className="ml-2 text-gray-300">/ Day</span></h1>
						</div> 
						<div className={(id === arra) ? 'flex justify-center items-center w-44 h-14 bg-red-500 button-div-img mx-auto  rounded-lg cursor-pointer' : 'hidden'}>
							<h1 className="font-bold font-serif text-white">RENT IT</h1>
						</div>
						<img src={arra.url} alt="Logo" className="w-80 h-60 img-line mb-1"></img>
						<div className="flex flex-col justify-center items-center h-64 w-80 border-solid border border-gray-200 ">
							<h1 className="font-bold text-lg mb-5">{arra.name}</h1>
							<div className="flex justify-between">
								<div className="w-32 flex flex-col">
									<div className="flex mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
										</svg>
										<h1 className="text-gray-500 text-sm mt-1">{arra.year}</h1>
									</div>
									<div className="flex mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
										<h1 className="text-gray-500 text-sm mt-1">{arra.type}</h1>
									</div>
									<div className="flex">
										<svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
										<h1 className="text-gray-500 text-sm mt-1">{arra.type}</h1>
									</div>
								</div>
								<div className="w-32 h-8 flex flex-col">
									<div className="flex mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
  										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
										</svg>
										<h1 className="text-gray-500 text-sm mt-1">{arra.gas}</h1>
									</div>
									<div className="flex mb-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
										</svg>
										<h1 className="text-gray-500 text-sm mt-1">{arra.passager}</h1>
									</div>
									<div className="flex">
										<svg xmlns="http://www.w3.org/2000/svg" className="text-gray-500 h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
										</svg>
										<h1 className="text-gray-500 text-sm mt-1">{arra.doors} Doors</h1>
									</div>
								</div>
							</div>
						</div>		
				</div>
			);
			})}
			</div>
		</div>
    )
}

export default Contents3
