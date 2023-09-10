import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	let navbar

	if(sessionUser) {
		navbar = (
			<div id='logged-in-nav-bar'>
				<div id='logged-in-left-nav'>
					<div>
						<NavLink exact to="/">Home</NavLink>
					</div>
					<div className='nav-section-wrapper' id='questforge-h1-wrapper'>
						<h1 className='questforge-h1'>QuestForge</h1>
					</div>
					<div className='nav-section-wrapper'>
						<h2 className='logged-in-nav-section'>Tasks</h2>
					</div>
					<div className='nav-section-wrapper'>
						<h2 className='logged-in-nav-section'>Inventory</h2>
					</div>
					<div className='nav-section-wrapper'>
						<h2 className='logged-in-nav-section'>Shops</h2>
					</div>
				</div>
				<div id='logged-in-right-nav'>
					<p>{sessionUser.gold}</p>
					<ProfileButton user={sessionUser} />
				</div>
			</div>

		)

	} else {
		navbar = (
			<div id='logged-out-nav-bar'>
				<div>
				<NavLink exact to="/">Home</NavLink>
					<div>
						<h1>QuestForge</h1>
					</div>
					<div>
						<button>Get Started</button>
						<button>Learn More</button>
					</div>
				</div>
				<div>
					<NavLink exact to='/login'>Log In</NavLink>
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
