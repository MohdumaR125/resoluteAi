import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    const navigate = useNavigate();

    function handleNavigation(e){
        navigate(`${e.target.value}`)
    }
  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
     
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            paddingTop:"200px",
            gap:"20px"
          },
        }}
        variant="permanent"
        anchor="left"
      >
       <Button variant="outlined" value="/addstudent" onClick={handleNavigation}>Add Student</Button>
       <Button variant="outlined" value="/managestudent" onClick={handleNavigation}>Manage Student</Button>
       <Button variant="outlined" value="/" onClick={handleNavigation}>Logout</Button>

      </Drawer>
     
    </Box>
  );
}