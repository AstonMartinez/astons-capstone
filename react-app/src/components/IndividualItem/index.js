import { useState } from 'react'
import EquipItemModal from '../UserInventory/EquipItemModal'
import EquipItem from './EquipItem'

const IndividualItem = ({ itemData }) => {
    const [itemActive, setItemActive] = useState("inactive")
    const [showStats, setShowStats] = useState(false)
    const [showEquipItemModal, setShowEquipItemModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const toolTip = (
        <div id={`tool-tip-${itemActive}`}>
            <div>
                <div>{itemData.name}</div>
                <div>{itemData.description}</div>
            </div>
        </div>
    )

    const itemStats = (
        <div id={`item-stats-wrapper-${showStats}`}>
            <div id='item-stats-top-row'>
                <div className='item-strength-stats'>
                    {/* <p>Strength</p> */}
                    <div className='stats-inner-container' id='strength-stats-inner-container'>
                        <div><span className='item-stat-label'>Strength: </span>{itemData.strength}</div>
                        <div><span className='item-stat-label'>Gear: </span>{itemData.str_gear_num}</div>
                        <div><span className='item-stat-label'>Class Bonus: </span>{itemData.str_class_bonus}</div>
                    </div>
                </div>
                <div className='item-constitution-stat'>
                    {/* <p>Constitution</p> */}
                    <div className='stats-inner-container' id='constitution-stats-inner-container'>
                        <div><span className='item-stat-label'>Constitution: </span>{itemData.constitution}</div>
                        <div><span className='item-stat-label'>Gear: </span>{itemData.const_gear_num}</div>
                        <div><span className='item-stat-label'>Class Bonus: </span>{itemData.const_class_bonus}</div>
                    </div>
                </div>
            </div>
            <div id='item-stats-bottom-row'>
                <div className='item-intelligence-stat'>
                    {/* <p>Intelligence</p> */}
                    <div className='stats-inner-container' id='intelligence-stats-inner-container'>
                        <div><span className='item-stat-label'>Intelligence: </span>{itemData.intelligence}</div>
                        <div><span className='item-stat-label'>Gear: </span>{itemData.int_gear_num}</div>
                        <div><span className='item-stat-label'>Class Bonus: </span>{itemData.int_class_bonus}</div>
                    </div>
                </div>
                <div className='item-perception-stat'>
                    {/* <p>Perception</p> */}
                    <div className='stats-inner-container' id='perception-stats-inner-container'>
                        <div><span className='item-stat-label'>Perception: </span>{itemData.perception}</div>
                        <div><span className='item-stat-label'>Gear: </span>{itemData.perc_gear_num}</div>
                        <div><span className='item-stat-label'>Gear Bonus: </span>{itemData.perc_class_bonus}</div>
                    </div>
                </div>
            </div>

        </div>
    )


    return (
        <>
            {toolTip}
            <div onMouseEnter={() => {
                    setItemActive("active")
                }}
                onMouseLeave={() => {
                    setItemActive("inactive")
                }}
                onClick={() => {
                    // setSelectedItem(itemData)
                    // setShowEquipItemModal(true)
                    alert("Using / Equipping Items Feature Coming Soon!")
                }}>
                <div id='item-image-container'>
                    <img className='equipment-item-image' src={itemData.image} alt='equipment item' />
                </div>
                <EquipItem item={itemData} />
            </div>
            {/* {itemStats} */}
            {showEquipItemModal && (
                <EquipItemModal
                    itemId={itemData.id}
                    itemData={itemData}
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
        </>
    )


}

export default IndividualItem;
