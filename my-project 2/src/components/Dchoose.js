import React from 'react'
// import {useState, useEffect} from 'react'

const Dchoose = () => {
    const toregisterclient = () => {
        window.location.pathname = '/Login/Client';
    }

    const toregisteragence = () => {
        window.location.pathname = '/Login/Agence';
    }
    return (
        <div className="w-screen flex flex-col justify-center items-center">
                <h1 className="text-gray-500 text-2xl font-serif mt-28 p-welcome">Our Client Are Our First Priority</h1>
                <h1 className="text-gray-500 font-serif text-6xl mt-4 w-welcome">WELCOME TO LOCATE ME </h1>
                <div className="flex mt-12 justify-center items-center">
                    <div className="bg-gray-500 h-0.5 w-24 rounded-full mr-3 line-welcome"></div>
                    <div className="bg-red-500 h-3 w-3 rounded-full mr-3"></div>
                    <div className="bg-gray-500 h-0.5 w-24 rounded-full line-welcome"></div>
                </div>
                <div className="w-lorem text-center mt-8">
                        <h1 className="text-black w-text-welcome">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
                </div>
                <div className="mt-16 flex w-full justify-center space-x-10 space-welcome">
                    <div className="w-80 border-2 rounded-lg border-gray-500 flex flex-col items-center pb-10 div-welcome">
                        <h1 className="mt-5 text-blue-500 text-2xl font-serif font-bold sign-welcome">Sign in / sign up</h1>
                        <h1 className="mt-2 text-blue-500 text-2xl font-serif font-bold mb-7 sign-welcome"> as Client</h1>
                        <div className="px-2">
                            <div className="flex ">
                                <div className="h-3 w-3 rounded-full bg-red-500 mt-2 mr-2 "> </div>
                                <h1 className="font-bold text-white terms-welcome">Rent any car from any agence in any localisation.</h1>
                            </div>
                            <div className="flex mt-4 ml-4 ml-welcome">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:h-8 w-5 lg:w-8 text-blue-400 flesh-welcome mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
						        </svg>
                                <h1 className="font-bold text-white terms-welcome">Free registration</h1>
                            </div>
                            <div className="flex mt-4 ml-4 ml-welcome">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:h-8 w-5 lg:w-8 text-blue-400 flesh-welcome mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
						        </svg>
                                <h1 className="font-bold text-white terms-welcome">Get all nearby agence</h1>
                            </div>
                            <div className="flex mt-4 ml-4 ml-welcome">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:h-8 w-5 lg:w-8 text-blue-400 flesh-welcome mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
						        </svg>
                                <h1 className="font-bold text-white terms-welcome">24/7 enterprise-level support</h1>
                            </div>
                        </div>
                        <div className="w-28 h-12 rounded-full border-2 border-blue-500 mt-10 flex justify-center items-center cursor-pointer animate-bounce hover:bg-blue-300 button-welcome" onClick={() => toregisterclient()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 text-button-welcome" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-80 border-2 rounded-lg border-gray-500 flex flex-col items-center pb-10 div-welcome">
                        <h1 className="mt-5 text-blue-500 text-2xl font-serif font-bold sign-welcome">Sign in / sign up</h1>
                        <h1 className="mt-2 text-blue-500 text-2xl font-serif font-bold mb-7 sign-welcome"> as Agence</h1>
                        <div className="px-2">
                            <div className="flex ">
                                <div className="h-3 w-3 rounded-full bg-red-500 mt-2 mr-2"> </div>
                                <h1 className="font-bold text-white terms-welcome">show all your cars and get infos about any client.</h1>
                            </div>
                            <div className="flex mt-4 ml-4 ml-welcome">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:h-8 w-5 lg:w-8 text-blue-400 flesh-welcome mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
						        </svg>
                                <h1 className="font-bold text-white terms-welcome">get client feedback</h1>
                            </div>
                            <div className="flex mt-4 ml-4 ml-welcome">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:h-8 w-5 lg:w-8 text-blue-400 flesh-welcome mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
						        </svg>
                                <h1 className="font-bold text-white terms-welcome">show cars price and details for client</h1>
                            </div>
                            <div className="flex mt-4 ml-4 ml-welcome">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 lg:h-8 w-5 lg:w-8 text-blue-400 flesh-welcome mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  						        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
						        </svg>
                                <h1 className="font-bold text-white terms-welcome">24/7 enterprise-level support</h1>
                            </div>
                        </div>
                        <div className="w-28 h-12 rounded-full border-2 border-blue-500 mt-10 flex justify-center items-center cursor-pointer animate-bounce hover:bg-blue-300 button-welcome" onClick={() => toregisteragence()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500 text-button-welcome" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dchoose
