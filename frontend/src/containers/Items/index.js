import React from 'react'

// TODO make sure all imports work
// TODO ended on components/Articles/index.js in strapi.io blog

import Items from '../../components/Items'
import Query from '../../components/Query'
import ITEMS_QUERY from '../../queries/item/items'

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Online Menu</h1>
          <Query query={ITEMS_QUERY}>
            {({ data: { items } )} => {
            return <Items items={items}/>
          }}
          </Query>
        </div>
      </div>
    </div>
  )
}

export default Home
