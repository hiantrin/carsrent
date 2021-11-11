import React from 'react'

const footer = () => {
    return (
        <div className="w-screen colorfooter flex flex-col justify-center">
            <div className="xl:flex justify-center mb-20">
                <div className="flex flex-col xl:mr-16 ml-3 xl:ml-0 mt-16 xl:mt-0 mb-10 xl:mb-0">
                    <h1 className="text-xl text-white font-bold font-serif mb-10">Get in Contact</h1>
                    <div className="flex mb-5">
                    	<svg xmlns="http://www.w3.org/2000/svg" className="text-white h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<h1 className="text-white text-xs">NR 62 ELMAGHREBELAARABI, AGADIR</h1>
                    </div>
					<div className="flex mb-5">
						<svg xmlns="http://www.w3.org/2000/svg" className="text-white h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
						</svg>
						<h1 className="text-white text-xs">06 55 62 68 91</h1>
					</div>
					<div className="flex mb-7">
						<svg xmlns="http://www.w3.org/2000/svg" className="text-white h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<h1 className="text-white text-xs">hamza-iantrin1999@gmail.com</h1>
					</div>
					<div className="flex flex-col cursor-pointer">
						<h1 className="text-red-500 text-base ">Find Us On Map </h1>
						<div className="h-0.5 bg-red-500 hr-w"></div>
					</div>
                </div>
				<div className="flex flex-col xl:mr-16 ml-3 xl:ml-0 mt-16 xl:mt-0 mb-10 xl:mb-0">
					<h1 className="text-xl text-white font-bold font-serif mb-10">Latest Blog</h1>
					<h1 className="text-white text-sm mb-2 font-bold">Tout Terrain gold city</h1>
					<h1 className="text-white text-xs text-gray-300 mb-5">In Motobike <span className="text-gray-400 ml-2">August 22, 2021</span></h1>
					<div className="h-0.5 bg-gray-500 w-52 mb-6"></div>
					<h1 className="text-white text-sm mb-2 font-bold">Car driving a tunnel</h1>
					<h1 className="text-white text-xs text-gray-300 mb-5">In Car <span className="text-gray-400 ml-2">August 22, 2021</span></h1>
					<div className="h-0.5 bg-gray-500 w-52 mb-6"></div>
					<h1 className="text-white text-sm mb-2 font-bold">How to drive a car ?</h1>
					<h1 className="text-white text-xs text-gray-300 mb-5">In Car <span className="text-gray-400 ml-2">August 22, 2021</span></h1>
				</div>
				<div className="flex flex-col xl:mr-36 ml-3 xl:ml-0 mt-16 xl:mt-0 mb-10 xl:mb-0">
					<h1 className="text-xl text-white font-bold font-serif mb-10">Usefull Links</h1>
					<h1 className="text-gray-400 text-sm mb-5 cursor-pointer hover:text-white">Our Partners</h1>
					<h1 className="text-gray-400 text-sm mb-5 cursor-pointer hover:text-white">Careers</h1>
					<h1 className="text-gray-400 text-sm mb-5 cursor-pointer hover:text-white">Sitemap</h1>
					<h1 className="text-gray-400 text-sm mb-5 cursor-pointer hover:text-white">Investors</h1>
					<h1 className="text-gray-400 text-sm mb-5 cursor-pointer hover:text-white">Request a Quote</h1>
				</div>
				<div className="flex flex-col ml-3 xl:ml-0 mt-16 xl:mt-0 mb-10 xl:mb-0">
					<h1 className="text-xl text-white font-bold font-serif mb-10">Working Hours</h1>
					<h1 className="text-white text-sm mb-4">SERVICE DEPARTMENT:</h1>
					<h1 className="text-gray-400 text-sm mb-2 cursor-pointer hover:text-white">Monday to Friday: 08.00 to 18.00</h1>
					<h1 className="text-gray-400 text-sm cursor-pointer hover:text-white">Saturday & Sunday:<span className="text-red-600 ml-1">Closed</span></h1>
				</div>
            </div>
			<div className="xl:flex xl:justify-center xl:items-center mb-14">
				<div className=" hidden xl:flex h-0.5 bg-gray-500 w-40 xl:mr-20"></div>
				<div className="w-32 mx-auto xl:mx-0 xl:w-auto mb-6 xl:mb-0 px-6 py-2 xl:mr-10 face-color rounded cursor-pointer">
					<h1 className="text-white font-serif">Facebook</h1>
				</div>
				<div className="w-32 mx-auto xl:mx-0 xl:w-auto mb-6 xl:mb-0 px-6 py-2 xl:mr-10 twit-color rounded cursor-pointer">
					<h1 className="text-white font-serif ">Twitter</h1>
				</div>
				<div className="w-32 mx-auto xl:mx-0 xl:w-auto mb-6 xl:mb-0 px-6 py-2 xl:mr-20 link-color rounded cursor-pointer">
					<h1 className="text-white font-serif">Linkdin</h1>
				</div>
				<div className="hidden xl:flex h-0.5 bg-gray-500 w-40"></div>
			</div>
			<div className="flex justify-center items-center">
				<h1 className="text-gray-400 mb-10 xl:mb-0">Copyright by iantrin. All reserved</h1>
			</div>
        </div>
    )
}

export default footer
