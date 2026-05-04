'use client'
import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props: any) => <TextField
  type={props?.type}
  sx={{
    '& .MuiOutlinedInput-root': {
      backgroundColor: "white",
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #bdbdbdff',
      borderColor: props.error ? "red" : "#bdbdbdff"

    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  }} {...props}
  onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
    props.onBlur && props.onBlur(e);
  }}
  onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
    props.onFocus && props.onFocus(e);
  }}
/>)(({ theme }) => ({
  '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
    opacity: '0.8',
  },
  '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
    opacity: '1',

  },
}));

export default CustomTextField;
