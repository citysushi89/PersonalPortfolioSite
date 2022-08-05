import React, { useRef } from "react";
import emailjs from '@emailjs/browser'; 
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_n7tkf1u", "template_yu8og4o", e.target, "E5LGQUH5IRXGyLnx3")
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };
return (
    <div className=''>
      <Form onSubmit={handleOnSubmit}>
        
      <Form.Field
          id='form-input-control-last-name'
          control={Input}
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
          className="contact-form-item"
        />

        <Form.Field
          id='form-input-control-email'
          control={Input}
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
          className="contact-form-item"
        />

        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          name='user_message'
          placeholder='Message…'
          required
          className="contact-form-message"
        />
        <Button type='submit' className="contact-form-button">Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;