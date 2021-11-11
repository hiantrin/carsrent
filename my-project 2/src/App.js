import {useState, useEffect} from 'react'
import Tag from './components/Tag'
import Navbar from './components/Navbar'
import Contents from './components/Contents';
import Contents2 from './components/Contents2'
import Contents3 from './components/Contents3';
import Weknow from './components/Weknow'
import Chooseus from './components/Chooseus';
import Carstype from './components/Carstype';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import Totop from './components/Totop';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Choose from './components/Choose';
import Loginagence from './pages/Loginagence';
import RegisterA from './pages/RegisterA';
import Admin from './pages/Admin';

function Home () {
	return (
		<div>
			{/* <Tag /> */}
			<div className="large-img opcity-50 pb-40 pt-32">
				<Navbar />
				<Contents />
			</div>
			<Contents2 />
			<Contents3 />
			<Weknow />
			<Chooseus />
			<Carstype />
			<Subscribe />
			<Footer />
			<Totop />
		</div>
	)
}



function App () {
	return (
		<>
			<Switch>
				<Route path='/' exact component={Choose} />
				<Route path='/Login/Client' exact component={Login} />
				<Route path='/Register' exact component={Register} />
				<Route path='/Profile'  exact component={Profile} />
				<Route path='/home'  exact component={Home} />
				<Route path='/home'  exact component={Home} />
				<Route path='/Login/Agence'  exact component={Loginagence} />
				<Route path='/Agence/Register'  exact component={RegisterA} />
				<Route path='/Agence/Admin'  exact component={Admin} />
			</Switch>
		</>
	)
}

export default App