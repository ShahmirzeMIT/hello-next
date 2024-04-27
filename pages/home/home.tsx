import { Box,  Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HomeLayout from '../layout/homeLayout/HomeLayout'
import { useRouter } from 'next/router'
import {homeStyle} from './styles/homeStyle'
export default function Home() {
    const [checkUser, setCheckUser] = useState(false)
    const router = useRouter()

    useEffect(() => {
            const user = localStorage.getItem("userToken")
            console.log(user,'user');
            
            if (user==null) {
                setCheckUser(false)
                router.push("/sign/login")
            } else {
                setCheckUser(true)
            }
        
    }, [router])

    return (
        <>{
            checkUser?  (
            <HomeLayout>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
                        <Box sx={{...homeStyle.homeBg}}>

                        </Box>
                </Grid>
            </HomeLayout>
            )
            
            
            
            :<></>
        }
        </>
        
       
    )
}
