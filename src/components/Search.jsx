import  { useEffect, useState } from 'react'


const Search = ({foodData,setFoodData}) => {
    const URL=import.meta.env.VITE_REACT_URL;
    const API_KEY=import.meta.env.VITE_REACT_API_KEY;
    

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