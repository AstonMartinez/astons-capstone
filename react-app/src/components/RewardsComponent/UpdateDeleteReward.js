import React, { useState } from 'react'
import UpdateDeleteRewardModal from './UpdatedDeleteRewardModal'

function UpdateDeleteReward({rewardId}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [rewardToDelete, setRewardToDelete] = useState(null)

    const handleOpenDeleteModal = (reward) => {
        setRewardToDelete(reward)
        setShowDeleteModal(true)
    }

    const handleCloseUpdateModal = () => {
        setShowDeleteModal(false)
        setRewardToDelete(null)
    }

    return (
        <>
            {showDeleteModal && (
                <UpdateDeleteRewardModal
                    onClose={handleCloseUpdateModal}
                />
            )}
        </>
    )
}

export default UpdateDeleteReward;
