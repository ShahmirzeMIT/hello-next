import { Grid,Button } from '@mui/material'
import React from 'react'
import {buttonStyle} from './style/buttonStyle'
interface Props {
  data:{
  size: number
  onClick: () => void
  text: string
  }
}
export default function ReausableButton({data}:Props) {
  const onClick=()=>{

  }
  return (
   <Grid xs={data.size} md={data.size}  lg={data.size}>
    <Button variant="contained" sx={{...buttonStyle.button}} onClick={onClick}>{data.text}</Button>
   </Grid>
  )
}
