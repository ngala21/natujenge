import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import bazenga from '../assets/images/bazenga.svg'

const baseURL = 'https://wger.de/api/v2/';
const yourAPIKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI5NzA3NjQ0LCJpYXQiOjE3Mjk3MDcwNDQsImp0aSI6ImQ2Y2MyZmRlOWU3OTQ1ZmI5MThhYzIxYjUwMmQxNWUyIiwidXNlcl9pZCI6MjA3OTQ4fQ.6Sn4ZQq1yI0Jza0D_rYWWpUzy3TsFP_RAalNIBT74BE'

const Train = () => {

  const headers = {
    Authorization: `Token ${yourAPIKey}`
  };

  axios.get(`${baseURL}workouts/`, { headers })
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