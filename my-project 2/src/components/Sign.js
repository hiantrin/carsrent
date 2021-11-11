import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'


const Sign = () => {
	const [slide, onslide] = useState(false)

	const show = () => {
		onslide(!slide);
	}

	const hidethat = () => {
		setTimeout(show, 1);
		// setTimeout(hidesign, 1800);
	}

	const showthatv2 = () => {
		onslide(!slide);
	}

	const showthat = () => {
		// document.getElementById("signin").style.display = "flex";
		setTimeout(showthatv2, 1);
	}

	const [username, setusername] = useState("");
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [repassword, setrepassword] = useState("");

	const [usernamerr, setusernamerr] = useState("a");
	const [emailrr, setemailrr] = useState("a");
	const [passwordrr, setpasswordrr] = useState("a");
	const [repasswordrr, setrepasswordrr] = useState("a");

	const checkerr = async (response) => {
		let a = 1;
		if (response !== "success")
		{
			if (await response.search("username") !== -1)
			{
				setusernamerr(response);
				setemailrr("a");
				setpasswordrr("a");
				setrepasswordrr("a");
				return false ;
			}
			if (await response.search("email") !== -1)
			{
				setusernamerr("a");
				setemailrr(response);
				setpasswordrr("a");
				setrepasswordrr("a");
				return false ;
			}
			if (await response.search("password") !== -1)
			{
				setusernamerr("a");
				setemailrr("a");
				setpasswordrr(response);
				setrepasswordrr("a");
				return false ;
			}
			if (await response.search("confirmation") !== -1)
			{
				setusernamerr("a");
				setemailrr("a");
				setpasswordrr("a");
				setrepasswordrr(response);
				return false ;
			}
		}
		else if (response === "success")
		{
			setusernamerr("a");
			setemailrr("a");
			setpasswordrr("a");
			setrepasswordrr("a");
			return true ;
		}
	}

	const checkpass = async () => {
		await Axios.post("http://localhost:3001/sign", {
			username: username,
			email: email,
			password: password,
			confirmation : repassword,
		}).then( async (response) => {
			console.log(response.data);
			const g = await checkerr(response.data.s);
			if (g === true)
			{
				localStorage.setItem("token", response.data.token);
				window.location.pathname = '/Register';
			}
		}).catch((err) => {
			console.log(err.data);
			return (false);
		})
	}

	const [semail, getemail] = useState("");
	const [spassword, getpassword] = useState("");

	const [geemail, etemail] = useState("a");
	const [gepassword, etpassword] = useState("a");


	const checkg = async (response) => {
		let a = 1;
		if (response !== "success")
		{
			if (await response.search("email") !== -1)
			{
				etemail(response);
				etpassword("a");
				return false ;
			}
			if (await response.search("password") !== -1)
			{
				etemail("a");
				etpassword(response);
				return false ;
			}
		}
		else if (response === "success")
		{
			etpassword("a");
			etemail("a");
			return true ;
		}
	}

	const checkpassg = async () => {
		await Axios.post("http://localhost:3001/sign/login", {
			email: semail,
			password: spassword,
		}).then( async (response) => {
			console.log(response.data.s);
			const g = await checkg(response.data.s);
			if (g === true)
			{
				console.log("yes we login");
				localStorage.setItem("token", response.data.token);
				window.location.pathname = '/home';
			}
		}).catch((err) => {
			console.log(err.data);
			return (false);
		})
	}
	// const [w, setw] = useState("10");

	// useEffect(() => {

	// 	const hidein = () => {
	// 		setw(window.innerWidth);
    //     }
	// 	window.addEventListener('resize', hidein)

	// })
	


    return (
	        <div className=" w-screen flex items-center justify-center lg:justify-between lg:px-80 all-t">
			<div className={ slide ? 'div-invisible w-96 absolute left-sign top-80 z-20 lg:flex flex-col justify-center items-center' : 'sm:hidden w-96 absolute left-sign top-80 sm:z-0 lg:z-20 lg:flex flex-col justify-center items-center div-visible'}>
				<h1 className="text-3xl font-bold text-white cursor-pointer">New here ?</h1>
				<h1 className="text-white text-base mt-6">you can Register free and get so many privileges with many features and more.</h1>
				<div className="w-40 h-12 border-2 border-white rounded-full mt-10 flex justify-center items-center cursor-pointer"
				onClick={() => showthat()}>
					<h1 className="text-white font-bold">SIGN UP </h1>
				</div>
			</div>
			<div id="signin" className={ slide ? 'div-invisible1 w-96 absolute right-sign top-80 z-20 lg:flex flex-col justify-center items-center' : ' w-96 absolute right-sign top-80 z-20 flex-col justify-center items-center div-visible1'}>
				<h1 className="text-3xl font-bold text-white cursor-pointer">One of us</h1>
				<h1 className="text-white text-base mt-6">you can Register free and get so many privileges with many features and more.</h1>
				<div className="w-40 h-12 border-2 border-white rounded-full mt-10 flex justify-center items-center cursor-pointer"
				onClick={() => hidethat()}>
					<h1 className="text-white font-bold">SIGN IN </h1>
				</div>
			</div>
			<div id="id" className={slide ? "div-rev" : "div-slider"}>
			
			</div>
            <div className={slide ? 'absolute -top-16 flex-col justify-center items-center mt-32 div-show lg:relative lg:right-32 xl:right-0 div-smo' : 'absolute -top-16 lg:top-0 flex-col justify-center items-center mt-32 div-opacity lg:relative lg:right-32 xl:right-0 div-sm' }>
                <div className="flex justify-center items-center"><h1 className="text-2xl lg:text-4xl font-bold font-serif">Sign up</h1></div>
				<div className="mt-0 lg:mt-6 flex flex-col items-center ">
					<h1 className={(usernamerr !== "a") ? 'text-red-500 font-bold text-xs' : 'opacity-0'}>{usernamerr}</h1>
           			<div className={(usernamerr === "a") ? 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center' : 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center border-4 border-red-500'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 lg:h-8 w-6 lg:w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
						</svg>
						<input type="text" className="font-bold w-40 lg:w-60 h-8 lg:h-10 bg-gray-100 focus:outline-none px-2  placeholder-gray-500" placeholder="Username" onChange={(event) => {setusername(event.target.value)}}></input>
                	</div>
				</div>
				<div className="mt-0 lg:mt-6 flex flex-col items-center">
				<h1 className={(emailrr !== "a") ? 'text-red-500 font-bold text-xs' : 'opacity-0'}>{emailrr}</h1>
					<div className={(emailrr === "a") ? 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100 rounded-full mx-0 flex items-center' : 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100 rounded-full mx-0 flex items-center border-4 border-red-500'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 lg:h-8 w-6 lg:w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  						<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
						</svg>
						<input type="text" className="font-bold w-40 lg:w-60 h-8 lg:h-10 bg-gray-100 focus:outline-none px-2  placeholder-gray-500" placeholder="email" onChange={(event) => {setemail(event.target.value)}}></input>
					</div>
				</div>
				<div className="mt-0 lg:mt-6 flex flex-col items-center">
					<h1 className={(passwordrr !== "a") ? 'text-red-500 font-bold text-xs' : 'opacity-0'}>{passwordrr}</h1>
                	<div className={(passwordrr === "a") ? 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center' : 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center border-4 border-red-500'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 lg:h-8 w-6 lg:w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  						<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
						</svg>
						<input type="password" className="font-bold w-40 lg:w-60 h-8 lg:h-10 bg-gray-100 focus:outline-none px-2  placeholder-gray-500" placeholder="Password" onChange={(event) => {setpassword(event.target.value)}}></input>
					</div>
				</div>
				<div className="mt-0 lg:mt-6 flex flex-col items-center">
					<h1 className={(repasswordrr !== "a") ? 'text-red-500 font-bold text-xs' : 'opacity-0'}>{repasswordrr}</h1>
					<div className={(repasswordrr === "a") ? 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center' : 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center border-4 border-red-500'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 lg:h-8 w-6 lg:w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  						<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
						</svg>
						<input type="password" className="font-bold w-40 lg:w-60 h-8 lg:h-10 bg-gray-100 focus:outline-none px-2  placeholder-gray-500" placeholder="Confirm Password" onChange={(event) => {setrepassword(event.target.value)}}></input>
					</div>
				</div>
                <div className="flex justify-center items-center">
                    <div className="w-32 lg:w-48 h-10 lg:h-14 bg-gray-100 mt-6 lg:mt-10 rounded-full flex justify-center items-center bg-blue-500 cursor-pointer">
						<Link  className="lg:text-xl font-bold text-white" onClick={() => checkpass() }>REGISTER</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center"><h1 className="text-sm lg:text-lg font-bold mt-6 lg:mt-10">Or Sign Up With Social Platforms</h1></div>
                <div className="flex justify-between mt-6 lg:mt-10 mx-10">
                    <div className="flex justify-center items-center w-9 lg:w-12 h-9 lg:h-12 border-solid border border-gray-700 rounded-full">
                        <i class="fab fill-current text-black text-lg lg:text-2xl fa-twitter"></i>
                    </div>
                    <div className="flex justify-center items-center w-9 lg:w-12 h-9 lg:h-12 border-solid border border-gray-700 rounded-full">
                        <i class="fab fill-current text-black text-lg lg:text-2xl fa-facebook-f"></i>
                    </div>
                    <div className="flex justify-center items-center w-9 lg:w-12 h-9 lg:h-12 border-solid border border-gray-700 rounded-full">
                        <i class="fab fill-current text-black text-lg lg:text-2xl fa-linkedin"></i>
                    </div>
                    <div className="flex justify-center items-center w-9 lg:w-12 h-9 lg:h-12 border-solid border border-gray-700 rounded-full">
                        <h1 className="text-lg lg:text-2xl font-bold font-sans">G</h1>
                    </div>
                </div>
				<div className="lg:hidden w-60 lg:w-80 flex flex-col justify-center items-center mt-10 lg:mt-32">
					<h1 className="text-sm lg:text-xl font-bold  cursor-pointer">Or Sign In with :</h1>
					<h1 className="text-xs lg:text-sm text-blue-500 font-bold cursor-pointer mt-2 lg:mt-5" onClick={() => hidethat()}>SIGN IN </h1>
				</div>
            </div>
			<div className={!slide ? 'absolute -top-10 lg:static flex flex-col justify-center items-center mt-32 div-show div-sma' : 'absolute top-24 lg:top-0 lg:static div-opacity div-smi'}>
                <div className="flex justify-center items-center"><h1 className="text-2xl lg:text-4xl font-bold font-serif">Sign in</h1></div>
				<div className="mt-2 lg:mt-10 flex flex-col items-center">
					<h1 className={(geemail !== "a") ? 'text-red-500 font-bold text-xs' : 'opacity-0'}>{geemail}</h1>
                	<div className={(geemail === "a") ? 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center' : 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center border-4 border-red-500'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 lg:h-8 w-6 lg:w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
						</svg>
						<input type="text" className="font-bold w-40 lg:w-60 h-8 lg:h-10 bg-gray-100 focus:outline-none px-2  placeholder-gray-500" placeholder="Email" onChange={(event) => {getemail(event.target.value)}}></input>
                	</div>
				</div>
                <div className="mt-2 lg:mt-10 flex flex-col items-center">
					<h1 className={(gepassword !== "a") ? 'text-red-500 font-bold text-xs' : 'opacity-0'}>{gepassword}</h1>
                	<div className={(gepassword === "a") ? 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center' : 'w-60 lg:w-80 h-12 lg:h-16 bg-gray-100  rounded-full mx-0 flex items-center border-4 border-red-500'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-6 lg:h-8 w-6 lg:w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  						<path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
						</svg>
						<input type="password" className="font-bold w-40 lg:w-60 h-8 lg:h-10 bg-gray-100 focus:outline-none px-2  placeholder-gray-500" placeholder="Password" onChange={(event) => {getpassword(event.target.value)}}></input>
					</div>
				</div>
                <div className="flex justify-center items-center">
                    <div className="w-32 lg:w-48 h-10 lg:h-14 bg-gray-100 mt-6 lg:mt-10 rounded-full flex justify-center items-center bg-blue-500 cursor-pointer">
                        <Link className="lg:text-xl font-bold text-white" onClick={() => checkpassg() }>LOGIN</Link>
                    </div>
                </div>
                <div className="flex justify-center items-center"><h1 className="text-sm lg:text-lg font-bold mt-6 lg:mt-10">Or Sign In With Social Platforms</h1></div>
                <div className="flex justify-between mt-6 lg:mt-10 mx-10 space-x-4">
                    <div className="flex justify-center items-center w-9 lg:w-12 h-9 lg:h-12 border-solid border border-gray-700 rounded-full">
                        <i class="fab fill-current text-black text-lg lg:text-2xl fa-twitter"></i>
                    </div>
                    <div className="flex justify-center items-center w-9 lg:w-12 h-9 lg:h-12 border-solid border border-gray-700 rounded-full">
                        <i class="fab fill-current text-black text-lg lg:text-2xl fa-facebook-f"></i>
                    </div>
                    <div className="flex justify-center items-center w-9 lg:w-12 h-9 lg:h-12 border-solid border border-gray-700 rounded-full">
                        <i class="fab fill-current text-black text-lg lg:text-2xl fa-linkedin"></i>
                    </div>
                    <div className="flex justify-center items-center w-9 lg:w-12 h-9 lg:h-12 border-solid border border-gray-700 rounded-full">
                        <h1 className="text-lg lg:text-2xl font-bold font-sans">G</h1>
                    </div>
                </div>
				<div className="lg:hidden w-60 lg:w-80 flex flex-col justify-center items-center mt-20 lg:mt-32">
					<h1 className="text-sm lg:text-xl font-bold  cursor-pointer">Or Sign Up with :</h1>
					<h1 className="text-xs lg:text-sm text-blue-500 font-bold cursor-pointer mt-5" onClick={() => showthat()}>SIGN UP </h1>
				</div>
            </div>
        </div>
    )
}

export default Sign
