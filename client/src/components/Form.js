import React, { useEffect, useState } from 'react';
const axios = require('axios')
const bcrypt = require('bcryptjs')
import { useContext } from 'react';
import {Context_data} from '../../context/context';
import Dropdown from './Dropdown';

const Form = () => {
  const {accessToken, citydropdown,regiondropdown} = useContext(Context_data)
  const [input, setInput] = useState({
    username: '',
    email:'',
    password: '',
    confirmPassword: '',
    region:'',
    city:''
  });

  const [error, setError] = useState({
    username: '',
    password: '',
    email:'',
    confirmPassword: '',
    region:'',
    city:''
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
        case "city":
          if (!value) {
              stateObj[name] = "Please enter City.";
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
            region:regiondropdown,
            city:citydropdown
          }
          const config = {
            headers: {
                authorization: `Bearer ${accessToken}`
            }
        }
          axios.post('http://localhost:8000/createuser',sendObj,config).then((res)=>{
            console.log(res)
            if(res.data.code == "ER_DUP_ENTRY"){
              alert(`user with email : ${sendObj.email} already exists`)
            }
          })

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
        
        {/* <br />
        <label>Region : </label>
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
        {error.city && <span className='err'>{error.city}</span>} */}
        
        <Dropdown />
        <button onClick={submitHandler} type="submit">Submit</button>
      </form>
    </div>
  );
}

module.exports = Form;