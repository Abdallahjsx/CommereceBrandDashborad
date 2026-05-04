'use client'
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import CustomTextField from "@/components/ui/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/components/ui/forms/theme-elements/CustomFormLabel";

export default function AuthForgotPassword() {
  return (
    <>
      <Stack mt={4} spacing={2}>
        <CustomFormLabel htmlFor="reset-email">Email</CustomFormLabel>
        <CustomTextField id="reset-email" variant="outlined" fullWidth />
        <Button
          color="secondary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          href="/"
        >
          Forgot Password
        </Button>
        <Button
          color="secondary"
          size="large"
          fullWidth
          component={Link}
          href="/auth/auth1/login"
        >
          Back to Login
        </Button>
      </Stack>
    </>
  )
};
