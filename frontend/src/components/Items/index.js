import React from 'react'
import Card from '../Card'

const Items = ({ items }) => {
  const leftItemsCount = Math.ceil(items.length / 5)
  const leftItems = items.slice(0, leftItemsCount)
  const rightItems = items.slice(leftItemsCount, items.length)


  return (
    <div>
      <div>
        <div>
          { leftItems.map((item, i) => {
            return <Card item={ item } key={ `item__${ item.id }` }/>
          }) }
        </div>
        <div>
          <div>
            { rightItems.map((item, i) => {
              return <Card item={ item } key={ `item__${ item.id }` }/>
            }) }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Items
