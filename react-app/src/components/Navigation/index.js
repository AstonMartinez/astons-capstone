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
						<NavLink to='/my-dashboard'><img src="https://i.ibb.co/B6kVtcs/small-lion-logo.png" id='questforge-logo' alt="lion-logo" border="0" /></NavLink>
					</div>
					<div className='nav-section-wrapper' id='questforge-h1-wrapper'>
						<NavLink to='/'><h1 className='questforge-h1'>QuestForge</h1></NavLink>
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
					<div id='nav-bar-coin-container'>
					<p id='gold-text'>{sessionUser.gold} Gold</p>
						<div className='coin-circle'>
							<div className='inner-coin-circle'><p>Q</p></div>
						</div>
					</div>

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
					<div>
						<NavLink to='/'><img src="https://i.ibb.co/B6kVtcs/small-lion-logo.png" id='questforge-logo' alt="lion-logo" border="0" /></NavLink>
					</div>
					<div className='nav-section-wrapper' id='questforge-h1-wrapper'>
						<NavLink to='/'><h1 className='questforge-h1'>QuestForge</h1></NavLink>
					</div>
					<div id='signup-page-get-started'>
						<NavLink exact to='/signup'>Get Started</NavLink>
					</div>
					<div id='signup-page-learn-more'>
						<NavLink exact to='/faq'>Learn More</NavLink>
					</div>
				</div>
				<div id='logged-out-nav-right'>
					<button id='nav-bar-log-in-button' onClick={() => {
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
