import React, { useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { AiOutlineSearch } from 'react-icons/ai';
import Card from './Card';

const baseURL = 'https://wger.de/api/v2/';
const yourAPIKey = '1497635e35a86e58878c2612bbc2c00c4656ea4f'

const Workout = () => {

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
    handleSearch(Workout);
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
    <div>
      <h2 className="text-5xl text-center text-indigo-700 decoration-red-500 pt-20 pb-20">My Workouts</h2>

      <div className="flex items-center border-gray-300 rounded w-full max-w-md mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search workout..."
            className="w-full text-center ml-10 border-slate-900 outline-none"
          />
          <button
            onClick={handleSearchClick}
            className="p-2 text-indigo-700"
            aria-label="search"
          >
            <AiOutlineSearch size={24} />
          </button>
        </div>
      <section>
      <div className="container mx-auto px-4">
      <Card
        title="Card Title"
        description="This is a card description. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        image="https://unsplash.com/photos/a-wave-in-the-ocean-gOHFF6v53qY"
        />
        </div>
      </section>
    </div>
    </>
  )
}

export default Workout