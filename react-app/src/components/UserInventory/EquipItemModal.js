import { useSelector, useDispatch } from 'react-redux'

const EquipItemModal = ({itemData}) => {
    const sessionUser = useSelector(state => state.session.user)
    const userAvatar = sessionUser.avatar

    let avatarToDisplay

    if(itemData.name === "Leather Jerkin") {
        avatarToDisplay = (
            <div>
                {userAvatar && (
                    <div id={`avatar-display-wrapper-${userAvatar.background}`}>
                        <img id='layer-1' src={itemData.image} alt='avatar shirt' />
                        <img id='layer-2' src={userAvatar.skin} alt='avatar skin' />
                        <img id='layer-4' src={userAvatar.hair} alt='avatar hair' />
                        <img id='layer-3' src={userAvatar.bangs} alt='avatar hair' />
                    </div>
                )}
            </div>
        )

    } else if(itemData.name === "Leather Helm") {
        avatarToDisplay = (
            <div>
                {userAvatar && (
                    <div id={`avatar-display-wrapper-${userAvatar.background}`}>
                        <img id='layer-1' src={userAvatar.shirt} alt='avatar shirt' />
                        <img id='layer-2' src={userAvatar.skin} alt='avatar skin' />
                        <img id='layer-4' src={userAvatar.hair} alt='avatar hair' />
                        <img id='layer-3' src={itemData.image} alt='avatar hair' />
                    </div>
                )}
            </div>
        )
    } else if(itemData.name === "Wooden Shield") {
        avatarToDisplay = (
            <div>
            {userAvatar && (
                <div id={`avatar-display-wrapper-${userAvatar.background}`}>
                    <img id='layer-1' src={userAvatar.shirt} alt='avatar shirt' />
                    <img id='layer-2' src={userAvatar.skin} alt='avatar skin' />
                    <img id='layer-4' src={userAvatar.hair} alt='avatar hair' />
                    <img id='layer-3' src={userAvatar.bangs} alt='avatar hair' />
                    <img id='layer-4' src={itemData.image} alt='avatar shield' />
                </div>
            )}
            </div>
        )
    } else {
        avatarToDisplay = (
            <div>
            {userAvatar && (
                <div id={`avatar-display-wrapper-${userAvatar.background}`}>
                    <img id='layer-1' src={userAvatar.shirt} alt='avatar shirt' />
                    <img id='layer-2' src={userAvatar.skin} alt='avatar skin' />
                    <img id='layer-4' src={userAvatar.hair} alt='avatar hair' />
                    <img id='layer-3' src={userAvatar.bangs} alt='avatar hair' />
                    <img id='layer-4' src={itemData.image} alt='avatar sword' />
                </div>
            )}
            </div>
        )
    }

    return (
        <div>
            {avatarToDisplay}
        </div>
    )
}

export default EquipItemModal;
