import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center min-h-screen p-4 mb-4 bg-gray-100 " >
        <h1 className="text-4xl font-bold text-blue-500 mb-6">Natujenge!</h1>
        <p className="text-lg text-gray-700 max-w-xl text-center">
            Ready to build your dream physique? Welcome to Natuenge. The ultimate fitness app where you can challenge yourself, 
            push beyond your limits with a wide range of exercises, routines, and much more!. 
            Whether you're a Gym Rat, a rookie or looking for some fun, 
            Natujenge is for you.
        </p>
        <Link to="/register">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Jiunge Nasi!</button>
        </Link>
        <Link to="/login">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">karibu Tena!</button>
        </Link>
        </div>
    </>
  )
}

export default HomePage