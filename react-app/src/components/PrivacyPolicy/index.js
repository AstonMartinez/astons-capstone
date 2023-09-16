import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
    return (
        <div id='privacy-policy-parent-container'>
            <div id='privacy-policy-inner-container'>
                <div id='privacy-policy-header-container'>
                    <h1 className='privacy-policy-h1'>Privacy Notice</h1>
                </div>
                    <div>
                        <div>
                            <h2 className='privacy-policy-h2'>THE INFORMATION WE COLLECT AND HOW WE USE IT</h2>
                        </div>
                        <div>
                            <h3 className='privacy-policy-h3'>Storing Information</h3>
                            <p>Because this is simply a portfolio project website, we do not store any user data besides the information provided on signup. (:</p>
                        </div>
                        <div>
                            <h3 className='privacy-policy-h3'>Cookies and Similar Technologies</h3>
                            <p> We may collect information using cookies, web beacons, tags, pixel and other similar technologies to record information about how you use the Website, and to facilitate log-in and payments. Cookies are small packets of data that a website stores on your computer’s or mobile device’s hard drive (or other storage medium) so that your computer will “remember” information about your use. We use both first and third party session cookies and persistent cookies. Below is a general primer on session and persistent cookies; information collected by cookies depends on its particular purpose. For more information, please see the information regarding analytics providers discussed further below.</p>
                            <ul className='privacy-policy-list'>
                                <li><span className='pp-list-span'>Session Cookies:</span> We use session cookies to make it easier for you to navigate our Service. A session ID cookie expires when you close the Service.</li>
                                <li><span className='pp-list-span'>Persistent Cookies:</span> A persistent cookie remains on your device for an extended period of time or until you delete it. Persistent cookies enable us to better understand how you interact with the Service and to provide visitors with a better and more personalized experience by retaining information about their identity and preferences, including but not limited to keeping them logged in even if the browser is closed.</li>
                            </ul>
                            <p>If you do not want us to place a cookie on your device, you may be able to turn that feature off on your device. You may refuse to accept cookies from the Service at any time by activating the setting on your browser which allows you to refuse cookies. Further information about the procedure to follow in order to disable cookies can be found on your Internet browser provider’s website via your help screen. You may wish to refer to <a className='privacy-policy-links' href='https://www.allaboutcookies.org/manage-cookies/index.html'>https://www.allaboutcookies.org/manage-cookies/index.html</a> for information on commonly used browsers. For more information about targeting and advertising cookies and how you can opt out, you can also visit <a className='privacy-policy-links' href='https://optout.aboutads.info'>https://optout.aboutads.info</a>. Please be aware that if cookies are disabled, not all features of the Service may operate properly or as intended.</p>
                        </div>
                    </div>
                <div>
                    <div>
                        <div>
                            <h2 className='privacy-policy-h2'>HOW WE PROTECT YOUR INFORMATION</h2>
                            <p>QuestForge takes very seriously the security and privacy of the personal information that it collects pursuant to this Privacy Notice. Accordingly, we implement reasonable security measures designed to protect your personal information from loss, misuse and unauthorized access, disclosure, alteration and destruction, taking into account the risks involved in processing and the nature of such data, and to comply with applicable laws and regulations. Please understand, however, that no security system is impenetrable. We cannot guarantee the security of our databases or the databases of the third parties with which we may share your information (as permitted herein), nor can we guarantee that the information you supply will not be intercepted while being transmitted over the Internet. In particular, e-mail sent to us may not be secure, and you should therefore take special care in deciding what information you send to us via e-mail.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='privacy-policy-h2'>HOW TO CONTACT US</h2>
                        <p>If you have questions about this Privacy Notice, please email us at aston.martinez1614@gmail.com with "Privacy Notice" in the subject line.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;
