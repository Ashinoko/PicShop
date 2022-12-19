import React, {useState, useContext} from "react"
import PropTypes from "prop-types"

import {Context} from "../Context"
import useHover from "../hooks/useHover"
import '../index.css'


function Image({className, img}) {
    const [hovered, ref] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    
    function heartIcon() {
        if(img.isFavorite) {
            return <div><i className="material-icons" onClick={() => toggleFavorite(img.id)}>favorite</i></div>
        } else if(hovered) {
            return <div><i className="material-icons" style={{color:'black'}} onClick={() => toggleFavorite(img.id)}>favorite</i></div>
        }
    }
    
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <p><i className="material-icons" onClick={() => removeFromCart(img.id)(img.id)}>shopping_cart_checkout</i></p>
        } else if(hovered) {
            return <p><i className="material-icons" style={{color:'black'}} onClick={() => addToCart(img)}>shopping_cart_checkout</i></p>
        }
    }

    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
