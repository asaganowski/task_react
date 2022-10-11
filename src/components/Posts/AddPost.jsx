import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Select from "react-select"
import { createRequest } from '../helper'
import "./AddPost.scss"
import { useGetAllUsersQuery } from '../../services/getInfo'

function AddPost() {

    const [title,setTitle] = useState("")
    const [name,setName] = useState("")
    const [body,setBody] = useState("")

    const {data:users} = useGetAllUsersQuery()

    const options=users?.data?.map((users)=>({

        value: users.name,
        label: users.name,
        id: users.id
    
      }))

const onSubmit = (e) =>{
    e.preventDefault()

    const bodyData=JSON.stringify({"body": body, "title": title})


    createRequest(`/public/v1/users/${name.id}/posts`, "POST", bodyData) //post request 
        .then((data)=>{
            alert("Post added successfully")
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })
          

}
    
  return (
    <form onSubmit={onSubmit}>
        <h4>Create a new Post</h4>
            <Select
                options={options}
                onChange={(e)=>{
                    setName(e)
                }}
                className="user-select"
                placeholder="Choose a User"
                />

            <input 
                onChange={(e)=>{

                    setTitle(e.target.value)
                }} 
                placeholder="Title"
                required
                className='title'
            />

            <textarea 
                onChange={(e)=>{
                    setBody(e.target.value)
                }} 
                placeholder="Body"
                required
            />
            


            <Button variant='outline-primary' type='submit'>Publish</Button>

            
        </form>
  )
}

export default AddPost