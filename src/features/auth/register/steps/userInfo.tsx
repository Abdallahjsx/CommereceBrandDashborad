import { useFormik } from "formik";
import { Box, Grid, Typography } from "@mui/material";
import GeneralInputField from "@/components/ui/inputFields/generalInputField";
import BirthDatePicker from "@/components/ui/inputFields/datePicker";
import GenderField from "@/components/ui/inputFields/genderField";
import { EyeHideIcon, EyeIcon } from "@/components/ui/icons/icons";
import { useState } from "react";
import GradientButton from "@/components/ui/buttons/gradientButton";
import UploadProfileImage from "@/components/ui/inputFields/uploadProfileImage";
import { userInfoSchema } from "../schemas/userInfoSchema";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from "@mui/material/styles";
import { AddIcon } from "@/app/components/icons/icons";
export default function UserInfo({ setActiveStep }: { setActiveStep: (step: number) => void }) {
    const [seen, setSeen] = useState<boolean>(false)
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            birthDate: null,
            gender: "",
            profileImage: null,
        },
        validationSchema: userInfoSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (values) => {
            console.log(values);
            setActiveStep(3);
        },
    });
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container spacing={2} sx={{ flexDirection: "column" }} p={"16px"}>
                <Grid display={"flex"} justifyContent={"center"}>
                    <UploadProfileImage value={formik.values.profileImage} onChange={(e) => formik.setFieldValue("profileImage", e.target.files?.[0])} error={formik.touched.profileImage && !!formik.errors.profileImage} helperText={formik.errors.profileImage} />
                </Grid>
                <Grid display={"flex"} gap={2} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
                    <GeneralInputField label="First Name" type="text" placeholder="First Name" value={formik.values.firstName} onChange={(e) => { formik.setFieldValue("firstName", e.target.value); formik.setFieldTouched("firstName", true); }} error={formik.touched.firstName && !!formik.errors.firstName} helperText={formik.errors.firstName} disabled={false} onBlur={formik.handleBlur("firstName")} />
                    <GeneralInputField label="Last Name" type="text" placeholder="Last Name" value={formik.values.lastName} onChange={(e) => { formik.setFieldValue("lastName", e.target.value); formik.setFieldTouched("lastName", true); }} error={formik.touched.lastName && !!formik.errors.lastName} helperText={formik.errors.lastName} disabled={false} onBlur={formik.handleBlur("lastName")} />
                </Grid>

                <Grid width={"100%"}>
                    <GeneralInputField label="Phone" type="tel" placeholder="Phone" value={formik.values.phone} onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        formik.setFieldValue("phone", value);
                        formik.setFieldTouched("phone", true);
                    }} error={formik.touched.phone && !!formik.errors.phone} helperText={formik.errors.phone} disabled={false} fixedString="+20" onBlur={formik.handleBlur("phone")} />
                </Grid>
                <Grid display={"flex"} gap={2} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
                    <GeneralInputField label="Email" type="email" placeholder="Email" value={formik.values.email} onChange={(e) => { formik.setFieldValue("email", e.target.value); formik.setFieldTouched("email", true); }} error={formik.touched.email && !!formik.errors.email} helperText={formik.errors.email} disabled={false} onBlur={formik.handleBlur("email")} />
                    <GeneralInputField label="Password" type={seen ? "text" : "password"} placeholder="Password" value={formik.values.password} onChange={(e) => { formik.setFieldValue("password", e.target.value); formik.setFieldTouched("password", true); }} error={formik.touched.password && !!formik.errors.password} helperText={formik.errors.password} disabled={false} onBlur={formik.handleBlur("password")}
                        icon={seen ? <EyeHideIcon style={{ cursor: "pointer" }} onClick={() => setSeen(false)} /> : <EyeIcon style={{ cursor: "pointer" }} onClick={() => setSeen(true)} />}

                    />
                </Grid>
                <Grid display={"flex"} gap={2} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
                    <BirthDatePicker value={formik.values.birthDate} onChange={(value) => { formik.setFieldValue("birthDate", value); formik.setFieldTouched("birthDate", true); }} error={formik.touched.birthDate && !!formik.errors.birthDate} helperText={formik.errors.birthDate} onBlur={formik.handleBlur("birthDate")} />
                    <GenderField selectedGender={formik.values.gender} setSelectedGender={(val) => { formik.setFieldValue("gender", val); formik.setFieldTouched("gender", true); }} error={formik.touched.gender && !!formik.errors.gender} helperText={formik.errors.gender} />
                </Grid>
            </Grid>
            <Box display={"flex"} justifyContent={"center"} mt={"20px"} sx={{ width: { xs: "100%", md: "50%" } }} mx={"auto"}>
                <GradientButton onClick={formik.handleSubmit} disabled={false} borderRadius="10px" width="100%" height="100%" >
                    <Typography
                        variant="h6"
                        fontWeight={500}
                        fontSize={16}
                        color="white"
                        padding="10px"
                    >
                        Register
                    </Typography>
                </GradientButton>
            </Box>

        </Box>
    )
}