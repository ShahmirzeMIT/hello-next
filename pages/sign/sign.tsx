import { Box, Typography } from '@mui/material'
import React from 'react'
import {signStyle} from './style/signStyle'
import FormLayout from '../layout/formLayout'
import InputText from '../reasuable/input/inputText'
export default function SignIn() {
  return (
    <Box sx={{...signStyle.signBody}}>
        <Box sx={{...signStyle.boxWidth}}><Typography  variant='h1'>Sign Up First Get Ride</Typography></Box>
        <Box sx={{...signStyle.boxWidth}}>
          <FormLayout>
            <InputText />
          </FormLayout>
        </Box>
    </Box>
  )
}
