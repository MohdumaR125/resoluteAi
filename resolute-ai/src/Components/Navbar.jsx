import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
         <img src="https://resoluteai.in/static/media/logo.9bb1eca6.png" width="250px" alt="" />
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}