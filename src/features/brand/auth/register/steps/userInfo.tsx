import { useFormik } from "formik";
import { Box, Grid, Typography, Stack } from "@mui/material";
import GeneralInputField from "@/components/ui/inputFields/generalInputField";
import BirthDatePicker from "@/components/ui/inputFields/datePicker";
import GenderField from "@/components/ui/inputFields/genderField";
import { EyeHideIcon, EyeIcon } from "@/components/ui/icons/icons";
import { useEffect, useState } from "react";
import GradientButton from "@/components/ui/buttons/gradientButton";
import UploadProfileImage from "@/components/ui/inputFields/uploadProfileImage";
import { userInfoSchema } from "../schemas/userInfoSchema";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from "@mui/material/styles";
import { Dayjs } from "dayjs";
import { useRegister } from "../hooks/useRegister";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/authContext";
import { useContext } from "react";
export default function UserInfo({ setActiveStep }: { setActiveStep: (step: number) => void }) {
    const { setEmail } = useContext(AuthContext);
    const router = useRouter();
    const [seen, setSeen] = useState<boolean>(false)
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
    const [isDisabled, setIsDisabled] = useState<boolean>(false) // will be disabled when we fire the api call to prevent multiple submissions
    const { mutateAsync: register, isPending, errorMessage, isError } = useRegister(callBackOnSuccess);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            birthDate: null,
            gender: "male",
            profileImage: null,
        },
        validationSchema: userInfoSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values) => {
            // console.log(values);
            setIsDisabled(true)
            await register(values)
        },
    });
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Only allow digits
        const value = e.target.value.replace(/\D/g, '');
        formik.setFieldValue("phone", value);
    };
    const handleBirthDateChange = (value: Dayjs | null) => {
        formik.setFieldValue("birthDate", value, true);
        formik.setFieldTouched("birthDate", true, false);
    };
    function callBackOnSuccess() {
        setEmail(formik.values.email);
        router.push(`/auth/verification`);
    }

    useEffect(() => {
        setIsDisabled(false)
    }, [isError])
    return (
        <Box sx={{ width: "100%" }}>
            <Grid container spacing={1} sx={{ flexDirection: "column" }} p={"16px"}>
                <Grid display={"flex"} justifyContent={"center"}>
                    <UploadProfileImage value={formik.values.profileImage} onChange={(e) => formik.setFieldValue("profileImage", e.target.files?.[0])} error={formik.touched.profileImage && !!formik.errors.profileImage} helperText={formik.errors.profileImage} />
                </Grid>
                {/* first name and last name  */}
                <Grid display={"flex"} gap={2} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
                    <GeneralInputField name="firstName" label="First Name" type="text" placeholder="First Name" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.firstName && !!formik.errors.firstName} helperText={formik.errors.firstName} disabled={false} />
                    <GeneralInputField name="lastName" label="Last Name" type="text" placeholder="Last Name" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.lastName && !!formik.errors.lastName} helperText={formik.errors.lastName} disabled={false} />
                </Grid>
                {/* phone and email  */}

                <Grid display={"flex"} gap={2} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
                    <GeneralInputField name="phone" label="Phone" type="tel" placeholder="e.g 10xxxxxxxx" value={formik.values.phone} onChange={handlePhoneChange} error={formik.touched.phone && !!formik.errors.phone} helperText={formik.errors.phone} disabled={false} fixedString="+20" onBlur={formik.handleBlur} />
                    <GeneralInputField name="email" label="Email" type="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} error={formik.touched.email && !!formik.errors.email} helperText={formik.errors.email} disabled={false} onBlur={formik.handleBlur} />
                </Grid>
                {/* Password and confirm password  */}
                <Grid display={"flex"} gap={2} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
                    <GeneralInputField name="password" label="Password" type={seen ? "text" : "password"} placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onFocus={() => formik.setFieldTouched("password", true)} onBlur={formik.handleBlur} error={formik.touched.password && !!formik.errors.password} helperText={formik.errors.password} disabled={false}
                        icon={seen ? <EyeHideIcon style={{ cursor: "pointer" }} onClick={() => setSeen(false)} /> : <EyeIcon style={{ cursor: "pointer" }} onClick={() => setSeen(true)} />}
                    />
                    <GeneralInputField name="confirmPassword" label="Confirm Password" type={seen ? "text" : "password"} placeholder="Confirm Password" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.confirmPassword && !!formik.errors.confirmPassword} helperText={formik.errors.confirmPassword} disabled={false}
                        icon={seen ? <EyeHideIcon style={{ cursor: "pointer" }} onClick={() => setSeen(false)} /> : <EyeIcon style={{ cursor: "pointer" }} onClick={() => setSeen(true)} />}
                    />
                </Grid>
                {/* date of birth and gender  */}
                <Grid display={"flex"} gap={2} width={"100%"} flexDirection={isMobile ? "column" : "row"}>
                    <BirthDatePicker value={formik.values.birthDate} onChange={handleBirthDateChange} error={formik.touched.birthDate && !!formik.errors.birthDate} helperText={formik.errors.birthDate} />
                    <GenderField selectedGender={formik.values.gender} setSelectedGender={(val) => { formik.setFieldValue("gender", val); }} error={formik.touched.gender && !!formik.errors.gender} helperText={formik.errors.gender} />
                </Grid>
            </Grid>
            <Stack direction={"column"} alignItems={"center"} gap={"2px"}>
                <Typography color="error" variant="h6"
                    fontWeight={500}
                    fontSize={16}
                >
                    {isError && errorMessage}
                </Typography>
                <Box display={"flex"} justifyContent={"center"} mt={"20px"} sx={{ width: { xs: "100%", md: "50%" } }} mx={"auto"}>
                    <GradientButton onClick={formik.handleSubmit} disabled={isDisabled} borderRadius="10px" width="100%" height="100%" >
                        {isPending ? <CircularProgress size={24} sx={{ color: "white", margin: "10px" }} /> : <Typography
                            variant="h6"
                            fontWeight={500}
                            fontSize={16}
                            color="white"
                            padding="10px"
                        >
                            Register
                        </Typography>}
                    </GradientButton>
                </Box>
            </Stack>

        </Box>
    )
}