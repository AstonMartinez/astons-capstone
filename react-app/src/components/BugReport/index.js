import './BugReport.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const BugReport = ({onSubmit, onClose, user}) => {
    const sessionUser = useSelector(state => state.session.user)
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
            <div>
                <button onClick={onClose}>X</button>
                <div>
                    <h2>Report a Bug</h2>
                </div>
                <div>
                    <p>Please describe the bug you're experiencing and we will get back to you.</p>
                </div>
            </div>
            <div>
                <div>
                    <label htmlFor='user-email'>Email</label>
                    <p>This will only be used to contact you regarding the bug report.</p>
                    <input
                        type='text'
                        name='user-email'
                        id='bug-report-email'
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="Your email"
                    />
                </div>
                <div>
                    <label htmlFor='bug-description'>Description</label>
                    <p>Include screenshots or JavaScript console errors if helpful.</p>
                    <input
                        type='textarea'
                        name='bug-description'
                        id='bug-report-description'
                        value={bugDescription}
                        onChange={(e) => setBugDescription(e.target.value)}
                        placeholder="Describe the bug in detail here"
                    />
                </div>
                <div>
                    {errors && errors.map(error => (
                        <p>{error}</p>
                    ))}
                    <button onClick={handleSubmit}>Submit Bug Report</button>
                    <p onClick={onClose}>Cancel</p>
                </div>
            </div>
        </>
    )
}

export default BugReport;
