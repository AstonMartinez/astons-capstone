import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ToDoUpdateDeleteModal from './UpdateToDoModal'

const UpdateToDoFunc = ({toDoId}) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [toDoToDelete, setToDoToDelete] = useState(null)
    const dispatch = useDispatch()

    const handleOpenDeleteModal = (toDo) => {
        setToDoToDelete(toDo)
        setShowDeleteModal(true)
    }

    const handleCloseUpdateModal = () => {
        setShowDeleteModal(false)
        setToDoToDelete(null)
    }

    return (
        <>
            {showDeleteModal && (
                <ToDoUpdateDeleteModal
                    onClose={handleCloseUpdateModal}
                />
            )}
        </>
    )
}

export default UpdateToDoFunc;
