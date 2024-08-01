// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
// import { Link } from 'react-router-dom';

// export default function ButtonAppBar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             onClick={toggleDrawer}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='center'>
//             RailTel Corporation of India Ltd.
//           </Typography>
//           <Link to={'/home'}>
//           <Button color="inherit"  sx={{ color: 'white' }}>Home</Button>
//           </Link>
//           <Link to={'/'}>
//           <Button color="inherit"  sx={{ color: 'white' }}>Logout</Button>
//           </Link>
//         </Toolbar>
//       </AppBar>
//       <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
//     </Box>
//   );
// }

// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
// import { Link } from 'react-router-dom';

// export default function ButtonAppBar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{  backgroundColor: 'transparent', boxShadow: 'none'}}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="#333333"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             onClick={toggleDrawer}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:'#333333' }} align="center">
//             RailTel Corporation of India Ltd.
//           </Typography>
//           <Link to="/home" style={{ textDecoration: 'none' }}>
//             <Button color="inherit" sx={{ color: '#333333' }}>Home</Button>
//           </Link>
//           <Link to="/" style={{ textDecoration: 'none' }}>
//             <Button color="inherit" sx={{ color: '#333333' }}>Logout</Button>
//           </Link>
//         </Toolbar>
//       </AppBar>
//       <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
//     </Box>
//   );
// }

// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
// import { Link, useNavigate } from 'react-router-dom';
// //import './Navbar.css';

// export default function ButtonAppBar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const handleLogout = () => {
//     // Clear the authentication state
//     localStorage.removeItem('isAuthenticated');
//     // Navigate to the login page
//     navigate('/');
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{  backgroundColor: 'transparent', boxShadow: 'none' }}>
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="#333333"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//             onClick={toggleDrawer}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:'#333333' }} align="center">
//             RailTel Corporation of India Ltd.
//           </Typography>
//           <Link to="/home" style={{ textDecoration: 'none' }}>
//             <Button color="inherit" sx={{ color: '#333333' }}>Home</Button>
//           </Link>
//           <Button color="inherit" sx={{ color: '#333333' }} onClick={handleLogout}>Logout</Button>
//         </Toolbar>
//       </AppBar>
//       <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
//     </Box>
//   );
// }

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'


export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    // Clear the authentication state
    localStorage.removeItem('isAuthenticated');
    // Navigate to the login page
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          boxShadow: 'yes',
          backdropFilter: 'blur(50px)', // Adds the backdrop filter blur
          WebkitBackdropFilter: 'blur(30px)' // For Safari support
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#333333' }} align="center">
            RailTel Corporation of India Ltd.
          </Typography>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button color="inherit" sx={{ color: '#333333' }}>Home</Button>
          </Link>
          <Button color="inherit" sx={{ color: '#333333' }} onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
}
