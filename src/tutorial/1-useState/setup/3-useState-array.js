import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button type='button' class='btn' onClick={() => removeItem(id)}>
              remove item
            </button>
          </div>
        )
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
}

export default UseStateArray
