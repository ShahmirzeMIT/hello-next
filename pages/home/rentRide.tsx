import { Box } from '@mui/material'
import React from 'react'
import {rentRideStyle} from '../../public/pageStyles/rentRideStyle'
import HomeLayout from '../layout/homeLayout/HomeLayout'
import { Typography } from '@mui/material'
import DriverInfo from '@/public/reasuable/driverInfo/DriverInfo'
import InputText from '@/public/reasuable/input/inputText'
import ReausableButton from '@/public/reasuable/button/reausableButton'
import rentChanges from '@/public/propsChanges/rentRide/rentChanges'
import withAuth from '@/public/utils/withAuth'
 function RentRide() {
    const {ride,setRide, btn,setBtn}=rentChanges()
  return (
    <HomeLayout>
          <Box sx={{...rentRideStyle.firstContainer}}>
            <Box sx={{...rentRideStyle.container}}>
                <Box sx={{}}>
                        <Typography variant='h3' sx={{...rentRideStyle.text}}>Confirm The Ride</Typography>
                        <Box sx={{...rentRideStyle.inputContaner}}>
                            <InputText data={ride.from}/>
                            <InputText data={ride.to}/>
                        </Box>
                        <Box sx={{...rentRideStyle.inputContaner}}>
                            <InputText data={ride.distance}/>
                            <InputText data={ride.time}/>
                        </Box>
                        <Box sx={{...rentRideStyle.inputContaner}}>
                            <InputText data={ride.amount}/>
                            <InputText data={ride.tip}/>
                        </Box>
                        <Box sx={{...rentRideStyle.btn}}>
                            <ReausableButton data={btn.bookRide}/>
                            <ReausableButton data={btn.goBack}/>
                        </Box>
                 
                </Box>
                <Box sx={{marginBottom:'40px'}}>
                       <DriverInfo/>
                </Box>

            </Box>
            
        </Box>
    </HomeLayout>
    
  )
}

export default withAuth(RentRide);