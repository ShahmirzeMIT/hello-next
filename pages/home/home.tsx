import { CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HomeLayout from '../layout/homeLayout/HomeLayout'
import { useRouter } from 'next/router'

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
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat laboriosam perspiciatis aspernatur iure sit voluptates, et corporis, blanditiis quae magni assumenda nesciunt, nam perferendis eaque error molestiae? Iure commodi dolorum debitis dolore velit harum in. Blanditiis unde, repudiandae sit vitae sunt saepe dicta corrupti laborum illo fugiat sapiente neque doloremque vero asperiores esse vel fugit? Dolorem quibusdam illo, iure ab ut accusamus doloremque harum deleniti accusantium doloribus temporibus aperiam, dolor aspernatur a? Esse, velit repudiandae a at nostrum consequatur perferendis nisi. Delectus ipsam eius magnam animi aspernatur quibusdam! Hic, ipsa nemo? Sunt asperiores sint, explicabo aliquid consequatur quaerat. Perferendis, optio?</h1>
            </HomeLayout>
            )
            
            
            
            :<></>
        }
        </>
        
       
    )
}
