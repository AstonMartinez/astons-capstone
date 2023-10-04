import './CustomizeAvatarModal.css'
import { useState, useRef } from 'react'
import allBodyOptions from './Body'
import allSkinOptions from './Skin'
import allHairOptions from './Hair'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAvatar, updateUserAvatar } from '../../store/avatars'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { authenticate } from '../../store/session'
import LoadingScreen from '../LoadingScreen'

const CustomizeAvatarModal = ({onSubmit, onClose}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const modalOverlayRef = useRef()

    const [loading, setLoading] = useState(false)

    const userAvatar = useSelector(state => state.avatar)
    const [background, setBackground] = useState(userAvatar.background)
    const [sizeActive, setSizeActive] = useState("active")
    const [shirtActive, setShirtActive] = useState("inactive")
    const [skinColorActive, setSkinColorActive] = useState("inactive")
    const [hairColorActive, setHairColorActive] = useState("inactive")
    const [bangsActive, setBangsActive] = useState("inactive")

    const [slimShirtOneActive, setSlimShirtOneActive] = useState(false)
    const [slimShirtTwoActive, setSlimShirtTwoActive] = useState(false)
    const [slimShirtThreeActive, setSlimShirtThreeActive] = useState(false)
    const [slimShirtFourActive, setSlimShirtFourActive] = useState(false)
    const [slimShirtFiveActive, setSlimShirtFiveActive] = useState(false)
    const [slimShirtSixActive, setSlimShirtSixActive] = useState(false)

    const [broadShirtOneActive, setBroadShirtOneActive] = useState(false)
    const [broadShirtTwoActive, setBroadShirtTwoActive] = useState(false)
    const [broadShirtThreeActive, setBroadShirtThreeActive] = useState(false)
    const [broadShirtFourActive, setBroadShirtFourActive] = useState(false)
    const [broadShirtFiveActive, setBroadShirtFiveActive] = useState(false)
    const [broadShirtSixActive, setBroadShirtSixActive] = useState(false)

    const [skinOneActive, setSkinOneActive] = useState(false)
    const [skinTwoActive, setSkinTwoActive] = useState(false)
    const [skinThreeActive, setSkinThreeActive] = useState(false)
    const [skinFourActive, setSkinFourActive] = useState(false)
    const [skinFiveActive, setSkinFiveActive] = useState(false)
    const [skinSixActive, setSkinSixActive] = useState(false)
    const [skinSevenActive, setSkinSevenActive] = useState(false)
    const [skinEightActive, setSkinEightActive] = useState(false)

    const [blackHairOne, setBlackHairOne] = useState(false)
    const [blackHairTwo, setBlackHairTwo] = useState(false)
    const [blackHairThree, setBlackHairThree] = useState(false)
    const [blackHairFour, setBlackHairFour] = useState(false)
    const [blackHairFive, setBlackHairFive] = useState(false)

    const [redHairOne, setRedHairOne] = useState(false)
    const [redHairTwo, setRedHairTwo] = useState(false)
    const [redHairThree, setRedHairThree] = useState(false)
    const [redHairFour, setRedHairFour] = useState(false)
    const [redHairFive, setRedHairFive] = useState(false)

    const [brownHairOne, setBrownHairOne] = useState(false)
    const [brownHairTwo, setBrownHairTwo] = useState(false)
    const [brownHairThree, setBrownHairThree] = useState(false)
    const [brownHairFour, setBrownHairFour] = useState(false)
    const [brownHairFive, setBrownHairFive] = useState(false)

    const [blondeHairOne, setBlondeHairOne] = useState(false)
    const [blondeHairTwo, setBlondeHairTwo] = useState(false)
    const [blondeHairThree, setBlondeHairThree] = useState(false)
    const [blondeHairFour, setBlondeHairFour] = useState(false)
    const [blondeHairFive, setBlondeHairFive] = useState(false)

    const [whiteHairOne, setWhiteHairOne] = useState(false)
    const [whiteHairTwo, setWhiteHairTwo] = useState(false)
    const [whiteHairThree, setWhiteHairThree] = useState(false)
    const [whiteHairFour, setWhiteHairFour] = useState(false)
    const [whiteHairFive, setWhiteHairFive] = useState(false)

    const [backgroundOne, setBackgroundOne] = useState(false)
    const [backgroundTwo, setBackgroundTwo] = useState(false)
    const [backgroundThree, setBackgroundThree] = useState(false)
    const [backgroundFour, setBackgroundFour] = useState(false)
    const [backgroundFive, setBackgroundFive] = useState(false)
    const [backgroundSix, setBackgroundSix] = useState(false)

    const [noBangsActive, setNoBangsActive] = useState(false)


    const checkBodyType = () => {
        if(userAvatar.shirt === allBodyOptions.slim.black || userAvatar.shirt === allBodyOptions.slim.blue || userAvatar.shirt === allBodyOptions.slim.green || userAvatar.shirt === allBodyOptions.slim.pink || userAvatar.shirt === allBodyOptions.slim.white || userAvatar.shirt === allBodyOptions.slim.yellow) {
            return "slim"
        } else {
            return "broad"
        }
    }

    const initialBodyType = checkBodyType()

    const [bodyType, setBodyType] = useState(initialBodyType)
    const [shirt, setShirt] = useState(userAvatar.shirt)
    const [skin, setSkin] = useState(userAvatar.skin)

    const checkHairColor = () => {
        if(userAvatar.hair === allHairOptions.red.one || userAvatar.hair === allHairOptions.red.two || userAvatar.hair === allHairOptions.red.three ||userAvatar.hair === allHairOptions.red.four) {
            return "red"
        } else if(userAvatar.hair === allHairOptions.black.one || userAvatar.hair === allHairOptions.black.two || userAvatar.hair === allHairOptions.black.three ||userAvatar.hair === allHairOptions.black.four) {
            return "black"
        } else if(userAvatar.hair === allHairOptions.brown.one || userAvatar.hair === allHairOptions.brown.two || userAvatar.hair === allHairOptions.brown.three ||userAvatar.hair === allHairOptions.brown.four) {
            return "brown"
        } else if(userAvatar.hair === allHairOptions.blonde.one || userAvatar.hair === allHairOptions.blonde.two || userAvatar.hair === allHairOptions.blonde.three ||userAvatar.hair === allHairOptions.blonde.four) {
            return "blonde"
        } else {
            return "white"
        }
    }

    const initialHairColor = checkHairColor()
    const [hairColor, setHairColor] = useState(initialHairColor)
    const [hasBangs, setHasBangs] = useState(true)
    const [hair, setHair] = useState(userAvatar.hair)
    const [bangs, setBangs] = useState(userAvatar.bangs)
    const [category, setCategory] = useState("Body")
    const [subCategory, setSubCategory] = useState("Size")

    let bottomDiv
    let itemsToDisplay

    const handleSubmit = () => {
        const updatedAvatar = {
            background: background,
            skin: skin,
            shirt: shirt,
            hair: hair,
            bangs: bangs
        }

        dispatch(updateUserAvatar(updatedAvatar)).then(() => {
            dispatch(getUserAvatar())
        }).then(() => {
            dispatch(authenticate())
        })
        .then(() => {
            history.push('/my-dashboard')
            onSubmit()

        })

    }

    if(category === "Body") {
        if(subCategory === "Size") {
            itemsToDisplay = (
                <div id='body-sizes-container'>
                    <div className={`customization-item cust-opt-active-${slimShirtOneActive}`} id='slim-black-shirt' onClick={() => {
                        setBodyType("slim")
                        setShirt(allBodyOptions.slim.black)
                        setSlimShirtOneActive(true)
                        setBroadShirtOneActive(false)
                        return
                    }}>
                        <img src={allBodyOptions.slim.black} alt='slim option' />
                    </div>
                    <div className={`customization-item cust-opt-active-${broadShirtOneActive}`} onClick={() => {
                        setBodyType("broad")
                        setShirt(allBodyOptions.broad.black)
                        setSlimShirtOneActive(false)
                        setBroadShirtOneActive(true)
                        return
                    }}>
                        <img src={allBodyOptions.broad.black} alt='broad option' />
                    </div>
                </div>
            )
        } else if(subCategory === "Shirt") {
            if(bodyType === "slim") {
                itemsToDisplay = (
                    <div id='item-options-container'>
                        <div id='inner-shirt-options-top'>
                            <div className={`customization-item cust-opt-active-${slimShirtOneActive}`} id='slim-black-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.black)
                                setSlimShirtOneActive(true)
                                setSlimShirtTwoActive(false)
                                setSlimShirtThreeActive(false)
                                setSlimShirtFourActive(false)
                                setSlimShirtFiveActive(false)
                                setSlimShirtSixActive(false)
                            }}>
                                <img className='shirt-slim-opt-1' src={allBodyOptions.slim.black} alt='slim black' />
                            </div>
                            <div className={`customization-item cust-opt-active-${slimShirtTwoActive}`}  id='slim-blue-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.blue)
                                setSlimShirtOneActive(false)
                                setSlimShirtTwoActive(true)
                                setSlimShirtThreeActive(false)
                                setSlimShirtFourActive(false)
                                setSlimShirtFiveActive(false)
                                setSlimShirtSixActive(false)
                           }}>
                                <img src={allBodyOptions.slim.blue} alt='slim blue' />
                            </div>
                            <div className={`customization-item cust-opt-active-${slimShirtThreeActive}`}  id='slim-green-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.green)
                                setSlimShirtOneActive(false)
                                setSlimShirtTwoActive(false)
                                setSlimShirtThreeActive(true)
                                setSlimShirtFourActive(false)
                                setSlimShirtFiveActive(false)
                                setSlimShirtSixActive(false)
                            }}>
                                <img src={allBodyOptions.slim.green} alt='slim green' />
                            </div>
                        </div>
                        <div id='inner-shirt-options-bottom'>
                            <div className={`customization-item cust-opt-active-${slimShirtFourActive}`}  id='slim-pink-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.pink)
                                setSlimShirtOneActive(false)
                                setSlimShirtTwoActive(false)
                                setSlimShirtThreeActive(false)
                                setSlimShirtFourActive(true)
                                setSlimShirtFiveActive(false)
                                setSlimShirtSixActive(false)
                            }}>
                                <img src={allBodyOptions.slim.pink} alt='slim pink' />
                            </div>
                            <div className={`customization-item cust-opt-active-${slimShirtFiveActive}`}  id='slim-white-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.white)
                                setSlimShirtOneActive(false)
                                setSlimShirtTwoActive(false)
                                setSlimShirtThreeActive(false)
                                setSlimShirtFourActive(false)
                                setSlimShirtFiveActive(true)
                                setSlimShirtSixActive(false)
                            }}>
                                <img src={allBodyOptions.slim.white} alt='slim white' />
                            </div>
                            <div className={`customization-item cust-opt-active-${slimShirtSixActive}`}  id='slim-yellow-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.yellow)
                                setSlimShirtOneActive(false)
                                setSlimShirtTwoActive(false)
                                setSlimShirtThreeActive(false)
                                setSlimShirtFourActive(false)
                                setSlimShirtFiveActive(false)
                                setSlimShirtSixActive(true)
                            }}>
                                <img src={allBodyOptions.slim.yellow} alt='slim yellow' />
                            </div>
                        </div>
                    </div>
                )
            } else {
                itemsToDisplay = (
                    <div id='item-options-container'>
                        <div id='inner-shirt-options-top'>
                            <div className={`customization-item cust-opt-active-${broadShirtOneActive}`} id='broad-black-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.black)
                                setBroadShirtOneActive(true)
                                setBroadShirtTwoActive(false)
                                setBroadShirtThreeActive(false)
                                setBroadShirtFourActive(false)
                                setBroadShirtFiveActive(false)
                                setBroadShirtSixActive(false)
                            }}>
                                <img src={allBodyOptions.broad.black} alt='broad black' />
                            </div>
                            <div className={`customization-item cust-opt-active-${broadShirtTwoActive}`}  id='broad-blue-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.blue)
                                setBroadShirtOneActive(false)
                                setBroadShirtTwoActive(true)
                                setBroadShirtThreeActive(false)
                                setBroadShirtFourActive(false)
                                setBroadShirtFiveActive(false)
                                setBroadShirtSixActive(false)
                            }}>
                                <img src={allBodyOptions.broad.blue} alt='broad blue' />
                            </div>
                            <div className={`customization-item cust-opt-active-${broadShirtThreeActive}`}  id='broad-green-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.green)
                                setBroadShirtOneActive(false)
                                setBroadShirtTwoActive(false)
                                setBroadShirtThreeActive(true)
                                setBroadShirtFourActive(false)
                                setBroadShirtFiveActive(false)
                                setBroadShirtSixActive(false)
                            }}>
                                <img src={allBodyOptions.broad.green} alt='broad green' />
                            </div>
                        </div>
                        <div id='inner-shirt-options-bottom'>
                            <div className={`customization-item cust-opt-active-${broadShirtFourActive}`}  id='broad-pink-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.pink)
                                setBroadShirtOneActive(false)
                                setBroadShirtTwoActive(false)
                                setBroadShirtThreeActive(false)
                                setBroadShirtFourActive(true)
                                setBroadShirtFiveActive(false)
                                setBroadShirtSixActive(false)
                            }}>
                                <img src={allBodyOptions.broad.pink} alt='slim pink' />
                            </div>
                            <div className={`customization-item cust-opt-active-${broadShirtFiveActive}`} id='broad-white-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.white)
                                setBroadShirtOneActive(false)
                                setBroadShirtTwoActive(false)
                                setBroadShirtThreeActive(false)
                                setBroadShirtFourActive(false)
                                setBroadShirtFiveActive(true)
                                setBroadShirtSixActive(false)
                            }}>
                                <img src={allBodyOptions.broad.white} alt='broad white' />
                            </div>
                            <div className={`customization-item cust-opt-active-${broadShirtSixActive}`}  id='broad-yellow-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.yellow)
                                setBroadShirtOneActive(false)
                                setBroadShirtTwoActive(false)
                                setBroadShirtThreeActive(false)
                                setBroadShirtFourActive(false)
                                setBroadShirtFiveActive(false)
                                setBroadShirtSixActive(true)
                            }}>
                                <img src={allBodyOptions.broad.yellow} alt='broad yellow' />
                            </div>
                        </div>
                    </div>
                )
            }
        }
        bottomDiv = (
            <div className='customization-bottom-div'>
                <div className='subpages-container'>
                    <div id={`size-button-${sizeActive}`} onClick={() => {
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                        }, 1000)
                        setSubCategory("Size")
                        setSizeActive("active")
                        setShirtActive("inactive")
                        setSkinColorActive("inactive")
                        setHairColorActive("inactive")
                        setBangsActive("inactive")
                    }}>Size</div>
                    <div id={`shirt-button-${shirtActive}`} onClick={() => {
                                                setLoading(true)
                                                setTimeout(() => {
                                                    setLoading(false)
                                                }, 1000)
                        setSubCategory("Shirt")
                        setSizeActive("inactive")
                        setShirtActive("active")
                        setSkinColorActive("inactive")
                        setHairColorActive("inactive")
                        setBangsActive("inactive")
                    }}>Shirt</div>
                </div>
                <div>
                    {itemsToDisplay}
                </div>
            </div>
        )
    } else if(category === "Skin") {
        bottomDiv = (
            <div className='customization-bottom-div'>
                <div className='subpages-container'>
                    <div id={`skin-color-button-${skinColorActive}`}>Color
                    </div>
                </div>
                <div>
                    <div id='item-options-container'>
                        <div id='inner-skin-options-top'>
                            <div className={`customization-item cust-opt-active-${skinOneActive}`} onClick={() => {
                                setSkin(allSkinOptions.one)
                                setSkinOneActive(true)
                                setSkinTwoActive(false)
                                setSkinThreeActive(false)
                                setSkinFourActive(false)
                                setSkinFiveActive(false)
                                setSkinSixActive(false)
                                setSkinSevenActive(false)
                                setSkinEightActive(false)
                                return
                            }}>
                                <img src={allSkinOptions.one} alt='skin option one' />
                            </div>
                            <div className={`customization-item cust-opt-active-${skinTwoActive}`} onClick={() => {
                                setSkin(allSkinOptions.two)
                                setSkinOneActive(false)
                                setSkinTwoActive(true)
                                setSkinThreeActive(false)
                                setSkinFourActive(false)
                                setSkinFiveActive(false)
                                setSkinSixActive(false)
                                setSkinSevenActive(false)
                                setSkinEightActive(false)
                                return
                            }}>
                                <img src={allSkinOptions.two} alt='skin option two' />
                            </div>
                            <div className={`customization-item cust-opt-active-${skinThreeActive}`} onClick={() => {
                                setSkin(allSkinOptions.three)
                                setSkinOneActive(false)
                                setSkinTwoActive(false)
                                setSkinThreeActive(true)
                                setSkinFourActive(false)
                                setSkinFiveActive(false)
                                setSkinSixActive(false)
                                setSkinSevenActive(false)
                                setSkinEightActive(false)
                                return
                            }}>
                                <img src={allSkinOptions.three} alt='skin option three' />
                            </div>
                        </div>
                        <div id='inner-skin-options-middle'>
                            <div className={`customization-item cust-opt-active-${skinFourActive}`} onClick={() => {
                                setSkin(allSkinOptions.four)
                                setSkinOneActive(false)
                                setSkinTwoActive(false)
                                setSkinThreeActive(false)
                                setSkinFourActive(true)
                                setSkinFiveActive(false)
                                setSkinSixActive(false)
                                setSkinSevenActive(false)
                                setSkinEightActive(false)
                                return
                            }}>
                                <img src={allSkinOptions.four} alt='skin option four' />
                            </div>
                            <div className={`customization-item cust-opt-active-${skinFiveActive}`} onClick={() => {
                                setSkin(allSkinOptions.five)
                                setSkinOneActive(false)
                                setSkinTwoActive(false)
                                setSkinThreeActive(false)
                                setSkinFourActive(false)
                                setSkinFiveActive(true)
                                setSkinSixActive(false)
                                setSkinSevenActive(false)
                                setSkinEightActive(false)
                                return
                            }}>
                                <img src={allSkinOptions.five} alt='skin option five' />
                            </div>
                            <div className={`customization-item cust-opt-active-${skinSixActive}`} onClick={() => {
                                setSkin(allSkinOptions.six)
                                setSkinOneActive(false)
                                setSkinTwoActive(false)
                                setSkinThreeActive(false)
                                setSkinFourActive(false)
                                setSkinFiveActive(false)
                                setSkinSixActive(true)
                                setSkinSevenActive(false)
                                setSkinEightActive(false)
                                return
                            }}>
                                <img src={allSkinOptions.six} alt='skin option six' />
                            </div>
                        </div>
                        <div id='inner-skin-options-bottom'>
                            <div className={`customization-item cust-opt-active-${skinSevenActive}`} onClick={() => {
                                setSkin(allSkinOptions.seven)
                                setSkinOneActive(false)
                                setSkinTwoActive(false)
                                setSkinThreeActive(false)
                                setSkinFourActive(false)
                                setSkinFiveActive(false)
                                setSkinSixActive(false)
                                setSkinSevenActive(true)
                                setSkinEightActive(false)
                                return
                            }}>
                                <img src={allSkinOptions.seven} alt='skin option seven' />
                            </div>
                            <div className={`customization-item cust-opt-active-${skinEightActive}`} onClick={() => {
                                setSkin(allSkinOptions.eight)
                                setSkinOneActive(false)
                                setSkinTwoActive(false)
                                setSkinThreeActive(false)
                                setSkinFourActive(false)
                                setSkinFiveActive(false)
                                setSkinSixActive(false)
                                setSkinSevenActive(false)
                                setSkinEightActive(true)
                                return
                            }}>
                                <img src={allSkinOptions.eight} alt='skin option eight' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else if(category === "Hair") {
        if(subCategory === "Hair-Color") {
            itemsToDisplay = (
                <div id='item-options-container'>
                    <div id='inner-hair-color-options-top'>
                    <div className={`customization-item cust-opt-active-${whiteHairOne}`} onClick={() => {
                            setHairColor("white")
                            setHair(allHairOptions.white.one)
                            setBangs(allHairOptions.white.one)
                            setWhiteHairOne(true)
                            setBlackHairOne(false)
                            setBrownHairOne(false)
                            setBlondeHairOne(false)
                            setRedHairOne(false)
                            return
                        }}>
                            <img src={allHairOptions.white.one} alt='white hair one' />
                        </div>
                        <div className={`customization-item cust-opt-active-${brownHairOne}`} onClick={() => {
                            setHairColor("brown")
                            setHair(allHairOptions.brown.one)
                            setBangs(allHairOptions.brown.one)
                            setWhiteHairOne(false)
                            setBlackHairOne(false)
                            setBrownHairOne(true)
                            setBlondeHairOne(false)
                            setRedHairOne(false)
                            return
                        }}>
                            <img src={allHairOptions.brown.one} alt='brown hair one' />
                        </div>
                        <div className={`customization-item cust-opt-active-${blondeHairOne}`} onClick={() => {
                            setHairColor("blonde")
                            setHair(allHairOptions.blonde.one)
                            setBangs(allHairOptions.blonde.one)
                            setWhiteHairOne(false)
                            setBlackHairOne(false)
                            setBrownHairOne(false)
                            setBlondeHairOne(true)
                            setRedHairOne(false)
                            return
                        }}>
                            <img src={allHairOptions.blonde.one} alt='blonde hair one' />
                        </div>
                    <div id='inner-hair-color-options-bottom'>
                        <div className={`customization-item cust-opt-active-${redHairOne}`} onClick={() => {
                                setHairColor("red")
                                setHair(allHairOptions.red.one)
                                setBangs(allHairOptions.red.one)
                                setWhiteHairOne(false)
                                setBlackHairOne(false)
                                setBrownHairOne(false)
                                setBlondeHairOne(false)
                                setRedHairOne(true)
                                return
                            }}>
                                <img src={allHairOptions.red.one} alt='red hair one' />
                            </div>
                            <div className={`customization-item cust-opt-active-${blackHairOne}`} onClick={() => {
                                setHairColor("black")
                                setHair(allHairOptions.black.one)
                                setBangs(allHairOptions.black.one)
                                setWhiteHairOne(false)
                                setBlackHairOne(true)
                                setBrownHairOne(false)
                                setBlondeHairOne(false)
                                setRedHairOne(false)
                                return
                            }}>
                                <img src={allHairOptions.black.one} alt='black hair one' />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if(subCategory === "Bangs") {
            if(hairColor === "red") {
                itemsToDisplay = (
                    <div id='item-options-container'>
                    <div id='inner-hair-bangs-options-top'>
                    <div className={`customization-item cust-opt-active-${redHairOne}`} onClick={() => {
                            setHair(allHairOptions.red.one)
                            setRedHairOne(true)
                            setRedHairTwo(false)
                            setRedHairThree(false)
                            setRedHairFour(false)
                            setRedHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.red.one} alt='red bangs one' />
                        </div>
                        <div className={`customization-item cust-opt-active-${redHairTwo}`} onClick={() => {
                            setHair(allHairOptions.red.two)
                            setRedHairOne(false)
                            setRedHairTwo(true)
                            setRedHairThree(false)
                            setRedHairFour(false)
                            setRedHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.red.two} alt='red hair two' />
                        </div>
                        <div className={`customization-item cust-opt-active-${redHairThree}`} onClick={() => {
                            setHair(allHairOptions.red.three)
                            setRedHairOne(false)
                            setRedHairTwo(false)
                            setRedHairThree(true)
                            setRedHairFour(false)
                            setRedHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.red.three} alt='red hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <div className={`customization-item cust-opt-active-${redHairFour}`} onClick={() => {
                                setHair(allHairOptions.red.four)
                                setRedHairOne(false)
                                setRedHairTwo(false)
                                setRedHairThree(false)
                                setRedHairFour(true)
                                setRedHairFive(false)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.red.four} alt='red hair four' />
                            </div>
                            <div className={`customization-item cust-opt-active-${redHairFive}`} id='no-bangs-option-display' onClick={() => {
                                setHair(allHairOptions.red.one)
                                setHasBangs(false)
                                setRedHairOne(false)
                                setRedHairTwo(false)
                                setRedHairThree(false)
                                setRedHairFour(false)
                                setRedHairFive(true)
                                return
                            }}>
                                <div>No Bangs</div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            } else if(hairColor === "black") {
                itemsToDisplay = (
                    <div id='item-options-container'>
                    <div id='inner-hair-bangs-options-top'>
                    <div className={`customization-item cust-opt-active-${blackHairOne}`} onClick={() => {
                            setHair(allHairOptions.black.one)
                            setBlackHairOne(true)
                            setBlackHairTwo(false)
                            setBlackHairThree(false)
                            setBlackHairFour(false)
                            setBlackHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.black.one} alt='black bangs one' />
                        </div>
                        <div className={`customization-item cust-opt-active-${blackHairTwo}`} onClick={() => {
                            setHair(allHairOptions.black.two)
                            setBlackHairOne(false)
                            setBlackHairTwo(true)
                            setBlackHairThree(false)
                            setBlackHairFour(false)
                            setBlackHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.black.two} alt='black hair two' />
                        </div>
                        <div className={`customization-item cust-opt-active-${blackHairThree}`} onClick={() => {
                            setHair(allHairOptions.black.three)
                            setBlackHairOne(false)
                            setBlackHairTwo(false)
                            setBlackHairThree(true)
                            setBlackHairFour(false)
                            setBlackHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.black.three} alt='black hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <div className={`customization-item cust-opt-active-${blackHairFour}`} onClick={() => {
                                setHair(allHairOptions.black.four)
                                setBlackHairOne(false)
                                setBlackHairTwo(false)
                                setBlackHairThree(false)
                                setBlackHairFour(true)
                                setBlackHairFive(false)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.black.four} alt='black hair four' />
                            </div>
                            <div className={`customization-item cust-opt-active-${blackHairFive}`} id='no-bangs-option-display' onClick={() => {
                                setHair(allHairOptions.black.one)
                                setBangs(allHairOptions.black.one)
                                setBlackHairOne(false)
                                setBlackHairTwo(false)
                                setBlackHairThree(false)
                                setBlackHairFour(false)
                                setBlackHairFive(true)
                                setHasBangs(false)
                                return
                            }}>
                                <div>No Bangs</div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            } else if(hairColor === "white") {
                itemsToDisplay = (
                    <div id='item-options-container'>
                    <div id='inner-hair-bangs-options-top'>
                    <div className={`customization-item cust-opt-active-${whiteHairOne}`} onClick={() => {
                            setHair(allHairOptions.white.one)
                            setBangs(allHairOptions.white.one)
                            setWhiteHairOne(true)
                            setWhiteHairTwo(false)
                            setWhiteHairThree(false)
                            setWhiteHairFour(false)
                            setWhiteHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.white.one} alt='white bangs one' />
                        </div>
                        <div className={`customization-item cust-opt-active-${whiteHairTwo}`} onClick={() => {
                            // setHair(allHairOptions.white.two)
                            setBangs(allHairOptions.white.two)
                            setWhiteHairOne(false)
                            setWhiteHairTwo(true)
                            setWhiteHairThree(false)
                            setWhiteHairFour(false)
                            setWhiteHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.white.two} alt='white hair two' />
                        </div>
                        <div className={`customization-item cust-opt-active-${whiteHairThree}`} onClick={() => {
                            // setHair(allHairOptions.white.three)
                            setBangs(allHairOptions.white.three)
                            setWhiteHairOne(false)
                            setWhiteHairTwo(false)
                            setWhiteHairThree(true)
                            setWhiteHairFour(false)
                            setWhiteHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.white.three} alt='white hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <div className={`customization-item cust-opt-active-${whiteHairFour}`} onClick={() => {
                                // setHair(allHairOptions.white.four)
                                setBangs(allHairOptions.white.four)
                                setWhiteHairOne(false)
                                setWhiteHairTwo(false)
                                setWhiteHairThree(false)
                                setWhiteHairFour(true)
                                setWhiteHairFive(false)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.white.four} alt='white hair four' />
                            </div>
                            <div className={`customization-item cust-opt-active-${whiteHairFive}`} id='no-bangs-option-display' onClick={() => {
                                setHair(allHairOptions.white.one)
                                setBangs(allHairOptions.white.one)
                                setHasBangs(false)
                                setWhiteHairOne(false)
                                setWhiteHairTwo(false)
                                setWhiteHairThree(false)
                                setWhiteHairFour(false)
                                setWhiteHairFive(true)
                                return
                            }}>
                                <div>No Bangs</div>
                            </div>
                        </div>
                    </div>
                </div>
                )

            } else if(hairColor === "blonde") {
                itemsToDisplay = (
                    <div id='item-options-container'>
                    <div id='inner-hair-bangs-options-top'>
                    <div className={`customization-item cust-opt-active-${blondeHairOne}`} onClick={() => {
                            setHair(allHairOptions.blonde.one)
                            setBangs(allHairOptions.blonde.one)
                            setBlondeHairOne(true)
                            setBlondeHairTwo(false)
                            setBlondeHairThree(false)
                            setBlondeHairFour(false)
                            setBlondeHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.blonde.one} alt='blonde bangs one' />
                        </div>
                        <div className={`customization-item cust-opt-active-${blondeHairTwo}`} onClick={() => {
                            // setHair(allHairOptions.blonde.two)
                            setBangs(allHairOptions.blonde.two)
                            setBlondeHairOne(false)
                            setBlondeHairTwo(true)
                            setBlondeHairThree(false)
                            setBlondeHairFour(false)
                            setBlondeHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.blonde.two} alt='blonde hair two' />
                        </div>
                        <div className={`customization-item cust-opt-active-${blondeHairThree}`} onClick={() => {
                            // setHair(allHairOptions.blonde.three)
                            setBangs(allHairOptions.blonde.three)
                            setBlondeHairOne(false)
                            setBlondeHairTwo(false)
                            setBlondeHairThree(true)
                            setBlondeHairFour(false)
                            setBlondeHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.blonde.three} alt='blonde hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <di className={`customization-item cust-opt-active-${blondeHairFour}`} onClick={() => {
                                // setHair(allHairOptions.blonde.four)
                                setBangs(allHairOptions.blonde.four)
                                setBlondeHairOne(false)
                                setBlondeHairTwo(false)
                                setBlondeHairThree(false)
                                setBlondeHairFour(true)
                                setBlondeHairFive(false)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.blonde.four} alt='blonde hair four' />
                            </di>
                            <div className={`customization-item cust-opt-active-${blondeHairFive}`} id='no-bangs-option-display' onClick={() => {
                                setHair(allHairOptions.blonde.one)
                                setBangs(allHairOptions.blonde.one)
                                setHasBangs(false)
                                setBlondeHairOne(false)
                                setBlondeHairTwo(false)
                                setBlondeHairThree(false)
                                setBlondeHairFour(false)
                                setBlondeHairFive(true)
                                return
                            }}>
                                <div>No Bangs</div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            } else if(hairColor === "brown") {
                itemsToDisplay = (
                    <div id='item-options-container'>
                    <div id='inner-hair-bangs-options-top'>
                    <div className={`customization-item cust-opt-active-${brownHairOne}`} onClick={() => {
                            setBangs(allHairOptions.brown.one)
                            setHair(allHairOptions.brown.one)
                            setBrownHairOne(true)
                            setBrownHairTwo(false)
                            setBrownHairThree(false)
                            setBrownHairFour(false)
                            setBrownHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.brown.one} alt='brown bangs one' />
                        </div>
                        <div className={`customization-item cust-opt-active-${brownHairTwo}`} onClick={() => {
                            setBangs(allHairOptions.brown.two)
                            setBrownHairOne(false)
                            setBrownHairTwo(true)
                            setBrownHairThree(false)
                            setBrownHairFour(false)
                            setBrownHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.brown.two} alt='brown hair two' />
                        </div>
                        <div className={`customization-item cust-opt-active-${brownHairThree}`} onClick={() => {
                            setBangs(allHairOptions.brown.three)
                            setBrownHairOne(false)
                            setBrownHairTwo(false)
                            setBrownHairThree(true)
                            setBrownHairFour(false)
                            setBrownHairFive(false)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.brown.three} alt='brown hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <div className={`customization-item cust-opt-active-${brownHairFour}`} onClick={() => {
                                setBangs(allHairOptions.brown.four)
                                setBrownHairOne(false)
                                setBrownHairTwo(false)
                                setBrownHairThree(false)
                                setBrownHairFour(true)
                                setBrownHairFive(false)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.brown.four} alt='brown hair four' />
                            </div>
                            <div className={`customization-item cust-opt-active-${brownHairFive}`} id='no-bangs-option-display' onClick={() => {
                                setBangs(allHairOptions.brown.one)
                                setHair(allHairOptions.brown.one)
                                setBrownHairOne(false)
                                setBrownHairTwo(false)
                                setBrownHairThree(false)
                                setBrownHairFour(false)
                                setBrownHairFive(true)
                                setHasBangs(false)
                                return
                            }}>
                                <div>No Bangs</div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }

        bottomDiv = (
            <div className='customization-bottom-div'>
                <div id='hair-bangs-subpage-wrap' className='subpages-container'>
                    <div id={`color-button-${hairColorActive}`} onClick={() => {
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                        }, 1000)
                        setSubCategory("Hair-Color")
                        setSizeActive("inactive")
                        setShirtActive("inactive")
                        setSkinColorActive("inactive")
                        setHairColorActive("active")
                        setBangsActive("inactive")
                    }}>Color</div>
                    <div id={`bangs-button-${bangsActive}`} onClick={() => {
                        setLoading(true)
                        setTimeout(() => {
                            setLoading(false)
                        }, 1000)
                        setSubCategory("Bangs")
                        setSizeActive("inactive")
                        setShirtActive("inactive")
                        setSkinColorActive("inactive")
                        setHairColorActive("inactive")
                        setBangsActive("active")
                    }}>Bangs</div>
                </div>
                <div>
                    {itemsToDisplay}
                </div>
            </div>
        )
    } else if(category === "Background") {
        bottomDiv = (
            <div className='customization-bottom-div'>
                <div>
                    <div id='item-options-container'>
                        <div id='inner-background-options-top'>
                            <div className={`customization-item cust-opt-active-${backgroundOne}`}>
                                <div className='background'  id='background-violet' onClick={() => {
                                        setBackground("violet")
                                        setBackgroundOne(true)
                                        setBackgroundTwo(false)
                                        setBackgroundThree(false)
                                        setBackgroundFour(false)
                                        setBackgroundFive(false)
                                        setBackgroundSix(false)
                                        return
                                    }}>
                                </div>
                            </div>
                            <div className={`customization-item cust-opt-active-${backgroundTwo}`}>
                                <div className='background' id='background-blue' onClick={() => {
                                        setBackground("blue")
                                        setBackgroundOne(false)
                                        setBackgroundTwo(true)
                                        setBackgroundThree(false)
                                        setBackgroundFour(false)
                                        setBackgroundFive(false)
                                        setBackgroundSix(false)
                                        return
                                    }}>
                                </div>
                            </div>
                            <div className={`customization-item cust-opt-active-${backgroundThree}`}>
                                <div className='background' id='background-green' onClick={() => {
                                        setBackground("green")
                                        setBackgroundOne(false)
                                        setBackgroundTwo(false)
                                        setBackgroundThree(true)
                                        setBackgroundFour(false)
                                        setBackgroundFive(false)
                                        setBackgroundSix(false)
                                        return
                                    }}>
                                </div>
                            </div>
                        </div>
                    <div id='inner-background-options-bottom'>
                        <div className={`customization-item cust-opt-active-${backgroundFour}`}>
                            <div className='background' id='background-purple' onClick={() => {
                                    setBackground("purple")
                                    setBackgroundOne(false)
                                    setBackgroundTwo(false)
                                    setBackgroundThree(false)
                                    setBackgroundFour(true)
                                    setBackgroundFive(false)
                                    setBackgroundSix(false)
                                    return
                                }}>
                            </div>
                        </div>
                        <div className={`customization-item cust-opt-active-${backgroundFive}`}>
                            <div className='background' id='background-red' onClick={() => {
                                    setBackground("red")
                                    setBackgroundOne(false)
                                    setBackgroundTwo(false)
                                    setBackgroundThree(false)
                                    setBackgroundFour(false)
                                    setBackgroundFive(true)
                                    setBackgroundSix(false)
                                    return
                                }}>
                            </div>
                        </div>
                        <div className={`customization-item cust-opt-active-${backgroundSix}`}>
                            <div className='background' id='background-yellow' onClick={() => {
                                    setBackground("yellow")
                                    setBackgroundOne(false)
                                    setBackgroundTwo(false)
                                    setBackgroundThree(false)
                                    setBackgroundFour(false)
                                    setBackgroundFive(false)
                                    setBackgroundSix(true)
                                    return
                                }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
        <>
            <div className='habit-update-modal-backdrop'  ref={modalOverlayRef}></div>
            <div id='avatar-customization-wrapper'>
                {loading && <LoadingScreen />}
                <div id='exit-button-wrapper'>
                    <button id='customization-exit-button' onClick={handleSubmit}>x</button>

                </div>
                <div id='top-customization-wrapper'>
                    {/* <button onClick={handleSubmit}>X</button> */}
                    {/* <button onClick={handleSubmit}>Save</button> */}
                    <div id='customization-avatar-wrapper'>
                        <div id={`custom-avatar-display-wrapper-${background}`}>
                            <img id='custom-layer-1' src={shirt} alt='avatar shirt' />
                            <img id='custom-layer-2' src={skin} alt='avatar skin' />
                            <img id='custom-layer-4' src={hair} alt='avatar bangs' />
                            <img id='custom-layer-3' src={bangs} alt='avatar hair' />
                        </div>
                    </div>
                    <div id='customization-category-icons'>
                        <div className='category-icon' onClick={() => {
                                                    setLoading(true)
                                                    setTimeout(() => {
                                                        setLoading(false)
                                                    }, 1000)
                            setCategory("Body")
                            setSubCategory("Size")
                            setSizeActive("active")
                            setShirtActive("inactive")
                            setSkinColorActive("inactive")
                            setHairColorActive("inactive")
                            setBangsActive("inactive")
                            return
                        }}>
                            <svg id='body-category-icon' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.49 32"><path d="M29.79 18.8C29.43 12.11 26.01 0 15.35 0a11.9 11.9 0 0 0-5.11 1.11l-.12.05C3.59 4.32 1.24 13.19.93 18.64a1.85 1.85 0 1 0 2.31.41c.09-1.31.83-9.79 5.5-14.14A53.73 53.73 0 0 0 7.18 16.5a76.9 76.9 0 0 0 1.43 13.16H6.83a1.17 1.17 0 0 0 0 2.34H10.34a1.13 1.13 0 0 0 .23-.1l.17-.11a1.12 1.12 0 0 0 .37-.57 1.12 1.12 0 0 0 0-.2.33.33 0 0 0 0-.26 1.09 1.09 0 0 0 0-.11c0-.05-.82-3.82-1.3-8.26a39.75 39.75 0 0 1 5.62-.45 33.72 33.72 0 0 1 5.21.43c-.48 4.44-1.29 8.23-1.3 8.28a1.17 1.17 0 0 0 .9 1.39h3.6a1.17 1.17 0 0 0 0-2.34h-1.86a76.9 76.9 0 0 0 1.43-13.2 54 54 0 0 0-1.6-11.72C26.4 8.91 27.29 17 27.44 18.84a1.85 1.85 0 1 0 2.35-.04zm-8.72-2.3c0 1.13-.05 2.3-.14 3.46a35.84 35.84 0 0 0-5.42-.43 41.52 41.52 0 0 0-5.84.46c-.09-1.17-.14-2.35-.14-3.48A57.14 57.14 0 0 1 11.65 3a10.15 10.15 0 0 1 7.28 0 57.16 57.16 0 0 1 2.14 13.5z" fill-rule="evenodd"></path></svg>
                        </div>
                        <div className='category-icon' onClick={() => {
                                                    setLoading(true)
                                                    setTimeout(() => {
                                                        setLoading(false)
                                                    }, 1000)
                            setCategory("Skin")
                            setSubCategory("Skin-Color")
                            setSizeActive("inactive")
                            setShirtActive("inactive")
                            setSkinColorActive("active")
                            setHairColorActive("inactive")
                            setBangsActive("inactive")
                            return
                        }}>
                            <svg id='customize-skin-icon' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.8 28.4"><path d="M31.7 26.72a7.44 7.44 0 0 0-3.69-3.63 8.72 8.72 0 0 0-3.82-.26c-1.21.09-2.57.19-3.08-.3-.72-.71-.15-2.6.24-3.4a1.13 1.13 0 0 0 0-.18 12 12 0 0 0 3.75-8.41c0-6.2-3.84-10.53-9.33-10.53S6.48 4.33 6.48 10.53a12.19 12.19 0 0 0 3.94 8.46 1.13 1.13 0 0 0 0 .13c.39.8 1 2.7.24 3.41-.5.5-1.87.39-3.08.3a8.75 8.75 0 0 0-3.82.26A7.43 7.43 0 0 0 .1 26.72a1.208 1.208 0 1 0 2.2 1 5 5 0 0 1 2.37-2.36 7.3 7.3 0 0 1 2.76-.16c1.72.13 3.66.28 4.94-1a3.9 3.9 0 0 0 1-3.11 5.72 5.72 0 0 0 2.39.64 6.15 6.15 0 0 0 2.57-.67 3.92 3.92 0 0 0 1 3.14c1.28 1.26 3.22 1.12 4.94 1a7.34 7.34 0 0 1 2.76.1 5 5 0 0 1 2.37 2.36 1.242 1.242 0 1 0 2.3-.94zM8.9 10.53c0-4.94 2.7-8.13 6.91-8.13s6.93 3.19 6.93 8.13-4.62 8.84-6.93 8.84c-1.91 0-6.91-3.92-6.91-8.84z"></path></svg>
                        </div>
                        <div className='category-icon' onClick={() => {
                                                    setLoading(true)
                                                    setTimeout(() => {
                                                        setLoading(false)
                                                    }, 1000)
                            setCategory("Hair")
                            setSubCategory("Hair-Color")
                            setSizeActive("inactive")
                            setShirtActive("inactive")
                            setSkinColorActive("inactive")
                            setHairColorActive("active")
                            setBangsActive("inactive")
                            return
                        }}>
                            <svg id='customize-hair-icon' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.24 31.25"><path d="M25.54 5.95l4 4 1.7-1.7L26.4 3.4l-.85-.85-1-1a5.49 5.49 0 0 0-7.76 0L1.61 16.78a5.49 5.49 0 0 0 0 7.76l1 1 .79.86 4.86 4.86 1.7-1.7-4-4 1.94-1.97 4 4 1.7-1.7-4-4 1.8-1.8 4 4 1.7-1.69-4-4 1.8-1.8 4 4 1.7-1.7-4-4 1.8-1.8 4 4 1.7-1.7-4-4 1.8-1.8 4 4 1.7-1.7-4-4 1.92-1.92zM4.28 23.82l-1-1a3.09 3.09 0 0 1 0-4.37L18.48 3.3a3.09 3.09 0 0 1 4.37 0l1 1z"></path></svg>
                        </div>
                        <div className='category-icon' id='customize-background-option' onClick={() => {
                            setCategory("Background")
                            return
                        }}>
                            <img id='background-icon-shine' src="https://i.ibb.co/hHWYqMd/shine.png" alt="shine" border="0" />
                        </div>
                    </div>
                    <div id='customization-category-text'>
                        <div id='body-option' onClick={() => {
                                                    setLoading(true)
                                                    setTimeout(() => {
                                                        setLoading(false)
                                                    }, 1000)
                            setCategory("Body")
                            setSubCategory("Size")
                            setSizeActive("active")
                            setShirtActive("inactive")
                            setSkinColorActive("inactive")
                            setHairColorActive("inactive")
                            setBangsActive("inactive")
                            return
                        }}>
                            <p>Body</p>
                        </div>
                        <div className={``} id='skin-option' onClick={() => {
                                                    setLoading(true)
                                                    setTimeout(() => {
                                                        setLoading(false)
                                                    }, 1000)
                            setCategory("Skin")
                            setSubCategory("Skin-Color")
                            setSizeActive("inactive")
                            setShirtActive("inactive")
                            setSkinColorActive("active")
                            setHairColorActive("inactive")
                            setBangsActive("inactive")
                            return
                        }}>
                            <p>Skin</p>
                        </div>
                        <div className='category-button' id='hair-option' onClick={() => {
                                                    setLoading(true)
                                                    setTimeout(() => {
                                                        setLoading(false)
                                                    }, 1000)
                            setCategory("Hair")
                            setSubCategory("Hair-Color")
                            setSizeActive("inactive")
                            setShirtActive("inactive")
                            setSkinColorActive("inactive")
                            setHairColorActive("active")
                            setBangsActive("inactive")
                            return
                        }}>
                            <p>Hair</p>
                        </div>
                        <div className='category-button' id='background-option' onClick={() => {
                            setCategory("Background")
                            return
                        }}>
                            <p>Backgrounds</p>
                        </div>
                    </div>
                </div>
                <div id='bottom-customization-container'>
                    {bottomDiv}
                </div>
            </div>
        </>
    )
}

export default CustomizeAvatarModal;
