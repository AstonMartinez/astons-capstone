import './RequestFeature.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const RequestFeature = () => {
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [featureCategory, setFeatureCategory] = useState('')
    const [response, setResponse] = useState('')
    const [requestDescription, setRequestDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const featureRequest = {
            email: email,
            category: featureCategory,
            response: response,
            description: requestDescription
        }

        const res = await fetch('/api/features/new', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(featureRequest)
        })

        if(res.ok) {
            if(sessionUser) {
                history.push('/my-dashboard')
                return
            } else {
                history.push('/login')
                return
            }
        } else {
            alert("Something went wrong. Please check your submission and try again.")
        }
    }


    let finalQuestions

    if(featureCategory === 'Accessibility, Layout, and UI') {
        finalQuestions = (
            <div id='accessibility-category-display'>
                <label className='feature-request-labels' htmlFor='accessibility-request'>Which of these best fits your comment or request?<span className='asterisk-span'>*</span></label>
                <div className='request-answer-options'>
                    <div className='individual-answer-option'>
                        <input
                            type='radio'
                            name='accessibility-request'
                            value="Accessibility for users with disabilities or neurodivergence"
                            onChange={(e) => setResponse(e.target.value)}
                            required
                        /><p className='radio-input-text'>Accessibility for users with disabilities or neurodivergence</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type='radio'
                            name='accessibility-request'
                            value="General user interface and ease of use, layout"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>General user interface and ease of use, layout</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type='radio'
                            name='accessibility-request'
                            value="Inclusivity"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Inclusivity</p>
                    </div>
                </div>
            </div>
        )
    } else if(featureCategory === "Tasks (Including Rewards)") {
        finalQuestions = (
            <div id='tasks-category-display'>
                <label className='feature-request-labels' htmlFor='task-options'>Which of these best fits your comment or request?<span className='asterisk-span'>*</span></label>
                <div className='request-answer-options'>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="task-options"
                            value="Task tab or page layout"
                            onChange={(e) => setResponse(e.target.value)}
                            required
                        /><p className='radio-input-text'>Task tab or page layout</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="task-options"
                            value="Task Types (Habits, Dailies, To-Do's, etc)"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Task Types (Habits, Dailies, To-Do's, etc)</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="task-options"
                            value="Task creation and editing"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Task creation and editing</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="task-options"
                            value="Task scheduling and due dates"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Task scheduling and due dates</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="task-options"
                            value="Rewards Tab or Column"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Rewards Tab or Column</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="task-options"
                            value="Task value or color"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Task value or color</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="task-options"
                            value="Checklists"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Checklists</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="task-options"
                            value="Items earned from tasks (XP, Gold, Drops)"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Items earned from tasks (XP, Gold, Drops)</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="task-options"
                            value="Day Turnover (Cron)"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Day Turnover (Cron)</p>
                    </div>
                </div>
            </div>
        )

    } else if(featureCategory === "Gameplay, Content, and Cosmetic Items (Including Quests)") {
        finalQuestions = (
            <div id='content-category-display'>
                <label className='feature-request-labels' htmlFor='content-options'>Which of these best fits your comment or request?<span className='asterisk-span'>*</span></label>
                <div className='request-answer-options'>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="content-options"
                            value="Quests"
                            onChange={(e) => setResponse(e.target.value)}
                            required
                        /><p className='radio-input-text'>Quests</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="content-options"
                            value="Avatar Customization and appearance (gear, backgrounds, skin and hair, glasses, wheelchairs, etc)"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Avatar Customization and appearance (gear, backgrounds, skin and hair, glasses, wheelchairs, etc)</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="content-options"
                            value="Pets and Mounts"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Pets and Mounts</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="content-options"
                            value="Skills and Buffs"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Skills and Buffs</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="content-options"
                            value="Events (Holidays, Grand Galas, etc.)"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Events (Holidays, Grand Galas, etc.)</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="content-options"
                            value="Off-QuestForge content (official social media accounts and blogs)"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Off-QuestForge content (official social media accounts and blogs)</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="content-options"
                            value="Damage/Health Loss"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Damage/Health Loss</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type="radio"
                            name="content-options"
                            value="Shops (Market, Seasonal Shop, Quest Shop, Time Travelers' Shop)"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Shops (Market, Seasonal Shop, Quest Shop, Time Travelers' Shop)</p>
                    </div>
                </div>
            </div>
        )

    } else if(featureCategory === "Social Spaces (Party, Challenges)") {
        finalQuestions = (
            <div id='social-category-display'>
                <label className='feature-request-labels' htmlFor='social-options'>Which of these best fits your comment or request? **DO NOT USE THIS FORM TO REPORT INAPPROPRIATE BEHAVIOR** - please flag the messages involved or email aston.martinez1614@gmail.com</label>
                <div className='request-answer-options'>
                    <div className='individual-answer-option'>
                        <input
                            type='radio'
                            name='social-options'
                            value="Party Page"
                            onChange={(e) => setResponse(e.target.value)}
                            required
                        /><p className='radio-input-text'>Party Page</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type='radio'
                            name='social-options'
                            value="Challenges"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Challenges</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type='radio'
                            name='social-options'
                            value="Private Messages"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Private Messages</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type='radio'
                            name='social-options'
                            value="General chat interface"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>General chat interface</p>
                    </div>
                    <div className='individual-answer-option'>
                        <input
                            type='radio'
                            name='social-options'
                            value="Interface for flagging and reporting inappropriate messages"
                            onChange={(e) => setResponse(e.target.value)}
                        /><p className='radio-input-text'>Interface for flagging and reporting inappropriate messages</p>
                    </div>
                </div>
            </div>
        )
    } else {
        finalQuestions = ''
    }




    return (
        <form id='feature-request-wrapper'>
            <div id='fr-header'>
                <h2>Request a Feature</h2>
            </div>
            <div id='email-div'>
                <label  className='feature-request-labels' htmlFor='feature-report-email'>Your Email<span className='asterisk-span'>*</span></label>
                <input
                    type='text'
                    name='feature-report-email'
                    id='feature-report-email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email here"
                    required
                />
            </div>
            <div id='category-div'>
                <label className='feature-request-labels' id='first-category-question' htmlFor='feature-category'>Which of these categories best fits your feedback?<span className='asterisk-span'>*</span></label>
                <div className='individual-answer-option'>
                    <input
                        type='radio'
                        name='feature-category'
                        value="Accessibility, Layout, and UI"
                        onChange={(e) => setFeatureCategory(e.target.value)}
                        required
                    /><p className='radio-input-text'>Accessibility, Layout, and UI</p>
                </div>
                <div className='individual-answer-option'>
                    <input
                        type='radio'
                        name='feature-category'
                        value="Tasks (Including Rewards)"
                        onChange={(e) => setFeatureCategory(e.target.value)}
                    /><p className='radio-input-text'>Tasks (Including Rewards)</p>
                </div>
                <div className='individual-answer-option'>
                    <input
                        type='radio'
                        name='feature-category'
                        value="Gameplay, Content, and Cosmetic Items (Including Quests)"
                        onChange={(e) => setFeatureCategory(e.target.value)}
                    /><p className='radio-input-text'>Gameplay, Content, and Cosmetic Items (Including Quests)</p>
                </div>
                <div className='individual-answer-option'>
                    <input
                        type='radio'
                        name='feature-category'
                        value="Social Spaces (Party, Challenges)"
                        onChange={(e) => setFeatureCategory(e.target.value)}
                    /><p className='radio-input-text'>Social Spaces (Party, Challenges)</p>
                </div>
            </div>
            {finalQuestions}
            <div id='request-notes-container'>
                <label className='feature-request-labels' htmlFor='request-notes'>You may give more details about your request here. <span className='asterisk-span'>*</span></label>
                <textarea
                    id='fr-notes-input'
                    name='request-notes'
                    value={requestDescription}
                    onChange={(e) => setRequestDescription(e.target.value)}
                    placeholder="Your answer"
                    required
                />
            </div>
            <div id='fr-submit-container'>
                <button id='feature-request-submit-button' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default RequestFeature;
