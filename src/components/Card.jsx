import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';

export default function GradientCover() {
    return (
        <Card sx={{ minHeight: '280px', width: '100%', borderRadius: '25px', border: 'none' }}>
            <CardCover>
                <img
                    src="https://images.unsplash.com/photo-1550242499-b5171f56de56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    srcSet="https://images.unsplash.com/photo-1550242499-b5171f56de56?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    loading="lazy"
                    alt="'WANDERER ABOVE THE SEA OF FOG' Art Piece"
                />
            </CardCover>
            <CardCover
                sx={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
            />
            <CardContent sx={{ justifyContent: 'center' }}>
                <div id='card' style={{ display: 'grid', textAlign: 'left' }}>
                    <Typography id='heading' fontFamily='Figtree' fontSize='1.1rem' level="title-lg" textColor="#ffffff">
                        About us
                    </Typography>
                    <Typography
                        id='paragraph'
                        fontFamily='Figtree'
                        textColor="#828181"
                        fontSize='1rem'
                    >
                        Dive into a vast reservoir of creativity with over <span className='highlights'>2 million</span> pieces of <span className='highlights'>high-quality</span> artwork, generously provided by the world's most generous community of <span className='highlights'>artists.</span>
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}
