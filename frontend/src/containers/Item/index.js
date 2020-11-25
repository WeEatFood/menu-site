import React from 'react'
import { useParams } from 'react-router'
import Query from '../../components/Query'

import ITEMS_QUERY from '../../queries/items/items'

const Item = () => {
  let { id } = useParams()
  return (
    <Query query={ ITEMS_QUERY } id={ id }>
      { ({ data: { item } }) => {
        const imageUrl =
          process.env.NODE_ENV !== 'development'
            ? item.image.url
            : process.env.REACT_APP_BACKEND_URL + item.image.url
        return (
          <div>
            <div
              id="banner"
              data-src={ imageUrl }
              data-srcset={ imageUrl }
            >
              <h1>{ item.title }</h1>
            </div>

            <div className="uk-section">
              <div className="uk-container uk-container-small">
                { item.content }
              </div>
            </div>
          </div>
        )
      } }
    </Query>
  )
}

export default Item
