import './AvatarDisplay.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAvatar } from '../../store/avatars'
import { authenticate } from '../../store/session'

const AvatarDisplay = ({ avatarSkin, avatarHair, avatarShirt, avatarBangs, avatarBackground }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const userAvatar = sessionUser.avatar
    const currState = useSelector(state => state)
    const avatar = currState.avatar

    useEffect(() => {
        dispatch(authenticate())
        dispatch(getUserAvatar())
    }, [dispatch])

    return (
        <>
            {userAvatar && (
                <div id={`avatar-display-wrapper-${avatar.background}`}>
                    <img id='layer-1' src={avatar.shirt} alt='avatar shirt' />
                    <img id='layer-2' src={avatar.skin} alt='avatar skin' />
                    <img id='layer-4' src={avatar.hair} alt='avatar hair' />
                    <img id='layer-3' src={avatar.bangs} alt='avatar hair' />
                </div>
            )}
        </>

    )
}

export default AvatarDisplay;
