import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc'
import { createRequest } from '../helper'
import "./AddUser.scss"

function AddUser() {

    const [userData, setUserData]=useState(
    {
        name: "",
        mail: "",
        gender: ""
    });

console.log(userData)

    useEffect(() => {
        const data = localStorage.getItem("user-info")
        if(data){
            setUserData(JSON.parse(data))
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("user-info", JSON.stringify(userData));
      },[userData]);

const onChange = (e) => {
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
    });
}


const onSubmit = (e) =>{
    e.preventDefault()

    const body=JSON.stringify({ "name": userData.name, "gender": userData.gender, "status": "active", "email": userData.mail})

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
                onChange={onChange} 
                placeholder="Name"
                name="name"
                required
                defaultValue={userData.name}
            />

            <input 
                onChange={onChange} 
                name= "mail"
                type="email"
                placeholder="Email"
                required
                defaultValue={userData.mail}
            />

            <div className='gender-content'>
                <span className='man gender'>
                    <input 
                        type="radio" 
                        name="gender" 
                        className='input-radio'  
                        value="male" 
                        checked={userData.gender === "male"} 
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
                        checked={userData.gender === "female"} 
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