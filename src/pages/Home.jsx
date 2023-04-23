import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';

export default function Home() {
  return (
    <div className='home'>
      <div className="home__header">
        <div className="home__header--left">
            <Link to='/about'>About</Link>
            <Link to='/store'>Store</Link>
        </div>
        <div className="home__header--right">
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images' >Images</Link>
            <AppsIcon/>
            <Avatar/>
            
            
        </div>
      </div>
      <div className="home__body"></div>
    </div>
  )
}
