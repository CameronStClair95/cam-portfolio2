import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

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
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
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
<MapContainer center={[51.42686, -0.02817]} style={{ width: '100%', height: '100vh' }} zoom={13}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  <Marker position={[51.42686, -0.02817]}>
    <Popup>Cameron lives near here, come over for a cup of coffee</Popup>
  </Marker>
</MapContainer>

        </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact

// Sort out email sending and add a modal that resets the form not the modal instead of an alert as it resets the page
// Sort out the map as it looks awful
