import { Box, Typography, Card, Stack } from "@mui/material";
import { IDIcon } from "@/components/ui/icons/icons";
import Grid from "@mui/material/Grid";
import GeneralInputField from "@/components/ui/inputFields/generalInputField";
import { useEffect, useState } from "react";
import { LampIcon, CheckIcon } from "@/components/ui/icons/icons";
import { useFormik } from "formik";
import ImageCardUploader from "@/components/ui/inputFields/imageCardUploader";
import GradientButton from "@/components/ui/buttons/gradientButton";
import { verificationSchema } from "../schemas/verificationSchema";
import { useVerifyIdentity } from "../hooks/useRegister";
import { CircularProgress } from "@mui/material";

const tips = ["Ensure your face and the ID are both clearly visible and in focus.", "Avoid glares or reflections on the ID card surface", "Use a neutral, well-lit background with no other people present."]



export default function Verification({ setActiveStep }: { setActiveStep: (step: number) => void }) {
    const [test, setTest] = useState("")
    const [idCard, setIdCard] = useState<boolean>(false)
    const [idStep, setIdStep] = useState<number>(0)
    const [errorStep, setErrorStep] = useState<"frontId" | "backId" | "selfie" | null>(null)
    const { mutate: verify, isPending, isError, errorMessage } = useVerifyIdentity(() => {
        setActiveStep(5)

    })
    const formik = useFormik({
        initialValues: {
            fullName: "",
            nationalId: "",
            taxNumber: "",
            phone: "",
            frontId: null,
            backId: null,
            selfie: null,
        },
        validationSchema: verificationSchema,
        onSubmit: (values) => {
            setIdCard(true)
        },
    });
    function handleIdStep() {

        if (idStep === 0) {
            if (!formik.values.frontId) {
                setErrorStep("frontId")
                return
            }
            setIdStep(1);
        }
        if (idStep === 1) {
            if (!formik.values.backId) {
                setErrorStep("backId")
                return
            }
            setIdStep(2);
        }
        if (idStep === 2) {
            if (!formik.values.selfie) {
                setErrorStep("selfie")
                return
            }
            handleIdSubmit()
        }

    }
    function handleIdSubmit() {
        console.log("handleIdSubmit");
        verify(formik.values)
    }
    useEffect(() => {
        console.log(errorMessage);

    }, [errorMessage])



    return (
        <Box display={"flex"} flexDirection={"column"} gap={2} sx={{ width: "100%" }}>
            <Typography textAlign={"center"} variant="h2" sx={{ fontWeight: "800", color: "primary.main", mb: "16px", fontSize: { xs: "24px", sm: "40px" } }}>Identity Verification</Typography>
            <Typography textAlign={"center"} variant="body2" sx={{ fontWeight: "400", color: "primary.main", fontSize: { xs: "12px", sm: "16px" }, lineHeight: { xs: "18px", sm: "24px" } }}>To ensure the integrity of
                <strong> ALLUVO</strong> ecosystem, please provide legal
                identification documents. Your data is encrypted and used solely for ownership verification
                purposes.</Typography>

            <Stack flexDirection={'column'} gap={2} p={{ sm: "4px", md: "16px" }} mt={"10px"}>
                {/* first card  */}
                {!idCard && <Card sx={{ bgcolor: "#F6F3EC", display: "flex", flexDirection: "column", gap: 1, padding: { xs: "16px", md: "32px" }, borderRadius: "8px" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IDIcon />
                        <Typography variant="h6" sx={{ fontWeight: "600", color: "primary.main", mt: "4px" }}>Legal Representative</Typography>
                    </Box>
                    <Stack width={"100%"}>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1 }}>
                            <GeneralInputField name="fullName" type="text" value={formik.values.fullName} onChange={(e) => formik.setFieldValue("fullName", e.target.value)} error={formik.touched.fullName && !!formik.errors.fullName} helperText={formik.errors.fullName} label="Full Name (As per ID)" placeholder="Enter your full name" disabled={false} onBlur={formik.handleBlur} />
                            <GeneralInputField name="phone" type="tel" value={formik.values.phone} onChange={(e) => formik.setFieldValue("phone", e.target.value)} error={formik.touched.phone && !!formik.errors.phone} helperText={formik.errors.phone} label="Phone Number" placeholder="Enter your phone number" disabled={false} onBlur={formik.handleBlur} />
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1 }}>
                            <GeneralInputField name="nationalId" type="text" value={formik.values.nationalId} onChange={(e) => formik.setFieldValue("nationalId", e.target.value)} error={formik.touched.nationalId && !!formik.errors.nationalId} helperText={formik.errors.nationalId} label="National ID Number" placeholder="Enter your national ID number" disabled={false} onBlur={formik.handleBlur} />
                            <GeneralInputField optional={true} name="taxNumber" type="text" value={formik.values.taxNumber} onChange={(e) => formik.setFieldValue("taxNumber", e.target.value)} error={formik.touched.taxNumber && !!formik.errors.taxNumber} helperText={formik.errors.taxNumber} label="Tax Number" placeholder="Enter your tax number" disabled={false} onBlur={formik.handleBlur} />
                        </Box>
                    </Stack>

                </Card>}
                {/* tips card  */}
                {idCard && <Stack direction={"column"}>
                    <Card sx={{ bgcolor: "#1B2351", width: "100%", display: "flex", flexDirection: "column", gap: 1, padding: "22px", borderRadius: "8px" }}>
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
                    <Stack flexDirection={"column"} gap={1} mt={"16px"}>
                        {/* <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                    <Typography variant="h5" sx={{ fontWeight: "600", color: "primary.main" }}>Document Assets</Typography>
                    <Typography variant="body2" sx={{ fontWeight: "600", color: "red" }}>Required: 3 Images</Typography>
                </Stack> */}
                        <Box width={"100%"}>
                            {idStep === 0 && <ImageCardUploader errorStep={errorStep} setErrorStep={setErrorStep} label="Front of National ID" type="frontId" value={formik.values.frontId} setValue={(value) => formik.setFieldValue("frontId", value)} />}
                            {idStep === 1 && <ImageCardUploader errorStep={errorStep} setErrorStep={setErrorStep} label="Back of National ID" type="backId" value={formik.values.backId} setValue={(value) => formik.setFieldValue("backId", value)} />}
                            {idStep === 2 && <ImageCardUploader errorStep={errorStep} setErrorStep={setErrorStep} label="Selfie with ID" type="selfie" value={formik.values.selfie} setValue={(value) => formik.setFieldValue("selfie", value)} />}
                        </Box>
                    </Stack>

                </Stack>}




            </Stack>



            {/* id verification card  */}


            {errorMessage && <Typography variant="h6" fontWeight={500} fontSize={16} color="red" padding="10px" >{errorMessage}</Typography>}
            <Box display={"flex"} justifyContent={"center"} mt={"px"} sx={{ width: { xs: "100%", sm: "80%", md: "70%" } }} mx={"auto"}>
                {idCard &&
                    <GradientButton onClick={() => {
                        handleIdStep()
                    }} disabled={false} borderRadius="10px" width={'100%'} height="100%" >
                        {isPending ? <CircularProgress size={24} sx={{ color: "white", margin: "10px" }} /> : <Typography
                            variant="h6"
                            fontWeight={500}
                            fontSize={16}
                            color="white"
                            padding="10px"
                        >
                            {idStep === 2 ? "SUBMIT" : "Next"}
                        </Typography>}
                    </GradientButton>
                }
                {!idCard &&
                    <Box sx={{ width: { xs: "100%", sm: "80%", md: "75%" } }} mx={"auto"}>
                        <GradientButton onClick={() => { formik.handleSubmit() }} disabled={false} borderRadius="10px" width="100%" height="100%" >
                            <Typography
                                variant="h6"
                                fontWeight={500}
                                fontSize={16}
                                color="white"
                                padding="10px"
                            >
                                CONTINUE
                            </Typography>
                        </GradientButton>
                    </Box>
                }

            </Box>





        </Box >
    );
}
