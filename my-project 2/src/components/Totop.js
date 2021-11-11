import React from 'react'
import {useState, useEffect} from 'react'

const Totop = () => {
    const moveup = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
    }

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
          if (window.pageYOffset > 500) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        // return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);

    return (    
        <div className={isVisible ? 'fixed bottom-4 right-4 h-8 w-8 rounded bg-red-500 flex justify-center items-center cursor-pointer' : 'hidden'}
    	onClick={moveup}>
        	<svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           	<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        	</svg>
       	</div>
    )
}

export default Totop
