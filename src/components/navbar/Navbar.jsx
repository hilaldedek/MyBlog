// import React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import "./Navbar.scss";


// const pages = ['Projects', 'About'];

// const Navbar = () => {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
  
//     const handleOpenNavMenu = (event) => {
//       setAnchorElNav(event.currentTarget);
//     };
    
  
//     const handleCloseNavMenu = () => {
//       setAnchorElNav(null);
//     };
  
    
  
//   return (
//     <div>
//         <AppBar position="fixed" sx={{backgroundColor:"#1922102c",backdropFilter: "blur(5px)"}}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'Homemade Apple',
//               fontSize:"3rem",
//               fontWeight: 500,
//               letterSpacing: '.3rem',
//               color: '#a197c4',
//               textDecoration: 'none',
//               marginTop:"1rem"
//             }}
//           >
//             Hilal Dedek
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="#b5aeca"
//             >
//               <MenuIcon sx={{color:"white"}}/>
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none'},
//               }}
//             >
            
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center"sx={{color:"#18122B",fontFamily:"Julius Sans One"}}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
          
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'Homemade Apple',
//               fontWeight: 500,
//               fontSize:"2rem",
//               letterSpacing: '.3rem',
//               color: '#a197c4',
//               textDecoration: 'none',
//               marginTop:"1rem"
//             }}
//           >
//             Hilal Dedek
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: '#DDFFBB', display: 'block' ,fontFamily:"Julius Sans One",fontSize:"1.2rem",fontWeight:800,margin:"0 1rem"}}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
          
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </div>
//   )
// }

// export default Navbar