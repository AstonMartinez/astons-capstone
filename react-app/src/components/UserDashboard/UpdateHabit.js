import React, { useState } from 'react'
import UpdateHabitModal from './UpdateHabitModal'

function UpdateHabit({habitId}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [habitToDelete, setHabitToDelete] = useState(null)

    const handleOpenDeleteModal = (habit) => {
        setHabitToDelete(habit)
        setShowDeleteModal(true)
    }

    const handleCloseUpdateModal = () => {
        setShowDeleteModal(false)
        setHabitToDelete(null)
    }

    return (
        <>
            {showDeleteModal && (
                <UpdateHabitModal
                    onClose={handleCloseUpdateModal}
                />
            )}
        </>
    )
}

export default UpdateHabit;
