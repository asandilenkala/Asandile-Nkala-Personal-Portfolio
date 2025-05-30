import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_u8k7imo',     // from EmailJS
      'template_i2tk9ne',    // from EmailJS
      formData,
      'pBvRnGbDfYKOUmf1H'         // public key
    )
    .then((result) => {
      console.log(result.text);
      alert('Thank you for your message!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.error(error.text);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <div className="container mt-5 contact-container">
      <h2 className="text-center mb-4">Contacts</h2>
      <h4 className="text-center">
        If you require any further information, please feel free to reach out to me.
      </h4>

      <form onSubmit={handleSubmit} className="mt-5 contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mt-3">
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
