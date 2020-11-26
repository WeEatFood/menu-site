import React from 'react'
import { gql, useQuery } from '@apollo/client'

const Items = () => {
  const { loading, error, data } = useQuery(gql`
      query Items {
          items {
              title
              content
              image{
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
      { data.items.map(item => (
        <li key={ item.id }>{ item.title }</li>
      )) }
    </ul>
  )
}

export default Items
