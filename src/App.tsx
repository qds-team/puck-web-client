import React from 'react';
import logo from './logo.svg';
import './App.css';
import { usePAPforms } from './usePAPforms';
import { UserForm } from './UserForm';

function App() {
  const {steps, currentStepIndex, step, isFirstStep, back, next}=
   usePAPforms([
    <UserForm />

  ])

  return <div style={{
    position: "relative",
    background: "white",
    border: "1px solid black",
    padding: "2rem",
    margin: "1rem",
    borderRadius: ".5rem",
    fontFamily: "Arial"

  }}> 
    <form>
      <div style = {{position: "absolute", top: ".5rem", right: ".5rem"}}>
        {currentStepIndex + 1} / {steps.length}

      </div>
      {step}
        <div style={{marginTop: "1rem", 
        display: "flex", 
        gap: ".5rem", 
        justifyContent: "flex-end"}}>
            {!isFirstStep && <button onClick={back}>Back</button>} 
            <button onClick={next}>Submit</button>
        </div>
    </form>
  </div>

}

export default App
