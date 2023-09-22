import { React } from 'react'
import './index.scss'
import profilePic from '../../assets/images/LinkedIn Profile Pic.jpeg'

const ProfileSection = () => (
  <div className="container home-page">
    <div className="text-zone">
      <h1>
        I’m Cam St Clair, a Frontend Developer & UX/UI Designer based in London.
        <br />
        <span className="underline-text">Available</span> for freelance &
        collaborations.
      </h1>
      <br />
    </div>
    <img src={profilePic} alt="Profile" className="profile-pic" />
  </div>
)

export default ProfileSection
