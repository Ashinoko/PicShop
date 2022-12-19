import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)
    
    const iconClassName = hovered ? "material-symbols-outlined" : "ri-delete-bin-line"
    
    return (
        <div className="cart-item">
            <span 
                className={"material-symbols-outlined"} 
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            >
            🗑️
            </span>
            
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}



CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem