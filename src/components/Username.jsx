import * as React from 'react';
import Input from '@mui/joy/Input';
import { styled } from '@mui/joy/styles';

const StyledInput = styled('input')({
    border: 'none',
    minWidth: 0,
    outline: 0,
    padding: 0,
    paddingTop: '1em',
    flex: 1,
    color: 'inherit',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontStyle: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    textOverflow: 'ellipsis',
    '&::placeholder': {
        opacity: 0,
        transition: '0.1s ease-out',
    },
    '&:focus::placeholder': {
        opacity: 1,
    },
    '&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
        top: '0.5rem',
        fontSize: '0.75rem',
    },
    '&:focus ~ label': {
        color: '#878787',
    },
    '&:-webkit-autofill': {
        alignSelf: 'stretch',
    },
    '&:-webkit-autofill:not(* + &)': {
        marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
        paddingInlineStart: 'var(--Input-paddingInline)',
        borderTopLeftRadius:
            'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
        borderBottomLeftRadius:
            'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
    },
});

const StyledLabel = styled('label')(({ theme }) => ({
    position: 'absolute',
    lineHeight: 1,
    top: 'calc((var(--Input-minHeight) - 1em) / 2)',
    color: '#898989',
    fontWeight: theme.vars.fontWeight.md,
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const InnerInput = React.forwardRef(function InnerInput(props, ref) {
    const id = React.useId();
    return (
        <React.Fragment>
            <StyledInput {...props} ref={ref} id={id} />
            <StyledLabel htmlFor={id}>Email</StyledLabel>
        </React.Fragment>
    );
});

export default function FloatingUsernameLabelInput() {
    return (
        <Input
            slots={{ input: InnerInput }}
            slotProps={{ input: { placeholder: '', type: 'email' } }}
            sx={{
                border: 'none',
                boxShadow: 'none !important',
                backgroundColor: '#FFFFFF',
                borderBottom: '1px solid #E8E8E8',
                borderRadius: '0px',
                '--Input-minHeight': '56px',
                '--Input-radius': '6px',
            }}
        />
    );
}