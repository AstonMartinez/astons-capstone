import './Footer.css'

const Footer = () => {
    return (
        <div id='footer-wrapper'>
            <div id='upper-wrapper'>
                <div id='first-third'>
                    <div>
                        <h5>Created By:</h5>
                        <span>img...</span>
                        <p>Aston Martinez</p>
                        <div id='my-socials'>
                            <span>LinkedIn</span>
                            <span>GitHub</span>
                        </div>
                    </div>
                    <div>
                        <h5>Support:</h5>
                        <ul>
                            <li>FAQ</li>
                            <li>Report a Bug</li>
                            <li>Request a Feature</li>
                            <li>Wiki</li>
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
