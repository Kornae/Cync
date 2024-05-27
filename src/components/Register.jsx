import * as React from 'react';
import Divider from '@mui/joy/Divider';
import EastIcon from '@mui/icons-material/East';
import FormControl from '@mui/joy/FormControl';
import FloatingLabelInput from './Password';
import FloatingUsernameLabelInput from './Username';
import FloatingFnameLabelInput from './FName';
import FloatingLnameLabelInput from './LName';

export default function InputField2(props) {
    return (
        <FormControl sx={{ padding: '0px 10px' }}>
            <div className='mb-3 name' style={{ display: 'flex' }}>
                <div className='ma-auto fname' style={{ width: '45%' }}><FloatingFnameLabelInput /></div>
                <div className='ms-auto lname' style={{ width: '45%' }}><FloatingLnameLabelInput /></div>
            </div>
            <div className='mb-3'>
                <FloatingUsernameLabelInput />
            </div>
            <div className='mb-3'>
                <FloatingLabelInput />
            </div>
            <div className='mb-3'>
                <button className="button-27" type="button">register</button>
            </div>

            <div id='mobile-section'>
                <div className='mb-3'>
                    <Divider />
                </div>

                <p className='forgot-btn'>Already have account?</p>

                <div className='mb-3'>
                    <button onClick={props.click2} style={{ fontFamily: 'Poppins', maxWidth: 200, borderRadius: '15px', backgroundColor: 'transparent', color: '#000000', boxShadow: 'none' }} className="button-27" type="button">Sign in <EastIcon sx={{ ml: 1 }} fontSize="xsmall" /></button>
                </div>
            </div>
        </FormControl>
    );
}