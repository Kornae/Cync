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
            <Card variant="soft" sx={{ borderRadius: '25px', bgcolor: '#FFFFFF' }}>
                <CardContent>
                    {props.user ? <>
                        <div className='mb-2 mt-3'>
                            <Typography level="title-md" sx={{ fontWeight: '600', fontFamily: 'Figtree' }}>Create new account</Typography>
                        </div>
                        <InputField2
                            user={props.user}
                            click2={props.click2}
                        /></> :
                        <>
                            <div className='mb-2 mt-3'>
                                <Typography level="title-md" sx={{ fontWeight: '600', fontFamily: 'Figtree' }}>Login to your account</Typography>
                            </div>
                            <InputField
                                user={props.user}
                                click={props.click}
                            /></>}
                </CardContent>
            </Card>
        </Box>
    );
}