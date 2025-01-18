import React from 'react'
import Item from './Item'

const ItemList = ({food}) => {
  return (
    <div>
              {food.extendedIngredients ? (
                    food.extendedIngredients.map((item, index) => (
                       <Item item={item} index={index}/>
                    ))
                ) : (
                    <p>No ingredients available.</p>
                )
                }
    </div>
  )
}

export default ItemList