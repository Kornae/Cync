import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FloatingLabelInput from './Password';
import FloatingUsernameLabelInput from './Username';
import OfficialCheckbox from './Checkbox';

export default function InputField(props) {
    return (
        <FormControl sx={{ padding: '0px 10px' }}>
            <div className='mb-3'>
                <FloatingUsernameLabelInput />
            </div>
            <div className='mb-3'>
                <FloatingLabelInput />
            </div>
            <div className='mb-3 flex-display' style={{ marginTop: '10px' }}>
                <OfficialCheckbox
                    user={props.user}
                />
                <div className='forgot-btn flex-display ms-auto' style={{ fontSize: '.8rem', fontWeight: '500' }}>Forgot your password?</div>
            </div>
            <div className='mb-3'>
                <button className="button-27" type="button">login</button>
            </div>
        </FormControl>
    );
}








