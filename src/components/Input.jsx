import * as React from 'react';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';

export default function BasicInput() {
    return <Input startDecorator={<SearchIcon />} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50px', bgcolor: '#E6E6E6', border: 'none' }} id='search' className='form-control me-2' placeholder="Try 'Starry Night'" />;
}