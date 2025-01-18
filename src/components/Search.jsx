import  { useEffect, useState } from 'react'

const Search = ({foodData,setFoodData}) => {
    const URL='https://api.spoonacular.com/recipes/complexSearch';
    const API_KEY='86a5239f7aa843458d0b7560ed2cf671'
    const [query,setQuery]=useState("");
    useEffect(()=>{
       async function fetchFood(){
         const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
         const data=await res.json();
         setFoodData(data.results)
         console.log(data.results)
        }
        fetchFood()

    },[query])
  return (
    <div className='searchContainer'>
<input className='input'
value={query}
 onChange={(e)=>setQuery(e.target.value)} type="text" />

    </div>
  )
}

export default Search