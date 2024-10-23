import React, { useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const WorkoutLog = () => {
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
    <div>
      <h2 className="text-5xl text-center text-indigo-700 pt-20 pb-20">My Workouts</h2>

      <section>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-200">
       {/* <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
              </p>
            </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
      </section>
    </div>
    </>
  )
}

export default WorkoutLog