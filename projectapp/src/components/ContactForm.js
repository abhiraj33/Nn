// ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/contact', formData);
      alert('Message sent successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Error sending message');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={handleChange} placeholder="Your Name" required />
      <input type="email" name="email" value={email} onChange={handleChange} placeholder="Your Email" required />
      <textarea name="message" value={message} onChange={handleChange} placeholder="Your Message" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
