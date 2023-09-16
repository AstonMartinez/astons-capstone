import './OtherFooter.css'
import { NavLink } from 'react-router-dom'
import CreateBugReport from './CreateReport'
import BugReport from '../BugReport'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const FooterThree = () => {
    const [showModal, setShowModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div id='footer-three-wrapper'>
            <div id='f3-footer-wrapper'>
                {/* <div id='lp-upper-wrapper'>
                    <div id='lp-first-half-footer'>
                        <div id='lp-footer-about-container'>
                            <h5 id='other-footer-h5'>Created By:</h5>
                            <span><img id='photo-of-me' src="https://i.ibb.co/tx6PSKS/aston-about-photo.jpg" alt='Aston Martinez' border="0"></img></span>
                            <p id='lp-footer-my-name'>Aston Martinez</p>
                            <div id='my-socials'>
                                <a href='https://www.linkedin.com/in/aston-martinez-0716/'><img id="linkedin-footer-logo" src="https://i.ibb.co/5j5Wn4H/linkedin-logo.png" alt="linkedin-logo" border="0" /></a>
                                <a href='https://github.com/AstonMartinez'><img id="github-footer-logo" src="https://i.ibb.co/K0n6zXY/github-logo.png" alt="github-logo" border="0" /></a>
                            </div>
                        </div>
                        <div id='lp-footer-support-container'>
                            <h5 id='other-footer-h5-support'>Support:</h5>

                                <p className='other-footer-light-text'><NavLink exact to='/faq'>FAQ</NavLink></p>
                                <p className='other-footer-light-text' id='lp-bug-report-button' onClick={() => setShowModal(true)}>Report a Bug
                                    <CreateBugReport />
                                </p>
                                <p className='other-footer-light-text'><NavLink exact to='/feature-request'>Request a Feature</NavLink></p>
                                <p className='other-footer-light-text'><NavLink exact to='/wiki'>Wiki</NavLink></p> */}

                        {/* </div>
                    </div>
                </div>
                <div id='lp-lower-wrapper'>
                    <div id='lp-copyright-container'>
                        <p>© 2023 QuestForge. All rights reserved.</p>
                    </div>
                    <div id='lp-privacy-policy-and-tos'>
                        <NavLink exact to='/privacy-policy'><p className='other-footer-light-text'>Privacy Policy</p></NavLink>
                        <NavLink exact to='/tos'><p className='other-footer-light-text'>Terms and Conditions</p></NavLink>
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
                )} */}
                <div id='f3-footer-footer'>
                    <img id='f3-footer-art-layer-1' src="https://habitica.com/static/img/midground_foreground_extended2.0fe8082c.png" alt="footer-layer" border="0" />
                </div>

            </div>
        </div>
    )
}

export default FooterThree;
