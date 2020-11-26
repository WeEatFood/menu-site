import React from 'react'
import '../../scss/sub-menu.scss'

function cocktails() {
    return (
        <div className="sub__container">
            <h4 className="sub__header">Cocktails</h4>
            <div className="menu-item">
                <h4 className="menu-item__header">OLD FASHIONED</h4>
                <p className="menu-item__details--description">bourbon whiskey, citrus, bitters</p>
                <p className="menu-item__details--price">10</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">MANHATTAN</h4>
                <p className="menu-item__details--description">Rye whiskey, sweet vermouth, bitters</p>
                <p className="menu-item__details--price">8</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">WHISKEY SOUR</h4>
                <p className="menu-item__details--description">Bourbon, egg white, citrus, sugar</p>
                <p className="menu-item__details--price">10</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">NEGRONI</h4>
                <p className="menu-item__details--description">gin, vermouth, campari, orange</p>
                <p className="menu-item__details--price">11</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">MARGARITA</h4>
                <p className="menu-item__details--description">tequila blanco, lime juice, simple syrup</p>
                <p className="menu-item__details--price">8</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">SIDECAR</h4>
                <p className="menu-item__details--description">brandy, triple sec, lemon juice</p>
                <p className="menu-item__details--price">8</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">BOULEVARDIER</h4>
                <p className="menu-item__details--description">bourbon, campari, sweet vermouth</p>
                <p className="menu-item__details--price">8</p>
            </div>
                <div className="menu-item">
                <h4 className="menu-item__header">GIN AND TONIC</h4>
                <p className="menu-item__details--description">tanqueray gin, tonic water</p>
                <p className="menu-item__details--price">8</p>
            </div>
            <h4 className="sub__header">Specialties</h4>
            <div className="menu-item">
                <h4 className="menu-item__header">BOURBON FRUIT TEA PUNCH</h4>
                <p className="menu-item__details--description">orange juice, pineapple juice, lemon juice, loose tea, bourbon</p>
                <p className="menu-item__details--price">12</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">CITRUS SHANDY</h4>
                <p className="menu-item__details--description">campari, orange juice, lime juice, alepp-style pepper, light beer</p>
                <p className="menu-item__details--price">12</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">APPLEJACK SOUR </h4>
                <p className="menu-item__details--description">laird's applejack, lemon juice, orange juice, maple syrup, angostura bitters, hint of nutmeg</p>
                <p className="menu-item__details--price">14</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">BASIL BELLINI</h4>
                <p className="menu-item__details--description">vodka, peach schnapps, basil, lemon</p>
                <p className="menu-item__details--price">12</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">MAKER'S MULE</h4>
                <p className="menu-item__details--description">maker's mark, bourbon, lime juice, ginger beer</p>
                <p className="menu-item__details--price">11</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">FROZEN PINA COLADA</h4>
                <p className="menu-item__details--description">rum, myers dark rum, coconut flakes</p>
                <p className="menu-item__details--price">10</p>
            </div>
            <div className="menu-item">
                <h4 className="menu-item__header">ST. GERMAIN</h4>
                <p className="menu-item__details--description">vodka, st.germain, lemon, lime, grapefruit</p>
                <p className="menu-item__details--price">15</p>
            </div>

        </div>
    )
}

export default cocktails
