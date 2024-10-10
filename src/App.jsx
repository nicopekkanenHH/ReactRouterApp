
import './App.css'
import { Link, Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';

function App() {
  

  return (
    <>
    <AppBar position="static" sx={{ backgroundColor: "black", padding: 3, width: 1000}}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "white", textAlign: "center" }}>
            Welcome to React Router
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className="nav-bar">
        <Link to={"/"}>Home</Link> 
        <Link to={"/about"}>About</Link> 
        <Link to={"/contact"}>Contact</Link>
      </nav>

      <Box sx={{ display: "static", justifyContent: "center", alignItems: "center", height: "70vh" }}>
        <Outlet />
      </Box>
    </>
  )
}

export default App;
