import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import bazenga from '../assets/images/bazenga.svg'

const baseURL = 'https://wger.de/api/v2/';
const yourAPIKey = '1497635e35a86e58878c2612bbc2c00c4656ea4f'

const Train = () => {

  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('`${baseURL}exercise-base/', {
          params: {
            language: 'en',
            format: 'json',
            limit: 10, // Adjust the limit as needed
            // Add other parameters as required, like category, muscle_group, etc.
          },
          headers: {
            Authorization: `Token ${yourAPIKey}`
          }
        });
        setWorkouts(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWorkouts();

  })

  return (
    <>
    <Navbar />
    <section>
      <div className='flex items-center'>
        <h2 className="text-5xl text-center text-indigo-700 pt-20 pb-20" >Jenga Muscle</h2>
          <img className='h-9 w-8 ml-2' src={bazenga} alt="" />

          <p> Find the best workout for your goal, experience, desired training style and equipment access. </p>
      </div>
      <div className='flex items-center'>
      <div>
    {isLoading ? (
      <p>Loading workouts...</p>
    ) : error ? (
      <p>Error: {error.message}</p>
    ) : (
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <h2>{workout.name}</h2>
            <p>{workout.description}</p>
            {/* Add more details as needed, e.g., muscles, equipment, etc. */}
          </li>
        ))}
      </ul>
    )}
  </div>
      </div>
    </section>
    </>
  )
}

export default Train