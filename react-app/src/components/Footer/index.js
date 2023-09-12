import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div id='footer-wrapper'>
            <div id='upper-wrapper'>
                <div id='first-third'>
                    <div>
                        <h5>Created By:</h5>
                        <span><img id='photo-of-me' src="https://i.ibb.co/tx6PSKS/aston-about-photo.jpg" alt='Aston Martinez' border="0"></img></span>
                        <p>Aston Martinez</p>
                        <div id='my-socials'>
                            <a href='https://www.linkedin.com/in/aston-martinez-0716/'><img id="linkedin-footer-logo" src="https://i.ibb.co/5j5Wn4H/linkedin-logo.png" alt="linkedin-logo" border="0" /></a>
                            <a href='https://github.com/AstonMartinez'><img id="github-footer-logo" src="https://i.ibb.co/K0n6zXY/github-logo.png" alt="github-logo" border="0" /></a>
                        </div>
                    </div>
                    <div>
                        <h5>Support:</h5>
                        <ul>
                            <li><NavLink exact to='/faq'>FAQ</NavLink></li>
                            <li><NavLink exact to='/bug-report'>Report a Bug</NavLink></li>
                            <li><NavLink exact to='/feature-request'>Request a Feature</NavLink></li>
                            <li><NavLink exact to='/wiki'>Wiki</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div id='second-third'>
                    <div>
                        <h5>Help Support QuestForge</h5>
                        <p>...</p>
                    </div>
                    <div>
                        <button>Donate to QuestForge</button>
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
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
