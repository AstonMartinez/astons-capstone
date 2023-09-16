import './UserInventory.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserEquipment } from '../../store/equipment';
import UserOverview from '../UserOverview';
import IndividualItem from '../IndividualItem'
import AvatarDisplay from '../AvatarDisplay'

const UserInventory = () => {
    const dispatch = useDispatch()
    const userEquipment = useSelector(state => state.equipment)
    let equipmentToMap
    let noEquipmentMsg

    if(userEquipment.length) {
        equipmentToMap = Object.values(userEquipment)
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
                    <div className='individual-equipment-item'>
                        <IndividualItem itemData={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserInventory;
