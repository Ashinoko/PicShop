import React, {useContext} from "react"
import {Link} from "react-router-dom"

import {Context} from "../Context"
import '../index.css'


function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    return (
        <header>
            <Link to="/"><h2>PicShop</h2></Link>
            <Link to="/cart">
                <i className="material-icons">shopping_cart_checkout</i>
            </Link>
        </header>
    )
}

export default Header
