import './BugReport.css'
import { useState, useRef } from 'react'
import { useSelector } from 'react-redux'

const BugReport = ({onSubmit, onClose, user}) => {
    const sessionUser = useSelector(state => state.session.user)
    const modalOverlayRef = useRef()
    const determineIfUser = () => {
        if(user !== null) {
            return sessionUser.email
        } else {
            return ''
        }
    }

    const initialEmailFill = determineIfUser()
    const [userEmail, setUserEmail] = useState(initialEmailFill)
    const [bugDescription, setBugDescription] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newReport = {
            email: userEmail,
            bug_description: bugDescription
        }

        const res = await fetch('/api/reports/new', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReport)
        })
        if(res.ok) {
            onSubmit()
        } else {
            const errors = await res.JSON()
            setErrors(errors)
        }
    }

    return (
        <>
            <div className='habit-update-modal-backdrop' ref={modalOverlayRef}></div>
            <div id='bug-report-modal-inner-wrap'>
                <div id='bug-report-title-container'>
                    <div id='bug-report-x-button-container'>
                        <button onClick={onClose}>X</button>

                    </div>
                    <div>
                        <h2>Report a Bug</h2>
                    </div>
                    <div>
                        <p>Please describe the bug you're experiencing and we will get back to you.</p>
                    </div>
                </div>
                <div id='report-form-container'>
                    <div>
                        <div>
                            <label htmlFor='user-email'>Email<span id='required-asterisk'>*</span></label>
                            <p>This will only be used to contact you regarding the bug report.</p>
                        </div>
                        <div id='bug-report-email-container'>
                            <input
                                type='text'
                                name='user-email'
                                id='bug-report-email-field'
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                placeholder="Your email"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='bug-description'>Description<span id='required-asterisk'>*</span></label>
                            <p>Include screenshots or JavaScript console errors if helpful.</p>
                        </div>
                        <div id='bug-report-desc-container'>

                        <textarea
                            name='bug-description'
                            id='bug-report-description-field'
                            value={bugDescription}
                            onChange={(e) => setBugDescription(e.target.value)}
                            placeholder="Describe the bug in detail here"
                        />
                        </div>
                    </div>
                    <div>
                        {errors && errors.map(error => (
                            <p>{error}</p>
                        ))}
                        <button id='bug-report-submit-button' onClick={handleSubmit}>Submit Bug Report</button>
                        {/* <p onClick={onClose}>Cancel</p> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default BugReport;
