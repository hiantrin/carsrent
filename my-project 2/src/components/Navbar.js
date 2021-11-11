import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Axios from 'axios'

function usePageViews(  ) {
	let location = useLocation();
	useEffect(() => {
		const path = location.pathname;
	}, [])
	return (location.pathname);
  }

const Navbar = (  ) => {
	
	

	const [isOpen, setIsopen] = useState(false)

	const toggle = () => {
		setIsopen(!isOpen)
	}

	const [isOpenP, setIsopenP] = useState(false)

	const toggleP = () => {
		setIsopenP(!isOpenP)
		setIsopenB(false)
	}

	const [isOpenB, setIsopenB] = useState(false)

	const toggleB = () => {
		setIsopenB(!isOpenB)
		setIsopenP(false)
	}

	const tochoose = () => {
		localStorage.removeItem('token');
		window.location.pathname = '/';
	}
	
	
	// useEffect (() => {
	// 	const colornavbar = () => {
	// 		if (g.pathname === "/Login/Client")
	// 		{
	// 			setw("bg-blue-500");
	// 			console.log(w);
	// 		}

	// 	}
	// })

	useEffect(() => {
		
		const hideMenu = () => {
			
			if (window.innerWidth > 1280) {
				setIsopen(false)
			}
			if (window.innerWidth < 1250) {
				setIsopenP(false)
				setIsopenB(false)
			}
		}
		window.addEventListener('resize', hideMenu)

		// return () => {
		// 	window.removeEventListener('resize', hideMenu)
		// }
	})
	
	const path = usePageViews();
	const checkuser = async () => {
		var a = 0;
		await Axios.post("http://localhost:3001/Check", {
			token : localStorage.getItem('token'),
		}).then((response) =>{
			if (response.data === "Client")
				a = 1;
			if (response.data === "Agence")
				a = 2;
		}).catch((error) =>{
			console.log(error.response.data);
		})
		return a;
	}

	const toprofile = async () => {
		const a  = await checkuser();
		if (a === 1)
		{
			window.location.pathname = '/Profile';
		}
		else if (a === 2)
		{
			window.location.pathname = '/Agence/Admin';
		}
	} 
	const [flesh, setflesh] = useState("false");
	useEffect(() => {
		if (path === "/home" || path === "/Profile" || path === "/Register" || path === "/Agence/Register" || path === "/Agence/Admin")
		{
			setflesh(true);
		}
		else
		{
			setflesh(false);
		}
	}, [])

	useEffect(() => {
		 if(path === "/Login/Client" || path === "/Login/Agence")
		 {
		 	document.getElementById("navbar").className = "navbar-login ";
			
		// 	document.getElementById("text-navbar").className = "text-white mr-2";
		// 	document.getElementById("text-navbar1").className = "text-white mr-2";
		// 	document.getElementById("text-navbar2").className = "text-white mr-2";
		// 	document.getElementById("text-navbar3").className = "text-white mr-2";
		// 	document.getElementById("text-navbar4").className = "text-white mr-2";
		// 	document.getElementById("mtext-navbar").className = "text-white mr-2 text-xs lg:text-xl ";
		// 	document.getElementById("mtext-navbar1").className = "text-white mr-2 text-xs lg:text-xl";
		// 	document.getElementById("mtext-navbar2").className = "text-white mr-2 text-xs lg:text-xl";
		// 	document.getElementById("mtext-navbar3").className = "text-white mr-2 text-xs lg:text-xl";
			document.getElementById("locate").className = "lg:text-5xl md:text-3xl sm:text-lg italic font-bold font-mono text-white";
			document.getElementById("me").className = "lg:text-5xl md:text-3xl sm:text-lg italic font-bold font-mono text-white";
		 }
		if(path === "/home" || path === "/Profile" || path == "/Register" || path === "/Agence/Register" || path === "/Agence/Admin")
		{	
			document.getElementById("text-navbar").className = "text-black mr-2";
			document.getElementById("text-navbar1").className = "text-black mr-2";
			document.getElementById("text-navbar2").className = "text-black mr-2";
			document.getElementById("text-navbar3").className = "text-black mr-2";
			document.getElementById("text-navbar4").className = "text-black mr-2";
			document.getElementById("mtext-navbar").className = "text-black mr-2 text-xs lg:text-xl ";
			document.getElementById("mtext-navbar1").className = "text-black mr-2 text-xs lg:text-xl";
			document.getElementById("mtext-navbar2").className = "text-black mr-2 text-xs lg:text-xl";
			document.getElementById("mtext-navbar3").className = "text-black mr-2 text-xs lg:text-xl";
			document.getElementById("locate").className = "lg:text-5xl md:text-3xl sm:text-lg italic font-bold font-mono text-black";
			document.getElementById("me").className = "lg:text-5xl md:text-3xl sm:text-lg italic font-bold font-mono text-black";
			document.getElementById("pages-text").className = "mr-2 text-black";
			document.getElementById("pages-text1").className = "mr-2 text-black";
			document.getElementById("pages-text2").className = "mr-2 text-black";
			document.getElementById("pages-text3").className = "mr-2 text-black";
			document.getElementById("blog-text").className = "mr-2 text-black";
			document.getElementById("sign-cyrcle").className = "flex justify-center items-center text-white font-serif font-bold mr-10 cursor-pointer w-32 h-10 rounded-full border-2 border-black";

		}
		if(path === "/" || path === "/Login/Client" || path === "/Login/Agence")
		{
			document.getElementById("text-navbar").className = "hidden";
			document.getElementById("text-navbar1").className = "hidden";
			document.getElementById("div-navbar2").className = "hidden";
			document.getElementById("div-navbar3").className = "hidden";
			document.getElementById("sign-cyrcle").className = "hidden";
			document.getElementById("three-line").className = "hidden";
		}
	}, [])


	useEffect(() => {
		if((path === "/Login/Client" || path === "/Login/Agence") && isOpen )
		{
			document.getElementById("navbar2").className = "navbar1 w-2/5 md:w-1/4 flex flex-col justify-center absolute top-full right-0 items-center shadow-2xl";
		}
		if(path === "/home" && isOpen && window.pageYOffset > 340)
		{
			document.getElementById("navbar2").className = "navbar-home w-2/5 md:w-1/4 flex flex-col justify-center absolute top-full right-0 items-center shadow-2xl";
		}
		
	}, [isOpen])

	useEffect(() => {
		if((path === "/home" || path === "/Register") && isOpenP && window.pageYOffset > 340)
		{
			document.getElementById("pages-div").className = "w-52 mt-0 flex flex-col justify-center absolute top-32 right-32 navbar-home opacity-75 shadow-xl";
		}
		if((path === "/home" || path === "/Register") && isOpenP && window.pageYOffset <= 340)
		{
			document.getElementById("pages-div").className = "w-52 mt-0 flex flex-col justify-center absolute top-32 right-32  shadow-2xl";
		}
	}, [isOpenP])

	useEffect(() => {
		if((path === "/home" || path === "/Register") && isOpenB && window.pageYOffset > 340)
		{
			document.getElementById("blog-div").className = "w-52  flex flex-col justify-center absolute top-32 right-64 items-center  shadow-xl navbar-home opacity-75";
		}
		if((path === "/home" || path === "/Register") && isOpenB && window.pageYOffset <= 340)
		{
			document.getElementById("blog-div").className = "w-52  flex flex-col justify-center absolute top-32 right-64 items-center  shadow-2xl";
		}
	}, [isOpenB])

	useEffect(() => {
		const scrollme = () => {
			if ((path === "/home" || path === "/Register") && window.pageYOffset > 340)
			{
				document.getElementById("navbar").className = "fixed top-0 z-30 navbar-home shadow-xl opacity-75";
			}
			if ((path === "/home" || path === "/Register") && window.pageYOffset <= 340)
			{
				document.getElementById("navbar").className = "fixed top-0 z-30 ";
			}

		}
		window.addEventListener('scroll', scrollme);
	})

	useEffect(() => {
		if (path === "/Agence/Admin")
			document.getElementById("navbar").className = "fixed top-0 z-30 navbar-admin shadow-xl ";
	}, [])

	// const scrollme  = () => {
	// 	if (path === "/home")
	// 	{
	// 		document.getElementById("navbar").className = "";
	// 	}
	// }

    return (
		<div id="navbar" className="fixed top-0 z-30 " >
        <div className="lg:h-32 w-screen flex justify-between items-center px-10">
			<div id="navbar2" className={isOpen ? 'w-2/5 md:w-1/4 flex flex-col justify-center absolute top-full right-0 items-center  shadow-2xl'
			: 'hidden'}>
                    <div className="menu">
                    	<Link id="mtext-navbar" className="mr-2 text-xs lg:text-xl text-white " to="/home" >HOME</Link>
                	</div>
					<div className="menu">
						<h1 id="mtext-navbar1" className="mr-2 text-xs lg:text-xl text-white ">Profile</h1>
					</div>
					<div className="menu">
						<h1 id="mtext-navbar2" className="mr-2 text-xs lg:text-xl text-white ">BLOG</h1>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</div>
					<div className="menu">
						<h1 id="mtext-navbar3" className="mr-2 text-xs lg:text-xl text-white ">PAGES</h1>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</div>
            </div>
			<div id="pages-div" className={isOpenP ? 'w-52 mt-0 flex flex-col justify-center absolute top-32 right-32 items-center colornavbar shadow-2xl'
			: 'hidden'}>
				<div className="menu">
                	<h1 id="pages-text" className="mr-2 text-gray-500">ABOUT</h1>
            	</div>
            	<div className="menu">
                	<h1 id="pages-text1" className="mr-2 text-gray-500">FAQ</h1>
		    	</div>
               	<div className="menu">
                  	<h1 id="pages-text2" className="mr-2 text-gray-500">CART</h1>
            	</div>
               	<div className="menu">
                   	<h1 id="pages-text3" className="mr-2 text-gray-500">My ACCOUNT</h1>
               	</div>
			</div>
			<div id="blog-div" className={isOpenB ? 'w-52  flex flex-col justify-center absolute top-32 right-64 items-center colornavbar shadow-2xl'
			: 'hidden'}>
                <div className="menu">
                	<h1 id="blog-text" className="mr-2 text-gray-500">ABOUT</h1>
               	</div>
            </div>
            <div className="flex flex-col justify-center items-center text-white">
                <h1 id="locate" className="lg:text-5xl md:text-3xl sm:text-lg italic font-bold font-mono text-gray-500">locate</h1>
                <h1 id="me" className="lg:text-5xl md:text-3xl sm:text-lg italic font-bold font-mono text-gray-500">Me</h1>
            </div>
			<div className="h-full flex justify-center items-center">
            	<div className="h-full flex justify-center items-center xl:flex hidden">
                	<div className="flex justify-center items-center text-white font-serif font-bold mr-10 cursor-pointer">
                    	<Link id="text-navbar" className=" mr-2 text-gray-500" to="/home">HOME</Link>
                	</div>
					<div className="flex justify-center items-center text-white font-serif font-bold mr-10 cursor-pointer">
						<Link id="text-navbar1" className=" mr-2 text-gray-500 " onClick={() => toprofile()}>Profile</Link>
					</div>
					<div id="div-navbar2" className="flex justify-center items-center text-white font-serif font-bold mr-10 cursor-pointer"
					onClick={toggleB}>
						<h1 id="text-navbar2" className="mr-2 text-gray-500">BLOG</h1>
						<svg  id="flesh" xmlns="http://www.w3.org/2000/svg"  className={!flesh ? 'h-5 w-5 mr-2 text-gray-500' : 'hidden'} viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
						<svg  id="flesh" xmlns="http://www.w3.org/2000/svg"  className={flesh ? 'h-5 w-5 mr-2 text-black' : 'hidden'} viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</div>
					<div id="div-navbar3" className="flex justify-center items-center text-white font-serif font-bold mr-10 cursor-pointer"
					onClick={toggleP}>
						<h1  id="text-navbar3" className="mr-2 text-gray-500">PAGES</h1>
						<svg  id="flesh" xmlns="http://www.w3.org/2000/svg"  className={!flesh ? 'h-5 w-5  text-gray-500' : 'hidden'} viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
						<svg  id="flesh" xmlns="http://www.w3.org/2000/svg"  className={flesh ? 'h-5 w-5  text-black' : 'hidden'} viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</div>
					{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
					</svg> */}
					<div id="sign-cyrcle" className="flex justify-center items-center text-white font-serif font-bold mr-10 cursor-pointer w-32 h-10 rounded-full border-2 border-gray-500" onClick={() => tochoose() }>
						<h1 id="text-navbar4" className="text-gray-500">SIGN OUT</h1>
					</div>
            	</div>
				<div id="three-line" className="px-4 cursor-pointer xl:hidden "
				onClick={toggle}>
                	<svg xmlns="http://www.w3.org/2000/svg" className={!flesh ? 'h-6 w-6 text-white md:h-12 md:w-12' : 'hidden'} viewBox="0 0 20 20" fill="currentColor">
                	<path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                	</svg>
					<svg xmlns="http://www.w3.org/2000/svg" className={flesh ? 'h-6 w-6 text-black md:h-12 md:w-12' : 'hidden'} viewBox="0 0 20 20" fill="currentColor">
                	<path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                	</svg>
            	</div>
			</div>
        </div>
		</div>
    )
}

export default Navbar
