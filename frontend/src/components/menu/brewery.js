import React from 'react'
import '../../scss/sub-menu.scss'

function brewery() {
    return (
        <div className="sub__container">
            <h4 className="sub__header">Brewery</h4>
            <div className="sub__container--col">

                <div className="sub__list">
                    <h4 className="sub__list--header">DRAUGHT BEER</h4>

                    <div className="menu-item">
                        <h4 className="menu-item__header">BLUE MOON</h4>
                        <p className="menu-item__details--price">8</p>
                    </div>

                    <div className="menu-item">
                        <h4 className="menu-item__header">FIRESTONE 805</h4>
                        <p className="menu-item__details--price">9</p>
                    </div>

                    <div className="menu-item">
                        <h4 className="menu-item__header">NEW BELGIUN FAT TIRE</h4>
                        <p className="menu-item__details--price">9</p>
                    </div>

                    <div className="menu-item">
                        <h4 className="menu-item__header">SIERRA NEVADA PALE ALE</h4>
                        <p className="menu-item__details--price">10</p>
                    </div>

                    <div className="menu-item">
                        <h4 className="menu-item__header">STONE NEVERENDING HAZE</h4>
                        <p className="menu-item__details--price">10</p>
                    </div>

                    <div className="menu-item">
                        <h4 className="menu-item__header">GUINNESS</h4>
                        <p className="menu-item__details--price">10</p>
                    </div>

                    <div className="menu-item">
                        <h4 className="menu-item__header">PACIFICO</h4>
                        <p className="menu-item__details--price">7</p>
                    </div>

                    <div className="menu-item">
                        <h4 className="menu-item__header">STELLA LEGERE</h4>
                        <p className="menu-item__details--price">9</p>
                    </div>

                </div>

                <div className="sub__list">
                    <h4 className="sub__list--header">AMERICAN PALE ALES</h4>
                </div>
                <div className="sub__list">
                    <h4 className="sub__list--header">AMERICAN IPAS</h4>
                </div>
            </div>


            <div className="menu-item">
                <h4 className="menu-item__header">A DRINK SAMPLER</h4>
                <p className="menu-item__details--price">8</p>
            </div>

        </div>
    )
}

export default brewery
