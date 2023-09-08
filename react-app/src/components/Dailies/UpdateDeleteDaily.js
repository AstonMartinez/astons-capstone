import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import UpdateDeleteDailyModal from './UpdateDeleteDailyModal'

function UpdateDeleteDaily({dailyId}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [dailyToDelete, setDailyToDelete] = useState(null)
    const dispatch = useDispatch()

    const handleOpenDeleteModal = (daily) => {
        setDailyToDelete(daily)
        setShowDeleteModal(true)
    }

    const handleCloseUpdateModal = () => {
        setShowDeleteModal(false)
        setDailyToDelete(null)
    }

    return (
        <>
            {showDeleteModal && (
                <UpdateDeleteDailyModal
                    onClose={handleCloseUpdateModal}
                />
            )}
        </>
    )
}

export default UpdateDeleteDaily;
