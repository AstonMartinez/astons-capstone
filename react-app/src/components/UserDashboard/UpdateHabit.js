import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as habitActions from '../../store/habits'
import UpdateHabitModal from './UpdateHabitModal'
import { Redirect } from 'react-router-dom'

function UpdateHabit({habitId}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [habitToDelete, setHabitToDelete] = useState(null)
    const dispatch = useDispatch()

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
