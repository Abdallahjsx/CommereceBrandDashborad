import dayjs from 'dayjs';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from 'react';
import { Dayjs } from 'dayjs';
import { Box, Typography } from "@mui/material";
import { CalendarIcon } from '../icons/icons';

export default function BirthDatePicker({ value, onChange, error, helperText, onBlur }: { value: Dayjs | null, onChange: (value: Dayjs | null) => void, error: boolean | undefined, helperText: string | undefined, onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void }) {
    const [open, setOpen] = useState(false);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography variant="body1" sx={{ fontWeight: "500", color: "primary.main" }}>Date of Birth</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={value}
                    onChange={onChange}
                    open={open}
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    slots={{
                        openPickerIcon: CalendarIcon,
                    }}
                    slotProps={{
                        textField: {
                            onClick: () => setOpen(true),
                            onBlur: onBlur,
                            error: !!error,
                            sx: {
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: '7px',
                                    border: '1px solid !important',
                                    borderColor: error ? 'red !important' : '#0000001A !important',
                                    paddingRight: '10px',
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                    '&:hover': {
                                        borderColor: error ? 'red !important' : '#0000001A !important',
                                    },
                                    '&.Mui-focused': {
                                        borderColor: error ? 'red !important' : '#1B2351 !important',
                                    },
                                    cursor: 'pointer',
                                },
                                '& .MuiInputBase-input': {
                                    padding: '10px',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    color: '#000',
                                    cursor: 'pointer',
                                },
                            },
                        },
                        popper: {
                            sx: {
                                '& .MuiPaper-root': {
                                    borderRadius: '12px',
                                    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)',
                                    marginTop: '8px',
                                },
                                '& .MuiPickersDay-root': {
                                    color: '#1B2351 !important', // Force primary color for all states
                                    fontWeight: '500',
                                    transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                    '&:hover': {
                                        backgroundColor: '#47C0D233', // Light secondary on hover
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: '#47C0D2 !important', // Secondary background
                                        color: '#1B2351 !important', // Ensure primary text even when selected
                                        fontWeight: '700',
                                    },
                                    '&.Mui-selected:hover': {
                                        backgroundColor: '#47C0D2CC !important',
                                    },
                                    '&.Mui-selected:focus': {
                                        backgroundColor: '#47C0D2 !important',
                                    },
                                    '&:focus': {
                                        backgroundColor: 'transparent',
                                        color: '#1B2351 !important',
                                    },
                                },
                                '& .MuiPickersDay-today': {
                                    borderColor: '#1B2351 !important', // Primary border for today
                                },
                                '& .MuiTypography-root': {
                                    color: '#1B2351', // Header/Weekday names in primary
                                },
                                '& .MuiIconButton-root': {
                                    color: '#1B2351', // Nav arrows in primary
                                },
                            },
                        },
                    }}
                />
            </LocalizationProvider>
            {error && <Typography variant="body2" color="error" mt={"2px"}>{helperText}</Typography>}
        </Box>
    );
}
