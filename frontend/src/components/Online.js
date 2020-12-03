import React from 'react'
import '../scss/online.scss'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import originalBurger from '../assets/burger.jpg'

export default function Online () {
  return (
<Container>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={originalBurger} />
    <Card.Body>
      <Card.Title>Bolder's Original Burger</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Checkout</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={originalBurger} />
    <Card.Body>
      <Card.Title>Bolder's Original Burger</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Checkout</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={originalBurger} />
    <Card.Body>
      <Card.Title>Bolder's Original Burger</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Checkout</Button>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={originalBurger} />
    <Card.Body>
      <Card.Title>Bolder's Original Burger</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Checkout</Button>
    </Card.Body>
  </Card>


  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={originalBurger} />
    <Card.Body>
      <Card.Title>Bolder's Original Burger</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button variant="primary">Checkout</Button>
    </Card.Body>
  </Card>
</Container>
  )
}

