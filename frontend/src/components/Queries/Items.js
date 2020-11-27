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
                  name
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
          <h1>{ data.title }</h1>
          <body>{ data.content }</body>
            <img url={data.image.name}/>
          {/*src={ data.image.name }/>*/}
          <p>{ data.price }</p>
        </div>
      )) }
    </ul>
  )
}

export default Items
