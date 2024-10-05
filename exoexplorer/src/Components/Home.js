import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {

  return (
    <div className='home-container'>
        <Link to='/game'>
          <button className='home-start-button'>Start</button>
        </Link>
    </div>
  )
}

export default Home