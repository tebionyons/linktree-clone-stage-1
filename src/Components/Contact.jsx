import {useState} from "react"
import "../Contact.css";
import Footer from "./Footer";
import React from "react";




export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    message: "",
    providingData: true
  });

  function handleChange(event){
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setFormData({ firstName: "",
    secondName: "",
    email: "",
    message: "",})
    
  }

  return (
    <div className="contact__form">
    <form  id="contact-form" onSubmit={handleSubmit}>
        <div className="contact-description">
      <h3 className="contact__" >Contact Me</h3>
      <p className="contact-me">Hi there, contact me to ask about anything you have in mind.</p>
      </div>
      <div className="first-and-second-name">
      <label htmlFor="firstName" className="firstname">
        First name
        <input
          type="text"
          placeholder="Enter your first name"
          name="firstName"
          id="first_name"
          onChange={handleChange}
          value={formData.firstName}
        />
      </label>
      <div>
      <label htmlFor="secondName" className="secondname">
        Second name
        <input
          type="text"
          placeholder="Enter your second name"
          name="secondName"
          id="second_name"
          onChange={handleChange}
          value={formData.secondName}
        />
      </label>
      </div>
      </div>
      <label htmlFor="email" className="email">
        Email
        <input type="email" onChange={handleChange} placeholder="yourname@email.com" name="email" id="email" value={formData.email} />
      </label>
      <label htmlFor="message" className="message">
        Message
        <textarea
          placeholder="Send me a message and l will reply you as soon as possible"
          value={formData.message}
          name="message"
          id="message"
          onChange={handleChange}
          
        />
        <div className="check_box">
        <input type="checkbox" 
        name="providingData"
        onChange={handleChange}
        value={formData.providingData}/>
        <p>You agree to providing your data to name who may contact you.</p>
        </div>
      </label>
      <button id="btn__submit">Send message</button>
      
    </form>
    
    <Footer/>
</div>
  );
}
