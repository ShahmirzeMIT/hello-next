import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import {loginStyle} from './style/loginStyle'
import FormLayout from '../layout/formLayout'
import InputText from '../reasuable/input/inputText'
import InputNumber from '../reasuable/input/inputNumber'
import signChanges from './signChanges'
import ReausableButton from '../reasuable/button/reausableButton'
import NavigateLink from '../reasuable/link/navigateLink'
export default function Login() {
const {formData, setFormData}=signChanges()
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
            <ReausableButton data={formData.login}/>
          </FormLayout>
        </Box>
        </Box>
    </Box>
  )
}
