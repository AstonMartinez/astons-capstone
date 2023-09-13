import './Footer.css'
import { NavLink } from 'react-router-dom'
import CreateBugReport from './CreateReport'
import BugReport from '../BugReport'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const [showModal, setShowModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div id='footer-wrapper'>
            <div id='upper-wrapper'>
                <div id='first-half-footer'>
                    <div id='footer-about-container'>
                        <h5>Created By:</h5>
                        <span><img id='photo-of-me' src="https://i.ibb.co/tx6PSKS/aston-about-photo.jpg" alt='Aston Martinez' border="0"></img></span>
                        <p id='footer-my-name'>Aston Martinez</p>
                        <div id='my-socials'>
                            <a href='https://www.linkedin.com/in/aston-martinez-0716/'><img id="linkedin-footer-logo" src="https://i.ibb.co/5j5Wn4H/linkedin-logo.png" alt="linkedin-logo" border="0" /></a>
                            <a href='https://github.com/AstonMartinez'><img id="github-footer-logo" src="https://i.ibb.co/K0n6zXY/github-logo.png" alt="github-logo" border="0" /></a>
                        </div>
                    </div>
                    <div id='footer-support-container'>
                        <h5>Support:</h5>
                        {/* <ul> */}
                            <p><NavLink exact to='/faq'>FAQ</NavLink></p>
                            <p id='bug-report-button' onClick={() => setShowModal(true)}>Report a Bug
                                <CreateBugReport />
                            </p>
                            <p><NavLink exact to='/feature-request'>Request a Feature</NavLink></p>
                            <p><NavLink exact to='/wiki'>Wiki</NavLink></p>
                        {/* </ul> */}
                    </div>
                </div>
            </div>
            <div id='lower-wrapper'>
                <div id='copyright-container'>
                    <p>© 2023 QuestForge. All rights reserved.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/4p9CmV4/small-gray-lion.png" alt="small-gray-lion" border="0" />
                </div>
                <div id='privacy-policy-and-tos'>
                    <NavLink exact to='/privacy-policy'><p>Privacy Policy</p></NavLink>
                    <NavLink exact to='/tos'><p>Terms and Conditions</p></NavLink>
                </div>
            </div>
            {showModal && (
                <BugReport
                    user={sessionUser}
                    onClose={() => {
                        setShowModal(false)
                    }}
                    onSubmit={() => {
                        setShowModal(false)
                    }}
                />
            )}
        </div>
    )
}

export default Footer;
