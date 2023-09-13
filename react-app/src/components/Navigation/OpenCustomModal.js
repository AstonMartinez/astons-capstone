import React, { useState } from 'react'
import CustomizeAvatarModal from '../CustomizeAvatarModal'

function Customize() {
    const [showModal, setShowModal] = useState(false)

    const handleOpenModal = (habit) => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <CustomizeAvatarModal
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}

export default Customize;
