import React from 'react';
import ReactDOM from 'react-dom/client';
import { AddThoughtForm } from './Thoughtform';
import { Thought } from './thoughtitem'

function Thoughts() {
  const [thoughts, setThoughts] = React.useState([])


  const addThought = (e) => {
    e.preventDefault()
    const { target } = e
    target[0].value ? setThoughts(prev => [{ details: target[0].value, id: Date.now(), deleteTime: Date.now() + 15000 }, ...prev]) : <></>

  }

  const removeThought = (e) => {
    setThoughts(prev => prev.filter(thought => thought.id !== e))

  }

  return (
    <>
      <h1 style={{ backgroundColor: '#fab700' }}>Disappearing Thoughts</h1>
      <AddThoughtForm addThought={addThought} />
      <ul>
        {thoughts.map(thought => <li><Thought details={thought.details} id={thought.id} removeThought={removeThought} deleteTime={thought.deleteTime} /></li>)}
      </ul>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Thoughts />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

