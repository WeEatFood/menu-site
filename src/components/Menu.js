import React from 'react'
import { Switch, Route} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import * as ReactBootStrap from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import appetizers from '../components/menu/appetizers'
import brewery from '../components/menu/brewery'
import cocktails from '../components/menu/cocktails'
import dessert from '../components/menu/dessert'
import kitchen from '../components/menu/kitchen'
import wine from '../components/menu/wine'
import '../scss/menu.scss'

function Menu() {
    return (
            <div className="menu__container">
                <h1>Menus</h1>
                <p>Select a menu to view</p>
                <div className="menu">
                    <LinkContainer to="/menu/appetizers">
                        <Button className="menu__btn" variant="" size="sm">Appetizers</Button>
                    </LinkContainer>
                    <LinkContainer to="/menu/kitchen">
                        <Button className="menu__btn" variant="" size="sm">Kitchen</Button>
                    </LinkContainer>
                    <LinkContainer to="/menu/dessert">
                        <Button className="menu__btn" variant="" size="sm">Dessert</Button>
                    </LinkContainer>
                    <LinkContainer to="/menu/cocktails">
                        <Button className="menu__btn" variant="" size="sm">Cocktails</Button>
                    </LinkContainer>
                    <LinkContainer to="/menu/brewery">
                        <Button className="menu__btn" variant="" size="sm">Brewery</Button>
                    </LinkContainer>
                    <LinkContainer to="/menu/wine">
                        <Button className="menu__btn" variant="" size="sm">Wine</Button>
                    </LinkContainer>
                    <div className="menu__items">
                            <Switch>
                                <Route path="/menu/appetizers" component={appetizers} />
                                <Route path="/menu/brewery" component={brewery} />
                                <Route path="/menu/cocktails" component={cocktails} />
                                <Route path="/menu/dessert" component={dessert} />
                                <Route path="/menu/kitchen" component={kitchen} />
                                <Route path="/menu/wine" component={wine} />
                            </Switch>
                    </div>
                </div>
            </div>
    )
}

export default Menu
