import { Stack, TextField, Typography, Box, Button } from '@mui/material'
import React, {useEffect, useState} from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import {  exerciseOptions, fetchData} from '../utils/fetchData';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
        const [search, setSearch] = useState('');
        const [bodyParts, setBodyParts] = useState([]);

        useEffect(() => {
            const fetchExercisesData = async () => {
                const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
           // console.log(bodyPartsData);
                setBodyParts(['all', ...bodyPartsData]);
            }

            fetchExercisesData();

        }, []) 

        const handleSearch = async() => {
            if(search){
            const exercisesData = await fetchData
            ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

           

            const searchedExercises = exercisesData.filter(
                (exercise) => 
                   exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('')
            setExercises(searchedExercises);

            //console.log(searchedExercises);
        }
            
        }


  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
        <Typography fontWeight={700} textAlign="center" 
        sx={{fontSize: {lg: '44px', xs: '30px'}}} mb="50px">
            Awesome Exercises You <br /> Should Know
        </Typography>

        <Box position="relative" mb="72px">
            <TextField 
            sx={{
                input: {
                fontWeight: "700", 
                border: "none", 
                borderRadius: "4px"},

                width: {
                    lg: '800px',
                    xs: '350px'
                },

                backgroundColor: "#fff",
                borderRadius: "40px"
            }}
            height= "76px" 
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises'
            type="text" />
 
            <Button className='search-btn'
            sx={{ 
                bgcolor: "#ff2625", 
                color: "#fff",
                textTransform: "none",
                width: {lg: '175px', xs: '80px'},
                fontSize:{lg: '20px', xs: '14px'},
                height: '56px',
                position: 'absolute',
                right: '0'


            }}
            onClick={handleSearch}
            >Search</Button>
        </Box>

        <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
            <HorizontalScrollbar 
            data={bodyParts} 
            setExercises={setExercises}
            bodyPart ={bodyPart}
            setBodyPart ={setBodyPart} />
        </Box>

    </Stack>
  )
}

export default SearchExercises