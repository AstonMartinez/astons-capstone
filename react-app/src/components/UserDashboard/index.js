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

const UserDashboard = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [searchText, setSearchText] = useState('')
    const [searchTags, setSearchTags] = useState('')
    const [showTagDropdown, setShowTagDropdown] = useState(false)
    const [dropdownDisplay, setDropdownDisplay] = useState("hidden")
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [modalType, setModalType] = useState(null)

    const [showTaskDropdown, setShowTaskDropdown] = useState(false)
    const [taskDropdownDisplay, setTaskDropdownDisplay] = useState("hidden")

    if(!sessionUser) {
        return <Redirect to='/login' />
    }

    const processDeleteTags = (item) => {
        const allTags = searchTags.split(", ")
        const checkExist = allTags.filter((tag) => tag.toLowerCase() === item.toLowerCase())
        // console.log(checkExist.length)
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
            <div>
                <UserOverview />
            </div>
            <div id='search-and-add-task'>
                <div id='search-add-task-inner'>
                    {/* <div id='left-placeholder-container'></div> */}
                    <div id='search-bar-wrapper'>
                        <input
                        type="text"
                        placeholder='Search'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        />

                        {searchTags.length ? searchTags.split(", ").map(tag => (
                                    <div>{tag}<button onClick={() => processDeleteTags(tag)}>x</button></div>
                                )) : <button onClick={() => showHideDropdown()}>Tags</button>}
                        <div className={`search-tags-dropdown-${dropdownDisplay}`}>
                            <select multiple={true} value={[...searchTags]} onChange={(e) => setSearchTags(searchTags + ", " + e.target.value)}>
                                <option value="Work">Work</option>
                                <option value="Exercise">Exercise</option>
                                <option value="Health + Wellness">Health + Wellness</option>
                                <option value="School">School</option>
                                <option value="Teams">Teams</option>
                                <option value="Chores">Chores</option>
                                <option value="Creativity">Creativity</option>
                            </select>
                        </div>
                    </div>
                    <div id='add-task-wrapper'>
                        <button onClick={() => showHideTaskDropdown()}><span>+</span> Add Task</button>
                        <div className={`new-task-dropdown-${taskDropdownDisplay}`}>
                            <div onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("Habit")
                                }}>
                                <p>Habit</p>
                                <CreateTask type={"Habit"} />
                            </div>
                            <div onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("Daily")
                                }}>
                                <p>Daily</p>
                                <CreateTask type={"Daily"} />
                            </div>
                            <div onClick={() => {
                                    setShowCreateModal(true)
                                    setModalType("ToDo")
                                }}>
                                <p>To-Do</p>
                                <CreateTask type={"ToDo"} />
                            </div>
                            <div onClick={() => {
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
            <div id='user-dashboard-wrapper'>
                <div>
                    <HabitComponent />
                </div>
                <div>
                    <DailiesComponent />
                </div>
                <div>
                    <ToDosComponent />
                </div>
                <div>
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
