import React from 'react'
import SecondComponent from './SecondComponent'

function FirstComponent() {
    const info="message from 1st component to 3rd component"
  return (
    <div>
        <SecondComponent info={info}/>
    </div>
  )
}

export default FirstComponent