import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import {signStyle} from './style/signStyle'
import FormLayout from '../layout/formLayout'
import InputText from '../reasuable/input/inputText'
import InputNumber from '../reasuable/input/inputNumber'
import signChanges from './signChanges'
import ReausableButton from '../reasuable/button/reausableButton'
import NavigateLink from '../reasuable/link/navigateLink'
export default function SignIn() {
const {formData, setFormData}=signChanges()
  return (
    <Box sx={{...signStyle.signBody}}>
        <Box sx={{...signStyle.boxWidth}}><Typography  variant='h1' sx={{
            ...signStyle.typgraphy
        }}>Sign Up First Get Ride</Typography></Box>
        <Box sx={{...signStyle.boxWidth}}>
          <Box sx={{...signStyle.formContainer}}>
          <FormLayout>
            <InputText data={formData.name}/>
            <InputText data={formData.email}/>
            <InputNumber data={formData.number}/>
            <InputText data={formData.password}/>
            <InputText data={formData.reTypePass}/>
            <NavigateLink data={formData.createAccount}/>
            <ReausableButton data={formData.btn}/>
          </FormLayout>
        </Box>
        </Box>
    </Box>
  )
}
