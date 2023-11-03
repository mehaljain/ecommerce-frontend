import React, { useState } from 'react';
import { Footer, Navbar } from "../components";

import Pages from "./Pages.css"


const ContactPage = () => {

  const[ contact , setContact ] = useState({
    name: "",
    email: "",
    message: ""
  });

   
  const handleInputs = (e) =>{
    let name ,value;
    name = e.target.name;
    value = e.target.value;
    setContact({ ...contact, [name] : value});
  }

  const handleSubmit = (e) => {
      e.preventDefault();

     const { name, email, message } = contact;
fetch('https://ecommerce-backend-u3vc.onrender.com/contacts/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Set the appropriate content type
    // Add any other headers if needed
  },
  body: JSON.stringify({ name, email, message}), // Convert request data to JSON string
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }else{
      alert("Thanks for your response........")
    }
    return response.json();
  })
  .then((responseData) => {
    setContact({
        name: "",
        email: "",
        message: ""
      }); // Store the response data in state
  })
};

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form  method='POST' onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  name='name'
                  value={contact.name}
                  onChange={handleInputs}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name='email'
                  value={contact.email}
                  onChange={handleInputs}
                  placeholder="name@example.com"
                  id="Email"
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Password"
                  placeholder="Enter your message"
                  name='message'
                  value={contact.message}
                  onChange={handleInputs}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>

                <hr/>
                <br/>
                
                <br/>
                <div className="contact">
                <a href="https://web.whatsapp.com/" className="handle">
<img src="https://img.freepik.com/free-psd/3d-icon-social-
media-app_23-2150049563.jpg?w=740&t=st=1694378106~exp=1694378706~hmac=1f7550424a0ab97e63c7a9b46dd9cbee2c39ea2317f2234614ff334975b1cd6d" height="50" />

</a>
<a href="https://www.instagram.com/_komal__9773/?next=%2F" className="handle">
<img src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-1367
28.jpg?w=740&t=st=1694378291~exp=1694378891~hmac=5ab6f57f7e7c0297fae8b545e986a15bcb6c8b0d228a86f0b3dcb07b29105a00" height="50" />

</a>
<a href="https://www.facebook.com/profile.php?id=100037150653017" className="handle">
<img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049579.jpg?w=740&t=st=16
94378254~exp=1694378854~hmac=b2e091dba843a22c294726420134dacceef6d7b7a77d80a49111724bb25f3111" height="50" />

</a>'
               </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
