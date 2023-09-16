import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      <Redirect to='/my-dashboard' />
    }
  };

  const handleDemoLogin = async (e) => {
    e.preventDefault()
    const data = await dispatch(login("demo@aa.io", "password"))
    if(data) {
      setErrors(data)
    } else {
      <Redirect to='/my-dashboard' />
    }
  }

  return (
    <>
    <div id="login-page-wrapper">
      <h1>Log In</h1>
      <form id='login-page-form' onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="login-field-label">
          <label htmlFor='login-email-input'>Email</label>

        </div>
        <div>
          <input
            id="login-email-input"
            name="login-email-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
        </div>
        <div className="login-field-label">
          <label htmlFor='login-password-input'>Password</label>
        </div>
        <div>

          <input
            id="login-password-input"
            name="login-password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
          />
        </div>
        <div id='login-submit-container'>
          <button id="login-submit-button" type="submit">Log In</button>
        </div>
      </form>
      <div id="login-demo-user-button">
        <button id='login-du-button' onClick={handleDemoLogin}>Demo User</button>
      </div>
    </div>
      <div>
      <img id="login-page-footer-divider" src="https://i.ibb.co/HdgvTcw/new-divider-3.png" alt="new-divider-3" border="0" />
      </div>
    </>
  );
}

export default LoginFormPage;
