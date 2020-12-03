import React from 'react'
import '../scss/online.scss'
import originalBurger from '../assets/burger.jpg'

export default function Online () {
  return (
    <div>
      <div>
        <h3>Bolder's Original Burger</h3>
      </div>
      <div>
        <div>
          <img src={ originalBurger } height={ 100 } alt="burger"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          eius in placeat? Aliquam animi beatae debitis, deserunt dolorem
          dolores ea esse nihil nobis obcaecati perferendis possimus qui tempore
          veritatis, voluptatem.</p>
        <button></button>
        <div>
          <p>25</p>
        </div>
      </div>
    </div>
  )
}

