import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'joey',
    age: 4,
    message: 'is a wild-child',
  })
  const changeMessage = () => {
    setPerson({ ...person, message: 'is awesome' })
  }
  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Message: {person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
