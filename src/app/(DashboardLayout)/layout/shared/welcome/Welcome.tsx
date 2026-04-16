'use client'
import * as React from 'react';
import { Snackbar, Alert, AlertTitle, SnackbarCloseReason, useTheme, IconButton } from '@mui/material';
import { IconX } from '@tabler/icons-react';

const Welcome = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleSnackbarClose = (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    const handleAlertClose = (event: React.SyntheticEvent) => {
        setOpen(false);
    };

    React.useEffect(() => {

        const timer = setTimeout(() => {
            handleClick();
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <React.Fragment>

            <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
            >
                <Alert
                    onClose={handleAlertClose}

                    variant="filled"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleAlertClose}
                        >
                            <IconX width={20} color="white" />
                        </IconButton>
                    }
                    sx={{ backgroundColor: theme.palette.primary.main, }}
                >
                    <AlertTitle>Welcome to NiceAdmin</AlertTitle>
                    Easy to customize the Template!!!
                </Alert>
            </Snackbar >
        </React.Fragment >
    );
};

export default Welcome;
