import React from "react";
import emailjs from '@emailjs/browser'; 
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
// import * as emailjs from "emailjs-com";

function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_n7tkf1u", "template_yu8og4o", e.target, "E5LGQUH5IRXGyLnx3", 'email-form')
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

    <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 contact-form">
                <h2>Give me a Shout!</h2>
                <p>Send me an email with the form below.</p>
                <form onSubmit={handleOnSubmit} id="email-form">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="from_name"
                                required
                                placeholder="Name"
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                            <input
                                type="email"
                                className="form-control"
                                name="from_email"
                                required
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <textarea
                                className="form-control"
                                type="text"
                                name="message"
                                maxLength="6000"
                                rows="7"
                                required
                                placeholder="Message"
                            ></textarea>
                        </div>
                    </div>
                    <div className="row contact-button-row">
                        <div className="col-md-12 form-group button-column">
                            <button type="submit" className="button-color contact-form-button">
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>




    </div>

  );
};

export default Contact;