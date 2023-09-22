import React, { useState } from 'react'
import './index.scss'
import emailjs from 'emailjs-com'
import { useForm, Controller } from 'react-hook-form'
import Modal from 'react-modal'

const SayHello = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const onSubmit = (data) => {
    console.log('Submitting form with data:', data)

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          console.log('Message successfully sent!')
          setModalMessage('Message successfully sent!')
          setModalIsOpen(true)
          reset()
        },
        (error) => {
          console.log('Failed to send the message:', error.text)
          setModalMessage(`Failed to send the message: ${error.text}`)
          setModalIsOpen(true)
          reset()
        }
      )
  }

  Modal.setAppElement('#root')

  return (
    <div className="say-hello-container">
      <h2>Say Hello</h2>
      <div className="divider"></div>

      <div className="content-section">
        <div className="left-text">
          <p>
            Looking to start a new project or just want to say hi? Send me an
            email and I’ll do my best to reply within 24 hrs!
          </p>
          <p>
            If contact forms aren’t your thing... send me an email at
            cameronaitcheson@gmail.com
          </p>
        </div>

        <div className="right-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group dual-inputs">
              <div className="input-group">
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: 'First name is required' }}
                  render={({ field }) => (
                    <>
                      <p className="input-title">Name:</p>
                      <input placeholder="First Name" {...field} />
                    </>
                  )}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}
              </div>

              <div className="input-group last-name-input">
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: 'Last name is required' }}
                  render={({ field }) => (
                    <input placeholder="Last Name" {...field} />
                  )}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="input-group subject-email-group">
              <div className="input-group">
                <Controller
                  name="subject"
                  control={control}
                  rules={{ required: 'Subject is required' }}
                  render={({ field }) => (
                    <>
                      <p className="input-title">Subject:</p>
                      <input placeholder="Subject" {...field} />
                    </>
                  )}
                />
                {errors.subject && <p>{errors.subject.message}</p>}
              </div>

              <div className="input-group">
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <p className="input-title">Email:</p>
                      <input placeholder="Email" {...field} />
                    </>
                  )}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            </div>

            <div className="input-group">
              <Controller
                name="message"
                control={control}
                rules={{ required: 'Message is required' }}
                render={({ field }) => (
                  <>
                    <p className="input-title">Message:</p>
                    <textarea placeholder="Message" {...field}></textarea>
                  </>
                )}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>

            <div className="submit-button">
              <input type="submit" value="SEND" />
            </div>
          </form>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="ReactModal__Content" // Set the modal content's class name
        overlayClassName="ReactModal__Overlay" // Set the modal overlay's class name
      >
        <h2>Notification</h2>
        <p>{modalMessage}</p>
        <button
          onClick={() => setModalIsOpen(false)}
          style={{ margin: '20px 0', padding: '10px 20px' }}
        >
          Close
        </button>
      </Modal>
    </div>
  )
}

export default SayHello
