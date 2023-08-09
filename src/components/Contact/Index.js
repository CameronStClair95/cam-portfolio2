import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Modal from 'react-modal';
import { useForm, Controller } from 'react-hook-form';

Modal.setAppElement('#root');

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [modalContent, setModalContent] = useState(null);

  console.log("Contact component initialized"); // Initial log

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    console.log("useEffect triggered for letterClass setup"); // Log when useEffect runs

    const timeoutId = setTimeout(() => {
      console.log("Setting letterClass to 'text-animate-hover'"); // Log before state change
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      console.log("Cleaning up timeoutId"); // Log for cleanup
      clearTimeout(timeoutId);
    }
  }, []);

  const onSubmit = (data) => {
    console.log("Submitting form with data:", data); // Log form submission data

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        data,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          console.log("Message successfully sent!"); // Log success
          setModalContent('Message successfully sent!');
          reset();
        },
        (error) => {
          console.log("Failed to send the message:", error.text); // Log error
          setModalContent(`Failed to send the message: ${error.text}`);
          reset();
        }
      );
  };

  console.log("Rendering Contact component with letterClass:", letterClass); // Log during render


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As an individual fueled by curiosity and a deep passion for
            technology, art, and human connections, I'm on the lookout for
            full-time opportunities where I can leverage and expand my skills.
            My interest extends to collaborations and projects that challenge me
            and foster mutual growth. If you'd like to discuss opportunities or
            have any inquiries, don't hesitate to contact me using the form
            below.
          </p>
          <div className="contact-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <ul>
                <li className="half">
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => (
                      <input
                        style={{
                          width: '100%',
                          border: 0,
                          background: '#D8C3A5',
                          height: '50px',
                          fontSize: '16px',
                          color: '#e85a4f',
                          padding: '0 20px',
                          boxSizing: 'border-box',
                        }}
                        placeholder="Name"
                        {...field}
                      />
                    )}
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                </li>
                <li className="half">
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
                      <input
                        style={{
                          width: '100%',
                          border: 0,
                          background: '#D8C3A5',
                          height: '50px',
                          fontSize: '16px',
                          color: '#e85a4f',
                          padding: '0 20px',
                          boxSizing: 'border-box',
                        }}
                        placeholder="Email"
                        {...field}
                      />
                    )}
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </li>
                <li>
                  <Controller
                    name="subject"
                    control={control}
                    rules={{ required: 'Subject is required' }}
                    render={({ field }) => (
                      <input
                        style={{
                          width: '100%',
                          border: 0,
                          background: '#D8C3A5',
                          height: '50px',
                          fontSize: '16px',
                          color: '#e85a4f',
                          padding: '0 20px',
                          boxSizing: 'border-box',
                        }}
                        placeholder="Subject"
                        {...field}
                      />
                    )}
                  />
                  {errors.subject && <p>{errors.subject.message}</p>}
                </li>
                <li>
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: 'Message is required' }}
                    render={({ field }) => (
                      <textarea
                        style={{
                          width: '100%',
                          border: 0,
                          background: '#D8C3A5',
                          height: '50px',
                          fontSize: '16px',
                          color: '#e85a4f',
                          padding: '20px',
                          boxSizing: 'border-box',
                          minHeight: '150px',
                        }}
                        placeholder="Message"
                        {...field}
                      />
                    )}
                  />
                  {errors.message && <p>{errors.message.message}</p>}
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            <Modal
  className='notification-modal'
  isOpen={!!modalContent} // Convert modalContent to a boolean to determine if the modal should be open
  onRequestClose={() => setModalContent(null)} // Set modalContent to null to close the modal
  contentLabel="Notification Modal"
  style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      zIndex: 10000  
    },
    content: {
      position: 'relative',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      background: '#D8C3A5',
      padding: '20px',
      borderRadius: '4px',
      boxShadow: '0 0 10px #EAE7DC',
      zIndex: 10001
    }
  }}
>
  <h2>{modalContent}</h2>
</Modal>


          </div>
        </div>
      </div>
      <div className="info-map">
        Cameron Aitcheson-Labarr
        <br />
        London
        <br />
        Beckenham Place Park Beckenham Hill Road Beckenham London BR3 1SY
        <br />
        Beckenham
        <br />
        <span>cameronaitcheson@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer
          center={[51.42686, -0.02817]}
          style={{ width: '100%', height: '100vh' }}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.42686, -0.02817]}>
            <Popup>
              Cameron lives near here, come over for a cup of coffee
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
