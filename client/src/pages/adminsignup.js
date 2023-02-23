import { display } from "@mui/system";
import { useState,useRef } from "react";
import Form from '../components/Form'
import AdminSignUpForm from '../components/AdminSignUpForm'
import styles from '../styles/adduserform.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../src/theme'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Box from '@mui/material/Box';

export default function adminsignin () {
  return (<div className={styles.adduserform}>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            //  backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              backgroundColor:'whitesmoke',
              height:'80%',
              my: 10,
              mx: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', mt:3 }}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Admin signup</h2>
            <AdminSignUpForm />
            </Box>
          
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>)
}