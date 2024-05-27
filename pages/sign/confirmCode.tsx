import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import FormLayout from '../../layout/formLayout';
import { confirmCodeStyle } from '../../components/sign/style/confirmCodeStyle';
import ReausableButton from '../../components/reasuable/button/reausableButton';
import signChanges from '../../components/sign/signChanges';
import OTPInput from 'react-otp-input';

export default function ConfirmCode() {
    const { formData } = signChanges();
    const [otp, setOtp] = useState('');

    const handleChange = (otp: string) => {
      setOtp(otp);
    };
console.log(otp);

    const renderInput = (inputProps: React.InputHTMLAttributes<HTMLInputElement>, index: number): React.ReactNode => {
      return (
        <input
          key={index}
          type="text"
          {...inputProps}
          style={{...inputProps.style, ...confirmCodeStyle.otp}} // Merge with your custom styles
        />
      );
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
              <OTPInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={6} // Number of OTP digits
                  inputStyle={confirmCodeStyle.otp} // Custom input style
                  renderInput={renderInput}
                />
              <ReausableButton data={formData.confirm}/>
            </FormLayout>
          </Box>
          </Box>
      </Box>
      </Box>
    );
}
