import { Box } from '@mui/material'
import React from 'react'
import HomeLayout from '../layout/homeLayout/HomeLayout'
import {confirmedStyle} from '../../public/pageStyles/confirmedStyle'
 export default function Confirmed() {
  return (
        <HomeLayout>
            <Box sx={{...confirmedStyle.firstContainer}}>
                <Box>
                    </Box> 
            </Box>
        </HomeLayout>
  )
}
