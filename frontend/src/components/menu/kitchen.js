import React from 'react'
import '../../scss/sub-menu.scss'

function kitchen() {
    return (
        <div className="kitchen__container">
            <h4 className="sub__header">KITCHEN</h4>
            <h5 className="kitchen__header">BAR BITES</h5>

            <div className="kitchen__column">
                <div className="menu-item">
                    <h4 className="menu-item__header">5 CHEESE BOARD</h4>
                    <p className="menu-item__details--description">marinated olives, pickled vegetables, crostini, and assorted cheeses</p>
                    <p className="menu-item__details--price">15</p>
                </div>
                <div className="menu-item">
                    <h4 className="menu-item__header">GARLIC SHRIMP</h4>
                    <p className="menu-item__details--description">gulf shrimp with garlic, extra virgin olive oil, sherry, fresh parsley, and a pinch of crushed red pepper</p>
                    <p className="menu-item__details--price">12</p>
                </div>
            </div>

            <div className="kitchen__column">
                <div className="menu-item">
                    <h4 className="menu-item__header">MEAT & CHEESE BOARD</h4>
                    <p className="menu-item__details--description">cured Creminelli meats & featured cheeses, pickled vegetables, shallot relish, house mustard, & crostini</p>
                    <p className="menu-item__details--price">24</p>
                </div>
                <div className="menu-item">
                    <h4 className="menu-item__header">KITCHEN MENU ITEM</h4>
                    <p className="menu-item__details--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className="menu-item__details--price">7</p>
                </div>


            </div>


        </div>
    )
}

export default kitchen
