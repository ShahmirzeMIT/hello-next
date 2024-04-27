import { Grid } from '@mui/material'
import React from 'react'
import HeaderComp from '../header/header'

export default function HomeLayout({children}:React.PropsWithChildren) {
  return (
    <Grid sx={{width:"100%"}}  container  >
        <HeaderComp/>
        {children }
    </Grid>
  )
}
