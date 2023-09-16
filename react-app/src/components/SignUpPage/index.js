import './SignUpPage.css'
import { useState } from 'react'
import { signUp } from '../../store/session.js'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

const SignUpPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [errors, setErrors] = useState([])
    const [passwordMatchError, setPasswordMatchError] = useState('')
    const history = useHistory()

    const dispatch = useDispatch()

    if(sessionUser) return <Redirect to='/my-dashboard' />

    const onSubmit = async (e) => {
        e.preventDefault()
        if(password === passwordConfirm) {
            const res = await dispatch(signUp(username, email, password))
            if(res) {
                setErrors(res)
                return
            } else {
                return <Redirect to='/my-dashboard' />
            }

        } else {
            setPasswordMatchError('Confirm Password field must be the same as the Password field')
            return
        }
    }

    return (
        <div id='signup-page-wrapper'>
            <div id='signup-page-first-section'>
                <div id='left-side-signup-page-container'>
                    <div>
                    <img id='main-landing-page-img' src="https://i.ibb.co/6WjPKPk/home-main-3x-23eeafe4.png" alt="home-main-3x-23eeafe4" border="0" />
                        {/* <img alt='landing page art' src="https://i.ibb.co/PgnG6ky/pixil-frame-0.png"></img> */}
                    </div>
                    <div>
                        <h1>Level Up Your Life,<br></br>One Habit at a Time</h1>
                        {/* <h1>One Habit at a Time.</h1> */}
                    </div>
                </div>
                <div id='right-side-signup-page-container'>
                    <h2 id='signup-form-h2'>Sign Up For Free</h2>
                    <form id='signup-form' onSubmit={onSubmit}>
                        <div id='signup-form-username-container'>
                            <div id='su-label-container'>
                                <label id='signup-username-label' htmlFor='username'>Username must be 1 to 20 characters, containing only letters a to z, numbers 0 to 9, hyphens, or underscores.</label>
                            </div>
                            <div>

                                <input
                                type='text'
                                name='username'
                                id='username-input-field'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                />
                                {errors?.username && (<p>{errors.username}</p>)}
                            </div>
                        </div>
                        <div>
                            <input
                            type='email'
                            name='email'
                            id='email-input-field'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            />
                            {errors?.email && (<p>{errors.email}</p>)}
                        </div>
                        <div>
                            <input
                            type='password'
                            name='password'
                            id='password-field'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            />
                            {errors?.password && (<p>{errors.password}</p>)}
                        </div>
                        <div>
                            <input
                            type='password'
                            name='password-confirm'
                            id='password-confirm-field'
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            placeholder="Confirm Password"
                            />
                            <p>{passwordMatchError}</p>
                        </div>
                        {errors.length ? errors.map(error => (
                            <p>{error}</p>
                        )) : ''}
                        <div id='agreement-text-container'>
                            <p id='agreement-text'>By clicking the button below, you are indicating that you have read and agree to the Terms of Service and Privacy Policy.</p>
                        </div>
                        <div>
                            <button id='signup-submit-button' type='submit' disabled={(!username.length || !email.length || !password.length || !passwordConfirm.length) ? true : false}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <img id='signup-divider-one' src="https://i.ibb.co/7rjBYGL/new-divider-1.png" alt="new-divider-1" border="0" />
            </div>
            <div id='signup-page-second-section'>
                <div id='section-two-top'>
                    <div>
                        <h2>Gamify Your Life</h2>
                        <p>QuestForge is a free habit-building and productivity app that treats your real life like a game. With in-game rewards and punishments to motivate you and a strong social network to inspire you, QuestForge can help you achieve your goals to become healthy, hard-working, and happy.</p>
                    </div>
                </div>
                <div id='section-two-bottom'>
                    <div id='section-two-bottom-first-half'>
                        <img id='section-two-img-one' src="https://i.ibb.co/4gmNFQz/track-habits-3x-7293d5cc.png" alt="track-habits-3x-7293d5cc" border="0" />
                        <img id='section-two-img-two' src="https://i.ibb.co/FzD9dMt/earn-rewards-3x-acaba17e.png" alt="earn-rewards-3x-acaba17e" border="0" />
                        <img id='section-two-img-three' src="https://i.ibb.co/wy3v8sP/battle-monsters-3x-7cd8d3e0.png" alt="battle-monsters-3x-7cd8d3e0" border="0" />
                    </div>
                    <div id='section-two-bottom-second-half'>
                        <div id='section-two-bottom-second-half-titles'>
                            <h3 className='bottom-half-title-tags'>Track Your Habits and Goals</h3>
                            <h3 className='bottom-half-title-tags'>Earn Rewards for Your Goals</h3>
                            <h3 className='bottom-half-title-tags'>Battle Monsters with Friends</h3>
                        </div>
                        <div id='section-two-bottom-second-half-descriptions'>
                            <div className='description-thirds'>
                                <p>Stay accountable by tracking and managing your Habits, Daily Goals, and To Do list with QuestForge's easy-to-use web interface.</p>
                            </div>
                            <div className='description-thirds'>
                                <p>Check off tasks to level up your Avatar and unlock in-game features such as battle armor, mysterious pets, magic skills, and even quests!</p>
                            </div>
                            <div className='description-thirds'>
                                <p>Fight monsters with other QuestForgers! Use the Gold that you earn to buy in-game or custom rewards, like watching an episode of your favorite TV show.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img id='signup-divider-two' src="https://i.ibb.co/z7d75Sh/new-divider-2.png" alt="new-divider-2" border="0" />
            </div>
            <div id='signup-page-third-section'>
                <div id='section-three-top'>
                    <div>
                        <h2>Players Use QuestForge to Improve</h2>
                    </div>
                </div>
                <div id='section-three-bottom'>
                    <div id='section-three-bottom-first-half'>
                        <img id='section-three-img-one' src="https://i.ibb.co/J3jB3jT/health-fitness-3x-9676cd74.png" alt="health-fitness-3x-9676cd74" border="0" />
                        <img id='section-three-img-two' src="https://i.ibb.co/Y2TMs7Y/school-work-3x-d6eb1650.png" alt="school-work-3x-d6eb1650" border="0" />
                        <img id='section-three-img-three' src="https://i.ibb.co/Wvhn5hn/much-more-3x-e3ed259a.png" alt="much-more-3x-e3ed259a" border="0" />
                    </div>
                    <div id='section-three-bottom-second-half'>
                        <div id='section-three-bottom-second-half-titles'>
                            <h3 className='bottom-half-title-tags'>Health and Fitness</h3>
                            <h3 className='bottom-half-title-tags'>School and Work</h3>
                            <h3 className='bottom-half-title-tags'>And much, much more!</h3>
                        </div>
                        <div id='section-two-bottom-second-half-descriptions'>
                            <div className='description-thirds'>
                            <p>Never motivated to floss? Can't seem to get to the gym? QuestForge finally makes it fun to get healthy.</p>
                            </div>
                            <div className='description-thirds'>
                            <p>Whether you're preparing a report for your teacher or your boss, it's easy to keep track of your progress as you tackle your toughest tasks.</p>
                            </div>
                            <div className='description-thirds'>
                            <p>Our fully customizable task list means that you can shape QuestForge to fit your personal goals. Work on creative projects, emphasize self-care, or pursue a different dream -- it's all up to you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img id='signup-divider-three' src="https://i.ibb.co/HdgvTcw/new-divider-3.png" alt="new-divider-3" border="0" />
            </div>
            <div id='signup-page-fourth-section'>
                <h2>Join other QuestForgers having fun while accomplishing their goals!</h2>
                <button id='join-questforge-button' onClick={() => {
                    history.push('/signup')
                }}>Join QuestForge Today</button>
            </div>
        </div>
    )
}

export default SignUpPage;
