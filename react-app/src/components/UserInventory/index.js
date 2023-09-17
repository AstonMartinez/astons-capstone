import './UserInventory.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserEquipment } from '../../store/equipment';
import UserOverview from '../UserOverview';
import IndividualItem from '../IndividualItem'
import AvatarDisplay from '../AvatarDisplay'
import { useHistory } from 'react-router-dom'
import EquipItemModal from './EquipItemModal';

const UserInventory = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const userEquipment = useSelector(state => state.equipment)
    const [showEquipItemModal, setShowEquipItemModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    // console.log("USER EQUIPMENT: ", userEquipment)

    if(!sessionUser) {
        history.push('/login')
    }
    let noEquipmentMsg
    const equipmentToMap = Object.values(userEquipment)

    if(equipmentToMap.length >= 1) {

        noEquipmentMsg = ''
    } else {
        // userEquipment = ''
        noEquipmentMsg = (
            <div id='no-equipment-message'>
                <h2>You don't have any items in your inventory yet!</h2>
            </div>
        )
    }


    useEffect(() => {
        dispatch(getUserEquipment())
    }, [dispatch])

    return (
        <div id='inventory-page-wrapper'>
            <AvatarDisplay />
            <UserOverview />
            {/* <h1>Items</h1> */}
            <div id='upper-item-div'><div id='equipment-item-text'>Items</div></div>
            {noEquipmentMsg}
            <div id='equipment-display-wrapper'>
                {equipmentToMap && equipmentToMap.map((item) => (
                    <>
                        <div className='individual-equipment-item' onClick={() => setSelectedItem(item)}>
                            <IndividualItem itemData={item} />
                        </div>
                    </>
                ))}
            </div>
            {selectedItem && showEquipItemModal && (
            <EquipItemModal
                itemId={selectedItem.id}
                itemData={selectedItem}
                onSubmit={() => {
                    setShowEquipItemModal(false)
                    setSelectedItem(null)
                }}
                onClose={() => {
                    setShowEquipItemModal(false)
                    setSelectedItem(null)
                }}
            />
            )}
        </div>
    )
}

export default UserInventory;
