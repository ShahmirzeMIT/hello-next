import { Box, Typography } from '@mui/material'
import React from 'react'
import { Input} from 'antd';
import type { GetProp } from 'antd';
import FormLayout from '../layout/formLayout';
import {confirmCodeStyle} from './style/confirmCodeStyle'
import ReausableButton from '../reasuable/button/reausableButton';
import signChanges from './signChanges';
export default function confirmCode() {
    const {formData, setFormData}=signChanges()
    const onChange: GetProp<typeof Input.OTP, 'onChange'> = (text) => {
        console.log('onChange:', text);
      };
    
      const sharedProps = {
        onChange,
      };
  return (
    <Box>
        <Box sx={{...confirmCodeStyle.signBody}}>
        <Box sx={{...confirmCodeStyle.boxWidth}}><Typography  variant='h1' sx={{
            ...confirmCodeStyle.typgraphy
        }}>Let's Write Confirm Code</Typography></Box>
        <Box sx={{...confirmCodeStyle.boxWidth}}>
          <Box sx={{...confirmCodeStyle.formContainer}}>
          <FormLayout>
            <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} style={{...confirmCodeStyle.otp}} />
            <br />
            <ReausableButton data={formData.confirm}/>
          </FormLayout>
        </Box>
        </Box>
    </Box>
    </Box>
  )
}
