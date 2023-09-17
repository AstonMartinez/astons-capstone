import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import EquipItemModal from '../UserInventory/EquipItemModal'

const EquipItem = ({item}) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [itemToEquip, setItemToEquip] = useState(null)
    const dispatch = useDispatch()

    const handleOpenConfirmModal = (item) => {
        setItemToEquip(item)
        setShowConfirmModal(true)
    }

    const handleCloseConfirmModal = () => {
        setShowConfirmModal(false)
        setItemToEquip(null)
    }

    return (
        <>
            {showConfirmModal && (
                <EquipItemModal
                    onClose={handleCloseConfirmModal}
                />
            )}
        </>
    )
}

export default EquipItem;
