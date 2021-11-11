import React from 'react'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
// import {reactLocalStorage} from 'reactjs-localstorage';

const Registeragence = () => {
	const [Name, setName] = useState("");
	const [Lastname, setLastname] = useState("");
	const [city, setcity] = useState("");
	const [phone, setphone] = useState("");
	const [fix, setfix] = useState("");
	const [Birthday, setBirthday] = useState(0);
	const [id, setid] = useState("");
	const [address, setaddress] = useState("");
	
	const [Namealert, setNamealert] = useState("a");
	const [Lastnamealert, setLastnamealert] = useState("a");
	const [cityalert, setcityalert] = useState("a");
	const [phonealert, setphonealert] = useState("a");
	const [fixalert, setfixalert] = useState("a");
	const [birthdayalert, setbirthdayalert] = useState("a");
	const [idalert, setidalert] = useState("a");
	const [adressalert, setadressalert] = useState("a");

	const checkname = (name, i) => {
		const isAlphaNumeric = str => /^[a-z]+$/gi.test(str);
		if (name.length < 3)
		{
			(i === 1) ? setNamealert("lenght must be at least 3 characters long") : setLastnamealert("lenght must be at least 3 characters long");
			return false;
		}
		if (name.length > 20)
		{
			(i === 1) ? setNamealert("lenght must be less than 21 characters long") : setLastnamealert("lenght must be less than 21 characters long");
			return false;
		}
		else if (!isAlphaNumeric(name))
		{
			(i === 1) ? setNamealert("name must contain just characters") : setLastnamealert("name must contain just characters");
			return false;
		}
		else
		{
			(i === 1) ? setNamealert("a") : setLastnamealert("a");
			return true;
		}
	}

	const checkcity = (city) => {
		if (city.length < 3)
		{
			setcityalert("lenght must be at least 3 characters long");
			return false;
		}
		if (city.length > 16)
		{
			setcityalert("lenght must be less than 16 characters long");
			return false;
		}
		else
		{
			setcityalert("a");
			return true;
		}
	}

	const checkphone = (phone, number) => {
		if (phone.length !== 10)
		{
			if (number === 1)
				setphonealert("lenght must be exact 10 characters long");
			if (number === 2)
				setfixalert("lenght must be exact 10 characters long");
			return false;
		}
		else
		{
			if (number === 1)
				setphonealert("a");
			if (number === 2)
				setfixalert("a");
			return true;
		}
	}

	const checkbirthdayv2 = (Birthday) => {
		const arr = Birthday.split("-", 1);
		let year = parseInt(arr[0], 10);
		const newdate = new Date();
		const currentyear = newdate.getFullYear();
		if (year <= 1900)
		{
			setbirthdayalert("date of birth must be over than 1900 in years");
			return false;
		}
		else if (currentyear - year < 18)
		{ 
			setbirthdayalert("your age must be over than 18");
			return false;
		}
		else
		{
			setbirthdayalert("a");
			return true;
		}
	}

	const checkbirthday = (Birthday) => {
		if (Birthday === 0)
		{
			setbirthdayalert("please select a date of birth");
			return false;
		}
		else
			return checkbirthdayv2(Birthday);
	}

	const checkid = (id) => {
		const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);
		if (id.length < 6)
		{
			setidalert("your id must contains at least 6 characters");
			return false;
		}
		if (id.length > 8)
		{
			setidalert("your id must be less than 9 characters");
			return false;
		}
		else if (!isAlphaNumeric(id) || !checkaddressv2(id))
		{
			setidalert("Your id must contain Letters and Numbers");
			return false;
		}
		else
		{
			setidalert("a");
			return true;
		}
	}

	const checkaddressv2 = (addresso) => {
		
		for (var i = 0; i < addresso.length; i++) {
				if (!isNaN(addresso.charAt(i)) )
				{
					return true ;
				}
		}
		return false ;
	}


	const checkaddress = (addresso) => {
		if (addresso.length < 10)
		{
			setadressalert("lenght must be at least 10 characters long");
			return false;
		}
		else if (addresso.length > 50)
		{
			setadressalert("lenght must be less than  50 characters long");
			return false;
		}
		else if (!addresso.includes(','))
		{
			setadressalert("your address must contains ','");
			return false;
		}
		else if (!checkaddressv2(addresso))
		{
			setadressalert("your address must contains Letters and Numbers");
			return false;
		}
		else
		{
			setadressalert("a");
			return true;
		}
	}

	const callall = () => {
		const j1 = checkphone(fix, 2);
		const j2 = checkname(Name, 1);
		const j3 = checkname(Lastname, 2);
		const j4 = checkcity(city);
		const j5 = checkphone(phone, 1);
		const j6 = checkbirthday(Birthday);
		const j7 = checkid(id);
		const j8 = checkaddress(address);
		if (j1 && j2 && j3 && j4 && j5 && j6 && j7 && j8)
			return true;
		else
			return false;
	}

	const addTolist = async () => {
		var a = 0;

		await Axios.post("http://localhost:3001/Register/Agence", {
            Ownername : Name,
            Ownerlastname : Lastname,
			City : city, 
			Ownerphone : phone,
			Agencephone  : fix, 
			Agencebirthday  : Birthday,
			id  : id,
			address  : address,
			token: localStorage.getItem("token"),
		}).then((response) => {
			console.log(response.data);
			a = 1;
		}).catch((error) => {
			console.log(error.response.data);
			a = 0;
		})

		return (a);
	}

	const checkadd = async () => {
		const j = await callall();
		if (!j)
		{
			console.log("error");
			return ;
		}
		else 
		{
			const g = await addTolist();
			if (g === 1)
			{
				console.log("success backend zbi");
				window.location.pathname = '/home';
			}
			else
			{
				console.log("error back end");
			}
				
			return ;
		}
	}

	


    return (
		<div className="flex flex-col justify-center items-center ">
		<h1 className="text-5xl font-bold text-black mt-10 z-20 registration-font">Registration</h1>
        <div className="flex flex-col items-center justify-center z-20 mt-16">
            <div className="w-hadak flex-col justify-between items-center rounded-3xl lg:grid lg:grid-rows-4 lg:grid-flow-col lg:gap-2">
            <div className="mt-6">
					<h1 className={(Namealert !== "a") ? ' ml-4 text-red-500 font-serif' : 'opacity-0'}>{Namealert}</h1>
					<div className={(Namealert !== "a") ? 'w-80 h-16 bg-white rounded-full flex items-center border-4 border-red-500 in-w' : 'w-80 h-16 bg-white rounded-full flex items-center in-w'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
						</svg>
						<input type="text" className="font-bold w-56 h-10 white focus:outline-none px-2  placeholder-gray-500 in-in" placeholder="Owner Name" onChange={(event) => {setName(event.target.value)}}></input>
						<div className={(Namealert !== "a") ? 'flex' : 'hidden'}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
							</svg>
						</div>
					</div>
				</div>
				<div className="mt-6">
					<h1 className={(Lastnamealert !== "a") ? ' ml-4 text-red-500 font-serif' : 'opacity-0'}>{Lastnamealert}</h1>
					<div className={(Lastnamealert !== "a") ? 'w-80 h-16 bg-white rounded-full flex items-center border-4 border-red-500 in-w' : 'w-80 h-16 bg-white rounded-full flex items-center in-w'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
						</svg>
						<input type="text" className="font-bold w-56 h-10 white focus:outline-none px-2  placeholder-gray-500 in-in" placeholder="Owner Lastname" onChange={(event) => {setLastname(event.target.value)}}></input>
						<div className={(Lastnamealert !== "a") ? 'flex' : 'hidden'}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
							</svg>
						</div>
					</div>
				</div>
				<div className="mt-6">
					<h1 className={(cityalert !== "a") ? ' ml-4 text-red-500 font-serif' : 'opacity-0'}>{cityalert}</h1>
                	<div className={(cityalert !== "a") ? 'w-80 h-16 bg-white  rounded-full flex items-center border-4 border-red-500 in-w' : 'w-80 h-16 bg-white  rounded-full flex items-center in-w'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  						<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
						</svg>
						<input type="text" className="font-bold w-56 h-10 bg-white focus:outline-none px-2  placeholder-gray-500 in-in" placeholder="Agence City" onChange={(event) => {setcity(event.target.value)}}></input>
						<div className={(cityalert !== "a") ? 'flex' : 'hidden'}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
							</svg>
						</div>
					</div>
				</div>
				<div className="mt-6">
					<h1 className={(phonealert !== "a") ? ' ml-4 text-red-500 font-serif' : 'opacity-0'}>{phonealert}</h1>
					<div className={(phonealert !== "a") ? 'w-80 h-16 bg-white rounded-full mx-0 flex items-center border-4 border-red-500 in-w' : 'w-80 h-16 bg-white rounded-full mx-0 flex items-center in-w'}>
                    	<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    	<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    	</svg>
						<input type="number" pattern="[0-9]*" className="font-bold w-56 h-10 bg-white focus:outline-none px-2  placeholder-gray-500 in-in" placeholder="Owner phone" onChange={(event) => {setphone(event.target.value)}}></input>
						<div className={(phonealert !== "a")? 'flex' : 'hidden'}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
							</svg>
						</div>
                	</div>
				</div>
				<div className="mt-6">
					<h1 className={(fixalert !== "a") ? ' ml-4 text-red-500 font-serif' : 'opacity-0'}>{fixalert}</h1>
					<div className={(fixalert !== "a") ? 'w-80 h-16 bg-white rounded-full mx-0 flex items-center border-4 border-red-500 in-w' : 'w-80 h-16 bg-white rounded-full mx-0 flex items-center in-w'}>
                    	<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    	<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    	</svg>
						<input type="number" pattern="[0-9]*" className="font-bold w-56 h-10 bg-white focus:outline-none px-2  placeholder-gray-500 in-in" placeholder="Agence phone" onChange={(event) => {setfix(event.target.value)}}></input>
						<div className={(fixalert !== "a")? 'flex' : 'hidden'}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
							</svg>
						</div>
                	</div>
				</div>
				<div className="mt-6">
					<h1 className={(birthdayalert !== "a") ? ' ml-4 text-red-500 font-serif' : 'opacity-0'}>{birthdayalert}</h1>
                	<div className={(birthdayalert !== "a") ? 'w-80 h-16 bg-white  rounded-full flex items-center border-4 border-red-500 in-w' : 'w-80 h-16 bg-white  rounded-full flex items-center in-w'}>
                   		<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    	<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    	</svg>
						<input type="date" className="font-bold w-56 h-10 bg-white focus:outline-none px-2  placeholder-gray-500 in-in" placeholder="Birthday Date" onChange={(event) => {setBirthday(event.target.value)}}></input>
						<div className={(birthdayalert !== "a")? 'flex' : 'hidden'}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
							</svg>
						</div>
					</div>
				</div>
				<div className="mt-6">
					<h1 className={(idalert !== "a") ? ' ml-4 text-red-500 font-serif' : 'opacity-0'}>{idalert}</h1>
                	<div className={(idalert !== "a") ? 'w-80 h-16 bg-white rounded-full flex items-center border-4 border-red-500 in-w' : 'w-80 h-16 bg-white rounded-full flex items-center in-w'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  						<path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
						</svg>
						<input type="text" className="font-bold w-56 h-10 bg-white focus:outline-none px-2  placeholder-gray-500 in-in" placeholder="Owner Card Id" onChange={(event) => {setid(event.target.value)}}></input>
						<div className={(idalert !== "a") ? 'flex' : 'hidden'}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
							</svg>
						</div>
					</div>
				</div>
				<div className="mt-6">
					<h1 className={(adressalert !== "a") ? ' ml-4 text-red-500 font-serif' : 'opacity-0'}>{adressalert}</h1>
                	<div className={(adressalert !== "a") ? 'w-80 h-16 bg-white  rounded-full flex items-center border-4 border-red-500 in-w' : 'w-80 h-16 bg-white  rounded-full flex items-center in-w'}>
						<svg xmlns="http://www.w3.org/2000/svg" className="ml-4 h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
						</svg>
						<input type="text" className="font-bold w-56 h-10 bg-white focus:outline-none px-2  placeholder-gray-500 in-in" placeholder="Agence Address" onChange={(event) => {setaddress(event.target.value)}}></input>
						<div className={(adressalert !== "a")? 'flex' : 'hidden'}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
  							<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
							</svg>
						</div>
					</div>
				</div>
            </div>
        </div>
			<Link  className="mt-28 text-xl font-bold text-black border-4  px-10 py-4 rounded-full border-black"  onClick={() => checkadd() } >Register</Link>
		</div>
    )
}

export default Registeragence
