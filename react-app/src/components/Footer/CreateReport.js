import React, { useState } from 'react'
import BugReport from '../BugReport'

function CreateBugReport() {
    const [showModal, setShowModal] = useState(false)

    const handleModalOpen = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            {showModal && (
                <BugReport
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}

export default CreateBugReport;
