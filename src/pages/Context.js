// So inoderer to make a context, react provides us an inbuilt function called React.createContext which creates a global react object.

// There are 2 components called provider and consumer 

import React from 'react'

function Context(props) {

    const {
        data,
        onAction,
        onLabelClick,
    }= props
  return (
    <div className='app-list'>
      {
        data.map((obj=> {
          return 
        }))
      }
      
    </div>
  )
}

export default Context
