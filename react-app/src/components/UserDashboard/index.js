import './UserDashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import DailiesComponent from '../Dailies';
import HabitComponent from '../Habits';
import ToDosComponent from '../ToDos';
import UserOverview from '../UserOverview';
import RewardsComponent from '../RewardsComponent';
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import CreateTask from '../CreateTaskModals/CreateTask';
import CreateHabitModal from '../CreateTaskModals/CreateHabitModal';
import CreateDailyModal from '../CreateTaskModals/CreateDailyModal';
import CreateToDoModal from '../CreateTaskModals/CreateToDoModal';
import CreateRewardModal from '../CreateTaskModals/CreateRewardModal';
import { getFilteredHabits, getSearchedHabits, getUserHabits } from '../../store/habits';
import { getFilteredRewards, getSearchedRewards, getUserRewards } from '../../store/rewards';
import { getFilteredDailies, getSearchedDailies, getUserDailies } from '../../store/dailies';
import { getFilteredToDos, getSearchedToDos, getUserToDos } from '../../store/todos';
import AvatarDisplay from '../AvatarDisplay';
import LoadingScreen from '../LoadingScreen';


const UserDashboard = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    // const userAvatar = sessionUser.avatar
    const [searchTags, setSearchTags] = useState('')
    const [showTagDropdown, setShowTagDropdown] = useState(false)
    const [dropdownDisplay, setDropdownDisplay] = useState("hidden")
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [modalType, setModalType] = useState(null)

    const [showTaskDropdown, setShowTaskDropdown] = useState(false)
    const [taskDropdownDisplay, setTaskDropdownDisplay] = useState("hidden")

    const [workChecked, setWorkChecked] = useState(false)
    const [exerciseChecked, setExerciseChecked] = useState(false)
    const [healthChecked, setHealthChecked] = useState(false)
    const [schoolChecked, setSchoolChecked] = useState(false)
    const [teamsChecked, setTeamsChecked] = useState(false)
    const [choresChecked, setChoresChecked] = useState(false)
    const [creativityChecked, setCreativityChecked] = useState(false)
    const [searchBarVal, setSearchBarVal] = useState('')
    const [loading, setLoading] = useState(false)

    if(!sessionUser) {
        return <Redirect to='/login' />
    }

    const removeSearchFilters = async () => {
        setWorkChecked(false)
        setExerciseChecked(false)
        setHealthChecked(false)
        setSchoolChecked(false)
        setTeamsChecked(false)
        setChoresChecked(false)
        setCreativityChecked(false)
        setLoading(true)
        // setTimeout(() => {
        //     setLoading(false)
        // }, 3000)
        await dispatch(getUserHabits())
        await dispatch(getUserDailies())
        await dispatch(getUserToDos())
        await dispatch(getUserRewards()).then(() => {
            setLoading(false)
        })
        return
    }

    const handleSearchEnter = async (val) => {
        const searchArr = val.split(" ")
        const final = searchArr.join('/')
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        await dispatch(getSearchedHabits(final))
        await dispatch(getSearchedDailies(final))
        await dispatch(getSearchedToDos(final))
        await dispatch(getSearchedRewards(final))
        .then(() => {
            return <Redirect to='/my-dashboard' />
        })

    }


    const handleFilteredSearch = async (searchTags) => {

        const tagArr = searchTags.split(", ")
        const final = tagArr.join('/')
        await dispatch(getFilteredHabits(searchTags))
        await dispatch(getFilteredDailies(searchTags))
        await dispatch(getFilteredToDos(searchTags))
        await dispatch(getFilteredRewards(searchTags))
        .then(() => {
            return <Redirect to='/my-dashboard' />
        })
    }

    const processDeleteTags = (item) => {
        const allTags = searchTags.split(", ")
        const checkExist = allTags.filter((tag) => tag.toLowerCase() === item.toLowerCase())
        if(checkExist.length !== 0) {
            const index = allTags.indexOf(item)
            allTags.splice(index, 1)
            const res = allTags.join(", ")
            setSearchTags(res)
            // setTagsToDisplay(tags)
            return
        } else {
            return
        }
    }

    const editSearchTags = (item) => {

        if(!searchTags.length) {
            setSearchTags(`${item}`)
            handleFilteredSearch(item)
            return
        } else {
            const allTags = searchTags.split(", ")
            const checker = allTags.filter(tag => tag.toLowerCase() === item.toLowerCase())
            if(checker.length !== 0) {
                processDeleteTags(item)
                if(searchTags === '') {
                    removeSearchFilters()
                    return
                }

            } else {
                const currentTags = searchTags.split(", ")
                currentTags.push(item)
                const tagsToSend = currentTags.join('/')
                setSearchTags(searchTags + ", " + item)
                handleFilteredSearch(tagsToSend)
                return
            }
        }
    }


    const showHideDropdown = () => {
        if(showTagDropdown) {
            setShowTagDropdown(false)
            setDropdownDisplay("hidden")
        } else {
            setShowTagDropdown(true)
            setDropdownDisplay("visible")
        }
        return
    }

    const showHideTaskDropdown = () => {
        if(showTaskDropdown) {
            setShowTaskDropdown(false)
            setTaskDropdownDisplay("hidden")
        } else {
            setShowTaskDropdown(true)
            setTaskDropdownDisplay("visible")
        }
    }

    return (
        <div id='dashboard-parent'>
            {loading && <LoadingScreen />}
            <div>
            <div id='avatar-display-container'>
                    <AvatarDisplay />
                </div>
                <UserOverview />
            </div>
            <div id='search-and-add-task'>
                <div id='search-add-task-inner'>
                    <div id='search-bar-wrapper'>
                        <input
                        id='dashboard-search-bar'
                        type="text"
                        placeholder='Search'
                        value={searchBarVal}
                        onChange={(e) => {
                            setSearchBarVal(e.target.value)
                            handleSearchEnter(e.target.value)
                        }}
                        />

                        <div id='search-tags-button' onClick={() => showHideDropdown()}>
                            <div id='filter-icon-div'>
                                <img id='filter-icon' src="https://i.ibb.co/6wKhD2Q/setting-filter.png" alt="setting-filter" border="0" />
                            </div>
                            <div id='tags-text-span-div'>
                                <span>Tags</span>
                            </div>
                            <div id='arrow-icon-div'>
                                <img id='down-arrow-icon' src="https://i.ibb.co/JvX6pDf/down-filled-triangular-arrow-512.png" alt="down-filled-triangular-arrow-512" border="0" />
                            </div>
                        </div>
                        <div className={`search-tags-dropdown-${dropdownDisplay}`}>
                            <div id='tags-label-for-dropdown'>
                                <p>Tags</p>
                            </div>
                            <div className='set-of-filters'>
                                <div className='checkbox-input-div'>
                                    <input value="Work" type='checkbox' name='work-checkbox' checked={workChecked} onClick={(e) => {
                                        workChecked ? setWorkChecked(false) : setWorkChecked(true)
                                        editSearchTags(e.target.value)
                                        }} /><label className='checkbox-input-label' htmlFor='work-checkbox'>Work</label>
                                </div>
                                <div  className='checkbox-input-div'>
                                    <input value="Exercise" type='checkbox' name='exercise-checkbox'checked={exerciseChecked} onClick={(e) => {
                                        exerciseChecked ? setExerciseChecked(false) : setExerciseChecked(true)
                                        editSearchTags(e.target.value)
                                        }}/><label className='checkbox-input-label' htmlFor='exercise-checkbox'>Exercise</label>
                                </div>
                            </div>
                            <div  className='set-of-filters'>
                                <div  className='checkbox-input-div'>
                                    <input value="Health + Wellness" type='checkbox' name='health-wellness-checkbox' checked={healthChecked} onClick={(e) => {
                                        healthChecked ? setHealthChecked(false) : setHealthChecked(true)
                                        editSearchTags(e.target.value)
                                        }} /><label className='checkbox-input-label' htmlFor='health-wellness-checkbox'>Health + Wellness</label>
                                </div>
                                <div  className='checkbox-input-div'>
                                    <input value="School" type='checkbox' name='school-checkbox' checked={schoolChecked} onClick={(e) => {
                                        schoolChecked ? setSchoolChecked(false) : setSchoolChecked(true)
                                        editSearchTags(e.target.value)
                                        }} /><label className='checkbox-input-label' htmlFor='school-checkbox'>School</label>
                                </div>
                            </div>
                            <div  className='set-of-filters'>
                                <div  className='checkbox-input-div'>
                                    <input value="Teams" type='checkbox' name='teams-checkbox' checked={teamsChecked} onClick={(e) => {
                                        teamsChecked ? setTeamsChecked(false) : setTeamsChecked(true)
                                        editSearchTags(e.target.value)
                                        }} /><label className='checkbox-input-label' htmlFor='teams-checkbox'>Teams</label>
                                </div>
                                <div  className='checkbox-input-div'>
                                    <input value="Chores" type='checkbox' name='chores-checkbox' checked={choresChecked} onClick={(e) => {
                                        choresChecked ? setChoresChecked(false) : setChoresChecked(true)
                                        editSearchTags(e.target.value)
                                        }} /><label className='checkbox-input-label' htmlFor='chores-checkbox'>Chores</label>
                                </div>
                            </div>
                            <div  className='set-of-filters'>
                                <div  className='checkbox-input-div'>
                                    <input value="Creativity" type='checkbox' name='creativity-checkbox' checked={creativityChecked} onClick={(e) => {
                                        creativityChecked ? setCreativityChecked(false) : setCreativityChecked(true)
                                        editSearchTags(e.target.value)
                                        }} /><label className='checkbox-input-label' htmlFor='creativity-checkbox'>Creativity</label>
                                </div>
                                <div  className='checkbox-input-div'></div>
                            </div>
                            <div id='bottom-div-search-tags'>
                                <div onClick={() => {
                                        removeSearchFilters()
                                        return
                                    }}>
                                    <p id='clear-filters-button'>Clear all filters</p>
                                </div>
                                <div>
                                    <p id='search-cancel' onClick={() => {
                                        setShowTagDropdown(false)
                                        setDropdownDisplay("hidden")
                                        removeSearchFilters()
                                        return
                                    }}>Cancel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='add-task-wrapper'>
                        <button id='add-task-button' onClick={() => showHideTaskDropdown()}><span>+</span> Add Task</button>
                        <div className={`new-task-dropdown-${taskDropdownDisplay}`}>
                            <div id='icons-div'>
                                <div className='icon-container' onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("Habit")
                                }}>
                                    <img id='plus-minus-icon' src="https://i.ibb.co/vY0Gr8s/pros-and-cons.png" alt="pros-and-cons" border="0" />
                                    <CreateTask type={"Habit"} />
                                </div>
                                <div className='icon-container' onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("Daily")
                                }}>
                                    <img id='calendar-icon' src="https://i.ibb.co/B27L9Pb/calendar.png" alt="calendar" border="0" />
                                    <CreateTask type={"Daily"} />
                                </div>
                                <div className='icon-container' onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("ToDo")
                                }}>
                                    <img id='checkbox-add-icon' src="https://i.ibb.co/kKMf3wy/checkbox.png" alt="checkbox" border="0" />
                                    <CreateTask type={"ToDo"} />
                                </div>
                                <div className='icon-container' onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("Reward")
                                }}>
                                    <img id='treasure-chest-icon' src="https://i.ibb.co/bL3CqDd/treasure.png" alt="treasure-chest" border="0" />
                                    <CreateTask type={"Reward"} />
                                </div>
                            </div>
                            <div id='add-task-text-div'>
                                <div className='task-p-container' onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("Habit")
                                }}>
                                    <p>Habit</p>
                                    <CreateTask type={"Habit"} />
                                </div>
                                <div className='task-p-container' onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("Daily")
                                }}>
                                    <p>Daily</p>
                                    <CreateTask type={"Daily"} />
                                </div>
                                <div className='task-p-container' onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("ToDo")
                                }}>
                                    <p>To-Do</p>
                                    <CreateTask type={"ToDo"} />
                                </div>
                                <div className='task-p-container' onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("Reward")
                                }}>
                                    <p>Reward</p>
                                    <CreateTask type={"Reward"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='user-dashboard-wrapper'>
                <div id='habit-component-dashboard-container'>
                    <HabitComponent />
                </div>
                <div id='dailies-component-dashboard-container'>
                    <DailiesComponent />
                </div>
                <div id='todos-component-dashboard-container'>
                    <ToDosComponent />
                </div>
                <div id='rewards-component-dashboard-container'>
                    <RewardsComponent />
                </div>
            </div>
            {showCreateModal && modalType === "Habit" && (
                <CreateHabitModal
                    onClose={() => {
                        setShowCreateModal(false)
                        setModalType(null)
                    }}
                    onSubmit={() => {
                        setShowCreateModal(false)
                        setModalType(null)
                    }}
                />
            )}

            {showCreateModal && modalType === "Daily" && (
                <CreateDailyModal
                    onClose={() => {
                        setShowCreateModal(false)
                        setModalType(null)
                    }}
                    onSubmit={() => {
                        setShowCreateModal(false)
                        setModalType(null)
                    }}
                />
            )}

            {showCreateModal && modalType === "ToDo" && (
                <CreateToDoModal
                    onClose={() => {
                        setShowCreateModal(false)
                        setModalType(null)
                    }}
                    onSubmit={() => {
                        setShowCreateModal(false)
                        setModalType(null)
                    }}
                />
            )}

            {showCreateModal && modalType === "Reward" && (
                <CreateRewardModal
                    onClose={() => {
                        setShowCreateModal(false)
                        setModalType(null)
                    }}
                    onSubmit={() => {
                        setShowCreateModal(false)
                        setModalType(null)
                    }}
                />
            )}
        </div>
    )
}

export default UserDashboard;
