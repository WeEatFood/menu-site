import React from 'react'
import Button from 'react-bootstrap/Button'
import '../scss/menu.scss'

function Menu() {
    return (
        <div className="container-menu">
            Menu
            <div className="container-button">
            <Button variant="outline-dark">Appetizers</Button>
            <Button variant="outline-dark">Kitchen</Button>
            <Button variant="outline-dark">Dessert</Button>
            <Button variant="outline-dark">Cocktails</Button>
            <Button variant="outline-dark">Brewery</Button>
            <Button variant="outline-dark">Wine</Button>

            </div>
        </div>
    )
}

export default Menu
