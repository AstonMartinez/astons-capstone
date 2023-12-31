import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { authenticate, logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { Redirect, useHistory } from 'react-router-dom'
import CustomizeAvatarModal from "../CustomizeAvatarModal";
import Customize from "./OpenCustomModal";
import { getUserAvatar } from "../../store/avatars";

function ProfileButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false)
  const ulRef = useRef();

  const handleCustomizationOpen = () => {
    setShowCustomize(true)
    return
  }

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
    return <Redirect exact to='/' />
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <button id='profile-dropdown-button' onClick={openMenu}>
        <img id='profile-icon' src="https://i.ibb.co/Wg6yLBy/user-icon.png" alt="user-icon" border="0" />

      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <div id="user-dropdown-div">
            {/* <div className='nav-dropdown-option'>{user.username}</div>
            <div className='nav-dropdown-option'>{user.email}</div> */}
            <div className='nav-dropdown-option' onClick={handleCustomizationOpen}>Edit Avatar</div>
            <Customize />
            <div id='nav-log-out-container' className='nav-dropdown-option'>
              <button id='nav-log-out-button' onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </div>
      {showCustomize && (
        <CustomizeAvatarModal
          onSubmit={() => {
            setShowCustomize(false)
            dispatch(getUserAvatar())
            dispatch(authenticate())
            history.push('/my-dashboard')
          }}
          onClose={() => {
            setShowCustomize(false)
          }}
        />
      )}

    </>
  );
}

export default ProfileButton;
