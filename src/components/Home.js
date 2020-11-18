/** @format */
import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import Bar from '../assets/pubhub2.jpg'
import '../styles/home.scss'


const Home = () => {
  return (
    <ReactBootStrap.Container className="container-carousel">
    <ReactBootStrap.Carousel className="carousel">
      <ReactBootStrap.Carousel.Item>
        <img
          className="d-block w-100"
          src={Bar}
          alt="First slide"
        />
        <ReactBootStrap.Carousel.Caption className="slide-1-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </ReactBootStrap.Carousel.Caption>
      </ReactBootStrap.Carousel.Item>
      <ReactBootStrap.Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Third slide"
        />

        <ReactBootStrap.Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </ReactBootStrap.Carousel.Caption>
      </ReactBootStrap.Carousel.Item>
      <ReactBootStrap.Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <ReactBootStrap.Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </ReactBootStrap.Carousel.Caption>
      </ReactBootStrap.Carousel.Item>
    </ReactBootStrap.Carousel>
    </ReactBootStrap.Container>
  )
}

export default Home
