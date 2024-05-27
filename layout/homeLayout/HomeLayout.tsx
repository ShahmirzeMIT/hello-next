import { Grid } from '@mui/material'
import React from 'react'
import HeaderComp from '../header/header'
import FooterComp from '../footer/footer'

export default function HomeLayout({children}:React.PropsWithChildren) {
  return (
    <Grid sx={{width:"100%"}}  container  >
        <HeaderComp/>
        {children }
        <FooterComp/>
    </Grid>
  )
}
