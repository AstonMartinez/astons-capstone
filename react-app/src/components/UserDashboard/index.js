import './UserDashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import DailiesComponent from '../Dailies';
import HabitComponent from '../Habits';

const UserDashboard = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    return (
        <div id='user-dashboard-wrapper'>
            <div>
                <HabitComponent />
            </div>
            <div>
                <DailiesComponent />
            </div>
        </div>
    )
}

export default UserDashboard;
