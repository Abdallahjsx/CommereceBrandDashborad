import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'User Info',
    'Interests',
    'Brand Info',
    'Verification',
    'Success',
];

export default function MainStepper({ activeStep }: { activeStep: number }) {
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper
                activeStep={activeStep}
                alternativeLabel
                color='primary'
            >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}


