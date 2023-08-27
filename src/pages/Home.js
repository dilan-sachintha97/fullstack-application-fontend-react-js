import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

  const [users, setUsers] = useState([]);
     
  useEffect(()=>{
    loadUsers();
  },[])

  const loadUsers = async()=>{
    const result = await axios.get("http://localhost:8080/api/v1/user/all-users")
    setUsers(result.data)
  }

  return (
    <div className='container py-3'>
       <div className="py-3">
          <table className="table  shadow table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item,index)=>(
                <tr key={index}>
            
                  <td>{index+1}</td>
                  <td>{item.username}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <button className='btn btn-sm btn-primary mx-1' >view</button>
                    <button className='btn btn-sm  btn-outline-primary mx-1' >Edit</button>
                    <button className='btn btn-sm btn-danger mx-1' >Delete</button>
                  </td>
              </tr>
              ))}
            </tbody>
          </table>

       </div>
    </div>
  )
}

export default Home
