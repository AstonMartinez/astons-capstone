import './WikiComponent.css'
import { useState } from 'react'

const WikiComponent = () => {
    const [aboutActive, setAboutActive] = useState("inactive")
    const [techUsedActive, setTechUsedActive] = useState("inactive")
    const [currFeaturesActive, setCurrFeaturesActive] = useState("inactive")
    const [apiRoutesActive, setApiRoutesActive] = useState("inactive")
    const [futureImplementationsActive, setFutureImplementationsActive] = useState("inactive")
    const [attributionsActive, setAttributionsActive] = useState("inactive")
    return (
        <div id='wiki-component-parent-container'>
            <div id='wiki-parent-inner'>
                <div>
                    <h1>Welcome to the QuestForge Wiki!</h1>
                </div>
                <div>
                    <div onClick={() => {
                        if(aboutActive === "active") {
                            setAboutActive("inactive")
                        } else {
                            setAboutActive("active")
                            setTechUsedActive("inactive")
                            setCurrFeaturesActive("inactive")
                            setApiRoutesActive("inactive")
                            setFutureImplementationsActive("inactive")
                            setAttributionsActive("inactive")
                        }
                    }}>
                        <h2 className='wiki-section-h2'>About QuestForge</h2>
                    </div>
                    <div className={`wiki-section-${aboutActive}`}>
                        <p>QuestForge was created by Aston Martinez as a capstone project to graduate as a Full-Stack Software Engineer from App Academy.<br></br> The aim was to create an interactive website in the style of Habitica (an amazing website worth checking out if you haven't already!).</p>
                        <p>The following information details the features, technologies used, api routes, future implementations, and attributions for this project.<br></br> Have questions? Please feel free to email Aston at aston.martinez1614@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div onClick={() => {
                        if(techUsedActive === "active") {
                            setTechUsedActive("inactive")
                        } else {
                            setAboutActive("inactive")
                            setTechUsedActive("active")
                            setCurrFeaturesActive("inactive")
                            setApiRoutesActive("inactive")
                            setFutureImplementationsActive("inactive")
                            setAttributionsActive("inactive")
                        }
                    }}>
                        <h2 className='wiki-section-h2'>Technologies Used</h2>
                    </div>
                    <div className={`wiki-section-${techUsedActive}`}>
                        <ul id='tech-used-list'>
                            <li>Flask</li>
                            <li>Alembic</li>
                            <li>SQLAlchemy</li>
                            <li>React</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div onClick={() => {
                        if(currFeaturesActive === "active") {
                            setCurrFeaturesActive("inactive")
                        } else {
                            setAboutActive("inactive")
                            setTechUsedActive("inactive")
                            setCurrFeaturesActive("active")
                            setApiRoutesActive("inactive")
                            setFutureImplementationsActive("inactive")
                            setAttributionsActive("inactive")
                        }
                    }}>
                        <h2 className='wiki-section-h2'>Current Features</h2>
                    </div>
                    <div className={`wiki-section-${currFeaturesActive}`}>
                        <div className='feature-list-container'>
                            <h3>Login/Signup</h3>
                            <ul className='current-feature-list'>
                                <li clssName='current-feature-li'>Unregistered users can sign up for an account</li>
                                <li clssName='current-feature-li'>Registered users can log in to their account, which redirects to their dashboard upon successful submission.</li>
                            </ul>
                        </div>
                        <div className='feature-list-container'>
                            <h3>Habits</h3>
                            <ul className='current-feature-list'>
                                <li clssName='current-feature-li'>Registered users can create new Habits, which appear in their user dashboard.</li>
                                <li clssName='current-feature-li'>Registered users can view their habit details by clicking on individual habits.</li>
                                <li clssName='current-feature-li'>Registered users can edit/update details for each individual habit.</li>
                                <li clssName='current-feature-li'>Registered users can delete habits they no longer need or want in their dashboard.</li>
                            </ul>
                        </div>
                        <div className='feature-list-container'>
                            <h3>Dailies</h3>
                            <ul className='current-feature-list'>
                                <li clssName='current-feature-li'>Registered users can create new Dailies, which appear in their user dashboard.</li>
                                <li clssName='current-feature-li'>Registered users can view their daily details by clicking on individual daily.</li>
                                <li clssName='current-feature-li'>Registered users can edit/update details for each individual daily.</li>
                                <li clssName='current-feature-li'>Registered users can delete dailies they no longer need or want in their dashboard.</li>
                            </ul>
                        </div>
                        <div className='feature-list-container'>
                            <h3>To-Dos</h3>
                            <ul className='current-feature-list'>
                                <li clssName='current-feature-li'>Registered users can create new To-Dos, which appear in their user dashboard.</li>
                                <li clssName='current-feature-li'>Registered users can view their to-do details by clicking on individual to-dos.</li>
                                <li clssName='current-feature-li'>Registered users can edit/update details for each individual to-do.</li>
                                <li clssName='current-feature-li'>Registered users can delete to-dos they no longer need or want in their dashboard.</li>
                            </ul>
                        </div>
                        <div className='feature-list-container'>
                            <h3>Rewards</h3>
                            <ul className='current-feature-list'>
                                <li clssName='current-feature-li'>Registered users can create new Rewards, which appear in their user dashboard.</li>
                                <li clssName='current-feature-li'>Registered users can view their reward details by clicking on individual rewards.</li>
                                <li clssName='current-feature-li'>Registered users can edit/update details for each individual reward.</li>
                                <li clssName='current-feature-li'>Registered users can delete rewards they no longer need or want in their dashboard.</li>
                            </ul>
                        </div>
                        <div className='feature-list-container'>
                            <h3>Avatar Customization</h3>
                            <ul className='current-feature-list'>
                                <li clssName='current-feature-li'>Registered users can select the 'Edit Avatar' button from their user dropdown to customize their avatar's body, shirt, skin, and hair.</li>
                            </ul>
                        </div>
                        <div className='feature-list-container'>
                            <h3>User Inventory & Shops</h3>
                            <ul className='current-feature-list'>
                                <li clssName='current-feature-li'>Registered users can click the inventory tab to reach their inventory. From there, they can click on items to get that item's details and stats.</li>
                                <li clssName='current-feature-li'>Registered users can click the Shops tab to see the full selection of items they can spend their gold on, each with their own stats and buffs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div onClick={() => {
                        if(apiRoutesActive === "active") {
                            setApiRoutesActive("inactive")
                        } else {
                            setAboutActive("inactive")
                            setTechUsedActive("inactive")
                            setCurrFeaturesActive("inactive")
                            setApiRoutesActive("active")
                            setFutureImplementationsActive("inactive")
                            setAttributionsActive("inactive")
                        }
                    }}>
                        <h2 className='wiki-section-h2'>API Routes</h2>
                    </div>
                    <div className={`wiki-section-${apiRoutesActive}`}>
                        <ul className='api-route-outer-ul'>
                            <li>Route: "/"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        This route will direct to the public directory in our react builds in the production environment for favicon or index.html requests.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/path : path"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        This route will direct to the public directory in our react builds in the production environment for favicon or index.html requests.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/auth"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Authenticates a user.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/auth/login"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "POST"
                                    </li>
                                    <li>
                                        Logs a user in.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/auth/logout"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Logs a user out.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/auth/signup"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "POST"
                                    </li>
                                    <li>
                                        Creates a new user and logs them in.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/auth/unauthorized"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Returns unauthorized JSON when flask-login authentication fails.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/avatar/current"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Fetches a logged-in user's avatar details.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/avatar/update"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "PUT"
                                    </li>
                                    <li>
                                        Updates a logged-in user's avatar details after changing them in the customization modal.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/dailies/:id"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Fetches the details of a specific Daily.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/dailies/:id/delete"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "DELETE"
                                    </li>
                                    <li>
                                        Deletes a logged-in user's specified Daily.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/dailies/:id/update"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "PUT"
                                    </li>
                                    <li>
                                        Updates the details of a user's specified Daily.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/dailies/new"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "POST"
                                    </li>
                                    <li>
                                        Creates a new Daily.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/dailies/user-dailies"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Fetches all of the logged-in user's Dailies.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/docs"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Returns all API routes and their doc strings.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/features/new"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "POST"
                                    </li>
                                    <li>
                                        Allows a user to create a new Feature Request.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/habits/:id"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Fetches the details of a specific Daily.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/habits/:id/delete"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "DELETE"
                                    </li>
                                    <li>
                                        Allows a user to delete a specified Habit
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/habits/:id/update"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "PUT"
                                    </li>
                                    <li>
                                        Updates the details of a specified Habit.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/habits/new"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "POST"
                                    </li>
                                    <li>
                                        Allows a logged-in user to create a new Habit.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/reports/:id/status"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "PUT"
                                    </li>
                                    <li>
                                        Updates a Bug Report status to resolved or unresolved.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/reports/new"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "POST"
                                    </li>
                                    <li>
                                        Allows users to create a new Bug Report.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/rewards/:id"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Fetches the details of a specified Reward.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/rewards/:id/delete"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "DELETE"
                                    </li>
                                    <li>
                                        Allows a user to delete a specified Reward.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/rewards/:id/update"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "PUT"
                                    </li>
                                    <li>
                                        Updates the details of a specified Reward.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/rewards/new"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "POST"
                                    </li>
                                    <li>
                                        Allows a user to create a new Reward.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/search/:tags"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Filters a user's Habits, Dailies, To-Dos, and Rewards based on the specified tags.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/search/custom/:query"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Filters a user's Habits, Dailies, To-Dos, and Rewards based on keywords in the item's title or notes.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/todos/:id"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Fetches the details of a specified To-Do.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/todos/:id/delete"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "DELETE"
                                    </li>
                                    <li>
                                        Allows users to delete a specified To-Do.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/todos/:id/update"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "PUT"
                                    </li>
                                    <li>
                                        Updates the details of a specified To-Do.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/todos/new"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "POST"
                                    </li>
                                    <li>
                                        Allows a user to create a new To-Do.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/todos/user-to-dos"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Fetches all of a logged-in user's To-Dos.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/users"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Query for all users and returns them in a list of user dictionaries.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/users/:id"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Query for a user by id and returns that user in a dictionary.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/users/inventory"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "GET"
                                    </li>
                                    <li>
                                        Fetches all of a logged-in user's inventory items.
                                    </li>
                                </ul>
                            </li>
                            <li>Route: "/api/users/update-user-stats"
                                <ul className='api-route-inner-ul'>
                                    <li>
                                        method: "PUT"
                                    </li>
                                    <li>
                                        Updates a user's stats and information.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div onClick={() => {
                        if(futureImplementationsActive === "active") {
                            setFutureImplementationsActive("inactive")
                        } else {
                            setAboutActive("inactive")
                            setTechUsedActive("inactive")
                            setCurrFeaturesActive("inactive")
                            setApiRoutesActive("inactive")
                            setFutureImplementationsActive("active")
                            setAttributionsActive("inactive")
                        }
                    }}>
                        <h2 className='wiki-section-h2'>Future Implementations</h2>
                    </div>
                    <div className={`wiki-section-${futureImplementationsActive}`}>
                        <div className='feature-list-container'>
                            <h3>Drag & Drop</h3>
                            <ul className='future-feature-list'>
                                <li>Users will be able to change the order of their tasks in a given column by simply dragging and dropping.</li>
                            </ul>
                        </div>
                        <div className='feature-list-container'>
                            <h3>Parties & Questing</h3>
                            <ul className='future-feature-list'>
                                <li>Users will be able to connect with other users, go on quests, and fight bosses to level up.</li>
                            </ul>
                        </div>
                        <div className='feature-list-container'>
                            <h3>Pets & Mounts</h3>
                            <ul className='future-feature-list'>
                                <li>Users will be able to buy or earn pets and mounts with certain stats and buffs.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div onClick={() => {
                        if(attributionsActive === "active") {
                            setAttributionsActive("inactive")
                        } else {
                            setAboutActive("inactive")
                            setTechUsedActive("inactive")
                            setCurrFeaturesActive("inactive")
                            setApiRoutesActive("inactive")
                            setFutureImplementationsActive("inactive")
                            setAttributionsActive("active")
                        }
                    }}>
                        <h2 className='wiki-section-h2'>Attributions</h2>
                    </div>
                    <div className={`wiki-section-${attributionsActive}`}>
                        <ul id='wiki-attributions-ul'>
                            <li>Icon made by Corner Pixel from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a></li>
                            <li>Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/pros-and-cons" title="pros and cons icons">Pros and cons icons created by Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/checkbox" title="checkbox icons">Checkbox icons created by inkubators - Flaticon</a></li>
                            <li><a href="https://www.flaticon.com/free-icons/treasure" title="treasure icons">Treasure icons created by Freepik - Flaticon</a></li>
                            <li>Icons made by <a href="https://www.flaticon.com/authors/iwitostudio" title="IwitoStudio"> IwitoStudio </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                            <li>Icons made by <a href="https://www.flaticon.com/authors/pongsakornred" title="pongsakornRed"> pongsakornRed </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                            <li>Icons made by <a href="https://www.flaticon.com/authors/frelayasia" title="frelayasia"> frelayasia </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                            <li>Icons made by KP Arts from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                            <li>Icons made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn"> bqlqn </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                            <li>Icons made by <a href="https://www.flaticon.com/authors/th-studio" title="th studio"> th studio </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></li>
                        </ul>
                        {/* <div>
                            <img id='filter-icon' src="https://i.ibb.co/6wKhD2Q/setting-filter.png" alt="setting-filter" border="0" />
                            Icon made by Corner Pixel from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
                        </div> */}
                        {/* <div>
                            <img id='profile-icon' src="https://i.ibb.co/Wg6yLBy/user-icon.png" alt="user-icon" border="0" style={{"backgroundColor": "lightgray"}} />
                            <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>
                        </div> */}
                        {/* <div>
                            <img id='down-arrow-icon' src="https://i.ibb.co/JvX6pDf/down-filled-triangular-arrow-512.png" alt="down-filled-triangular-arrow-512" border="0" />
                            Icons made by <a href="https://www.freepik.com" title="Freepik"> Freepik </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
                        </div> */}
                        {/* <div>
                            <img id='plus-minus-icon' src="https://i.ibb.co/vY0Gr8s/pros-and-cons.png" alt="pros-and-cons" border="0" />
                            <a href="https://www.flaticon.com/free-icons/pros-and-cons" title="pros and cons icons">Pros and cons icons created by Freepik - Flaticon</a>
                        </div> */}
                        {/* <div>
                            <img id='calendar-icon' src="https://i.ibb.co/B27L9Pb/calendar.png" alt="calendar" border="0" />
                            <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a>
                        </div> */}
                        {/* <div>
                            <img id='checkbox-add-icon' src="https://i.ibb.co/kKMf3wy/checkbox.png" alt="checkbox" border="0" />
                            <a href="https://www.flaticon.com/free-icons/checkbox" title="checkbox icons">Checkbox icons created by inkubators - Flaticon</a>
                        </div> */}
                        {/* <div>
                            <img id='treasure-chest-icon' src="https://i.ibb.co/bL3CqDd/treasure.png" alt="treasure-chest" border="0" />
                            <a href="https://www.flaticon.com/free-icons/treasure" title="treasure icons">Treasure icons created by Freepik - Flaticon</a>
                        </div> */}
                        {/* <div>
                            <img id='background-icon-shine' src="https://i.ibb.co/hHWYqMd/shine.png" alt="shine" border="0" />
                            Icons made by <a href="https://www.flaticon.com/authors/iwitostudio" title="IwitoStudio"> IwitoStudio </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
                        </div> */}
                        {/* <div>
                            <img id='warrior-sword' src="https://i.ibb.co/89kB12R/sword.png" alt="sword" border="0" />
                            Icons made by <a href="https://www.flaticon.com/authors/pongsakornred" title="pongsakornRed"> pongsakornRed </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
                        </div> */}
                        {/* <div>
                            <img id="health-heart" src="https://i.ibb.co/sbhZwgt/love-always-wins.png" alt="love-always-wins" border="0" />
                            Icons made by <a href="https://www.flaticon.com/authors/frelayasia" title="frelayasia"> frelayasia </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
                        </div> */}
                        {/* <div>
                            <img id='experience-star' src="https://i.ibb.co/rGg2VJ7/star2.png" alt="star2" border="0" />
                            Icons made by KP Arts from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
                        </div> */}
                        {/* <div>
                            <img id='trash-can-icon' src="https://i.ibb.co/2WtHztY/trash.png" alt="trash" border="0" />
                            Icons made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn"> bqlqn </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
                        </div> */}
                        {/* <div>
                            <img src="https://i.ibb.co/tpMrL6c/down-arrow-not-filled.png" alt="down-arrow-not-filled" border="0" style={{"height": "14px"}} />
                            Icons made by <a href="https://www.flaticon.com/authors/th-studio" title="th studio"> th studio </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WikiComponent;
