import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
        const [exercises, setExercises] = useState([]);
        const [bodyPart, setBodyPart] = useState('all');
  
        return (
    <Box>

      <HeroBanner />
      <SearchExercises 
      bodyPart ={bodyPart}
      setBodyPart ={setBodyPart}
      setExercises={setExercises}
      />

      <Exercises 
      exercises ={exercises}
      setExercises={setExercises}
      setBodyPart ={setBodyPart}
      />
      
    </Box>
  )
}

export default Home