import React, { useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserInfo } from '../../store/session'

const ConfirmationModal = ({itemId, itemData, onSubmit, onClose}) => {
    const sessionUser = useSelector(state => state.session.user)
    const [costError, setCostError] = useState('')
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const selectedItemId = itemId
    const selectedItemCose = itemData.cost

    const handleBuyNow = async() => {
        if(sessionUser.gold < itemData.cost) {
            setCostError("You don't have enoough gold to buy this item!")
            return
        } else {
            const userNewGold = sessionUser.gold - itemData.cost
            const updatedUserInfo = {
                gold: userNewGold,
                health: sessionUser.health,
                experience_points: sessionUser.experience_points,
                level: sessionUser.level
            }

            const newUserEquipment = {
                user_id: sessionUser.id,
                equipment_id: itemData.id
            }

            await fetch(`/api/equipment/${itemData.id}/buy`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUserEquipment)
            })
            dispatch(updateUserInfo(updatedUserInfo))
            onSubmit()
        }
    }

    return (
        <>
            <div className='habit-update-modal-backdrop'  ref={modalOverlayRef}></div>
            <div id='confirmation-modal-wrapper'>
                <div id='confirm-modal-exit-button-container'>
                    <button id='confirm-buy-exit' onClick={onClose}>x</button>
                </div>
                <div id='confirm-modal-content-wrapper'>

                    <div id='confirm-image-div'>
                        <img src={itemData.image} alt='select item' />
                    </div>
                    <div>
                        <p id='confirm-item-name'>{itemData.name}</p>
                        <p id='confirm-item-desc'>{itemData.description}</p>
                    </div>
                    <div id='confirm-stats-outer-wrapper'>
                        <div id='confirm-stats-top-row'>
                            <div id='confirm-stats-strength'>
                                <p className='confirm-stats-p-span-tag'>STR: {itemData.strength}</p>
                                <p className='confirm-stats-p-span-tag'>Gear: {itemData.str_gear_num}</p>
                                <p className='confirm-stats-p-span-tag'>Class Bonus: {itemData.str_class_bonus}</p>
                            </div>
                            <div id='confirm-stats-intelligence'>
                                <p className='confirm-stats-p-span-tag'>INT: {itemData.intelligence}</p>
                                <p className='confirm-stats-p-span-tag'>Gear: {itemData.int_gear_num}</p>
                                <p className='confirm-stats-p-span-tag'>Class Bonus: {itemData.int_class_bonus}</p>
                            </div>
                        </div>
                        <div id='confirm-stats-bottom-row'>
                            <div id='confirm-stats-constitution'>
                                <p className='confirm-stats-p-span-tag'>CON: {itemData.constitution}</p>
                                <p className='confirm-stats-p-span-tag'>Gear: {itemData.const_gear_num}</p>
                                <p className='confirm-stats-p-span-tag'>Class Bonus: {itemData.const_class_bonus}</p>
                            </div>
                            <div id='confirm-stats-perception'>
                                <p className='confirm-stats-p-span-tag'>PER: {itemData.perception}</p>
                                <p className='confirm-stats-p-span-tag'>Gear: {itemData.perc_gear_num}</p>
                                <p className='confirm-stats-p-span-tag'>Class Bonus: {itemData.perc_class_bonus}</p>
                            </div>
                        </div>
                    </div>
                    <div id='confirm-cost-container'>
                        <div className='coin-circle'>
                            <div className='inner-coin-circle'><p>Q</p></div>
                        </div>
                        <span id='confirm-cost-coin-text'>{itemData.cost}</span>
                    </div>
                    <div>
                        <button id='confirm-buy-now-button' disabled={sessionUser.gold < itemData.cost ? true : false} onClick={handleBuyNow}>Buy Now</button>
                    </div>
                    <div id='your-balance-bar'>
                        <div id='your-balance-text'>
                            <p>Your Balance: </p>
                        </div>
                        <div id='user-balance-amount'>
                            <div className='shops-coin-circle'>
                                <div className='shops-inner-coin-circle'><p>Q</p></div>
                            </div>
                            <p>{sessionUser.gold}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmationModal;
