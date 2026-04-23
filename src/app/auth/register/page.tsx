'use client'
import { Grid, Box, Card, Typography, LinearProgress } from "@mui/material";
import Image from "next/image";

import PageContainer from "@/components/ui/container/PageContainer";


import AuthPageContainer from "@/features/auth/authPageContainer/authPageContainer";
import MainStepper from "@/features/auth/register/steps/mainStepper";
import UserInfo from "@/features/auth/register/steps/userInfo";
import Interests from "@/features/auth/register/steps/interests";
import BrandInfo from "@/features/auth/register/steps/brandInfo";
import Verification from "@/features/auth/register/steps/verification";
import Success from "@/features/auth/register/steps/success";
import { useState } from "react";
import Button from "@mui/material/Button";


export default function Register2() {

  const [activeStep, setActiveStep] = useState(1);
  function renderStep() {
    switch (activeStep) {
      case 1:
        return <UserInfo setActiveStep={setActiveStep} />
      case 2:
        return <Interests />
      case 3:
        return <BrandInfo setActiveStep={setActiveStep} />
      case 4:
        return <Verification setActiveStep={setActiveStep} />
      case 5:
        return <Success />
    }
  }
  return (

    <PageContainer title="Register Page" description="this is Sample page">

      <AuthPageContainer>
        <Grid
          zIndex={1}
          container
          spacing={7}
          justifyContent="flex-start"
          alignItems="center"
          sx={{ minHeight: "100vh", flexDirection: "column" }}
          py={"10px"}
        >
          <Grid width={{ xs: "90%", sm: "80%", md: "50vw" }} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Card sx={{ p: { xs: 1, sm: 2 } }}>
              <MainStepper activeStep={activeStep - 1} />
            </Card>
          </Grid>
          <Grid
            width={{ xs: "95vw", md: "80vw" }}
            // width={"fit-content"}
            display="flex"
            justifyContent="center"
            alignItems={{ xs: "center", md: "flex-start" }}
            sx={{ flex: 1, p: { xs: 1, sm: 3 } }}>

            <Card
              sx={{ boxShadow: '0px 3px 6px 0px #0000000A', width: "fit-content" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Image
                  src={'/images/logo/mainLogo.svg'}
                  alt='logo'
                  height={120}
                  width={120}
                  style={{ maxWidth: "320px", maxHeight: "320px", width: "50%", height: "50%" }}
                />
              </Box>
              <Button onClick={() => setActiveStep(activeStep - 1)}>Back</Button>
              <Button onClick={() => setActiveStep(activeStep + 1)}>Next</Button>
              <Box sx={{ display: { xs: 'block', md: 'none' }, px: 4 }} textAlign={"center"}>
                <Typography variant="body1" sx={{ color: "primary.main", fontWeight: "600", mb: 1 }}>
                  Step {activeStep} of 5
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(activeStep / 5) * 100}
                  sx={{
                    height: 8,
                    borderRadius: 5,
                    bgcolor: "rgba(0, 0, 0, 0.05)",
                    "& .MuiLinearProgress-bar": {
                      borderRadius: 5,
                      bgcolor: "primary.main",
                    },
                  }}
                />
              </Box>
              <Box display={"flex"} justifyContent={"center"} mt={6}>
                {renderStep()}
              </Box>

            </Card>

          </Grid>

        </Grid>
      </AuthPageContainer>


    </PageContainer >

  );
}
