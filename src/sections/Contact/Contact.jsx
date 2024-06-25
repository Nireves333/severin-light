import React, { useRef, useState } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser';
import Modal from './Modal';

function Contact() {
  const form = useRef();
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5wwy6ce',
        'template_v1skfmb',
        form.current,
        'rVyhHI9b2iBKBrvYj'
      )
      .then(
        (result) => {
          setModalMessage('Message sent successfully!');
          setShowModal(true);
        },
        (error) => {
          setModalMessage('Failed to send message. Please try again later.');
          setShowModal(true);
        }
      );

    form.current.reset();
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      id="contact"
      className={styles.container}
    >
      <h1 className="sectionTitle">Contact</h1>
      <hr />
      <form
        ref={form}
        onSubmit={sendEmail}
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <label
            htmlFor="name"
            className={styles.label}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="email"
            className={styles.label}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="message"
            className={styles.label}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={styles.button}
        >
          Send Message
        </button>
      </form>
      <Modal
        show={showModal}
        onClose={closeModal}
        message={modalMessage}
      />
    </section>
  );
}

export default Contact;
