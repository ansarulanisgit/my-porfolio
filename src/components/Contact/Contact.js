import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fy1uxxa', 'template_g86mjf9', form.current, 'JeEUz4MSjbBLxb_2U')
      .then((result) => {
          toast.success("Message sent successfully.");
          e.target.reset();
      }, (error) => {
          toast.error("Error occurred. Please try again.");
      });
  };

    return (
        <section id='contact'>
            <h4>Interested to work with me?</h4>
            <h2>Contact Me</h2>
            <div className="divider"></div>
            <div className="container contact">
                <div className="options">
                    <article className="option">
                        <div className="icon">
                            <MdOutlineMarkEmailUnread/>
                        </div>
                        <h4>Email</h4>
                        <small>ansarul.contact@gmail.com</small>
                        <a target='_blank' href="mailto:ansarul.contact@gmail.com">Send a message</a>
                    </article>
                    <article className="option">
                        <div className="icon">
                            <RiMessengerLine/>
                        </div>
                        <h4>Messenger</h4>
                        <small>Ansarul Anis</small>
                        <a target='_blank' href="https://m.me/ansarulanis">Chat on Messenger</a>
                    </article>
                    <article className="option">
                        <div className="icon">
                            <FaWhatsapp/>
                        </div>
                        <h4>Whatsapp</h4>
                        <small>+880 1709260934</small>
                        <a target='_blank' href="https://wa.me/8801709260934">Chat on Whatsapp</a>
                    </article>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your full name' required />
                        <input type="email" name='email' placeholder='Your email' required />
                        <textarea name="message"  rows="10" placeholder='Your message' required></textarea>
                        <input type="submit" value="Send Message" className='btn btn-primary'/>
                    </form>
                    <ToastContainer/>
                </div>
            </div>
        </section>
    );
};

export default Contact;