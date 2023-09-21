// eslint-disable-next-line
import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';



const Register = () => {

//   const history = useHistory();
      const[ user , setUser ] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmpassword: ""
      });

       
      const handleInputs = (e) =>{
        let name ,value;
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name] : value});
      }

      const handleSubmit = (e) => {
          e.preventDefault();

         if(user.password === user.confirmpassword){
            const { fullname, email, password, confirmpassword} = user;
    fetch('http://localhost:3000/users/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the appropriate content type
        // Add any other headers if needed
      },
      body: JSON.stringify({ fullname, email, password, confirmpassword})
    })
         }
         else{
            alert('enter same password')
         }
         

    };

         



    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="form my-3">
                                <label htmlFor="Name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='fullname'
                                    id="Username"
                                    value={user.fullname}
                                    onChange={handleInputs}
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name='email'
                                    id="Email"
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name='password'
                                    id="Password"
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="Password">ConfirmPassword</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name='confirmpassword'
                                    id="confirmpassword"
                                    value={user.confirmpassword}
                                    onChange={handleInputs}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

    };

export default Register