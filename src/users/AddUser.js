import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

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

    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/user/save-user",user)
        navigate("/")
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
                        <button className='btn btn-outline-primary mx-1'>Submit</button>
                        <button className='btn btn-outline-danger mx-1'>Cancel</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser;
