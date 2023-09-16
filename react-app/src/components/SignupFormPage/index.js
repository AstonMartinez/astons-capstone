import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { signUp } from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [errors, setErrors] = useState([])
  const [passwordMatchError, setPasswordMatchError] = useState('')

  if (sessionUser) return <Redirect to="/my-dashboard" />;

  const onSubmit = async (e) => {
    e.preventDefault()
    if(password === passwordConfirm) {
        const res = await dispatch(signUp(username, email, password))
        if(res) {
            setErrors(res)
            console.log("RESPONSE: ", res)
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
    <div id='su-form-page-wrapper'>
      <h1>Sign Up</h1>
      <form id='su-page-signup-form' onSubmit={onSubmit}>
        <div id='signup-form-username-container'>
          <label id="su-form-page-un-label" htmlFor='username'>Username</label>
          <div>
            <div className='su-page-label-container'>
              <input
                className='su-form-page-input'
                type='text'
                name='username'
                id='username-input-field'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g., HabitRabbit"
              />
              {errors?.username && (<p>{errors.username}</p>)}

            </div>
          </div>
        </div>
        <div className='su-page-label-container'>
        <label id="su-form-page-em-label" htmlFor='email'>Email</label>
        <div className="su-input-wrapper">

            <input
              className='su-form-page-input'
              type='email'
              name='email'
              id='email-input-field'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g., gryphon@example.com"
            />
            {errors?.email && (<p>{errors.email}</p>)}
          </div>
        </div>
        <div>
        <label id="su-form-page-pw-label" htmlFor='password'>Password</label>
        <div className='su-page-label-container'>

          <input
            className='su-form-page-input'
            type='password'
            name='password'
            id='password-field'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="e.g., ********************"
          />
        {errors?.password && (<p>{errors.password}</p>)}
        </div>
        </div>
        <div className='su-page-label-container'>
        <label id="su-form-page-pwc-label" htmlFor='username'>Confirm Password</label>
        <div>

          <input
            className='su-form-page-input'
            type='password'
            name='password-confirm'
            id='password-confirm-field'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            placeholder="Make sure it's the same password!"
          />
            <p>{passwordMatchError}</p>
        </div>
        </div>
        {errors.length ? errors.map(error => (
          <p>{error}</p>
        )) : ''}
        <div id='su-form-page-agreement-text'>
          <p id='su-form-page-agreement-p'>By clicking the button below, you are indicating that you have read and agree to the <NavLink exact to='/tos'>Terms of Service</NavLink> and <NavLink exact to='/privacy-policy'>Privacy Policy</NavLink>.</p>
        </div>
        <div id='su-form-page-submit-container'>
          <button id='su-form-page-submit-button' type='submit' disabled={(!username.length || !email.length || !password.length || !passwordConfirm.length) ? true : false}>Sign Up</button>
        </div>
      </form>
      <div id='already-have-account-text'>
        <p>Already have a QuestForge account? <span id="su-form-page-log-in-text"><NavLink exact to='/login'>Log in.</NavLink></span></p>
      </div>
    </div>
  );
}

export default SignupFormPage;
