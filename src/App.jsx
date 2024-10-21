import React from 'react';
import { BrowserRouter  as Router, Route, Routes, Link} from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Member from './components/Member';
import WorkoutLog from './components/WorkoutLog';
import ProgressChart from './components/ProgressChart';
import Train from './components/Train';

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/start" element={<Member />} />
            <Route path="/workouts" element={<WorkoutLog />} />
            <Route path="/track-fitness" element={<ProgressChart />} />
            <Route path="/exercise" element={<Train />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
