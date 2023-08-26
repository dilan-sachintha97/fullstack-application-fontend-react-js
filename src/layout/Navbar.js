import React from 'react'

const Navbar = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Full Stack Application</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                </button>
                
                <button className='btn btn-outline-light'>Add User</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
