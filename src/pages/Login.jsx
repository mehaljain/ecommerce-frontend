import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";


 

const Login = () => {
  const[ user , setUser ] = useState({
    email: "",
    password: "",
  });

   
  const handleInputs = (e) =>{
    let name ,value;
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name] : value});
  }
   
 
  const handleSubmit = async (e) => {
      e.preventDefault();

     const { email, password } = user;
     const response = await fetch("http://localhost:3000/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({  email, password}),

    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }else{
        response.redirect('/Products');
      }
      return response.json();
    })
    .then((responseData) => {
      setUser({
          email: "",
          password: "" 
        }); // Store the response data in state
    })
  };


  

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form method='POST' onSubmit={handleSubmit} >
              <div className="my-3">
                <label htmlFor="display-4">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  name='email'
                  value={user.email}
                  onChange={handleInputs}
                  placeholder="name@example.com"
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name='password'
                  value={user.password}
                  onChange={handleInputs}
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
             
                <button className="my-2 mx-auto btn btn-dark" type="submit"  >
                  Login
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login