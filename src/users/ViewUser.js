import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewUser = () => {

    const {id} = useParams()

    const [user, setuser] = useState({
        name: "",
        username: "",
        email: ""
    });

    useEffect(()=>{
        loadUser();
    },[])

    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8080/api/v1/user/user/${id}`)
        setuser(result.data);
    }


  return (
    <div className='container py-5'>
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 shadow">
                    <h2 className='text-center m-4'>View Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id : {id}
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Name : </b> {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Username : </b> {user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Email : </b> {user.email}
                                </li>
                            </ul>
                            <div className='d-flex justify-content-end'>
                                 <Link className='btn btn-outline-danger mx-1' to="/">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>  
    </div>      
  )
}

export default ViewUser
