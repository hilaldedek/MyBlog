import React from 'react';
import './Header.scss';
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import recipe from "../../assets/recipe.png";
import disney from "../../assets/disney.png";
import weather from "../../assets/weather.png";
import todo from "../../assets/todo.png";


const Header = () => {
  return (
    <div>
      
      <Box className='animation'>
        <Typography  sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",paddingTop:"4rem",textAlign:"center",color:"#393053"}}>WHO AM I?</Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#3930538c"}}>WHO AM I?</Typography>
        <Typography component="p" sx={{fontFamily:"Julius Sans One",textAlign:"center",fontWeight:"500",fontSize:"1.3rem",paddingBottom:"4rem"}}>Hello! I am Hilal. I am a 2nd year Computer Engineering student. I'm trying to improve myself on the Front-end.</Typography>
      </Box> 
      <Box>
        
        
      </Box>
      <Box className="card">
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",paddingTop:"4rem",textAlign:"center",color:"#393053"}}>
          PROJECTS
        </Typography>
<Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#3930538c"}}>PROJECTS</Typography>
<Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"2rem"}} >
      <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#f4f0ff"}}>
      <CardActionArea sx={{padding:"1rem"}}>
        <CardMedia
          component="img"
          height="170"
          image={recipe}
          alt="recipeProject"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Yeseva One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#393053"}}>
            Recipe App
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053"}}>
        Live
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#f4f0ff" }}>
      <CardActionArea sx={{padding:"1rem"}}>
        <CardMedia
          component="img"
          height="170"
          image={weather}
          alt="recipeProject"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Yeseva One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#393053"}}>
            Weather App
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053"}}>
        Live
        </Button>
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#f4f0ff" }}>
      <CardActionArea sx={{padding:"1rem"}}>
        <CardMedia
          component="img"
          height="170"
          image={todo}
          alt="recipeProject"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Yeseva One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#393053"}}>
            To Do App
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053"}}>
        Live
        </Button>
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#f4f0ff" }}>
      <CardActionArea sx={{padding:"1rem"}}>
        <CardMedia
          component="img"
          height="170"
          image={disney}
          alt="recipeProject"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Yeseva One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#393053"}}>
            Disney
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053"}}>
          Live
        </Button>
      </CardActions>
    </Card>
      </Box>
      </Box>
      
    </div>
  )
}

export default Header