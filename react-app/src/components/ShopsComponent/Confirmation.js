import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ConfirmationModal from './ConfirmationModal'

const Confirmation = ({item}) => {
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [itemToBuy, setItemToBuy] = useState(null)
    const dispatch = useDispatch()

    const handleOpenConfirmModal = (item) => {
        setItemToBuy(item)
        setShowConfirmModal(true)
    }

    const handleCloseConfirmModal = () => {
        setShowConfirmModal(false)
        setItemToBuy(null)
    }

    return (
        <>
            {showConfirmModal && (
                <ConfirmationModal
                    onClose={handleCloseConfirmModal}
                />
            )}
        </>
    )
}

export default Confirmation;
