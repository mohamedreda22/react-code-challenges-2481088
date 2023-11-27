//first solution
import { useState } from "react"
//first solution without useState and using document
export  function DarkMode1 () {    

  function handelDarkMode(){
    document.body.classList.add('dark-mode')
  }
  function handelWhiteMode(){
    document.body.classList.remove('dark-mode')
}
  return (
    <div className='page'>
      <button className='dark-mode-button' onClick={handelDarkMode} >Dark Mode </button>
      <button className='light-mode-button' onClick={handelWhiteMode}>Light Mode</button>
    </div>
  )
}
//Secound Solution with useState
export  function DarkMode (){
  const[DarkMode,SetDark]=useState(false);

  return(
    <div className={`page  ${DarkMode && 'dark-mode'}`}>
      <button className='dark-mode-button' onClick={()=>{SetDark(true)}} >Dark Mode </button>
      <button className='light-mode-button' onClick={()=>{SetDark(false)}}>Light Mode</button>
    </div>

  )
}
