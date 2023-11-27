import { useState } from 'react'
export default function DogPics () {
  const [image,setImage]=useState("")
// API: https://dog.ceo/dog-api/
  function handelClick(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>setImage(data.message))
    .catch(err=>console.log(err))
    }


    
  
  return (
    <div className='dog-pics'>
      <h2>Dog Pics</h2>
      <img style={{height:"350px"}} src={image}/>

      <p>Click the button to see a random dog pic!</p>
      <button onClick={handelClick}>🐶</button>
    </div>
  )
}
