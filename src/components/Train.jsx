import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import bazenga from '../assets/images/bazenga.svg'

const baseURL = 'https://wger.de/api/v2/';
const yourAPIKey = '1497635e35a86e58878c2612bbc2c00c4656ea4f'

const Train = () => {

  const headers = {
    Authorization: `Token ${yourAPIKey}`
  };

  axios.get(`${baseURL}workout/`, { headers })
  .then(response => {
    // Handle the response data
    const workouts = response.data;
    console.log(workouts);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });

  return (
    <>
    <Navbar />
    <section>
      <div className='flex items-center'>
        <h2 className="text-5xl text-center text-indigo-700 pt-20 pb-20" >Jenga Muscle</h2>
          <img className='h-9 w-8 ml-2' src={bazenga} alt="" />
      </div>
    </section>
    </>
  )
}

export default Train