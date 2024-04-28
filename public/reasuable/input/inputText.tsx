import { Box, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import {inputTextStyle} from './style/inputTextStyle'
interface Props {
  data:{
    size?: number
    value: string | undefined
    onChange: (value: {name: string, value: string}) => void
    name: string
    label: string
    type?: string
  } 
}
const InputText = ({data}: Props) => {


  const [props, setProps] = React.useState(data)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (props.type === 'email') {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); 
      if (!isEmail) {
        return;
      }
    }

    setProps({...props, value: value});
    props.onChange({name: props.name, value: value});
  } 
  
  useEffect(() => {
    setProps(data)
  },[data])

  return (
    <Grid xs={props.size} md={props.size}  lg={props.size} >
        <TextField
            value={props.value}
            type={props.type}
            fullWidth
            id="standard-basic" 
            label={props.label}
            variant="standard" 
            style={{ width: '100%' }} 
            sx={{...inputTextStyle.textField}}
            onChange={handleChange}
         />
    </Grid>
  )
}

export default InputText
