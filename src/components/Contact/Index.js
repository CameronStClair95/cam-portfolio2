import Loader from 'react-loaders'
import Modal from 'react-modal'

import Testimonials from '../Testimonials/index'
import SayHello from '../SayHello/index'
import Footer from '../Footer/index'

Modal.setAppElement('#root')

const Contact = () => {
  return (
    <>
      <Loader type="pacman" />
      <Testimonials />
      <SayHello />
      <Footer />
    </>
  )
}

export default Contact
