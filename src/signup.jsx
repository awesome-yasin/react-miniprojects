import React, {useState} from 'react';
import './App.css'


const Homepage = () => {
  return (
    <div style = {{textAlign: 'center'}}>
  <h1>Different Practical examples of react</h1>
  <p>Next Project: Music and video player <br></br> </p>
    </div>
  )
}


const SignUp = () => {

  const [state, setState] = useState(0)

  return (
    <>
    <div className="content">
      <h1 style = {{textAlign: 'center'}} >React Counter USing useState Hooks</h1>
  <h3>{state}</h3>
      <button className="button" onClick = {() => setState  (state+1)} >Increment</button>
      <button className="button"  onClick = {() => setState  (state-1)}>Decrement</button>
      
      </div>
   </>
  );
};
  
export {Homepage , SignUp};