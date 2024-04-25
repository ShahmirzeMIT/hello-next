import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import {loginStyle} from './style/loginStyle'
import FormLayout from '../layout/formLayout'
import InputText from '../reasuable/input/inputText'
import signChanges from './signChanges'
import ReausableButton from '../reasuable/button/reausableButton'
import NavigateLink from '../reasuable/link/navigateLink'
import authentication from '../../public/authentication.json'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {

const {formData, setFormData}=signChanges()
console.log(authentication);
const handleClick=()=>{
  console.log('clicl me',formData.email.value,formData.password.value);
  
  const authenticatedUser = authentication.find(
    (user) => user.email === formData.email.value && user.password === formData.password.value
  );

  console.log(authenticatedUser);
  
  if (authenticatedUser !== undefined && authenticatedUser) {
    console.log('Authenticated user:', authenticatedUser);
    // Proceed with authentication
  } else {
    toast.error('Invalid Email or Password');
  }
}

  return (
    <Box sx={{...loginStyle.signBody}}>
        <Box sx={{...loginStyle.boxWidth}}><Typography  variant='h1' sx={{
            ...loginStyle.typgraphy
        }}>Login First Get Ride</Typography></Box>
        <Box sx={{...loginStyle.boxWidth}}>
          <Box sx={{...loginStyle.formContainer}}>
          <FormLayout>
            <InputText data={formData.email}/>
            <InputText data={formData.password}/>
            <NavigateLink data={formData.dontHaveAccount}/>
            <Box sx={{...loginStyle.btnBox}} onClick={handleClick}><ReausableButton data={formData.login}/></Box>
          </FormLayout>
        </Box>
        </Box>
    </Box>
  )
}
