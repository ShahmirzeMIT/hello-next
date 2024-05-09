import React from 'react';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardImg from '../../../public/assets/onvo-elektrikli-scooter-ov-007-kcm59803708-1-1b9d17fd07ba428e85307cc8d11ffd42.jpg';
import { rentStyle } from './style/rentStyle';
import { Box, Typography,Button } from '@mui/material';


export default function Rent() {
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <Box sx={{display:'flex',flexDirection:'column',width:'345px'}}>
        <Card sx={{ ...rentStyle.card}}>
                    <CardActionArea
                        sx={{ ...rentStyle.cardAction }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="overlay-container" style={{ position: 'relative' ,borderRadius:'20px'}}>
                            <Image
                                src={CardImg}
                                alt="green iguana"
                                layout="responsive"
                                style={{ ...rentStyle.image}}
                                
                            />
                            <div
                                className="overlay"
                                style={{
                                    ...rentStyle.overlay,
                                    opacity: hovered ? 1 : 0,
                                    transition: 'opacity 0.5s ease',
                                }}
                            ></div>
                        </div>
                    </CardActionArea>
                </Card>
                <Typography sx={{...rentStyle.typography1}}>Lorem ipsum dolor sit amet consectetur</Typography>
                <Typography sx={{...rentStyle.typography2}}>Lorem  150/hour</Typography>
                <Button sx={{...rentStyle.btn}}>Rent Now</Button>
        </Box>
       
    );
}