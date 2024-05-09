import DriverInfo from '@/components/reasuable/driverInfo/DriverInfo';
import withAuth from '@/components/utils/withAuth';
import { Box, Typography } from '@mui/material'
import React from 'react'
import HomeLayout from '../layout/homeLayout/HomeLayout';
import {driverListyStyle} from '../../components/pageStyles/driverListyStyle'
 function DriverList() {
  return (
  
    <HomeLayout>
      <Box sx={{...driverListyStyle.container}}>
      <Typography variant='h3' sx={{...driverListyStyle.text}}>Driver List</Typography>
        <Box sx={{...driverListyStyle.driverInfoContainer}}>
            <Box sx={{...driverListyStyle.pd}}>
              <DriverInfo/>
            </Box>
            <Box sx={{...driverListyStyle.pd}}>
              <DriverInfo/>
            </Box>
            <Box sx={{...driverListyStyle.pd}}>
              <DriverInfo/>
            </Box>
            <Box sx={{...driverListyStyle.pd}}>
              <DriverInfo/>
            </Box>
        </Box>
       
        <Typography variant='h3' sx={{...driverListyStyle.textDown}}>Driver List</Typography>
        <Box sx={{...driverListyStyle.driverInfoContainer}}>
            <Box sx={{...driverListyStyle.pd}}>
              <DriverInfo/>
            </Box>
            <Box sx={{...driverListyStyle.pd}}>
              <DriverInfo/>
            </Box>
            <Box sx={{...driverListyStyle.pd}}>
              <DriverInfo/>
            </Box>
            <Box sx={{...driverListyStyle.pd}}>
              <DriverInfo/>
            </Box>
        </Box>
      </Box>
    </HomeLayout>
  )
}

export default withAuth(DriverList);