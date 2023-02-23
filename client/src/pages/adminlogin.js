// import * as React from 'react';
// import { useRef,useState,useEffect } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Router from 'next/router';
// import { headers } from 'next.config';
// import { Context_data } from 'context/context';
// import { useContext } from 'react';
// const axios = require('axios')

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function SignInSide() {
//    const {accessToken, setAccessToken} = useContext(Context_data)
//   // const [accessToken, setAccessToken] = useState('');

//   const emailInputRef = useRef()
//   const passwordRef = useRef();
    
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     console.log(emailInputRef.current.value)
//     console.log(passwordRef.current.value)
//     const sendobj = {
//       email:emailInputRef.current.value,
//       password:passwordRef.current.value
//     }
//     await axios.post('http://localhost:8000/adminsignin',sendobj).then((res)=>{
//       if(res.data === 'no user with the provided credentials exist') {
//         alert('no user with the provided credentials exist')
//       } else {
//           console.log(res);
//           const receivedtoken = res.data.token;
//           console.log(receivedtoken)
//           setAccessToken(receivedtoken)
//           sessionStorage.setItem('accessToken',receivedtoken);
//           setAccessToken(receivedtoken);
//           Router.push('/admindashboard');
//       }

//     })
    
//     // const data = new FormData(event.currentTarget);
//     // const email = data.get('email')
//     // const password = data.get('password')
//     // console.log({
//     //   email: data.get('email'),
//     //   password: data.get('password'),
//     // });
//   };

//   const signInBtnHandler = async() => {
//       // const sendobj = {email:email,password:password}
//       // const helo = await axios.post('http://localhost:8000/adminsignin',{"dead":"cdsfcsd"})
//       // console.log(helo)
//       // console.log({email:email,password:password})
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             // backgroundImage: 'url(https://source.unsplash.com/random)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Admin Login in
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//               {/* <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//                 ref={emailInputRef}
//               /> */}
//               <label>Email : </label>
//               <input 
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 ref={emailInputRef}></input>
//                 <br />
//                 <br />
//                 <label>Password : </label>
//               <input id="email"
//                 label="Password"
//                 name="password"
//                 autoComplete="password"
//                 ref={passwordRef}></input>
//               {/* <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 ref={passwordRef}
//               /> */}
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//                 onClick={signInBtnHandler}
//               >
//                 Sign In
//               </Button>
              
              
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }

import * as React from 'react';
import { useRef,useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Router from 'next/router';
import { headers } from 'next.config';
import { Context_data } from 'context/context';
import { useContext } from 'react';
import styles from "../styles/adduserform.module.css";
const axios = require('axios')

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
   const {accessToken, setAccessToken} = useContext(Context_data)
  // const [accessToken, setAccessToken] = useState('');

  const emailInputRef = useRef()
  const passwordRef = useRef();
    
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log(emailInputRef.current.value)
    console.log(passwordRef.current.value)
    const sendobj = {
      email:emailInputRef.current.value,
      password:passwordRef.current.value
    }
    await axios.post('http://localhost:8000/adminsignin',sendobj).then((res)=>{
      if(res.data === 'no user with the provided credentials exist') {
        alert('no user with the provided credentials exist')
      } else {
          console.log(res);
          const receivedtoken = res.data.token;
          console.log(receivedtoken)
          setAccessToken(receivedtoken)
          sessionStorage.setItem('accessToken',receivedtoken);
          setAccessToken(receivedtoken);
          Router.push('/admindashboard');
      }

    })
    
    // const data = new FormData(event.currentTarget);
    // const email = data.get('email')
    // const password = data.get('password')
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  const signInBtnHandler = async() => {
      // const sendobj = {email:email,password:password}
      // const helo = await axios.post('http://localhost:8000/adminsignin',{"dead":"cdsfcsd"})
      // console.log(helo)
      // console.log({email:email,password:password})
  }

  return (
    <div className={styles.adduserform}>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
             backgroundImage: 'url(https://source.unsplash.com/random)',
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
            <Typography component="h1" variant="h5" >
              Admin Login in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4}}>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                ref={emailInputRef}
              /> */}
              <label>Email : </label>
              <input type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                ref={emailInputRef}></input>
                <br />
                <br />
                <label>Password : </label>
              <input type="email"
                label="Password"
                name="password"
                autoComplete="password"
                ref={passwordRef}></input><br/>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                ref={passwordRef}
              /> */}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={signInBtnHandler}
              >
                Sign In
              </Button>
              
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
  );
}

