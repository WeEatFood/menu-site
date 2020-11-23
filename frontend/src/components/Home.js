/** @format */
import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import Bar from '../assets/pubhub2.jpg'
import Beer from '../assets/beer.jpg'
import Rest from '../assets/rest.jpg'
import Burger from '../assets/burger.jpg'
import '../scss/home.scss'
import Award1 from '../assets/medal.svg'

const Home = () => {
  return (
    <ReactBootStrap.Container className="carousel__container">
      <ReactBootStrap.Carousel className="carousel__inner-container">
        <ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Image
            className="d-block w-100"
            src={ Bar }
            alt="First slide"
            class="img-fluid lazy"
          />
          <ReactBootStrap.Carousel.Caption className="carousel__caption" fluid>
            <h3>-Star Magazine</h3>
            <p>This restaurant is the best in North-West Colorado! Stop by if your in the boulder area</p>
            <ReactBootStrap.Image src={Award1} className="award__img" alt="none"/>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Image
            className="d-block w-100"
            src={ Beer }
            alt="Third slide"
            class="img-fluid lazy"
          />
          <ReactBootStrap.Carousel.Caption className="carousel__caption">
            <h3>-Rolling Stones</h3>
            <p>They got beer and lots of it!!</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Image
            className="d-block w-100"
            src={Rest}
            alt="Third slide"
            class="img-fluid lazy"
          />

          <ReactBootStrap.Carousel.Caption className="carousel__caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <ReactBootStrap.Image
            className="d-block w-100"
            src={Burger}
            alt="Fourth slide"
          />

          <ReactBootStrap.Carousel.Caption className="carousel__caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
      </ReactBootStrap.Carousel>
    </ReactBootStrap.Container>
  )
}

export default Home
