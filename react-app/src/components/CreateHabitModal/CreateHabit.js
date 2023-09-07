import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import CreateHabitModal from './index'

const CreateHabit = () => {
    const [showCreateModal, setShowCreateModal] = useState(false)
    const dispatch = useDispatch()

    const handleOpenCreateModal = (story) => {
        setShowCreateModal(true)
    }

    const handleCloseCreateModal = () => {
        setShowCreateModal(false)
    }

    return (
        <>
            {showCreateModal && (
                <CreateHabitModal
                    onClose={handleCloseCreateModal}
                 />
            )}
        </>
    )
}

export default CreateHabit;
