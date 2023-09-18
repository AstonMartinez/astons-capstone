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
                <div id='f3-footer-footer'>
                    <img id='f3-footer-art-layer-1' src="https://habitica.com/static/img/midground_foreground_extended2.0fe8082c.png" alt="footer-layer" border="0" />
                </div>
            </div>
        </div>
    )
}

export default FooterThree;
