import { Box, Grid, TextField } from '@mui/material'
import React from 'react'
import {inputTextStyle} from './style/inputTextStyle'
interface Props {
    size: number
    value: string | undefined
    onChange: (value: string) => void
}
const InputText = () => {
  return (
    <Grid xs={12} md={12}  lg={12} >
        <TextField
            fullWidth
            id="standard-basic" 
            label="Standard" 
            variant="standard" 
            style={{ width: '100%' }} 
            sx={{
                ...inputTextStyle.textField,
                
                // " & .MuiFormControl-root.MuiTextField-root.custom-textfield" :{
                //     width:" 100% !important"
                // }
                
            }}
         />
    </Grid>
  )
}

export default InputText
