import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/authcontext'
import { Avatar } from '@mui/material'
import Logo from "../images/logo.png";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">WhatsApp</span>
      <img src={Logo} className="iconlogo" />
      <div className="user">
        <Avatar src={currentUser.photoURL} />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>log out</button>
      </div>
    </div>
  )

}

export default Navbar