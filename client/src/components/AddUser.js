import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const { Toolbar } = require("@mui/material");
import Form from '../components/Form'

import AddUserForm from '../components/addUserForm.js';


const AddUser = () => {
    return <>
    <Toolbar />
    <Form />
    {/* <AddUserForm /> */}
    {/* <Toolbar />
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      
    </Box> */}
    {/* Adduser
    <br />
    <br />
    <form>
        <label>Name</label>
        <input type="text"></input>
        <br />
        <br />
        <label>EmailId</label>
        <input type="text"></input>
        <br />
        <br />
        <label>Password</label>
        <input type="text"></input>
        <br />
        <br />
        <label>Confirm Password</label>
        <input type="text"></input>
        <br />
        <br />
        <Button variant="contained">Submit</Button>
    </form> */}
    </>
}

module.exports = AddUser;