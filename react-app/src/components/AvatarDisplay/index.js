import './AvatarDisplay.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAvatar } from '../../store/avatars'

const AvatarDisplay = ({ avatar }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const userAvatar = sessionUser.avatar
    // console.log("SESSION USER: ", sessionUser)
    // console.log("USER AVATAR: ", sessionUser.avatar)
    const [background, setBackground] = useState(userAvatar.background)
    const [skin, setSkin] = useState(userAvatar.skin)
    const [hair, setHair] = useState(userAvatar.hair)
    const [bangs, setBangs] = useState(userAvatar.bangs)
    const [shirt, setShirt] = useState(userAvatar.shirt)
    const [haveUserAvatar, setHaveUserAvatar] = useState(false)
    // console.log("USER AVATAR: ", userAvatar)
    // console.log(userAvatar.background)
    // console.log(skin)

    // useEffect(() => {
    //     dispatch(getUserAvatar()).then(() => {
    //         setHaveUserAvatar(true)
    //     })
    // }, [dispatch])

    return (
        <>
            {userAvatar && (
                <div id={`avatar-display-wrapper-${background}`}>
                    <img id='layer-1' src={shirt} alt='avatar shirt' />
                    <img id='layer-2' src={skin} alt='avatar skin' />
                    <img id='layer-4' src={bangs} alt='avatar hair' />
                    <img id='layer-3' src={hair} alt='avatar hair' />
                </div>
            )}
        </>

    )
}

export default AvatarDisplay;
