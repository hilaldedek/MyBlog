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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';


const Header = () => {
  const year=new Date().getFullYear();
  return (
    
    <div>

      {/* WHO AM I? SECTION */}

      <Box sx={{display:"flex",flexWrap:"wrap",paddingTop:"7rem",paddingBottom:"4rem"}}className='card'>
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

      {/* PROJECTS SECTION */}

      <Box className="card" sx={{paddingTop:"4rem",paddingBottom:"4rem"}}>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",textAlign:"center",color:"#DDFFBB"}}>
          PROJECTS
        </Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>PROJECTS</Typography>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"2rem"}} >
          
          <Box className="cardGif" sx={{padding:"1rem",margin:"1.5rem 1rem"}}>
            <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#000000b3"}}>
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
                <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90",marginBottom:"1.5rem"}} >
                <Link href='https://hilaldedek.github.io/React-RecipeApp/' target='__blank' underline='none' sx={{color:"white"}}>Live</Link>
                </Button>
              </CardActions>
            </Card>
          </Box>
              
          <Box className="cardGif" sx={{padding:"1rem",margin:"1.5rem 1rem"}}>
            <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#000000b3" }}>
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
                <Button  sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90" ,marginBottom:"1.5rem"}}>
                <Link href='https://hilaldedek.github.io/Javascript-WeatherApp/' target='__blank' underline='none' sx={{color:"white"}} >Live</Link>
                </Button>
              </CardActions>
            </Card>
          </Box>
            
            <Box className="cardGif" sx={{padding:"1rem",margin:"1.5rem 1rem"}}>
              <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#000000b3" }}>
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
                <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90",marginBottom:"1.5rem"}}>
                <Link href='https://hilaldedek.github.io/Javascript-ToDoApp/' target='__blank' underline='none' sx={{color:"white"}} >Live</Link>
                </Button>
              </CardActions>
            </Card>
            </Box>
            
            <Box className="cardGif" sx={{padding:"1rem",margin:"1.5rem 1rem"}}>
<Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#000000b3" }}>
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
                <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90",marginBottom:"1.5rem"}}>
                <Link href='https://react-disney.netlify.app/' target='__blank' underline='none' sx={{color:"white"}}>Live</Link>
                </Button>
              </CardActions>
            </Card>
            </Box>
            
            
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
          <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",}} className='liveButton'>
                    <Link href='https://github.com/hilaldedek?tab=repositories' target='__blank' underline='none' sx={{color:"#F6F1E9"}}>More Project</Link>
          </Button>
        </Box>
      </Box>
     {/* CONTACT SECTION */}
     <Box sx={{paddingTop:"4rem",paddingBottom:"4rem"}} className="card">
     <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"3.2rem",textAlign:"center",color:"#DDFFBB"}}>
          CONTACT ME
        </Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"3.2rem",transform:"rotateX(180deg)",marginTop:"-2rem",textAlign:"center",color:"#ddffbb31"}}>CONTACT ME</Typography>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"1rem"}}>
          <Box sx={{margin:"1rem",padding:"1rem"}} className="contactGif">
            <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"white",padding:"1rem"}}>
                <Link href='https://www.linkedin.com/in/hil%C3%A2ldedek/' target='__blank' sx={{color:"#ffffffde"}}><LinkedInIcon
            sx={{width:"4rem",height:"4rem"}}
            /></Link>
            </Button>
          </Box>
          <Box sx={{margin:"1rem",padding:"1rem"}} className="contactGif">
            <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",padding:"1rem"}} >
                <Link href='https://github.com/hilaldedek' target='__blank' sx={{color:"#ffffffde"}} ><GitHubIcon sx={{width:"4rem",height:"4rem"}}/></Link>
            </Button>
          </Box>  
          <Box sx={{margin:"1rem",padding:"1rem"}} className="contactGif">
            <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"white",padding:"1rem"}}>
                <Link href='https://www.instagram.com/hilaldedek/' target='__blank' underline='none' sx={{color:"#ffffffde"}}><InstagramIcon sx={{width:"4rem",height:"4rem"}}/></Link>
            </Button>
          </Box> 
          <Box sx={{margin:"1rem",padding:"1rem"}} className="contactGif">
            <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"white",padding:"1rem"}}>
                <Link href='https://twitter.com/Hilitomilito1' target='__blank' underline='none' sx={{color:"#ffffffde"}} ><TwitterIcon sx={{width:"4rem",height:"4rem"}}/></Link>
            </Button>
          </Box>  
          <Box sx={{margin:"1rem",padding:"1rem"}} className="contactGif">
             <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"white",padding:"1rem"}}>
                <Link href='' target='__blank' underline='none' sx={{color:"#ffffffde"}} >
                  <EmailIcon sx={{width:"4rem",height:"4rem"}}/>
                </Link>
            </Button>
          </Box>  
        </Box>
     </Box>

     {/* FOOTER SECTİON */}
     <Box>
      <Typography sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",margin:"2rem",color:"white",textAlign:"center"}} >
      All Rights Reserved © {year}
      </Typography>
     </Box>

      
    </div>
  )
}

export default Header