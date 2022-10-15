import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc'
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

    console.log(gender)

    const onChange = (e) => {
        setGender(e.target.value)
    }


const onSubmit = (e) =>{
    e.preventDefault()

    const body=JSON.stringify({ "name": newUser, "gender": gender, "status": "active", email: mail})

    createRequest("/public/v1/users", "POST", body)
        .then((data)=>{
            alert("User added successfully")
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

            <div className='gender-content'>
                <span className='man gender'>
                    <input 
                        type="radio" 
                        name="gender" 
                        className='input-radio'  
                        value="male" 
                        checked={gender === "male"} 
                        onChange={onChange}  
                        required
                        />
                    <FcBusinessman />
                </span>
                <span className='woman gender'>
                    <input 
                        type="radio" 
                        name="gender" 
                        className='input-radio'
                        value="female" 
                        checked={gender === "female"} 
                        onChange={onChange} 
                        required
                        />
                    <FcBusinesswoman />
                </span>
            </div>

            <Button variant='success' type='submit'>Save</Button>

            
        </form>

    </div>
  )
}

export default AddUser