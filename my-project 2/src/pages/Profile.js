import React from 'react'
import Navbar from '../components/Navbar'
import Inprofile from '../components/Inprofile'

const Profile = () => {
    return (
       <div className="w-screen profile-image h-image-profile pt-32">
            <Navbar />
            <Inprofile />
        </div>
    )
}

export default Profile
