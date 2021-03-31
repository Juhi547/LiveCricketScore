import { AppBar, IconButton, Toolbar,makeStyles,Button, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import React from 'react';

const useStyle = makeStyles((theme) => {
    console.log("STYLE", theme);
  });


const Navbar=()=>{
    const classes = useStyle();
  return (
      <div>
   <AppBar position="static" style={{ flexFlow: 1 }}>
     <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon/>
        </IconButton>
       <Typography variant="h6">Live Cricket Score</Typography>
       <span style={{ flexGrow: 1 }}></span>

          <Button color="inherit">Login</Button>
     </Toolbar>
   
   </AppBar>
   </div>
   
  );
};



export default Navbar;