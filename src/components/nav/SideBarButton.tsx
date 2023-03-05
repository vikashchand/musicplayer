import React from 'react'
import {Link, useLocation} from "react-router-dom";
import './SideBarButton.css'

export default function SideBarButton(props:any) {

    const location=useLocation();
    const isActive =location.pathname === props.to;
    const btnClass= isActive ? "btn-body active":"btn-body";
  return (
    <Link to={props.to}>
    <div className={btnClass}>
    {props.icon}
    <p className='btn-title'>{props.title}</p>
    </div>
    </Link>
  )
}
