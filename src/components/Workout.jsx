import React, { useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { AiOutlineSearch } from 'react-icons/ai';

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
    await fetchQuestions();
    handleSearch(questions);
  };

  const handleSearch = () => {
    const filtered = questions.filter((question) =>
      question.question.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredQuestions(filtered);
    if (filtered.length === 0) {
      setErrorMessage('No questions match your search query.');
    } else {
      setErrorMessage('');
    }
  };
  
  return (
    <>
    <Navbar />
    <div>
      <h2 className="text-5xl text-center text-indigo-700 pt-20 pb-20">My Workouts</h2>

      <div className="flex items-center border border-gray-300 rounded w-full max-w-md mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search workout..."
            className="w-full p-2 outline-none"
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
      {/* <ul>
      {data.map((item, index) => (
        <li key={item.id}> */}
          {/* Render the list item content using item properties */}
          {/* {item.name}
        </li> */}
      {/* ))} */}
    {/* </ul> */}
      </section>
    </div>
    </>
  )
}

export default Workout