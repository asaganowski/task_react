import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Select from "react-select"
import { createRequest } from '../helper'
import "./AddPost.scss"
import { useGetAllUsersQuery } from '../../services/getInfo'

function AddPost() {

    const [name,setName] = useState("")

    const [postData, setPostData]=useState(
        {
            title: "",
            body: ""
        });
    
    console.log(postData)
    
        useEffect(() => {
            const data = localStorage.getItem("post-info")
            if(data){
                setPostData(JSON.parse(data))
            }
          }, []);
        
          useEffect(() => {
            localStorage.setItem("post-info", JSON.stringify(postData));
          },[postData]);

    const {data:users} = useGetAllUsersQuery()

    const options=users?.data?.map((users)=>({

        value: users.name,
        label: users.name,
        id: users.id
    
      }))

      const onChange = (e) => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        });
    }

const onSubmit = (e) =>{
    e.preventDefault()

    const bodyData=JSON.stringify({"body": postData.body, "title": postData.title})


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
                onChange={(e)=>setName(e.target.value)}
                className="user-select"
                placeholder="Choose a User"
                name="name"
                />

            <input 
                onChange={onChange}
                placeholder="Title"
                required
                className='title'
                name="title"
                defaultValue={postData.title}
            />

            <textarea 
                onChange={onChange} 
                placeholder="Body"
                required
                name="body"
                defaultValue={postData.body}
            />
            


            <Button variant='outline-primary' type='submit'>Publish</Button>

            
        </form>
  )
}

export default AddPost