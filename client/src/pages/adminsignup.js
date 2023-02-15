import { display } from "@mui/system";
import { useState,useRef } from "react";
import Form from '../components/Form'
import AdminSignUpForm from '../components/AdminSignUpForm'

export default function adminsignin () {
  return (<div style={{display : 'flex'}}>
    <div style={{width:'50%'}}>Image</div>
    <div>
      <AdminSignUpForm />
    </div>
    </div>
    )
}