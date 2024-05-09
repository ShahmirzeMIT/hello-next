import { Box, Typography } from '@mui/material'
import React from 'react'
import {footerStyle} from '../../../components/footer/footerStyle'
import Link from 'next/link'
export default function FooterComp() {
  return (
   <Box sx={{...footerStyle.firstBox}}>
    <Box sx={{...footerStyle.flexBox}}>
        <Box sx={{...footerStyle.logoText}}><Typography variant='h3' sx={{textAlign:'center'}}>Safely</Typography></Box>
        <Box sx={{...footerStyle.flexBox,...footerStyle.footerBox}}>
            <Box>
                <Typography variant='h5'>About </Typography>
                <Typography ><Link href='#'>Company</Link></Typography>
                <Typography ><Link href='#'>Community</Link></Typography>
                <Typography ><Link href='#'>Careers</Link></Typography>
            </Box>
            <Box>
                <Typography variant='h5'>Product</Typography>
                <Typography ><Link href='#'>Features</Link></Typography>
                <Typography > <Link href='#'>Stores</Link></Typography>
                <Typography ><Link href='#'>Services</Link> </Typography>
            </Box>
            <Box>
                <Typography variant='h5'>Rent</Typography>
                <Typography >Company</Typography>
                <Typography >Community</Typography>
                <Typography >Careers</Typography>
            </Box>
        </Box>
    </Box>
    
   </Box>
  )
}
