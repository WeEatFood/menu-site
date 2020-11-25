import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  const imageUrl = process.env.NODE_ENV != 'development'
    ? item.image.url
    : process.env.REACT_APP_BACKEND_URL + item.image.url

  return (
    <Link to={ `/item/${ item.id }` } className="card__link">
      <div>
        <div>
          <img
            src={ imageUrl }
            alt={ item.image.url }
            height="100"
          />
        </div>
        <div>
          <p>
            { item.category.name }
          </p>
          <p>
            { item.title }
          </p>
        </div>
      </div>
    </Link>
  )
}
export default Card
