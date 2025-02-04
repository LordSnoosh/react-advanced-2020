import React from 'react'

const ErrorExample = () => {
  let title = 'random Title'
  const handleClick = () => {
    console.log(title)
    title = 'hello peeps!'
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
