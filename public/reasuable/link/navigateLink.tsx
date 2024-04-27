import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import {navigateStyle} from './style/navigateStyle'
import { useRouter } from 'next/router'
interface Props{
    data:{
        text: string
        url: string
    }
}
export default function NavigateLink({data}:Props) {
    const router=useRouter();

  const handleClick=()=>{
    router.push(data.url)
  }
  return (
   <Box sx={{...navigateStyle.link}} onClick={handleClick}>{data.text}</Box>
  )
}
