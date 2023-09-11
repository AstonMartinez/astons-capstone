import './UserDashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import DailiesComponent from '../Dailies';
import HabitComponent from '../Habits';
import ToDosComponent from '../ToDos';
import UserOverview from '../UserOverview';
import RewardsComponent from '../RewardsComponent';
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const UserDashboard = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [searchText, setSearchText] = useState('')
    const [searchTags, setSearchTags] = useState('')
    const [showTagDropdown, setShowTagDropdown] = useState(false)
    const [dropdownDisplay, setDropdownDisplay] = useState("hidden")

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
            setDropdownDisplay("hidden")
        } else {
            setShowTaskDropdown(true)
            setDropdownDisplay("visible")
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
                                )) : <div onClick={() => showHideDropdown()}><p>Tags</p></div>}
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
                            <div>
                                <p>Habit</p>
                            </div>
                            <div>
                                <p>Daily</p>
                            </div>
                            <div>
                                <p>To-Do</p>
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
        </div>
    )
}

export default UserDashboard;
