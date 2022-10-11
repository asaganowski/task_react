import React from 'react'
import "./TodoHeader.scss"

function TodoHeader() {

  return (
    <div className='todo-header'>

      <div className='todo-title'>

        <p className='title-header'>Title</p>
      
      </div>

      <div className='todo-rest-headers'>

        <span className='header due_on'>Due On</span>
        <span className='header status'>Status</span>

      </div>

    </div>
                    
  )
}

export default TodoHeader