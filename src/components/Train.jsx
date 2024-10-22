import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import bazenga from '../assets/images/bazenga.svg'

const url = 'https://wger.de/api/v2/workoutss'

const Train = () => {

  const fetchExercises = async () => {
    try {
      const resp = await axios.get(url, {
        headers: {
          Accept: 'application/json'
        },
      });
      console.log(resp.data)
    } catch (err) {
      setError('Failed to fetch workout. Please try again');
    }  
  }
  return (
    <>
    <Navbar />
    <section className='text-center'>
      <div className='flex  items-center'>
        <h2 className="text-5xl text-center text-indigo-700 pt-20 pb-20" >
          Jenga Muscle
            <img className='h-6 w-6 ml-2' src={bazenga} alt="" />
          
          </h2>
      </div>
    </section>
    </>
  )
}

export default Train