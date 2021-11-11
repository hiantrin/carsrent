import React from 'react'
import Profile from '../images/img5.png'
import { FaStar } from "react-icons/fa"
import { useState, useEffect } from 'react'
import Axios from 'axios'

const Inprofile = () => {
	const [select, setselect] = useState(1);
	const [Positive, setpositive] = useState(1);
	const [Rental, setRental] = useState([]);

	useEffect( () => {
		Axios.get('http://localhost:3001/Profile', {
			params: {
				token : localStorage.getItem("token"),
			}
		}).then(async (response) => {
			console.log("success");
			await setRental(response.data);
		}).catch(async (err) => {
			console.log(err.response.data);
		})
	}, [])

    return (
        <div>
            <div className="flex w-screen div-col">
                <div className="div-port-image  flex justify-center ">
                    <div className="port-image flex flex-col">
                    	<div className="h-80 mt-20 port-image">
                        	<img src={Profile} alt="Profile" className="h-full w-full"></img>
                    	</div>
                    	{/* <div className="w-full mt-10 flex justify-between">
                    		<h1 className="text-gray-400 text-xs font-bold">WORK</h1>
							<div className="line bg-gray-300 w-10/12 bg-white mt-2"></div>
                        </div> */}
                    </div>
                </div>
                <div className="w-screen px-20 lg:px-0 lg:w-3/5  flex-col  mt-20 info-div">
					{/* <div className="flex mx-auto">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
  							<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
							</svg>
							<h1 className="text-sm text-gray-400 font-serif ml-3 mt-2 mr-5">Bookmark</h1>
					</div> */}
					<div className="flex flex-col justify-between h-80 ">
					<div className="flex  justify-between to-flex-re">
						<div className="flex ml-8">
							<h1 className="text-3xl font-serif mr-5 text-blue-600">{Rental.username} </h1>
						</div>
						<div className="flex bookmark">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
  							<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
							</svg>
							<h1 className="text-sm text-black font-bold font-serif ml-3 mt-2 mr-5">Bookmark</h1>
						</div>
					</div>
					<div className="ml-8">
						<h1 className="text-xs text-gray-400 font-serif">RANKING</h1>
						<div className="flex mt-2">
							<h1 className="text-gray-600 text-2xl mr-4 ">10</h1>
							{[... Array(5)].map(star => {
								return <FaStar size={24} className="mt-1 text-blue-500" />
							})}
						</div>
					</div>
					<div className="flex  ">
						<div className={select ? 'flex justify-center items-center w-44 h-14 rounded bg-blue-200 cursor-pointer' : 'flex justify-center items-center w-44 h-14 cursor-pointer'} 
						onClick={() => setselect(1)}>
							<svg xmlns="http://www.w3.org/2000/svg" className={select ? 'h-7 w-7 mr-3 text-blue-600' : 'h-7 w-7 mr-3 text-gray-700'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
							</svg>
							<h1 className={select ? 'text-blue-600 font-serif font-bold' : 'text-gray-700 font-serif font-bold'}>Infos</h1>
						</div>
						<div className={select ? 'flex justify-center items-center w-44 h-14  rounded cursor-pointer' : 'flex justify-center items-center w-44 h-14  rounded bg-blue-200 cursor-pointer'}
						onClick={() => setselect(0)}>
							<svg xmlns="http://www.w3.org/2000/svg" className={select ? 'h-7 w-7 mr-3 text-gray-700' : 'h-7 w-7 mr-3 text-blue-600'} viewBox="0 0 20 20" fill="currentColor">
  							<path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
							</svg>
							<h1 className={select ? 'text-gray-700 font-serif font-bold' : 'text-blue-600 font-serif font-bold'}>Feedbacks</h1>
						</div>
					</div>
					<div className={select ? 'hidden' : 'flex flex-col'}>
						<div className="flex ml-8 mb-2">
							<div className="flex mr-10 cursor-pointer" 
							onClick={() => setpositive(1)}>
								<svg xmlns="http://www.w3.org/2000/svg" className={Positive ? 'h-7 w-7 text-gray-800 mr-2' : 'h-7 w-7 text-gray-400 mr-2'} viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
								</svg>
								<h1 className={Positive ? 'text-gray-800 font-serif text-xl' : 'text-gray-400 font-serif text-xl'}>Negative</h1>
							</div>
							<div className="flex cursor-pointer"
							onClick={() => setpositive(0)}>
								<svg xmlns="http://www.w3.org/2000/svg" className={!Positive ? 'h-7 w-7 text-gray-800 mr-2' : 'h-7 w-7 text-gray-400 mr-2'} viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
								</svg>
								<h1 className={!Positive ? 'text-gray-800 font-serif text-xl' : 'text-gray-400 font-serif text-xl'}>Positive</h1>
							</div>
						</div>
						<div className={Positive ? 'line-1 w-32 bg-blue-600 ml-8 rounded' : 'hidden'}></div>
						<div className={!Positive ? 'line-1 w-32 bg-blue-600 ml-44 rounded' : 'hidden'}></div>
						<div className="line w-auto bg-gray-400 ml-8"></div>
					</div>
					<div className={select ? 'flex flex-col' : 'hidden'}>
						<div className="flex ml-8 mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-800 mr-2" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
							</svg>
							<h1 className="text-gray-800 font-serif text-xl">About</h1>
						</div>
						<div className="line-1 w-24 bg-blue-600 ml-8 rounded"></div>
						<div className="line w-auto bg-gray-400 ml-8"></div>
					</div>
                </div>
				<div className={select ? 'ml-8 mt-10 flex flex-col' : 'hidden'}>
					<h1 className="text-gray-400 text-xs font-bold mb-10">CONTACT INFORMATIONS</h1>
					<div className="flex mb-5">
						<div className="w-32">
							<h1 className="text-gray-600 text-sm font-bold">Phone:</h1>
						</div>
						<h1 className="text-blue-500 text-sm font-bold">{Rental.phone}</h1>
					</div>
					<div className="flex mb-5">
						<div className="w-32">
							<h1 className="text-gray-600 text-sm font-bold">Address:</h1>
						</div>
						<h1 className="text-blue-500 text-sm font-bold">{Rental.address}</h1>
					</div>
					<div className="flex mb-5">
						<div className="w-32">
							<h1 className="text-gray-600 text-sm font-bold">E-mail:</h1>
						</div>
						<h1 className="text-blue-500 text-sm font-bold">{Rental.email}</h1>
					</div>
					<div className="flex mb-10">
						<div className="w-32">
							<h1 className="text-gray-600 text-sm font-bold">Full Name:</h1>
						</div>
						<h1 className="text-blue-500 text-sm font-bold mr-3">{Rental.Name}</h1>
						<h1 className="text-blue-500 text-sm font-bold">{Rental.Lastname}</h1>
					</div>
					<h1 className="text-gray-400 text-xs font-bold mb-10">CONTACT INFORMATIONS</h1>
					<div className="flex mb-5">
						<div className="w-32">
							<h1 className="text-gray-600 text-sm font-bold">Birthday:</h1>
						</div>
						<h1 className="text-blue-500 text-sm font-bold mr-3">{Rental.Birthday}</h1>
					</div>
					<div className="flex mb-5">
						<div className="w-32">
							<h1 className="text-gray-600 text-sm font-bold">city of birth:</h1>
						</div>
						<h1 className="text-blue-500 text-sm font-bold mr-3">{Rental.City}</h1>
					</div>
					<div className="flex mb-5">
						<div className="w-32">
							<h1 className="text-gray-600 text-sm font-bold">Gender:</h1>
						</div>
						<h1 className="text-blue-500 text-sm font-bold mr-3">{Rental.Gender}</h1>
					</div>
					 
				</div>
				</div>
            </div>
        </div>
    )
}

export default Inprofile
