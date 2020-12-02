import React from 'react'

function dessert() {
    return (
        <div className="sub__container">
            <h4 className="sub__header">Dessert</h4>
            <div className="menu-item">
            <h4 className="menu-item__header">DARK CHOCOLATE CAKE</h4>
                <p className="menu-item__details--description">Decadent dark chocolate cake baked with a touch of cinnamon</p>
                <p className="menu-item__details--price">8</p>
            </div>

            <div className="menu-item">
            <h4 className="menu-item__header">CHEESECAKE</h4>
                <p className="menu-item__details--description">Traditional New York style cheesecake with berry sauce</p>
                <p className="menu-item__details--price">6</p>
            </div>

            <div className="menu-item">
            <h4 className="menu-item__header">CARAMEL BREAD PUDDING</h4>
                <p className="menu-item__details--description">House-made seasonal bread pudding with caramel sauce.</p>
                <p className="menu-item__details--price">6</p>
            </div>

            <div className="menu-item">
            <h4 className="menu-item__header">TIRAMISU</h4>
                <p className="menu-item__details--description">Lady fingers flavored with espresso, layered with sweetened Italian cream cheese</p>
                <p className="menu-item__details--price">8</p>
            </div>

            <div className="menu-item">
            <h4 className="menu-item__header">CHOCOLATE HAZELNUT MOUSSE CAKE</h4>
                <p className="menu-item__details--description">Chocolate hazelnut mousse layered between a shortbread crust and dark chocolate ganache topping</p>
                <p className="menu-item__details--price">8</p>
            </div>

            <div className="menu-item">
            <h4 className="menu-item__header">CREME BRULEE</h4>
                <p className="menu-item__details--description">Traditional creamy vanilla bean custard with a caramelized sugar topping</p>
                <p className="menu-item__details--price">11</p>
            </div>

            <div className="menu-item">
            <h4 className="menu-item__header">GELATO & SORBET</h4>
                <p className="menu-item__details--description">Ask your server for today's selections</p>
                <p className="menu-item__details--price">7</p>
            </div>
        </div>
    )
}

export default dessert
