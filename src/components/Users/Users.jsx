import React from 'react'
import {Table} from "react-bootstrap"
import "./Users.scss"
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { BsXCircleFill, BsCheckCircleFill} from "react-icons/bs";
import { useGetAllUsersQuery } from '../../services/getInfo'
import Loader from '../Loader/Loader'
import AddUser from './AddUser'


function Users() {

    const {data:users, isFetching} = useGetAllUsersQuery()
    //fetching all users from API

    if(isFetching) return <Loader/>

    console.log(users)

    const icons={
        male: <FcBusinessman/>,
        female: <FcBusinesswoman/>,
        active: <BsCheckCircleFill/>,
        inactive: <BsXCircleFill /> , 

    }//setting icons for specific user info

    const iconsColor={

        active: "rgb(0,200,0)",
        inactive: "rgb(200,0,0)"

    }

  return (
    <div className='users-wrapper'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mail</th>
          <th>Gender</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {users?.data?.map((item) => {
            return (
              <tr key={item.id}>
                {Object.keys(item).filter(key => key!=="id").map((prop) =>{
                    if(prop==="gender" || prop==="status"){
                        return <td key={prop} style={{color: iconsColor[item[prop]]}}>{icons[item[prop]]}</td>
                    }
                    else{
                        return <td key={prop}>{item[prop]}</td>
                    }
                }
                )}
              </tr>
            )
          })}
        
      </tbody>
    </Table>

    

    <AddUser/>
    
    </div>
  )
}

export default Users