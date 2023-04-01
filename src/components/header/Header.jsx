import React from 'react';
import './Header.scss';
import { Box, Typography } from '@mui/material';


const Header = () => {
  return (
    <div>
      <Box className='animation'>
        <Typography  sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",paddingTop:"4rem",textAlign:"center"}}>WHO AM I?</Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center"}}>WHO AM I?</Typography>
        <Typography component="p" sx={{fontFamily:"Julius Sans One",textAlign:"center",fontWeight:"500",fontSize:"1.3rem",paddingBottom:"4rem"}}>Hello! I am Hilal. I am a 2nd year Computer Engineering student. I'm trying to improve myself on the Front-end.</Typography>
      </Box>  
    </div>
  )
}

export default Header