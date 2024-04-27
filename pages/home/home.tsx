import { Box,  Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HomeLayout from '../layout/homeLayout/HomeLayout'
import { useRouter } from 'next/router'
import {homeStyle} from '../../public/home/styles/homeStyle'
import styles from './styles/homStyle.module.css'
import SearchInput from '../../public/reasuable/input/searchInput'
import ReausableButton from '../../public/reasuable/button/reausableButton'
import homeChanges from './homeChanges'
import Rent from '../../public/reasuable/rent/Rent'
import Suggest from '../../public/reasuable/suggest/Suggest'
export default function Home() {
    const {searchData,setSearchData,btn }=homeChanges()
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
                        <Box className={styles.homeBg}>
                            <Box sx={{...homeStyle.homeBg}}>
                                <SearchInput data={searchData.pick} />
                                <br />
                                 <SearchInput data={searchData.drop} />
                                <br />
                                <Box>
                                    <ReausableButton data={btn} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{...homeStyle.rentBox}}>
                            <Typography variant='h5' sx={{...homeStyle.rentText}}>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Impedit, praesentium!</Typography>
                            <br />
                            <Box sx={{...homeStyle.rent}}>
                                <Rent/>
                                <Rent/>
                                <Rent/>
                            </Box>
                             
                        </Box>

                        <Box sx={{...homeStyle.suggestBox}}>
                            <Typography variant='h3' sx={{...homeStyle.suggestText}}>Why Safely</Typography>
                            <Box sx={{...homeStyle.suggest}}>
                                <Suggest/>
                                <Suggest/>
                                <Suggest/>
                            </Box>
                        </Box>
                </Grid>
            </HomeLayout>
            )
            
            
            
            :<></>
        }
        </>
        
       
    )
}
