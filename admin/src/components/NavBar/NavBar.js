import React from 'react'
import {assets} from '../../assests/assets'
const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <img src={assets.profile_image} alt='' className='profile' />
    </div>
  )
}

export default NavBar