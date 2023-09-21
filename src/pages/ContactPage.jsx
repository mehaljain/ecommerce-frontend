import React, { useState } from 'react';
import { Footer, Navbar } from "../components";



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
fetch('http://localhost:3000/contacts/api/contact', {
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
