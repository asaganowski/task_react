import React from 'react'
import moment from "moment"
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from 'react-icons/ai'
import "./TodoList.scss"


function TodoList({todo, style}) {

    console.log(todo)

  return (
    <div style={style} className={`${todo.status==="completed" ? "line-through" : ""} todo-list`}>

        <div className='todo-title'>
            <p >{todo.title}</p>
        </div>
                                        

        <div className='todo-rest-info'>
            <div className='todo-time'>
                <p>{moment(todo.due_on).format("LL")}</p>
                <small style={{visibility: todo.status==="pending" ? "visible" : "hidden"}}>ends {moment(todo.due_on).endOf("ss").fromNow()}</small>
            </div>



            <div className='todo-status'>

                <p className='todo-status'>{todo.status==="pending" ?  <AiOutlineCloseSquare style={{backgroundColor:"red"}}/> : <AiOutlineCheckSquare style={{backgroundColor:"green"}}/> }</p>

            </div>

            
        </div>

        
    </div>
  )
}

export default TodoList