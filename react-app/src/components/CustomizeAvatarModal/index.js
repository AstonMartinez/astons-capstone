import './CustomizeAvatarModal.css'
import { useState } from 'react'
import allBodyOptions from './Body'
import allSkinOptions from './Skin'
import allHairOptions from './Hair'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAvatar, updateUserAvatar } from '../../store/avatars'

const CustomizeAvatarModal = ({onSubmit, onClose}) => {
    const dispatch = useDispatch()

    const userAvatar = useSelector(state => state.avatar)
    const [background, setBackground] = useState(userAvatar.background)

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

    // console.log(all)
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
    // const [extras, setExtras] = useState('')
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
            onSubmit()
        })

    }

    if(category === "Body") {
        if(subCategory === "Size") {
            itemsToDisplay = (
                <div id='body-sizes-container'>
                    <div onClick={() => {
                        setBodyType("slim")
                        setShirt(allBodyOptions.slim.black)
                        console.log(bodyType)
                        return
                    }}>
                        <img src={allBodyOptions.slim.black} alt='slim option' />
                    </div>
                    <div onClick={() => {
                        setBodyType("broad")
                        setShirt(allBodyOptions.broad.black)
                        console.log(bodyType)
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
                            <div className='customization-item' id='slim-black-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.black)
                            }}>
                                <img src={allBodyOptions.slim.black} alt='slim black' />
                            </div>
                            <div className='customization-item'  id='slim-blue-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.blue)
                           }}>
                                <img src={allBodyOptions.slim.blue} alt='slim blue' />
                            </div>
                            <div className='customization-item'  id='slim-green-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.green)
                            }}>
                                <img src={allBodyOptions.slim.green} alt='slim green' />
                            </div>
                        </div>
                        <div id='inner-shirt-options-bottom'>
                            <div className='customization-item'  id='slim-pink-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.pink)
                            }}>
                                <img src={allBodyOptions.slim.pink} alt='slim pink' />
                            </div>
                            <div className='customization-item'  id='slim-white-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.white)
                            }}>
                                <img src={allBodyOptions.slim.white} alt='slim white' />
                            </div>
                            <div className='customization-item'  id='slim-yellow-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.slim.yellow)
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
                            <div className='customization-item' id='broad-black-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.black)
                            }}>
                                <img src={allBodyOptions.broad.black} alt='broad black' />
                            </div>
                            <div className='customization-item'  id='broad-blue-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.blue)
                            }}>
                                <img src={allBodyOptions.broad.blue} alt='broad blue' />
                            </div>
                            <div className='customization-item'  id='broad-green-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.green)
                            }}>
                                <img src={allBodyOptions.broad.green} alt='broad green' />
                            </div>
                        </div>
                        <div id='inner-shirt-options-bottom'>
                            <div className='customization-item'  id='broad-pink-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.pink)
                            }}>
                                <img src={allBodyOptions.broad.pink} alt='slim pink' />
                            </div>
                            <div className='customization-item'  id='broad-white-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.white)
                            }}>
                                <img src={allBodyOptions.broad.white} alt='broad white' />
                            </div>
                            <div className='customization-item'  id='broad-yellow-shirt-container' onClick={() => {
                                setShirt(allBodyOptions.broad.yellow)
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
                    <div id='size-button' onClick={() => {
                        setSubCategory("Size")
                    }}>Size</div>
                    <div id='shirt-button' onClick={() => {
                        setSubCategory("Shirt")
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
                    <div id='size-button'>Color
                    </div>
                </div>
                <div>
                    <div id='item-options-container'>
                        <div id='inner-skin-options-top'>
                            <div className='customization-item' onClick={() => {
                                setSkin(allSkinOptions.one)
                                return
                            }}>
                                <img src={allSkinOptions.one} alt='skin option one' />
                            </div>
                            <div className='customization-item' onClick={() => {
                                setSkin(allSkinOptions.two)
                                return
                            }}>
                                <img src={allSkinOptions.two} alt='skin option two' />
                            </div>
                            <div className='customization-item' onClick={() => {
                                setSkin(allSkinOptions.three)
                                return
                            }}>
                                <img src={allSkinOptions.three} alt='skin option three' />
                            </div>
                        </div>
                        <div id='inner-skin-options-middle'>
                            <div className='customization-item' onClick={() => {
                                setSkin(allSkinOptions.four)
                                return
                            }}>
                                <img src={allSkinOptions.four} alt='skin option four' />
                            </div>
                            <div className='customization-item' onClick={() => {
                                setSkin(allSkinOptions.five)
                                return
                            }}>
                                <img src={allSkinOptions.five} alt='skin option five' />
                            </div>
                            <div className='customization-item' onClick={() => {
                                setSkin(allSkinOptions.six)
                                return
                            }}>
                                <img src={allSkinOptions.six} alt='skin option six' />
                            </div>
                        </div>
                        <div id='inner-skin-options-bottom'>
                            <div className='customization-item' onClick={() => {
                                setSkin(allSkinOptions.seven)
                                return
                            }}>
                                <img src={allSkinOptions.seven} alt='skin option seven' />
                            </div>
                            <div className='customization-item' onClick={() => {
                                setSkin(allSkinOptions.eight)
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
                    <div onClick={() => {
                            setHairColor("white")
                            setHair(allHairOptions.white.one)
                            return
                        }}>
                            <img src={allHairOptions.white.one} alt='white hair one' />
                        </div>
                        <div onClick={() => {
                            setHairColor("brown")
                            setHair(allHairOptions.brown.one)
                            return
                        }}>
                            <img src={allHairOptions.brown.one} alt='brown hair one' />
                        </div>
                        <div onClick={() => {
                            setHairColor("blonde")
                            setHair(allHairOptions.blonde.one)
                            return
                        }}>
                            <img src={allHairOptions.blonde.one} alt='blonde hair one' />
                        </div>
                    <div id='inner-hair-color-options-bottom'>
                        <div onClick={() => {
                                setHairColor("red")
                                setHair(allHairOptions.red.one)
                                return
                            }}>
                                <img src={allHairOptions.red.one} alt='red hair one' />
                            </div>
                            <div onClick={() => {
                                setHairColor("black")
                                setHair(allHairOptions.black.one)
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
                    <div onClick={() => {
                            setHair(allHairOptions.red.one)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.red.one} alt='red bangs one' />
                        </div>
                        <div onClick={() => {
                            setHair(allHairOptions.red.two)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.red.two} alt='red hair two' />
                        </div>
                        <div onClick={() => {
                            setHair(allHairOptions.red.three)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.red.three} alt='red hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <div onClick={() => {
                                setHair(allHairOptions.red.four)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.red.four} alt='red hair four' />
                            </div>
                            <div onClick={() => {
                                setHair(allHairOptions.red.one)
                                setHasBangs(false)
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
                    <div onClick={() => {
                            setHair(allHairOptions.black.one)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.black.one} alt='black bangs one' />
                        </div>
                        <div onClick={() => {
                            setHair(allHairOptions.black.two)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.black.two} alt='black hair two' />
                        </div>
                        <div onClick={() => {
                            setHair(allHairOptions.black.three)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.black.three} alt='black hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <div onClick={() => {
                                setHair(allHairOptions.black.four)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.black.four} alt='black hair four' />
                            </div>
                            <div onClick={() => {
                                setHair(allHairOptions.black.one)
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
                    <div onClick={() => {
                            setHair(allHairOptions.white.one)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.white.one} alt='white bangs one' />
                        </div>
                        <div onClick={() => {
                            setHair(allHairOptions.white.two)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.white.two} alt='white hair two' />
                        </div>
                        <div onClick={() => {
                            setHair(allHairOptions.white.three)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.white.three} alt='white hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <div onClick={() => {
                                setHair(allHairOptions.white.four)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.white.four} alt='white hair four' />
                            </div>
                            <div onClick={() => {
                                setHair(allHairOptions.white.one)
                                setHasBangs(false)
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
                    <div onClick={() => {
                            setHair(allHairOptions.blonde.one)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.blonde.one} alt='blonde bangs one' />
                        </div>
                        <div onClick={() => {
                            setHair(allHairOptions.blonde.two)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.blonde.two} alt='blonde hair two' />
                        </div>
                        <div onClick={() => {
                            setHair(allHairOptions.blonde.three)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.blonde.three} alt='blonde hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <div onClick={() => {
                                setHair(allHairOptions.blonde.four)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.blonde.four} alt='blonde hair four' />
                            </div>
                            <div onClick={() => {
                                setHair(allHairOptions.blonde.one)
                                setHasBangs(false)
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
                    <div onClick={() => {
                            setBangs(allHairOptions.brown.one)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.brown.one} alt='brown bangs one' />
                        </div>
                        <div onClick={() => {
                            setBangs(allHairOptions.brown.two)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.brown.two} alt='brown hair two' />
                        </div>
                        <div onClick={() => {
                            setBangs(allHairOptions.brown.three)
                            if(!hasBangs) {
                                setHasBangs(true)
                            }
                            return
                        }}>
                            <img src={allHairOptions.brown.three} alt='brown hair three' />
                        </div>
                    <div id='inner-hair-bangs-options-bottom'>
                        <div onClick={() => {
                                setBangs(allHairOptions.brown.four)
                                if(!hasBangs) {
                                    setHasBangs(true)
                                }
                                return
                            }}>
                                <img src={allHairOptions.brown.four} alt='brown hair four' />
                            </div>
                            <div onClick={() => {
                                setBangs(allHairOptions.brown.one)
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
                <div className='subpages-container'>
                    <div id='color-button' onClick={() => {
                        setSubCategory("Hair-Color")
                    }}>Color</div>
                    <div id='bangs-button' onClick={() => {
                        setSubCategory("Bangs")
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
                            <div className='background'  id='background-violet' onClick={() => {
                                    setBackground("violet")
                                    return
                                }}>
                            </div>
                            <div className='background' id='background-blue' onClick={() => {
                                    setBackground("blue")
                                    return
                                }}>
                            </div>
                            <div className='background' id='background-green' onClick={() => {
                                    setBackground("green")
                                    return
                                }}>
                            </div>
                        </div>
                    <div id='inner-background-options-bottom'>
                        <div className='background' id='background-purple' onClick={() => {
                                setBackground("purple")
                                return
                            }}>
                        </div>
                        <div className='background' id='background-red' onClick={() => {
                                setBackground("red")
                                return
                            }}>
                        </div>
                        <div className='background' id='background-yellow' onClick={() => {
                                setBackground("yellow")
                                return
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div id='avatar-customization-wrapper'>
            <div id='top-customization-wrapper'>
                <button onClick={handleSubmit}>X</button>
                <button onClick={handleSubmit}>Save</button>
                <div id='customization-avatar-wrapper'>
                    <div id={`custom-avatar-display-wrapper-${background}`}>
                        <img id='layer-1' src={shirt} alt='avatar shirt' />
                        <img id='layer-2' src={skin} alt='avatar skin' />
                        <img id='layer-4' src={bangs} alt='avatar bangs' />
                        <img id='layer-3' src={hair} alt='avatar hair' />
                    </div>
                    {/* <div className='character-layer' id={`background-${background}`}>
                        <div className='character-layer' id='body-layer'>
                            <img src={shirt} alt='shirt' />
                            <div className='character-layer' id='skin-layer'>
                                <img src={skin} alt='skin color' />
                                {hasBangs ? (
                                        <div className='character-layer' id='bangs-hair-layer'>
                                            <img src={bangs} alt='bangs' />
                                            <div className='character-layer' id='base-hair-layer'>
                                                <img src={hair} alt='hair color' />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='character-layer' id='base-hair-layer'>
                                            <img src={hair} alt='hair color' />
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div> */}
                </div>
                <div id='customization-category-icons'>
                    <div className='category-icon' onClick={() => {
                        setCategory("Body")
                        setSubCategory("Size")
                        return
                    }}>
                        <svg id='body-category-icon' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.49 32"><path d="M29.79 18.8C29.43 12.11 26.01 0 15.35 0a11.9 11.9 0 0 0-5.11 1.11l-.12.05C3.59 4.32 1.24 13.19.93 18.64a1.85 1.85 0 1 0 2.31.41c.09-1.31.83-9.79 5.5-14.14A53.73 53.73 0 0 0 7.18 16.5a76.9 76.9 0 0 0 1.43 13.16H6.83a1.17 1.17 0 0 0 0 2.34H10.34a1.13 1.13 0 0 0 .23-.1l.17-.11a1.12 1.12 0 0 0 .37-.57 1.12 1.12 0 0 0 0-.2.33.33 0 0 0 0-.26 1.09 1.09 0 0 0 0-.11c0-.05-.82-3.82-1.3-8.26a39.75 39.75 0 0 1 5.62-.45 33.72 33.72 0 0 1 5.21.43c-.48 4.44-1.29 8.23-1.3 8.28a1.17 1.17 0 0 0 .9 1.39h3.6a1.17 1.17 0 0 0 0-2.34h-1.86a76.9 76.9 0 0 0 1.43-13.2 54 54 0 0 0-1.6-11.72C26.4 8.91 27.29 17 27.44 18.84a1.85 1.85 0 1 0 2.35-.04zm-8.72-2.3c0 1.13-.05 2.3-.14 3.46a35.84 35.84 0 0 0-5.42-.43 41.52 41.52 0 0 0-5.84.46c-.09-1.17-.14-2.35-.14-3.48A57.14 57.14 0 0 1 11.65 3a10.15 10.15 0 0 1 7.28 0 57.16 57.16 0 0 1 2.14 13.5z" fill-rule="evenodd"></path></svg>
                    </div>
                    <div className='category-icon' onClick={() => {
                        setCategory("Skin")
                        setSubCategory("Skin-Color")
                        return
                    }}>
                        <svg id='customize-skin-icon' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.8 28.4"><path d="M31.7 26.72a7.44 7.44 0 0 0-3.69-3.63 8.72 8.72 0 0 0-3.82-.26c-1.21.09-2.57.19-3.08-.3-.72-.71-.15-2.6.24-3.4a1.13 1.13 0 0 0 0-.18 12 12 0 0 0 3.75-8.41c0-6.2-3.84-10.53-9.33-10.53S6.48 4.33 6.48 10.53a12.19 12.19 0 0 0 3.94 8.46 1.13 1.13 0 0 0 0 .13c.39.8 1 2.7.24 3.41-.5.5-1.87.39-3.08.3a8.75 8.75 0 0 0-3.82.26A7.43 7.43 0 0 0 .1 26.72a1.208 1.208 0 1 0 2.2 1 5 5 0 0 1 2.37-2.36 7.3 7.3 0 0 1 2.76-.16c1.72.13 3.66.28 4.94-1a3.9 3.9 0 0 0 1-3.11 5.72 5.72 0 0 0 2.39.64 6.15 6.15 0 0 0 2.57-.67 3.92 3.92 0 0 0 1 3.14c1.28 1.26 3.22 1.12 4.94 1a7.34 7.34 0 0 1 2.76.1 5 5 0 0 1 2.37 2.36 1.242 1.242 0 1 0 2.3-.94zM8.9 10.53c0-4.94 2.7-8.13 6.91-8.13s6.93 3.19 6.93 8.13-4.62 8.84-6.93 8.84c-1.91 0-6.91-3.92-6.91-8.84z"></path></svg>
                    </div>
                    <div className='category-icon' onClick={() => {
                        setCategory("Hair")
                        setSubCategory("Hair-Color")
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
                    <div className='category-button' id='body-option' onClick={() => {
                        setCategory("Body")
                        setSubCategory("Size")
                        return
                    }}>
                        <p>Body</p>
                    </div>
                    <div className='category-button' id='skin-option' onClick={() => {
                        setCategory("Skin")
                        setSubCategory("Skin-Color")
                        return
                    }}>
                        <p>Skin</p>
                    </div>
                    <div className='category-button' id='hair-option' onClick={() => {
                        setCategory("Hair")
                        setSubCategory("Hair-Color")
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



                    {/* <div id='extras-option' onClick={() => {
                        setCategory("Extras")
                        setSubCategory("Glasses")
                        return
                    }}>
                        <div></div>
                        <p>Extras</p>
                    </div> */}
                    {/* <div className='category-button' id='background-option' onClick={() => {
                        setCategory("Background")
                        return
                    }}>

                    </div> */}
                {/* </div> */}
            </div>
            <div id='bottom-customization-container'>
                {bottomDiv}
            </div>
        </div>
    )
}

export default CustomizeAvatarModal;
