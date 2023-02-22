

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Router from 'next/router';
import UserActivityList from '../components/UserActivityList.js';
import AddUser from '../components/AddUser';
import  {Fragment} from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic'


const drawerWidth = 240;

const DynamicPlot = dynamic(import('../components/Plot'), {
    ssr: false
  })
  

export default function ClippedDrawer() {

    const [openDashboard, setOpenDashboard] = React.useState(true);
    const [openUserList, setOpenUserList] = React.useState(false);
    const [openAddUser, setOpenAddUser] = React.useState(false);

    const dashboardClickhandler = () =>{
        setOpenDashboard(true);
        setOpenAddUser(false);
        setOpenUserList(false);
    }
    const userListClickhandler = () =>{
        setOpenUserList(true);
        setOpenAddUser(false);
        setOpenDashboard(false);
    
    }
    const addUserClickhandler = () => {
        setOpenAddUser(true);
        setOpenDashboard(false);
        setOpenUserList(false);
        
    }

    const logoutbtnhandler = () => {
      console.log('logout clicked')
      sessionStorage.removeItem('accessToken')
      Router.push('/adminlogin');
    }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} style={{backgroundColor:"#1e81b0"}}>
        <Toolbar sx={{ justifyContent: "space-between" }}> 
          <Typography variant="h6" noWrap component="div" style={{color:"white"}}>
            AdminName
          </Typography>
          <Button variant="contained" color='secondary' onClick={logoutbtnhandler}>logout</Button>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor:"#1e81b0",color:"white" },

        }}
        
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }} >
          <List>
            <ListItemButton onClick={dashboardClickhandler}>Dashboard</ListItemButton>
            <ListItemButton onClick={userListClickhandler}>Users</ListItemButton>
            <ListItemButton onClick={addUserClickhandler}>AddUser</ListItemButton>
          </List>
          <Divider />
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:"whitesmoke" }}>
      {/* {openDashboard ?<><Toolbar />
        
        <h1>Graphs</h1>
        <DynamicPlot />
        <DynamicPlot />
        <DynamicPlot />
        <DynamicPlot />
        </>
      : <UserActivityList />} */}
      {openDashboard && <><Toolbar />
        
        <h1>Graphs</h1>
        <DynamicPlot />
        <DynamicPlot />
        <DynamicPlot />
        <DynamicPlot />
        </>
      }
      {openUserList && <UserActivityList />}
      {openAddUser && <AddUser />}

               
        
      </Box>
    </Box>
  );
}