import availableItems from "./availableItems";
import UserOverview from "../UserOverview";
import { useState } from 'react'
import Confirmation from "./Confirmation";
import ConfirmationModal from "./ConfirmationModal";
import './ShopsComponent.css'
import AvatarDisplay from "../AvatarDisplay";

const ShopsComponent = () => {
    const [itemOneActive, setItemOneActive] = useState(false)
    const [itemTwoActive, setItemTwoActive] = useState(false)
    const [itemThreeActive, setItemThreeActive] = useState(false)
    const [itemFourActive, setItemFourActive] = useState(false)
    const [itemFiveActive, setItemFiveActive] = useState(false)
    const [itemSixActive, setItemSixActive] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const itemOne = availableItems.one
    const itemTwo = availableItems.two
    const itemThree = availableItems.three
    const itemFour = availableItems.four
    const itemFive = availableItems.five
    const itemSix = availableItems.six

    const itemOneInfo = (
        <>
            <div className={`shop-equ-item-1-${itemOneActive}`}>
                <div className="shop-item-name-desc">
                    <p>{itemOne.name}</p>
                    <p>{itemOne.description}</p>
                </div>
                <div id='shop-item-stats-container'>
                    <div id='shop-item-stats-cont-top'>
                        <div className='shop-item-stats-section' id='shop-item-str-container'>
                            <p className='stats-p-span-tag'>STR: {itemOne.strength}</p>
                            <p className='stats-p-span-tag'>Gear: {itemOne.str_gear_num}</p>
                            <p className='stats-p-span-tag'>Class Bonus: {itemOne.str_class_bonus}</p>
                        </div>
                        <div className='shop-item-stats-section' id='shop-item-int-container'>
                            <p className='stats-p-span-tag'>INT: {itemOne.intelligence}</p>
                            <p className='stats-p-span-tag'>Gear: {itemOne.int_gear_num}</p>
                            <p className='stats-p-span-tag'>Class Bonus: {itemOne.int_class_bonus}</p>
                        </div>
                    </div>
                    <div id='shop-item-stats-cont-bottom'>
                        <div className='shop-item-stats-section' id='shop-item-const-container'>
                            <p className='stats-p-span-tag'>CON: {itemOne.constitution}</p>
                            <p className='stats-p-span-tag'>Gear: {itemOne.const_gear_num}</p>
                            <p className='stats-p-span-tag'>Class Bonus: {itemOne.const_class_bonus}</p>
                        </div>
                        <div className='shop-item-stats-section' id='shop-item-perc-container'>
                            <p className='stats-p-span-tag'>PER: {itemOne.perception}</p>
                            <p className='stats-p-span-tag'>Gear: {itemOne.perc_gear_num}</p>
                            <p className='stats-p-span-tag'>Class Bonus: {itemOne.perc_class_bonus}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    const itemOneDisplay = (
        <>
            {/* {itemOneInfo} */}
            <div className='single-shop-item-container' id='shop-item-one-container' onMouseEnter={() => setItemOneActive(true)} onMouseLeave={() => setItemOneActive(false)} onClick={() => {
                setSelectedItem(itemOne)
                setShowConfirmModal(true)
                }}>
                <div>
                    <img src={itemOne.image} alt='training sword' />
                </div>
                <div className='shop-item-cost-container'>
                    <div className='shops-coin-circle'>
                        <div className='shops-inner-coin-circle'><p>Q</p></div>
                    </div>
                    <div id='shops-cost-num'>
                        <p className='shops-cost-num-p'>{itemOne.cost}</p>
                    </div>
                </div>
            </div>
        </>
    )

    const itemTwoInfo = (
        <div className={`shop-equ-item-2-${itemTwoActive}`}>
            <div className="shop-item-name-desc" id='item-two-name-desc'>
                <p>{itemTwo.name}</p>
                <p>{itemTwo.description}</p>
            </div>
            <div id='shop-item-stats-container'>
                <div id='shop-item-stats-cont-top'>
                    <div className='shop-item-stats-section' id='shop-item-str-container'>
                        <p className='stats-p-span-tag'>STR: {itemTwo.strength}</p>
                        <p className='stats-p-span-tag'>Gear: {itemTwo.str_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemTwo.str_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-int-container'>
                        <p className='stats-p-span-tag'>INT: {itemTwo.intelligence}</p>
                        <p className='stats-p-span-tag'>Gear: {itemTwo.int_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemTwo.int_class_bonus}</p>
                    </div>
                </div>
                <div id='shop-item-stats-cont-bottom'>
                    <div className='shop-item-stats-section' id='shop-item-const-container'>
                        <p className='stats-p-span-tag'>CON: {itemTwo.constitution}</p>
                        <p className='stats-p-span-tag'>Gear: {itemTwo.const_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemTwo.const_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-perc-container'>
                        <p className='stats-p-span-tag'>PER: {itemTwo.perception}</p>
                        <p className='stats-p-span-tag'>Gear: {itemTwo.perc_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemTwo.perc_class_bonus}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const itemTwoDisplay = (
        <>
            {/* {itemTwoInfo} */}
            <div id='shop-item-two-container' className='single-shop-item-container' onMouseEnter={() => setItemTwoActive(true)} onMouseLeave={() => setItemTwoActive(false)} onClick={() => {
                setSelectedItem(itemTwo)
                setShowConfirmModal(true)
                }}>
                <div>
                    <img src={itemTwo.image} alt='leather jerkin' />
                </div>
                <div className='shop-item-cost-container'>
                    <div className='shops-coin-circle'>
                        <div className='shops-inner-coin-circle'><p>Q</p></div>
                    </div>
                    <div id='shops-cost-num'>
                        <p className='shops-cost-num-p'>{itemTwo.cost}</p>
                    </div>
                </div>
            </div>
        </>
    )

    const itemThreeInfo = (
        <div className={`shop-equ-item-3-${itemThreeActive}`}>
            <div className="shop-item-name-desc" id='item-three-name-desc'>
                <p>{itemThree.name}</p>
                <p>{itemThree.description}</p>
            </div>
            <div id='shop-item-stats-container'>
                <div id='shop-item-stats-cont-top'>
                    <div className='shop-item-stats-section' id='shop-item-str-container'>
                        <p className='stats-p-span-tag'>STR: {itemThree.strength}</p>
                        <p className='stats-p-span-tag'>Gear: {itemThree.str_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemThree.str_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-int-container'>
                        <p className='stats-p-span-tag'>INT: {itemThree.intelligence}</p>
                        <p className='stats-p-span-tag'>Gear: {itemThree.int_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemThree.int_class_bonus}</p>
                    </div>
                </div>
                <div id='shop-item-stats-cont-bottom'>
                    <div className='shop-item-stats-section' id='shop-item-const-container'>
                        <p className='stats-p-span-tag'>CON: {itemThree.constitution}</p>
                        <p className='stats-p-span-tag'>Gear: {itemThree.const_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemThree.const_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-perc-container'>
                        <p className='stats-p-span-tag'>PER: {itemThree.perception}</p>
                        <p className='stats-p-span-tag'>Gear: {itemThree.perc_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemThree.perc_class_bonus}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const itemThreeDisplay = (
        <>
            {/* {itemThreeInfo} */}
            <div id='shop-item-three-container' className='single-shop-item-container' onMouseEnter={() => setItemThreeActive(true)} onMouseLeave={() => setItemThreeActive(false)} onClick={() => {
                setSelectedItem(itemThree)
                setShowConfirmModal(true)
                }}>
                <div>
                    <img src={itemThree.image} alt='wooden shield' />
                </div>
                <div className='shop-item-cost-container'>
                    <div className='shops-coin-circle'>
                        <div className='shops-inner-coin-circle'><p>Q</p></div>
                    </div>
                    <div id='shops-cost-num'>
                        <p className='shops-cost-num-p'>{itemThree.cost}</p>
                    </div>
                </div>
            </div>
        </>
    )

    const itemFourInfo = (
        <div className={`shop-equ-item-4-${itemFourActive}`}>
            <div className="shop-item-name-desc">
                <p>{itemFour.name}</p>
                <p>{itemFour.description}</p>
            </div>
            <div id='shop-item-stats-container'>
                <div id='shop-item-stats-cont-top'>
                    <div className='shop-item-stats-section' id='shop-item-str-container'>
                        <p className='stats-p-span-tag'>STR: {itemFour.strength}</p>
                        <p className='stats-p-span-tag'>Gear: {itemFour.str_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemFour.str_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-int-container'>
                        <p className='stats-p-span-tag'>INT: {itemFour.intelligence}</p>
                        <p className='stats-p-span-tag'>Gear: {itemFour.int_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemFour.int_class_bonus}</p>
                    </div>
                </div>
                <div id='shop-item-stats-cont-bottom'>
                    <div className='shop-item-stats-section' id='shop-item-const-container'>
                        <p className='stats-p-span-tag'>CON: {itemFour.constitution}</p>
                        <p className='stats-p-span-tag'>Gear: {itemFour.const_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemFour.const_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-perc-container'>
                        <p className='stats-p-span-tag'>PER: {itemFour.perception}</p>
                        <p className='stats-p-span-tag'>Gear: {itemFour.perc_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemFour.perc_class_bonus}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const itemFourDisplay = (
        <>
            {/* {itemFourInfo} */}
            <div id='shop-item-four-container' className='single-shop-item-container' onMouseEnter={() => setItemFourActive(true)} onMouseLeave={() => setItemFourActive(false)} onClick={() => {
                setSelectedItem(itemFour)
                setShowConfirmModal(true)
                }}>
                <div>
                    <img src={itemFour.image} alt='leather helm' />
                </div>
                <div className='shop-item-cost-container'>
                    <div className='shops-coin-circle'>
                        <div className='shops-inner-coin-circle'><p>Q</p></div>
                    </div>
                    <div id='shops-cost-num'>
                        <p className='shops-cost-num-p'>{itemFour.cost}</p>
                    </div>
                </div>
            </div>
        </>
    )

    const itemFiveInfo = (
        <div className={`shop-equ-item-5-${itemFiveActive}`}>
            <div className="shop-item-name-desc">
                <p>{itemFive.name}</p>
                <p>{itemFive.description}</p>
            </div>
            <div id='shop-item-stats-container'>
                <div id='shop-item-stats-cont-top'>
                    <div className='shop-item-stats-section' id='shop-item-str-container'>
                        <p className='stats-p-span-tag'>STR: {itemFive.strength}</p>
                        <p className='stats-p-span-tag'>Gear: {itemFive.str_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemFive.str_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-int-container'>
                        <p className='stats-p-span-tag'>INT: {itemFive.intelligence}</p>
                        <p className='stats-p-span-tag'>Gear: {itemFive.int_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemFive.int_class_bonus}</p>
                    </div>
                </div>
                <div id='shop-item-stats-cont-bottom'>
                    <div className='shop-item-stats-section' id='shop-item-const-container'>
                        <p className='stats-p-span-tag'>CON: {itemFive.constitution}</p>
                        <p className='stats-p-span-tag'>Gear: {itemFive.const_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemFive.const_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-perc-container'>
                        <p className='stats-p-span-tag'>PER: {itemFive.perception}</p>
                        <p className='stats-p-span-tag'>Gear: {itemFive.perc_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemFive.perc_class_bonus}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const itemFiveDisplay = (
        <>
            {/* {itemFiveInfo} */}
            <div id='shop-item-five-container' className='single-shop-item-container' onMouseEnter={() => setItemFiveActive(true)} onMouseLeave={() => setItemFiveActive(false)} onClick={() => {
                setSelectedItem(itemFive)
                setShowConfirmModal(true)
                }}>
                <div>
                    <img src={itemFive.image} alt='health potion' />
                </div>
                <div className='shop-item-cost-container'>
                    <div className='shops-coin-circle'>
                        <div className='shops-inner-coin-circle'><p>Q</p></div>
                    </div>
                    <div id='shops-cost-num'>
                        <p className='shops-cost-num-p'>{itemFive.cost}</p>
                    </div>
                </div>
            </div>
        </>
    )

    const itemSixInfo = (
        <div className={`shop-equ-item-6-${itemSixActive}`}>
            <div className="shop-item-name-desc">
                <p>{itemSix.name}</p>
                <p>{itemSix.description}</p>
            </div>
            <div id='shop-item-stats-container'>
                <div id='shop-item-stats-cont-top'>
                    <div className='shop-item-stats-section' id='shop-item-str-container'>
                        <p className='stats-p-span-tag'>STR: {itemSix.strength}</p>
                        <p className='stats-p-span-tag'>Gear: {itemSix.str_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemSix.str_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-int-container'>
                        <p className='stats-p-span-tag'>INT: {itemSix.intelligence}</p>
                        <p className='stats-p-span-tag'>Gear: {itemSix.int_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemSix.int_class_bonus}</p>
                    </div>
                </div>
                <div id='shop-item-stats-cont-bottom'>
                    <div className='shop-item-stats-section' id='shop-item-const-container'>
                        <p className='stats-p-span-tag'>CON: {itemSix.constitution}</p>
                        <p className='stats-p-span-tag'>Gear: {itemSix.const_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemSix.const_class_bonus}</p>
                    </div>
                    <div className='shop-item-stats-section' id='shop-item-perc-container'>
                        <p className='stats-p-span-tag'>PER: {itemSix.perception}</p>
                        <p className='stats-p-span-tag'>Gear: {itemSix.perc_gear_num}</p>
                        <p className='stats-p-span-tag'>Class Bonus: {itemSix.perc_class_bonus}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    const itemSixDisplay = (
        <>
            {/* {itemSixInfo} */}
            <div id='shop-item-six-container' className='single-shop-item-container' onMouseEnter={() => setItemSixActive(true)} onMouseLeave={() => setItemSixActive(false)} onClick={() => {
                setSelectedItem(itemSix)
                setShowConfirmModal(true)
                }}>
                <div>
                    <img src={itemSix.image} alt='enchanted armoire' />
                </div>
                <div className='shop-item-cost-container'>
                    <div className='shops-coin-circle'>
                        <div className='shops-inner-coin-circle'><p>Q</p></div>
                    </div>
                    <div id='shops-cost-num'>
                        <p className='shops-cost-num-p'>{itemSix.cost}</p>
                    </div>
                </div>
            </div>
        </>
    )


    return (
        <>

        <UserOverview />
        <AvatarDisplay />
        {/* <div id="side-placeholder"></div> */}
        <div id='shops-parent-container'>
            <div id='shop-banner-container'>
                <img src='https://habitica.com/static/npc/normal/market_banner_npc.png' alt='shops banner'></img>
            </div>
            <div>
                <div id="shops-market-container">
                    <div id='shops-market-text-container'>
                        <h2 id='shops-market-h2'>Market</h2>
                    </div>
                </div>
            </div>
            <div id='shops-equipment-text-container'>
                <h3 id='shops-equipment-h3'>Equipment</h3>
            </div>
            <div id='shop-items-display'>
                <div id='shops-top-row'>
                    <div id='shops-top-row-info'>
                        {itemOneInfo}
                        {itemTwoInfo}
                        {itemThreeInfo}
                    </div>
                    <div id='shops-top-row-display'>
                    {showConfirmModal && (
                        <ConfirmationModal
                            itemId={selectedItem.id}
                            itemData={selectedItem}
                            onSubmit={() => {
                                setShowConfirmModal(false)
                                setSelectedItem(null)
                            }}
                            onClose={() => {
                                setShowConfirmModal(false)
                                setSelectedItem(null)
                            }}
                        />
                    )}
                        {itemOneDisplay}
                        {itemTwoDisplay}
                        {itemThreeDisplay}
                    </div>
                </div>
                <div id='shops-bottom-row'>
                    <div id='shops-bottom-row-info'>
                        {itemFourInfo}
                        {itemFiveInfo}
                        {itemSixInfo}
                    </div>
                    <div id='shops-bottom-row-display'>
                        {itemFourDisplay}
                        {itemFiveDisplay}
                        {itemSixDisplay}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopsComponent;
