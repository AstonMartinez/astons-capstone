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
            <div id='left-side-signup-page-container'>
                <div>
                    {/* <img alt='landing page art' src="https://i.ibb.co/PgnG6ky/pixil-frame-0.png"></img> */}
                </div>
                <div>
                    <h1>Level Up Your Life,</h1>
                    <h1>One Habit at a Time.</h1>
                </div>
            </div>
            <div id='right-side-signup-page-container'>
                <h2>Sign Up For Free</h2>
                <form id='signup-form' onSubmit={onSubmit}>
                    <div id='signup-form-username-container'>
                        <label htmlFor='username'>Username must be 1 to 20 characters, containing only letters a to z, numbers 0 to 9, hyphens, or underscores.</label>
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
                    <div>
                        <button type='submit' disabled={(!username.length || !email.length || !password.length || !passwordConfirm.length) ? true : false}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;
