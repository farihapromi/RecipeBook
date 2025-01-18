import React from 'react'

const Item = ({item,index}) => {
  return (
    <div>
         <div key={index} className='itemContainer'>
          <div className="imageContainer">
          <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image}alt=""  className='image'/>

          </div>
                          
                           <div className="name-container">
                           <div className='name'>{item.name}</div>
                           <div className='amount'>{item.amount} {item.unit}</div>

                           </div>
                            
                        </div>
    </div>
  )
}

export default Item