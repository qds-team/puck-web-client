import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { usePAPforms } from './usePAPforms';
import { UserForm } from './UserForm';
import { useState } from 'react';
import { FormEvent } from 'react';

type FormData = {
  filePath: string
  password: string
}

const INITIAL_DATA: FormData= {
  filePath: "",
  password: ""
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return {...prev, ...fields}
    })
  }
  const {steps, currentStepIndex, step, isFirstStep, back, next}=
   usePAPforms([<UserForm {...data} updateFields={updateFields}/>])

  function onSubmit(e: FormEvent){
    e.preventDefault()
    next()
  }

  return <div style={{
    position: "relative",
    background: "white",
    border: "1px solid black",
    padding: "2rem",
    margin: "1rem",
    borderRadius: ".5rem",
    fontFamily: "Arial",
    maxWidth: "max-content"

  }}> 
    <form>

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
