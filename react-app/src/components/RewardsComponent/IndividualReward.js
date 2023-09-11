import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import { getOneReward } from "../../store/rewards";
import { updateUserInfo } from "../../store/session";
import UpdateDeleteReward from "./UpdateDeleteReward";
import UpdateDeleteRewardModal from "./UpdatedDeleteRewardModal";
import './Rewards.css'


const IndividualReward = ({rewardData}) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [showModal, setShowModal] = useState(false)
    const [selectedReward, setSelectedReward] = useState(null)
    // console.log("REWARD DATA FROM INDIV REWARD: ", rewardData)

    // useEffect(() => {
    //     dispatch(getOneReward(rewardData.id))
    // }, [dispatch])

    const handleUpdateDeleteClick = async () => {
        // console.log("FROM HANDLE UPDATE DELETE CLICK: ", rewardData)
        setSelectedReward(rewardData)
        setShowModal(true)
        return <Redirect to='/my-dashboard' />
    }

    return (
        <>
            {/* <div id='single-reward-container'> */}
                <div id='single-reward-text-div' onClick={handleUpdateDeleteClick}>
                    <p className='reward-title-text'>{rewardData.title}</p>
                    <p className='reward-notes-text'>{rewardData.notes}</p>
                </div>
                <div id='right-reward-sidebar'>
                    <div className='coin-circle'>
                        <div className='inner-coin-circle'><p>Q</p></div>
                    </div>
                    <p id='cost-text'>{rewardData.cost}</p>
                </div>
                <UpdateDeleteReward rewardId={rewardData.id} />
            {/* </div> */}
            {showModal && (
                <UpdateDeleteRewardModal
                    rewardId={selectedReward.id}
                    rewardData={selectedReward}
                    onSubmit={() => {
                        setShowModal(false)
                        setSelectedReward(null)
                    }}
                    onClose={() => {
                        setShowModal(false)
                        setSelectedReward(null)
                    }}
                />
            )}
        </>
    )

}

export default IndividualReward;
