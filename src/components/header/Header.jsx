import React from 'react';
import './Header.scss';
import { Box, Link, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import recipe from "../../assets/recipe.png";
import disney from "../../assets/disney.png";
import weather from "../../assets/weather.png";
import todo from "../../assets/todo.png";
import me from "../../assets/me3.jpg";



const Header = () => {
  return (
    <div>
      <Box sx={{display:"flex",flexWrap:"wrap",paddingTop:"7rem",paddingBottom:"4rem"}}className='animation'>
        <Box sx={{position:"relative",margin:"auto",padding:"2rem 1rem"}} className="imgBox">
          <img src={me} alt="profil" width={"auto"} height={"400remuto"}/>
        </Box>
      
      <Box sx={{position:"relative",margin:"auto"}}>
        <Typography  sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",paddingTop:"2rem",textAlign:"center",color:"#DDFFBB"}}>WHO AM I?</Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>WHO AM I?</Typography>
        <Typography component="p" sx={{fontFamily:"Julius Sans One",textAlign:"center",fontWeight:"500",fontSize:"1.2rem",paddingBottom:"4rem",color:"#F6F1E9"}}>Hello! I am Hilal. I am a 2nd year Computer Engineering student. I'm improve myself on the Front-end.</Typography>
      </Box> 
      <Box>
       </Box> 
      </Box>
      <Box className="card" sx={{paddingTop:"4rem",paddingBottom:"4rem"}}>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",textAlign:"center",color:"#DDFFBB"}}>
          PROJECTS
        </Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>PROJECTS</Typography>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"2rem"}} >
              <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#34343482"}}>
              <CardActionArea sx={{padding:"1rem"}}>
                <CardMedia
                  component="img"
                  height="170"
                  image={recipe}
                  alt="recipeProject"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Julius Sans One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#DDFFBB"}}>
                    Recipe App
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90"}} className='liveButton'>
                <Link href='https://hilaldedek.github.io/React-RecipeApp/' target='__blank' underline='none' sx={{color:"#393053"}}>Live</Link>
                </Button>
              </CardActions>
            </Card>

            <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#34343482" }}>
              <CardActionArea sx={{padding:"1rem"}}>
                <CardMedia
                  component="img"
                  height="170"
                  image={weather}
                  alt="recipeProject"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Julius Sans One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#DDFFBB"}}>
                    Weather App
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button  sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90"}}className='liveButton'>
                <Link href='https://hilaldedek.github.io/Javascript-WeatherApp/' target='__blank' underline='none' sx={{color:"#393053"}} >Live</Link>
                </Button>
              </CardActions>
            </Card>
            
            <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#34343482" }}>
              <CardActionArea sx={{padding:"1rem"}}>
                <CardMedia
                  component="img"
                  height="170"
                  image={todo}
                  alt="recipeProject"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Julius Sans One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#DDFFBB"}}>
                    To Do App
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90"}}className='liveButton'>
                <Link href='https://hilaldedek.github.io/Javascript-ToDoApp/' target='__blank' underline='none' sx={{color:"#393053"}} >Live</Link>
                </Button>
              </CardActions>
            </Card>
            
            <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#34343482" }}>
              <CardActionArea sx={{padding:"1rem"}}>
                <CardMedia
                  component="img"
                  height="170"
                  image={disney}
                  alt="recipeProject"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Julius Sans One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#DDFFBB"}}>
                    Disney
                  </Typography>
                  
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90"}}className='liveButton'>
                <Link href='https://react-disney.netlify.app/' target='__blank' underline='none' sx={{color:"white"}}>Live</Link>
                </Button>
              </CardActions>
            </Card>
            
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
          <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",}} className='moreButton'>
                    <Link href='https://github.com/hilaldedek?tab=repositories' target='__blank' underline='none' sx={{color:"#F6F1E9"}}>More Project</Link>
          </Button>
        </Box>
        
      </Box>
      
    </div>
  )
}

export default Header