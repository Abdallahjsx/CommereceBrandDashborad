import { Box, Typography, Card, Stack } from "@mui/material";
import { IDIcon } from "@/components/icons/icons";
import Grid from "@mui/material/Grid";
import GeneralInputField from "@/components/inputFields/generalInputField";
import { useState } from "react";
import { LampIcon, CheckIcon } from "@/components/icons/icons";
import { useFormik } from "formik";
import ImageCardUploader from "@/components/inputFields/imageCardUploader";
import GradientButton from "@/components/buttons/gradientButton";
import { verificationSchema } from "../schemas/verificationSchema";



const tips = ["Ensure your face and the ID are both clearly visible and in focus.", "Avoid glares or reflections on the ID card surface", "Use a neutral, well-lit background with no other people present."]



export default function Verification({ setActiveStep }: { setActiveStep: (step: number) => void }) {
    const [test, setTest] = useState("")
    const formik = useFormik({
        initialValues: {
            fullName: "",
            nationalId: "",
            taxNumber: "",
            frontId: null,
            backId: null,
            selfie: null,
        },
        validationSchema: verificationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Box display={"flex"} flexDirection={"column"} gap={2} sx={{ width: { xs: '100vw', sm: '70vw' } }}>
            <Typography variant="h2" sx={{ fontWeight: "800", color: "primary.main", mb: "16px", fontSize: "40px" }}>Identity Verification</Typography>
            <Typography variant="body2" sx={{ fontWeight: "400", color: "primary.main" }}>To ensure the integrity of
                <strong> ALLUVO</strong> ecosystem, please provide legal
                identification documents. Your data is encrypted and used solely for ownership verification
                purposes.</Typography>

            <Stack flexDirection={{ xs: "column", md: "row" }} gap={2}>
                {/* first card  */}
                <Card sx={{ bgcolor: "#F6F3EC", maxWidth: { xs: "100%", md: "70%" }, display: "flex", flexDirection: "column", gap: 1, padding: "32px", borderRadius: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IDIcon />
                        <Typography variant="h6" sx={{ fontWeight: "600", color: "primary.main", mt: "4px" }}>Legal Representative</Typography>
                    </Box>
                    <Stack spacing={2} flexDirection={"column"} width={"100%"}>
                        <GeneralInputField type="text" value={test} onChange={(e) => setTest(e.target.value)} error={formik.touched.fullName && !!formik.errors.fullName} helperText={formik.errors.fullName} label="Full Name (As per ID)" placeholder="Enter your full name" disabled={false} />
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1 }}>
                            <GeneralInputField type="text" value={test} onChange={(e) => setTest(e.target.value)} error={formik.touched.nationalId && !!formik.errors.nationalId} helperText={formik.errors.nationalId} label="National ID Number" placeholder="Enter your national ID number" disabled={false} />
                            <GeneralInputField optional={true} type="text" value={test} onChange={(e) => setTest(e.target.value)} error={formik.touched.taxNumber && !!formik.errors.taxNumber} helperText={formik.errors.taxNumber} label="Tax Number" placeholder="Enter your tax number" disabled={false} />
                        </Box>
                    </Stack>

                </Card>
                {/* tips card  */}

                <Card sx={{ bgcolor: "#1B2351", maxWidth: { xs: "100%", md: "40%" }, display: "flex", flexDirection: "column", gap: 1, padding: "22px", borderRadius: "8px" }}>
                    <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                        <Box width={"fit-content"} bgcolor={"#FFFFFF1A"} borderRadius={"12px"} p={"12px"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <LampIcon />
                        </Box>
                        <Typography variant="h5" sx={{ fontWeight: "400", color: "white", mt: "4px" }}>Selfie Verification Tips</Typography>
                    </Stack>
                    <Stack ml={"16px"}>
                        {tips.map((tip, index) => (
                            <Stack key={index} flexDirection={"row"} mb={"5px"} gap={1} alignItems={"flex-start"}>
                                <Box mt={"1px"} >
                                    <CheckIcon />
                                </Box>
                                <Typography variant="body1" sx={{ fontWeight: "300", color: "#838BBF" }}>{tip}</Typography>
                            </Stack>
                        ))}

                    </Stack>
                </Card>
            </Stack>



            {/* id verification card  */}
            <Stack flexDirection={"column"} gap={1} mt={"16px"}>
                <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="h5" sx={{ fontWeight: "600", color: "primary.main" }}>Document Assets</Typography>
                    <Typography variant="body2" sx={{ fontWeight: "600", color: "red" }}>Required: 3 Images</Typography>
                </Stack>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1, justifyContent: "space-between" }}>
                    <ImageCardUploader label="Front of National ID" type="fid" value={formik.values.frontId} setValue={(value) => formik.setFieldValue("frontId", value)} error={formik.touched.frontId && !!formik.errors.frontId} helperText={formik.errors.frontId} />
                    <ImageCardUploader label="Back of National ID" type="bid" value={formik.values.backId} setValue={(value) => formik.setFieldValue("backId", value)} error={formik.touched.backId && !!formik.errors.backId} helperText={formik.errors.backId} />
                    <ImageCardUploader label="Selfie with ID" type="selfie" value={formik.values.selfie} setValue={(value) => formik.setFieldValue("selfie", value)} error={formik.touched.selfie && !!formik.errors.selfie} helperText={formik.errors.selfie} />
                </Box>
            </Stack>


            <Box display={"flex"} justifyContent={"center"} mt={"20px"}>
                <GradientButton onClick={formik.handleSubmit} disabled={false} borderRadius="10px" width="50%" height="100%" >
                    <Typography
                        variant="h6"
                        fontWeight={500}
                        fontSize={16}
                        color="white"
                        padding="10px"
                    >
                        SUBMIT
                    </Typography>
                </GradientButton>

            </Box>





        </Box >
    );
}