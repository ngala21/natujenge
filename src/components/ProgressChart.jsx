import React, { useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const baseURL = 'https://wger.de/api/v2/';
const yourAPIKey = '1497635e35a86e58878c2612bbc2c00c4656ea4f'

const ProgressChart = () => {
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
    <div>
    <h2 className="text-5xl text-center text-indigo-700 pt-20 pb-20">My Progress</h2>
    </div>
    </>
  )
}

export default ProgressChart