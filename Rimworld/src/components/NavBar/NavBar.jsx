import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Store Rimworld Customizer</h1>
        <nav>
            <ul>
                <li>cascos/gorros</li>
                <li>camisas y abrigos</li>
                <li>pantalones</li>
            </ul>
        </nav>
        <CartWidget></CartWidget>
    </header>
  )
}

export default NavBar