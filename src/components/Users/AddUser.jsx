import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Select from "react-select"
import { createRequest } from '../helper'
import "./AddUser.scss"

function AddUser() {

    const [newUser,setNewUser] = useState("")
    const [gender,setGender] = useState("")
    const [mail,setMail] = useState("")

    const options=[
        {value: "female", label: "Female"},
        {value: "male", label: "Male"},
    ]



const onSubmit = (e) =>{
    e.preventDefault()

    const body=JSON.stringify({ "name": newUser, "gender": gender, "status": "active", email: mail})

    createRequest("/public/v1/users", "POST", body)
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })
          

}
    
  return (
    <div className='addUser-content'>

        <form onSubmit={onSubmit}>
            <h5 className='header'>Add user</h5>
            <input 
                onChange={(e)=>{

                    setNewUser(e.target.value)
                }} 
                placeholder="Name"
                required
            />

            <input 
                onChange={(e)=>{

                    setMail(e.target.value)
                }} 
                type="email"
                placeholder="Email"
                required
            />

            <Select
                options={options}
                onChange={(e)=>{
                    setGender(e.value)
                }}
                className="gender-select"
                placeholder="Gender"
                />


            <Button variant='success' type='submit'>Save</Button>

            
        </form>

    </div>
  )
}

export default AddUser