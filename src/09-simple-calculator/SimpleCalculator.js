import { useReducer } from 'react';

const initialState = {
  num1: 0,
  num2: 0,
  result: "No Result Yet!"
}

function reducer (state, action) {
  if(action.type ==='Add'){
    return{
      ...state,
      result: state.num1 + state.num2
    }
  }
  if(action.type ==='Subtract'){
    return{
      ...state,
      result: state.num1 - state.num2
    }
}
  if(action.type === 'clear'){
    return{
      ...initialState
    }
  }
  if(action.type === 'setNum1'){
    return{
      ...state,
      num1: action.payload
    }
  }
  if(action.type === 'setNum2'){
    return{
      ...state,
      num2: action.payload
    }
  }
  throw Error('Unknown action.');
}
export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [state, dispatch] = useReducer(reducer,  initialState );


  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number}
          onClick={()=> {
            dispatch({type: "setNum1",payload: number}) 
          }}
          
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number}
          onClick={()=> {
            dispatch({type: "setNum2",payload: number}) }}
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={()=>{
            dispatch({type: 'Add'})
          }}>+</button>
        <button onClick={()=>{
            dispatch({type: 'Subtract'})
          }}>-</button>
        <button onClick={()=>{
            dispatch({type: 'clear'})
          }}>c</button>
      </div>
      <div><h2>Result: {state.result}</h2></div>
    </div>
  )
}
/*
//Another soultion with useState:

import { useState } from "react";

export default function SimpleCalculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleAddition = () => {
    setResult(num1 + num2);
  };

  const handleSubtraction = () => {
    setResult(num1 - num2);
  };

  const handleClear = () => {
    setResult(0);
    setNum1(0);
    setNum2(0);
  };

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map((number) => (
          <button key={number} onClick={() => setNum1(number)}>
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map((number) => (
          <button key={number} onClick={() => setNum2(number)}>
            {number}
          </button>
        ))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleClear}>c</button>
      </div>
      <div>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

*/ 