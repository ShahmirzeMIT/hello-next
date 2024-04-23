import { Box, Grid } from '@mui/material'
import React from 'react'

export default function FormLayout({children}:React.PropsWithChildren) {
  return (
    <Box sx={{width:"100%"}}>
        <Grid  container  spacing={2} > 
            {children}
        </Grid>
     </Box>
  )
}
