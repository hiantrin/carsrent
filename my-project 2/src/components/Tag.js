import React from 'react'

const tag = () => {
    return (
        <div className="h-14 bg-white flex justify-between items-center px-40 lg:flex hidden ">
            <div className="h-full flex justify-center items-center mr-10">
                <div className="h-full flex justify-center items-center mr-4">
                	<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
                    <h2 className="text-gray-500 cursor-pointer hover:text-gray-700 text-sm">hamzaiantrin1999@gmail.com</h2>
                </div>
                <div className="h-full flex justify-center items-center">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
					</svg>
					<h2 className="text-gray-500 cursor-pointer hover:text-gray-700 text-sm">0655626891</h2>
                </div>
            </div>
            <div className="h-full flex justify-center items-center">
				<div className="flex justify-center items-center mr-4">
					<i className="fab fill-current text-gray-500 text-white text-2xl fa-facebook-f mr-2"></i>
					<h2 className="text-gray-500 cursor-pointer hover:text-gray-700 text-sm">hamza iantrin</h2>
				</div>
				<div className="h-full flex justify-center items-center">
					<i class="fab fill-current text-gray-500 text-2xl fa-twitter mr-2"></i>
					<h2 className="text-gray-500 cursor-pointer hover:text-gray-700 text-sm">hamza iantrin</h2>
				</div>
			</div>
        </div>
    )
}

export default tag

