import './CreateHabitModal.css'
import React, { useState, useEffect, useRef } from 'react'
import * as habitActions from '../../store/habits'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const CreateHabitModal = () => {
    const dispatch = useDispatch()
    const modalOverlayRef = useRef()
    const sessionUser = useSelector(state => state.session.user)
    const history = useHistory()
    const [title, setTitle] = useState('')
    return (
        <div></div>
    )
}

export default CreateHabitModal;
