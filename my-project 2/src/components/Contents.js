import React from 'react'
import {Link} from 'react-router-dom'

const Contents = () => {
    return (
		<div className="w-screen  flex justify-center items-center pt-40 h-auto">
			<div className="md:w-96 md:h-96 w-80 h-80 flex flex-col justify-center items-center text-white rounded-full border-8 border-black logo-home">
            	<h1 className=" md:text-7xl text-5xl italic font-bold font-mono text-black logo-text-home">locate</h1>
            	<h1 className=" md:text-7xl text-5xl italic font-bold font-mono text-black logo-text-home">Me</h1>
            </div>
        </div>
    )
}

export default Contents
