import React, { useEffect, useState } from 'react'
import {Table, Button} from "react-bootstrap"
import "./Users.scss"
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { BsXCircleFill, BsCheckCircleFill} from "react-icons/bs";
import { useGetPaginatedUsersQuery } from '../../services/getInfo'
import Loader from '../Loader/Loader'
import AddUser from './AddUser'


function Users() {

    

    const [pageNumber, setPageNumber] = useState(1)
    const {data: paginatedUsers,isFetching} = useGetPaginatedUsersQuery(pageNumber)
    //fetching paginated users


    useEffect(()=>{
      if(pageNumber<1){
        setPageNumber(1)
      }
        
    },[pageNumber])


    if(isFetching) return <Loader/>

    console.log(paginatedUsers)

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
      {paginatedUsers?.data?.map((item) => {
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

    <ul className='pagination'>
      <li className='pageNumber'><Button onClick={()=> {setPageNumber(pageNumber-1)}}> Prev </Button></li>
      <li className='pageNumber'><Button onClick={()=> {setPageNumber(pageNumber+1)}}>Next</Button></li>
    </ul>

    

    <AddUser/>
    
    </div>
  )
}

export default Users