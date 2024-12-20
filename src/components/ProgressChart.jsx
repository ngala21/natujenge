import React, { useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const baseURL = 'https://wger.de/api/v2/';
const yourAPIKey = '1497635e35a86e58878c2612bbc2c00c4656ea4f'

const ProgressChart = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearchClick = async () => {
    await fetchWorkouts();
    handleSearch(workouts);
  };

  const handleSearch = () => {
    const filtered = workouts.filter((workout) =>
      workout.workout.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredWorkouts(filtered);
    if (filtered.length === 0) {
      setErrorMessage('No workouts match your search query.');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <>
    <Navbar />
    <div className='text-center'>
      <h2 className="text-5xl text-center text-indigo-700 underline decoration-red-800 underline-offset-8 pt-20 pb-20">My Progress</h2>
    </div>
    </>
  )
}

export default ProgressChart