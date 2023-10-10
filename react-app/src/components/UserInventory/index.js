import './UserInventory.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserEquipment } from '../../store/equipment';
import UserOverview from '../UserOverview';
import IndividualItem from '../IndividualItem'
import AvatarDisplay from '../AvatarDisplay'
import { useHistory } from 'react-router-dom'
import EquipItemModal from './EquipItemModal';
import Footer from '../Footer';
import { Tooltip } from '@mui/material';

const UserInventory = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    const userEquipment = useSelector(state => state.equipment)
    const [showEquipItemModal, setShowEquipItemModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)


    if(!sessionUser) {
        history.push('/login')
    }
    let noEquipmentMsg
    const equipmentToMap = Object.values(userEquipment)

    if(equipmentToMap.length >= 1) {

        noEquipmentMsg = ''
    } else {
        // userEquipment = ''
        noEquipmentMsg = (
            <div id='no-equipment-message'>
                <h2>You don't have any items in your inventory yet!</h2>
            </div>
        )
    }


    useEffect(() => {
        dispatch(getUserEquipment())
    }, [dispatch])

    const itemSevenDisplay = (
        <div id='shop-item-six-container' className='single-shop-item-container'>
    <div>
        <img src="https://habitica-assets.s3.amazonaws.com/mobileApp/images/Pet_Egg_BearCub.png" alt='enchanted armoire' />
    </div>
    <div className='shop-item-cost-container'>
        <div className='shops-coin-circle'>
            <div className='shops-inner-coin-circle'><p>Q</p></div>
        </div>
        <div id='shops-cost-num'>
            <p className='shops-cost-num-p'>20</p>
        </div>
    </div>
</div>
)

const itemEightDisplay = (
<div id='shop-item-six-container' className='single-shop-item-container'>
    <div>
        <img src="https://habitica-assets.s3.amazonaws.com/mobileApp/images/Pet_Egg_Cactus.png" alt='enchanted armoire' />
    </div>
    <div className='shop-item-cost-container'>
        <div className='shops-coin-circle'>
            <div className='shops-inner-coin-circle'><p>Q</p></div>
        </div>
        <div id='shops-cost-num'>
            <p className='shops-cost-num-p'>20</p>
        </div>
    </div>
</div>
)

const itemNineDisplay = (
<div id='shop-item-six-container' className='single-shop-item-container'>
    <div>
        <img src="https://habitica-assets.s3.amazonaws.com/mobileApp/images/Pet_Egg_Dragon.png" alt='enchanted armoire' />
    </div>
    <div className='shop-item-cost-container'>
        <div className='shops-coin-circle'>
            <div className='shops-inner-coin-circle'><p>Q</p></div>
        </div>
        <div id='shops-cost-num'>
            <p className='shops-cost-num-p'>20</p>
        </div>
    </div>
</div>
)

const itemTenDisplay = (
<div id='shop-item-six-container' className='single-shop-item-container'>
    <div>
        <img src="https://habitica-assets.s3.amazonaws.com/mobileApp/images/Pet_HatchingPotion_Base.png" alt='enchanted armoire' />
    </div>
    <div className='shop-item-cost-container'>
        <div className='shops-coin-circle'>
            <div className='shops-inner-coin-circle'><p>Q</p></div>
        </div>
        <div id='shops-cost-num'>
            <p className='shops-cost-num-p'>15</p>
        </div>
    </div>
</div>
)

const itemElevenDisplay = (
<div id='shop-item-six-container' className='single-shop-item-container'>
    <div>
        <img src="https://habitica-assets.s3.amazonaws.com/mobileApp/images/Pet_HatchingPotion_CottonCandyBlue.png" alt='enchanted armoire' />
    </div>
    <div className='shop-item-cost-container'>
        <div className='shops-coin-circle'>
            <div className='shops-inner-coin-circle'><p>Q</p></div>
        </div>
        <div id='shops-cost-num'>
            <p className='shops-cost-num-p'>15</p>
        </div>
    </div>
</div>
)

const itemTwelveDisplay = (
<div id='shop-item-six-container' className='single-shop-item-container'>
    <div>
        <img src="https://habitica-assets.s3.amazonaws.com/mobileApp/images/Pet_HatchingPotion_CottonCandyPink.png" alt='enchanted armoire' />
    </div>
    <div className='shop-item-cost-container'>
        <div className='shops-coin-circle'>
            <div className='shops-inner-coin-circle'><p>Q</p></div>
        </div>
        <div id='shops-cost-num'>
            <p className='shops-cost-num-p'>15</p>
        </div>
    </div>
</div>
)

const itemThirteenDisplay = (
<div id='shop-item-six-container' className='single-shop-item-container'>
    <div>
        <img src="https://habitica-assets.s3.amazonaws.com/mobileApp/images/Pet_Food_CottonCandyBlue.png" alt='enchanted armoire' />
    </div>
    <div className='shop-item-cost-container'>
        <div className='shops-coin-circle'>
            <div className='shops-inner-coin-circle'><p>Q</p></div>
        </div>
        <div id='shops-cost-num'>
            <p className='shops-cost-num-p'>10</p>
        </div>
    </div>
</div>
)

const itemFourteenDisplay = (
<div id='shop-item-six-container' className='single-shop-item-container'>
    <div>
        <img src="https://habitica-assets.s3.amazonaws.com/mobileApp/images/Pet_Food_Chocolate.png" alt='enchanted armoire' />
    </div>
    <div className='shop-item-cost-container'>
        <div className='shops-coin-circle'>
            <div className='shops-inner-coin-circle'><p>Q</p></div>
        </div>
        <div id='shops-cost-num'>
            <p className='shops-cost-num-p'>10</p>
        </div>
    </div>
</div>
)

const itemFifteenDisplay = (
<div id='shop-item-six-container' className='single-shop-item-container'>
    <div>
        <img src="https://habitica-assets.s3.amazonaws.com/mobileApp/images/Pet_Food_CottonCandyPink.png" alt='enchanted armoire' />
    </div>
    <div className='shop-item-cost-container'>
        <div className='shops-coin-circle'>
            <div className='shops-inner-coin-circle'><p>Q</p></div>
        </div>
        <div id='shops-cost-num'>
            <p className='shops-cost-num-p'>10</p>
        </div>
    </div>
</div>
)

    return (
        <div id='inventory-page-wrapper'>
            <AvatarDisplay />
            <UserOverview />
            {/* <h1>Items</h1> */}
            <div id='upper-item-div'><div id='equipment-item-text'>Items</div></div>
            {noEquipmentMsg}
            <div id='equipment-display-wrapper'>
                {equipmentToMap && equipmentToMap.map((item) => (
                    <>
                        <Tooltip title={`${item.name}\n${item.description}`}>
                            <div className='individual-equipment-item' onClick={() => setSelectedItem(item)}>
                                <IndividualItem itemData={item} />
                            </div>
                        </Tooltip>
                    </>
                ))}
            </div>
            {selectedItem && showEquipItemModal && (
            <EquipItemModal
                itemId={selectedItem.id}
                itemData={selectedItem}
                onSubmit={() => {
                    setShowEquipItemModal(false)
                    setSelectedItem(null)
                }}
                onClose={() => {
                    setShowEquipItemModal(false)
                    setSelectedItem(null)
                }}
            />
            )}
            <div>
            <div id='shops-equipment-text-container'>
                <h3 id='shops-equipment-h3'>More Items Coming Soon!</h3>
            </div>
            <div id='shop-items-display'>
                <div id='shops-top-row'>
                    <div id='shops-top-row-display'>
                        <Tooltip title="Bear Cub Egg">
                            {itemSevenDisplay}
                        </Tooltip>
                        <Tooltip title="Cactus Egg">
                            {itemEightDisplay}
                        </Tooltip>
                        <Tooltip title="Dragon Egg">
                            {itemNineDisplay}
                        </Tooltip>
                    </div>
                </div>
                <div id='shops-bottom-row'>
                    <div id='shops-bottom-row-display'>
                        <Tooltip title="Potion">
                            {itemTenDisplay}
                        </Tooltip>
                        <Tooltip title="Potion">
                            {itemElevenDisplay}
                        </Tooltip>
                        <Tooltip title="Potion">
                            {itemTwelveDisplay}
                        </Tooltip>
                    </div>
                </div>
                <div id='shops-bottom-row'>
                    <div id='shops-bottom-row-display'>
                        <Tooltip title="Blue Cotton Candy">
                            {itemThirteenDisplay}
                        </Tooltip>
                        <Tooltip title="Chocolate Bar">
                            {itemFourteenDisplay}
                        </Tooltip>
                        <Tooltip title="Pink Cotton Candy">
                            {itemFifteenDisplay}
                        </Tooltip>
                    </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default UserInventory;
