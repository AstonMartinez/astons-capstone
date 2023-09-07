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
				<div>
					<div>
						<h1>QuestForge</h1>
					</div>
					<div>
						<h2>Tasks</h2>
					</div>
					<div>
						<h2>Inventory</h2>
					</div>
					<div>
						<h2>Shops</h2>
					</div>
				</div>
				<div>
					<p>{sessionUser.gold}</p>
					<ProfileButton user={sessionUser} />
				</div>
			</div>

		)

	} else {
		navbar = (
			<div id='logged-out-nav-bar'>
				<div>
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
		<ul>
			<li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			{isLoaded && navbar}
		</ul>
	);
}

export default Navigation;
