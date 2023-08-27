import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

    const {id} = useParams()
    let navigate = useNavigate()

    const [user, setuser] = useState({
        name: "",
        username: "",
        email: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setuser(prevUser => ({ ...prevUser, [name]: value }));
    };

    useEffect(()=>{
        loadUser();
    },[])

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/v1/user/update-user/${id}`,user)
        navigate("/")
    }

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/api/v1/user/user/${id}`)
        setuser(result.data)
    }

    return (
        <div className='container py-5'>
            <div className="row">
                <form onSubmit={(e)=>{onSubmit(e)}}>
                <div className="col-md-6 offset-md-3 border rounded p-4 shadow">
                    <h2 className='text-center m-4'>Register User</h2>
                    <div className="mb-3">
                        <label htmlFor="Name" className='form-label'>Name</label>
                        <input
                            type="text"
                            className='form-control shadow-none'
                            placeholder='Enter Name'
                            name='name'
                            value={user.name}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Username" className='form-label'>Username</label>
                        <input
                            type="text"
                            className='form-control shadow-none'
                            placeholder='Enter Username'
                            name='username'
                            value={user.username}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className='form-label'>Email</label>
                        <input
                            type="email"
                            className='form-control shadow-none'
                            placeholder='Enter Email'
                            name='email'
                            value={user.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3 d-flex justify-content-end">
                        <button type='submit' className='btn btn-outline-primary mx-1'>Submit</button>
                        <Link className='btn btn-outline-danger mx-1' to="/">Cancel</Link>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default EditUser;
