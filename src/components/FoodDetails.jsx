import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

const FoodDetails = ({foodId}) => {
    const [food,setFood]=useState({})
    const [loading,setLoading]=useState(true)

    const FOOD_URL=import.meta.env.VITE_FOOD_URL;
    const API_KEY=import.meta.env.VITE_REACT_API_KEY;

    useEffect(() => {
        async function fetchFood() {
          if (!foodId) return; 
      
          const URL = `${FOOD_URL}/${foodId}/information`; 
      
          try {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching food details:", error);
          }
        }
      
        fetchFood();
      }, [foodId]);
  return (
    <div>
        <div className='recipe-card'>
       <h1 className='recipe-name'> 
       {food.title}</h1>
    <img src={food.image} className='recipe-image' alt="" />
    <div className='recipe-details'>
    <span>
            <strong> ⏲{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
            <strong> 👨‍👩‍👦Serves {food.servings}</strong>
        </span>
        <span>
            <strong>{food.vegetarian? " 🍗Vegetarian":" 🥕🍅🥒Non-Vegetarian"}</strong>
        </span>
        <span> <strong>{food.vegan ? "Vegan":""}</strong></span>

    </div>
       <div>
        <span> <strong>💲{food.pricePerServing/100}per service</strong></span>
       </div>
       <h2>Ingredients</h2>
 
      
        <ItemList food={food}/>
    
   
        <h2>Instruction </h2>
        <div className='recipe-instructions'>
            <ol>
        {
            loading ?(<p>Loading....</p>):( 
                food.analyzedInstructions[0].steps.map((step)=><li>{step.step}</li>)
            

            )
        }
        </ol>

        </div>
       
       
       
    </div>
    </div>
  )
}

export default FoodDetails