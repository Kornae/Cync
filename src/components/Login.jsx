import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import InputField from './Form';
import InputField2 from './Register';
import Typography from '@mui/joy/Typography';

export default function CardVariants(props) {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 450,
            }}
        >
            <Card variant="solid" sx={{ borderRadius: '25px', bgcolor: '#FFFFFF' }}>
                <CardContent>

                    {props.user ? <>
                        <div className='mb-2 mt-3'>
                            <Typography level="title-md" sx={{ fontWeight: '600', fontFamily: 'Poppins' }}>Create new account</Typography>
                        </div>

                        <InputField2
                            user={props.user}
                        /></> :
                        <>
                            <div className='mb-2 mt-3'>
                                <Typography level="title-md" sx={{ fontWeight: '600', fontFamily: 'Poppins' }}>Login to your account</Typography>
                            </div>

                            <InputField
                                user={props.user} /></>}
                </CardContent>
            </Card>
        </Box>
    );
}