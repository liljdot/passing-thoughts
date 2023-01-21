import React from 'react'

export function AddThoughtForm(props) {
  const [value, setValue] = React.useState('')
  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const handleSubmit = (e) => {
    props.addThought(e);
    setValue('')
  }
  return (
    <form class='card' onSubmit={handleSubmit}>
      <input id='thought' class='input__field' type='text' placeholder='Type in disappearing thought' value={value} onChange={handleChange} ></input>
      <button type='submit'>Add Thought</button>
      <label for='thought'> <strong>Thoughts Disappear after 15 seconds</strong></label>
    </form>
  )
}