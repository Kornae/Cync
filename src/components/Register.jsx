import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FloatingLabelInput from './Password';
import FloatingUsernameLabelInput from './Username';
import FloatingFnameLabelInput from './FName';
import FloatingLnameLabelInput from './LName';
import OfficialCheckbox from './Checkbox';

export default function InputField2(props) {
    return (
        <FormControl sx={{ padding: '0px 10px' }}>
            <div className='mb-3' style={{ display: 'flex' }}>
                <div className='ma-auto' style={{ width: '45%' }}><FloatingFnameLabelInput /></div>
                <div className='ms-auto' style={{ width: '45%' }}><FloatingLnameLabelInput /></div>
            </div>
            <div className='mb-3'>
                <FloatingUsernameLabelInput />
            </div>
            <div className='mb-3'>
                <FloatingLabelInput />
            </div>
            <div className='mb-4' style={{ display: 'flex', marginTop: '15px' }}>
                <OfficialCheckbox
                    user={props.user}
                />
            </div>
            <div className='mb-3'>
                <button className="button-27" type="button">register</button>
            </div>
        </FormControl>
    );
}