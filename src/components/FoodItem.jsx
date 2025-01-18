import React from 'react'

const FoodItem = ({food,setFoodId}) => {
  return (
    <div className='item-container'>
        <img src={food.image}  className='item-image' alt="" />
        <div className="item-content">
          <p className="item-name">{food.title}</p>
        </div>
        <div className="button-container">
        <button onClick={()=>setFoodId(food.id)} className='item-button'>View Recipe</button>

        </div>
   
         
    </div>
  )
}

export default FoodItem