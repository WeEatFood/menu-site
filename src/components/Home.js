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
    <ReactBootStrap.Container className="container__carousel">
      <ReactBootStrap.Carousel className="carousel">
        <ReactBootStrap.Carousel.Item>
          <img
            className="d-block w-100"
            src={ Bar }
            alt="First slide"
          />
          <ReactBootStrap.Carousel.Caption className="carousel__caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img
            className="d-block w-100"
            src={ Beer }
            alt="Third slide"
          />

          <ReactBootStrap.Carousel.Caption className="carousel__caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img
            className="d-block w-100"
            src={Rest}
            alt="Third slide"
          />

          <ReactBootStrap.Carousel.Caption className="carousel__caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl
              consectetur.</p>
          </ReactBootStrap.Carousel.Caption>
        </ReactBootStrap.Carousel.Item>
        <ReactBootStrap.Carousel.Item>
          <img
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
      <div className="award">
        <img src={Award1} className="award_img" alt="none"/>
      </div>
    </ReactBootStrap.Container>
  )
}

export default Home
