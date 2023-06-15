import React from 'react'
import './index.scss'
import ProfilePic from '../../assets/images/LinkedIn Profile Pic (Cam).jpeg'

const Photo = () => {
    return (
        <div className='photo-container'>
            <img src={ProfilePic} alt='Cameron' className='profile-pic' />
        </div>
    )
}

export default Photo
