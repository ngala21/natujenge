import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Member = () => {
  return (
    <>
        <Navbar />

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='pt-10 text-5xl'>
            <Link to="/workouts">Workouts</Link>
            <br />
            <Link to="/track-fitness">Progress</Link>
            <br />
            <Link to="/exercise">Exercises</Link>
          </div>

        </div>
    </>
  )
}

export default Member