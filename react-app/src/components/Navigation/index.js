import React from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';


function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory()
	let navbar

	if(sessionUser) {
		navbar = (
			<div id='logged-in-nav-bar'>
				<div id='logged-in-left-nav'>
					<div>
					<NavLink to='/'><img src="https://i.ibb.co/B6kVtcs/small-lion-logo.png" id='questforge-logo' alt="lion-logo" border="0" /></NavLink>
					</div>
					<div className='nav-section-wrapper' id='questforge-h1-wrapper'>
						<h1 className='questforge-h1'>QuestForge</h1>
					</div>
					<div className='nav-section-wrapper'>
						<NavLink exact to='/my-dashboard'><h2 className='logged-in-nav-section'>Tasks</h2></NavLink>
					</div>
					<div className='nav-section-wrapper'>
						<NavLink exact to='/inventory'><h2 className='logged-in-nav-section'>Inventory</h2></NavLink>
					</div>
					<div className='nav-section-wrapper'>
						<NavLink exact to='/shops'><h2 className='logged-in-nav-section'>Shops</h2></NavLink>
					</div>
				</div>
				<div id='logged-in-right-nav'>
					<p>{sessionUser.gold}</p>
					<ProfileButton user={sessionUser} />
					<div id='nav-decor-container'>
						<img id='nav-decor' src="https://i.ibb.co/Msbgjcg/trying-again.png" alt="trying-again" border="0" />
					</div>
				</div>
			</div>

		)

	} else {
		navbar = (
			<div id='logged-out-nav-bar'>
				<div id='logged-out-nav-left'>
				{/* <NavLink exact to="/">Home</NavLink> */}
				<img src="https://i.ibb.co/B6kVtcs/small-lion-logo.png" id='questforge-logo' alt="lion-logo" border="0" onClick={() => history.push('/')} />
					<div>
						<h1>QuestForge</h1>
					</div>
					<div>
						<button>Get Started</button>
						<button>Learn More</button>
					</div>
				</div>
				<div id='logged-out-nav-right'>
					<button onClick={() => {
						return history.push('/login')
					}}>Log In</button>
				</div>
			</div>
		)
	}

	return (
		<div id='nav-bar-wrapper'>
			{isLoaded && navbar}
		</div>
	);
}

export default Navigation;
