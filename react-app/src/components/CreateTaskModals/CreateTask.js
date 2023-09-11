import React, { useState } from 'react'
import CreateHabitModal from './CreateHabitModal'
import CreateDailyModal from './CreateDailyModal'
import CreateToDoModal from './CreateToDoModal'
import CreateRewardModal from './CreateRewardModal'

function CreateTask({type}) {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = (habit) => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && type === "Habit" (
                <CreateHabitModal
                    onClose={handleCloseModal}
                />
            )}

            {showModal && type === "Daily" (
                <CreateDailyModal
                    onClose={handleCloseModal}
                />
            )}

            {showModal && type === "ToDo" (
                <CreateToDoModal
                    onClose={handleCloseModal}
                />
            )}

            {showModal && type === "Reward" (
                <CreateRewardModal
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}

export default CreateTask;
