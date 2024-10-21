import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const ProgressChart = () => {
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