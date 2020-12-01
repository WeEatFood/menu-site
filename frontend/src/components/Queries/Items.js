import React from 'react'
import { gql, useQuery } from '@apollo/client'

const Items = () => {
  const { loading, error, data } = useQuery(gql`
      query Items {
          items {
              id
              title
              content
              image {
                  url
              }
              price
          }
      }
  `)

  if (loading) return 'Loading...'
  if (error) return `Error! ${ error.message }`

  return (
    <ul>
      { data.items.map(data => (
        <div key={ data.id }>
          <div>{ data.image.url }</div>
          <h1>{ data.title }</h1>
          <body>{ data.content }</body>
          <img src={ data.image } alt="food"/>
          <p>{ data.price }</p>
        </div>
      )) }
    </ul>
  )
}

export default Items
