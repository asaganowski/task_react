import React from 'react'
import moment from "moment"
import { AiOutlineCheckSquare, AiOutlineCloseSquare } from 'react-icons/ai'
import "./TodoList.scss"
import { useGetUserQuery } from '../../services/getInfo'


function TodoList({todo, style}) {

    const {data:user} = useGetUserQuery(todo?.user_id)

    console.log(user)

    const fromNow = moment(todo?.due_on).endOf("ss")?.fromNow();
    const isCloseToExpire = fromNow?.match(/(\d+)/)?.[0]<7 || fromNow.endsWith("day") 

    


  return (
    <div style={style} className={`${todo.status==="completed" ? "line-through" : ""} todo-list ${isCloseToExpire && todo?.status==="pending" ? "red" : "" }`} >

        <div className='todo-user'>
            <p >{user?.data?.name}</p>
        </div>
                                        

        <div className='todo-rest-info'>
            <div className='todo-title info'>
                <p>{todo.title}</p>
            </div>
            <div className='todo-time info'>
                <p>{moment(todo.due_on).format("LL")}</p>
                <small style={{visibility: todo.status==="pending" ? "visible" : "hidden"} } >ends {fromNow}</small>
            </div>



            <div className='todo-status info'>

                <p>{todo.status==="pending" ?  <AiOutlineCloseSquare style={{backgroundColor:"red"}}/> : <AiOutlineCheckSquare style={{backgroundColor:"green"}}/> }</p>

            </div>

            
        </div>

        
    </div>
  )
}

export default TodoList