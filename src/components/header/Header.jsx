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
import movieApp from "../../assets/movieapp.png";
import shopping from "../../assets/shoppig.png";
import me from "../../assets/me3.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';




const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  const year=new Date().getFullYear();
  return (
    
    <div>
 {/* NAVBAR */}
<AppBar position="fixed" sx={{backgroundColor:"#1922102c",backdropFilter: "blur(5px)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Homemade Apple',
              fontSize:"3rem",
              fontWeight: 500,
              letterSpacing: '.3rem',
              color: '#a197c4',
              textDecoration: 'none',
              marginTop:"1rem"
            }}
          >
            Hilal Dedek
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#b5aeca"
            >
              <MenuIcon sx={{color:"#DDFFBB"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'},
              }}
            >
            
              
                <Box onClick={handleCloseNavMenu} sx={{display:"flex",flexDirection:"column"}}>
                <Button textAlign="center"sx={{fontFamily:"Julius Sans One"}}><Link href='#skills' sx={{textDecoration:"none",color:"#18122B"}}>Skills</Link>
                    </Button>
                  <Button textAlign="center"sx={{fontFamily:"Julius Sans One"}}><Link href='#projects' sx={{textDecoration:"none",color:"#18122B"}}>Projects</Link>
                    </Button>
                    <Button textAlign="center"sx={{color:"#18122B",fontFamily:"Julius Sans One"}}><Link href='#contact' sx={{textDecoration:"none",color:"#18122B"}}>Contact</Link>
                    </Button>
                </Box>
              
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Homemade Apple',
              fontWeight: 500,
              fontSize:"2rem",
              letterSpacing: '.3rem',
              color: '#a197c4',
              textDecoration: 'none',
              marginTop:"1rem"
            }}
          >
            Hilal Dedek
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button className='buttonBox'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' ,fontFamily:"Julius Sans One",fontSize:"1.2rem",fontWeight:800,margin:"0 1rem"}}
              ><Link href='#skills' sx={{textDecoration:"none",color: '#DDFFBB'}}>Skills</Link>
              </Button>
              <Button className='buttonBox'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' ,fontFamily:"Julius Sans One",fontSize:"1.2rem",fontWeight:800,margin:"0 1rem"}}
              ><Link href='#projects' sx={{textDecoration:"none",color: '#DDFFBB'}}>Projects</Link>
              </Button>
              <Button className='buttonBox'
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' ,fontFamily:"Julius Sans One",fontSize:"1.2rem",fontWeight:800,margin:"0 1rem"}}
              ><Link href='#contact' sx={{textDecoration:"none",color: '#DDFFBB'}}>Contact</Link>
              </Button>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>

      {/* WHO AM I? SECTION */}

      <Box sx={{display:"flex",flexWrap:"wrap",paddingTop:"7rem",paddingBottom:"4rem"}}className='card'>
        <Box sx={{position:"relative",margin:"auto",padding:"2rem 1rem"}} className="imgBox">
          <img src={me} alt="profil" width={"auto"} height={"400rem"}/>
        </Box>
      
      <Box sx={{position:"relative",margin:"auto"}}>
        <Typography  sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",paddingTop:"2rem",textAlign:"center",color:"#DDFFBB"}}>WHO AM I?</Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>WHO AM I?</Typography>
        <Typography component="p" sx={{fontFamily:"Julius Sans One",textAlign:"center",fontWeight:"500",fontSize:"1.2rem",paddingBottom:"4rem",color:"#F6F1E9",margin:"1rem 5rem"}}>Hello, I'm Hilal. I am a computer engineering student. I love to code in my spare time. I am developing myself in the field of web development.</Typography>
      </Box> 
      <Box>
       </Box> 
      </Box>

{/* EDUCATİON */}
<Box className="card" sx={{position:"relative",margin:"auto"}}>
        <Typography  sx={{fontFamily:"Fredericka the Great",fontSize:"3.7rem",paddingTop:"2rem",textAlign:"center",color:"#DDFFBB"}}>EDUCATION</Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"3.7rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>EDUCATION</Typography>
<Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
<Card sx={{minWidth: 275, width:"25%",padding:"1rem",margin:"1.5rem 1rem"}} className='edu'>
  <Box sx={{margin:"1rem 1rem",backgroundColor:"#000000b3",color:"#DDFFBB"}}>
<CardContent>
        <Typography variant="h4" component="div">
          Trakya University
        </Typography>
        <Typography variant="body2" sx={{fontSize:"1.3rem"}}>
          Computer Engineering
        </Typography>
        <Typography variant="p" component="div">
          2021-2025
        </Typography>
      </CardContent>
  </Box>
    </Card>

    <Card sx={{ minWidth: 275, width:"25%",padding:"1rem",margin:"1.5rem 1rem"}} className='edu'>
      <Box sx={{margin:"1rem 1rem",backgroundColor:"#000000b3",color:"#DDFFBB"}}>
        <CardContent>
        <Typography variant="h4" component="div">
          Clarusway
        </Typography>
        <Typography variant="body2" sx={{fontSize:"1.3rem"}}>
          FullStack Bootcamp
        </Typography>
        <Typography variant="p" component="div">
          2022-2023
        </Typography>
      </CardContent>
      </Box>
      
    </Card>

    <Card sx={{minWidth: 275, width:"25%",padding:"1rem",margin:"1.5rem 1rem"}} className='edu'>
      <Box sx={{margin:"1rem 1rem",backgroundColor:"#000000b3",color:"#DDFFBB"}}>
<CardContent>
        <Typography variant="h4" component="div">
        Lutfi Ege Anatolian High School
        </Typography>
        <Typography variant="p" component="div">
          2017-2021
        </Typography>
      </CardContent>
      </Box>
      
    </Card>
</Box>
</Box>

      {/* SKILLS SECTİON */}
      <Box className="card" sx={{padding:"1rem"}}>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}} id="skills"> 
      <Box sx={{marginBottom:"-4rem"}}>
        <Typography  sx={{fontFamily:"Fredericka the Great",fontSize:"3.7rem",paddingTop:"2rem",textAlign:"center",color:"#DDFFBB"}}>TECHNICAL</Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"3.7rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>TECHNICAL</Typography>
      </Box>
      <Box sx={{marginLeft:"1rem"}}>
        <Typography  sx={{fontFamily:"Fredericka the Great",fontSize:"3.7rem",paddingTop:"2rem",textAlign:"center",color:"#DDFFBB"}}>SKILLS</Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"3.7rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>SKILLS</Typography>
      </Box>
    </Box>
    <Box>
        <Box sx={{display:"flex",flexWrap:"wrap", justifyContent:"center",marginTop:"2rem"}}>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        JavaScript
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        TypeScript
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        JQuery
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        React
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Redux
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        HTML
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        CSS
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Sass
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Styled Components
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Tailwind CSS
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Material UI
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Bootstrap
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Django
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        MongoDB
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Python
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        MYSQL
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        SQLITE
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Docker
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Git
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        GitHub
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Jira
              </Button>
              <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",color:"white",margin:"1rem"}} className='skillsButton'>
                        Slack
              </Button>
        </Box>
    </Box>
      </Box>
    


      {/* PROJECTS SECTION */}

      <Box className="card" sx={{paddingTop:"4rem",paddingBottom:"4rem"}} id="projects">
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",textAlign:"center",color:"#DDFFBB"}}>
          PROJECTS
        </Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>PROJECTS</Typography>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"2rem"}} >
          {/* RECİPE APP */}
          <Box className="cardGif" sx={{padding:"1rem",margin:"1.5rem 1rem",}}>
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
              {/* WEATHER APP */}
          <Box className="cardGif" sx={{padding:"1rem",margin:"1.5rem 1rem"}}>
            <Card sx={{ maxWidth: 345,margin:"1rem",backgroundColor:"#000000b3" }}>
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
            {/* TO DO APP */}
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
            {/* DİSNEY  */}
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
                <Link href='https://github.com/hilaldedek/React-Disney' target='__blank' underline='none' sx={{color:"white"}}>Live</Link>
                </Button>
              </CardActions>
            </Card>
            </Box>
            {/* MOVİE APP */}
            <Box className="cardGif" sx={{padding:"1rem",margin:"1.5rem 1rem",}}>
            <Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#000000b3"}}>
              <CardActionArea sx={{padding:"1rem"}}>
                <CardMedia
                  component="img"
                  height="170"
                  image={movieApp}
                  alt="movieAppProject"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Julius Sans One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#DDFFBB"}}>
                    Movie App
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90",marginBottom:"1.5rem"}} >
                <Link href='https://hilalsmovieapp.netlify.app/' target='__blank' underline='none' sx={{color:"white"}}>Live</Link>
                </Button>
              </CardActions>
            </Card>
          </Box>
            {/* SHOPPİNG PAGE */}
            <Box className="cardGif" sx={{padding:"1rem",margin:"1.5rem 1rem"}}>
<Card sx={{ maxWidth: 345,margin:"1rem 1rem",backgroundColor:"#000000b3" }}>
              <CardActionArea sx={{padding:"1rem"}}>
                <CardMedia
                  component="img"
                  height="170"
                  image={shopping}
                  alt="shoppingPageProject"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Julius Sans One',textAlign:"center",fontWeight:"900",fontSize:"2rem",color:"#DDFFBB"}}>
                    Shopping Page
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"#393053",backgroundColor:"#d8cbff90",marginBottom:"1.5rem"}}>
                <Link href='https://hilaldedek.github.io/Javascript-ShoppingPage/' target='__blank' underline='none' sx={{color:"white"}}>Live</Link>
                </Button>
              </CardActions>
            </Card>
            </Box>
        </Box>
        {/* MORE PROJECTS SECTİON */}
        <Box sx={{display:"flex",justifyContent:"center",marginTop:"2rem"}}>
          <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",padding:"1rem",}} >
                    <Link href='https://github.com/hilaldedek?tab=repositories' target='__blank' underline='none' sx={{color:"#F6F1E9"}}>More Project</Link>
          </Button>
        </Box>
      </Box>

     {/* CONTACT SECTION */}
     <Box sx={{paddingTop:"4rem",paddingBottom:"4rem"}} className="card" id="contact">
     <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}> 
      <Box sx={{marginBottom:"-4rem"}}>
        <Typography  sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",paddingTop:"2rem",textAlign:"center",color:"#DDFFBB"}}>CONTACT</Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>CONTACT</Typography>
      </Box>
      <Box sx={{marginLeft:"1rem"}}>
        <Typography  sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",paddingTop:"2rem",textAlign:"center",color:"#DDFFBB"}}>ME</Typography>
        <Typography sx={{fontFamily:"Fredericka the Great",fontSize:"4.1rem",transform:"rotateX(180deg)",marginTop:"-3rem",textAlign:"center",color:"#ddffbb31"}}>ME</Typography>
      </Box>
    </Box>
        <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"1rem"}}>
          {/* LİNKEDİN */}
          <Box sx={{margin:"1rem",padding:"1rem",borderRadius:"100px"}} className="contactGif">
            <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"white",padding:"1rem"}}>
                <Link href='https://www.linkedin.com/in/hil%C3%A2ldedek/' target='__blank' sx={{color:"#ffffffde"}}><LinkedInIcon
            sx={{width:"4rem",height:"4rem"}}
            /></Link>
            </Button>
          </Box>
          {/* GİTHUB */}
          <Box sx={{margin:"1rem",padding:"1rem",borderRadius:"100px"}} className="contactGif">
            <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",padding:"1rem"}} >
                <Link href='https://github.com/hilaldedek' target='__blank' sx={{color:"#ffffffde"}} ><GitHubIcon sx={{width:"4rem",height:"4rem"}}/></Link>
            </Button>
          </Box>  
          {/* INSTAGRAM */}
          <Box sx={{margin:"1rem",padding:"1rem",borderRadius:"100px"}} className="contactGif">
            <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"white",padding:"1rem"}}>
                <Link href='https://www.instagram.com/hilaldedek/' target='__blank' underline='none' sx={{color:"#ffffffde"}}><InstagramIcon sx={{width:"4rem",height:"4rem"}}/></Link>
            </Button>
          </Box> 
          {/* TWİTTER */}
          <Box sx={{margin:"1rem",padding:"1rem",borderRadius:"100px"}} className="contactGif">
            <Button sx={{fontFamily:"Julius Sans One",fontWeight:"900",fontSize:"1rem",position:"relative",margin: "auto",color:"white",padding:"1rem"}}>
                <Link href='https://twitter.com/Hilitomilito1' target='__blank' underline='none' sx={{color:"#ffffffde"}}><TwitterIcon sx={{width:"4rem",height:"4rem"}}/></Link>
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