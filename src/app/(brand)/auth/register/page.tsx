'use client'
import { Grid, Box, Card, Typography, LinearProgress, Stack } from "@mui/material";
import Image from "next/image";

import PageContainer from "@/components/ui/container/PageContainer";


import AuthPageContainer from "@/features/brand/auth/authPageContainer/authPageContainer";
import MainStepper from "@/features/brand/auth/register/steps/mainStepper";
import UserInfo from "@/features/brand/auth/register/steps/userInfo";
import Interests from "@/features/brand/auth/register/steps/interests";
import BrandInfo from "@/features/brand/auth/register/steps/brandInfo";
import Verification from "@/features/brand/auth/register/steps/verification";
import Success from "@/features/brand/auth/register/steps/success";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { AuthContext, AuthContextType } from "@/context/authContext/index";


export default function Register2() {

  const { step, setStep, setVerificationErrorState, setEmail, setVerificationTimer }: AuthContextType = useContext(AuthContext);

  // clear the verification state when leaving the page
  useEffect(() => {
    return () => {
      setVerificationErrorState(false);
      setVerificationTimer(60);
      // setEmail("");
    };
  }, []);
  function renderStep() {
    switch (step) {
      case 1:
        return <UserInfo setActiveStep={setStep} />
      case 2:
        return <Interests />
      case 3:
        return <BrandInfo setActiveStep={setStep} />
      case 4:
        return <Verification setActiveStep={setStep} />
      case 5:
        return <Success />
    }
  }
  return (

    <PageContainer title="Register Page" description="this is Sample page">

      <AuthPageContainer>
        <Stack
          zIndex={1}
          gap={2}
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh", flexDirection: "column" }}
          py={{ xs: "0px", sm: "10px", md: "10px" }}
          px={{ xs: "0px", sm: "5px", md: "10px" }}
          mx={"0px"}
          width={{ xs: "100vw", sm: "90vw", md: "70vw", lg: "50vw" }}
        >
          <Box width={"100%"} sx={{ display: { xs: 'none', md: 'block' } }} >
            <Card sx={{ p: { xs: 1, sm: 2 } }}>
              <MainStepper activeStep={Number(step) - 1} />
            </Card>
          </Box>

          <Card
            sx={{ boxShadow: '0px 3px 6px 0px #0000000A', width: "100%", borderRadius: { xs: "0px", sm: "16px" }, display: "flex", flexDirection: "column", my: "0px !important", backgroundColor: "white", minHeight: { xs: "100vh", sm: "auto" } }}
          >
            <Box display="flex" alignItems="center" justifyContent="center" >
              <Image
                src={'/images/logo/mainLogo.svg'}
                alt='logo'
                height={120}
                width={120}
                style={{ maxWidth: "320px", maxHeight: "320px", width: "50%", height: "50%" }}
              />
            </Box>
            <Box>
              <Button onClick={() => setStep(Number(step) - 1)}>Back</Button>
              <Button onClick={() => setStep(Number(step) + 1)}>Next</Button>
            </Box>

            <Box sx={{ display: { xs: 'block', md: 'none' }, px: 4, mb: 7 }} textAlign={"center"}>
              <Typography variant="body1" sx={{ color: "primary.main", fontWeight: "600", mb: 1 }}>
                Step {step} of 5
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(step / 5) * 100}
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
            <Box width={"100%"} flexGrow={1} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              {renderStep()}
            </Box>

          </Card>

        </Stack>
      </AuthPageContainer>


    </PageContainer >

  );
}
