import * as React from 'react';
import Divider from '@mui/joy/Divider';
import EastIcon from '@mui/icons-material/East';
import FormControl from '@mui/joy/FormControl';
import FloatingLabelInput from './Password';
import FloatingUsernameLabelInput from './Username';

export default function InputField(props) {
    return (
        <FormControl sx={{ padding: '0px 10px' }}>
            <div className='mb-3'>
                <FloatingUsernameLabelInput />
            </div>
            <div className='mb-3'>
                <FloatingLabelInput />
            </div>
            <div className='mb-3'>
                <button className="button-27" type="button">login</button>
            </div>
            <p className='forgot-btn'>Forgot password?</p>
            <div id='mobile-section'>
                <div className='mb-3'>
                    <Divider />
                </div>

                <p className='forgot-btn'>Don't have account?</p>

                <div className='mb-3'>
                    <button onClick={props.click} style={{ fontFamily: 'Poppins', maxWidth: 200, borderRadius: '15px', backgroundColor: 'transparent', color: '#000000', boxShadow: 'none' }} className="button-27" type="button">Create account <EastIcon sx={{ ml: 1 }} fontSize="xsmall" /></button>
                </div>
            </div>
        </FormControl>
    );
}








