import React, { useEffect } from 'react'
import './Nav.css'
import SideBarButton from './SideBarButton'
import {BsFillHeartFill} from "react-icons/bs"
import {FcSearch} from "react-icons/fc"
import {MdPlaylistAddCheck} from "react-icons/md"
import {FiLogOut} from "react-icons/fi"
import {AiFillHome} from "react-icons/ai"

const Nav = () => {





  return (
    <div className='SideBar_container'>
      
    
    <div>
    <SideBarButton  title="Home" to="/" icon={<AiFillHome/>}   />
    <SideBarButton  title="Search" to="/Search" icon={<FcSearch/>}   />
    <SideBarButton title="Fav" to="/Fav" icon={<BsFillHeartFill/>} />
    <SideBarButton title="Playlist" to="/Playlist" icon={<MdPlaylistAddCheck/>}/ >
    <SideBarButton/>
    </div>

   

    </div>
  )
}

export default Nav
