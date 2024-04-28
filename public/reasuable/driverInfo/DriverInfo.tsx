import React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardImg from '../../../public/assets/28971599-young-cheerful-girl-driving-scooter-in-in-european-city.jpg';
import { driverInfoStyle } from './style/driverInfoStyle';
import { Box, Typography,Button } from '@mui/material';


export default function DriverInfo() {
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <Box sx={{display:'flex',flexDirection:'column',width:'245px'}}>
        <Card sx={{ ...driverInfoStyle.card}}>
                    <CardActionArea
                        sx={{ ...driverInfoStyle.cardAction }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="overlay-container" style={{ position: 'relative' ,borderRadius:'20px'}}>
                            <Image
                                src={CardImg}
                                alt="green iguana"
                                layout="responsive"
                                style={{ ...driverInfoStyle.image}}
                                
                            />
                            <div
                                className="overlay"
                                style={{
                                    ...driverInfoStyle.overlay,
                                    opacity: hovered ? 1 : 0,
                                    transition: 'opacity 0.5s ease',
                                }}
                            ></div>
                        </div>
                    </CardActionArea>
                </Card>
                <Typography sx={{...driverInfoStyle.typography1}}>Driver Name: Mary Jane</Typography>
                <Typography sx={{...driverInfoStyle.typography2}}>Vehicle: scooter</Typography>
                <Typography sx={{...driverInfoStyle.typography2}}>Driver Id:4732873843289</Typography>
                <Button sx={{...driverInfoStyle.btn}}>Rent Now</Button>
        </Box>
       
    );
}