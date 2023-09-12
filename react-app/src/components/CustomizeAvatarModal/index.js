import './CustomizeAvatarModal.css'
import { useState } from 'react'
import allBodyOptions from './Body'
import allSkinOptions from './Skin'
import allHairOptions from './Hair'

const CustomizeAvatarModal = () => {
    const [background, setBackground] = useState("violet")
    const [bodyType, setBodyType] = useState("slim")
    const [shirt, setShirt] = useState(allBodyOptions.slim.black)
    const [skin, setSkin] = useState(allSkinOptions.one)

    // console.log(all)
    const [hairColor, setHairColor] = useState("red")
    const [hasBangs, setHasBangs] = useState(true)
    const [hair, setHair] = useState(allHairOptions.red.one)
    const [bangs, setBangs] = useState(allHairOptions.red.one)
    // const [extras, setExtras] = useState('')
    const [category, setCategory] = useState("Body")
    const [subCategory, setSubCategory] = useState("Size")

    let bottomDiv
    let itemsToDisplay

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
            <div>
                <button>X</button>
                <div>
                    <div className='character-layer' id={`background-${background}`}>
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
                    </div>
                </div>
                <div id='customization-category-buttons'>
                    <div className='category-button' id='body-option' onClick={() => {
                        setCategory("Body")
                        setSubCategory("Size")
                        return
                    }}>
                        <div></div>
                        <p>Body</p>
                    </div>
                    <div className='category-button' id='skin-option' onClick={() => {
                        setCategory("Skin")
                        setSubCategory("Skin-Color")
                        return
                    }}>
                        <div></div>
                        <p>Skin</p>
                    </div>
                    <div className='category-button' id='hair-option' onClick={() => {
                        setCategory("Hair")
                        setSubCategory("Hair-Color")
                        return
                    }}>
                        <div></div>
                        <p>Hair</p>
                    </div>
                    {/* <div id='extras-option' onClick={() => {
                        setCategory("Extras")
                        setSubCategory("Glasses")
                        return
                    }}>
                        <div></div>
                        <p>Extras</p>
                    </div> */}
                    <div className='category-button' id='background-option' onClick={() => {
                        setCategory("Background")
                        return
                    }}>
                        <div></div>
                        <p>Background</p>
                    </div>
                </div>
            </div>
            <div id='bottom-customization-container'>
                {bottomDiv}
            </div>
        </div>
    )
}

export default CustomizeAvatarModal;
