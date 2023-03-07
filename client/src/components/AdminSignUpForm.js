
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
const axios = require('axios')
const bcrypt = require('bcryptjs')

const AdminSignUpForm = () => {

  const [input, setInput] = useState({
    username: '',
    email:'',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    email:'',
    confirmPassword: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
    // console.log(input)
    // console.log(e.target.name,e.target.value);
  }

  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
        case "email":
          if(!value) {
            stateObj[name] = "Please enter email";
          }
          break;


        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  }

  const submitHandler = async (event) =>{
        event.preventDefault();
        
          const sendObj = {
            name:input.username,
            email:input.email,
            password:input.password,
            role:'admin'
          }
          axios.post('http://localhost:8000/createadmin',sendObj)

          console.log(sendObj);
        
        
        // const sendObj = {
        //   name:input.username,
        //   email:input.email,
        //   password:input.password,
        //   region:input.region,
        //   city:input.city
        // }
        //console.log(hashedPassword)
        
        //send input state data to backend to create user
        //useEffect(()=>axios.post('http://localhost:8000/createuser',input),[])
        // axios.post('http://localhost:8000/createuser',sendObj);


  }

 
  return (
    <div className="app">
      <form>
        <label>Username : </label>
        <input
          type="text"
          name="username"
          placeholder='Enter Username'
          value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.username && <span className='err'>{error.username}</span>}
        <br />
        <br />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder='xyz@abc.com'
          value={input.email}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.email && <span className='err'>{error.email}</span>}
        <br />
        <br />
        <label>Password : </label>
        <input
          type="password"
          name="password"
          placeholder='Enter Password'
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.password && <span className='err'>{error.password}</span>}
        <br />
        <br />
        <label>Confirm Password : </label>
        <input
          type="password"
          name="confirmPassword"
          placeholder='Enter Confirm Password'
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
        <br />
        <br />
        {/* <label>Region : </label>
        <select name="region" id="region" onChange={onInputChange}>
               <option value="select" >select</option>
               <option value="northindia" >north india</option>
               <option value="southindia" >south india</option>
               <option value="westindia" >west india</option>
               <option value="eastindia" >east india</option>
        </select>
            <br />
            <br />
        <label>City : </label>
        <input
          type="text"
          name="city"
          placeholder='Enter city'
          value={input.city}
          onChange={onInputChange}
          onBlur={validateInput}></input>
        {error.city && <span className='err'>{error.city}</span>}
        <br />
        <br /> */}
        {/* <button onClick={submitHandler} type="submit">Submit</button> */}
        <Button variant="contained" sx={{bgcolor:"#4bb543", float:"right"}} onClick={submitHandler} type="submit">submit</Button>
      </form>
    </div>
  );
}

module.exports = AdminSignUpForm;