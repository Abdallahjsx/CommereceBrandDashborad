import { Box, Card, Typography } from "@mui/material";
import SelectElement from "@/components/ui/inputFields/selectElement";
import { EarthIcon } from "@/components/ui/icons/icons";
import { useState, useEffect } from "react";
import GeneralInputField from "@/components/ui/inputFields/generalInputField";
import TextAreaField from "@/components/ui/inputFields/textAreaField";
import LogoUploader from "@/components/ui/inputFields/logoUploader";
import Grid from "@mui/material/Grid";
import DescriptiveAlert from "@/components/ui/alerts/descriptiveAlert";
import { useFormik } from "formik";
import { useGetCountriesOptions } from "../hooks/getLoctionOptions";
import { useGetCitiesOptions } from "../hooks/getLoctionOptions";
import GradientButton from "@/components/ui/buttons/gradientButton";
import brandInfoSchema from "../schemas/brandInfoSchema";

export default function BrandInfo({ setActiveStep }: { setActiveStep: (step: number) => void }) {
    const [country, setCountry] = useState("");
    const [value, setValue] = useState<File | null>(null);
    const formik = useFormik({
        enableReinitialize: false,

        initialValues: {
            brandName: "",
            numberOfEmployees: "",
            brandLogo: null,
            category: "",
            country: "",
            city: "",
            district: "",
            aboutBrand: "",
            brandPolicy: "",
        },
        validationSchema: brandInfoSchema,
        onSubmit: (values) => {
            console.log(values);
            setActiveStep(4);
        },
    });
    const employeesNumberOptions = [
        { value: "1-10", label: "1-10" },
        { value: "11-20", label: "21-30" },
        { value: "31-40", label: "31-40" },
        { value: "41-50", label: "41-50" },
        { value: "more than 50", label: "more than 50" },
    ];
    const { countriesOptions, countriesLoading, countriesIsError } = useGetCountriesOptions();
    const { citiesOptions, citiesLoading, citiesIsError } = useGetCitiesOptions(formik.values.country);
    useEffect(() => {
        formik.setFieldValue("city", "");
    }, [formik.values.country]);

    return (
        <Box display={"flex"} flexDirection={"column"} gap={2} sx={{ width: '100%' }}>
            <Box mb={"20px"}>
                <Typography textAlign={"center"} variant="h2" sx={{ fontWeight: "800", color: "primary.main", mb: "16px", fontSize: { xs: "24px", sm: "40px" } }}>Brand Information</Typography>
                <Typography textAlign={"center"} variant="body1" sx={{ fontWeight: "400", color: "#46464F", fontSize: { xs: "12px", sm: "18px" } }}>Please provide the official details of your organization to finalize the registration and verification process.</Typography>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={2} px={{ sm: "7px", md: "20px" }}>
                {/* first card about brand name and number of employees */}
                <Card sx={{ bgcolor: "background.default", display: "flex", flexDirection: "column", gap: 1, boxShadow: "none" }}>
                    <Box sx={{ display: "flex", width: { xs: "100%", sm: "90%", md: "80%" }, mx: "auto", flexDirection: { xs: "column", sm: "row", md: "row" }, justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
                        <Box width={{ xs: "100%", sm: "fit-content" }}>
                            <GeneralInputField type="text" value={formik.values.brandName} onChange={(e) => formik.setFieldValue("brandName", e.target.value)} error={formik.touched.brandName && !!formik.errors.brandName} helperText={formik.errors.brandName} label="BRAND NAME" placeholder="Enter your brand name" disabled={false} />
                        </Box>
                        <Box flex={1} width={{ xs: "100%", sm: "fit-content" }}>
                            <SelectElement value={formik.values.numberOfEmployees} onChange={(e) => formik.setFieldValue("numberOfEmployees", e.target.value)} error={formik.touched.numberOfEmployees && !!formik.errors.numberOfEmployees} helperText={formik.errors.numberOfEmployees} options={employeesNumberOptions} placeholder="Select your country" label="NUMBER OF EMPLOYEES" />
                        </Box>
                    </Box>
                    <LogoUploader value={formik.values.brandLogo} setValue={(value) => { formik.setFieldValue("brandLogo", value) }} error={formik.touched.brandLogo && !!formik.errors.brandLogo} helperText={formik.errors.brandLogo} />


                </Card>
                {/* second card about Location */}
                <Card sx={{ bgcolor: "background.default", display: "flex", flexDirection: "column", gap: 1, boxShadow: "none" }}>
                    <Grid
                        container
                        columnSpacing={2}
                        alignItems={"flex-start"}
                        justifyContent={"flex-start"}

                    >
                        <Grid size={{ xs: 12, md: 4 }}>
                            <GeneralInputField type="text" value={formik.values.category} onChange={(e) => formik.setFieldValue("category", e.target.value)} error={formik.touched.category && !!formik.errors.category} helperText={formik.errors.category} label="CATEGORY" placeholder="Enter your category" disabled={false} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <SelectElement icon={<EarthIcon />} value={formik.values.country} onChange={(e) => formik.setFieldValue("country", e.target.value)} error={formik.touched.country && !!formik.errors.country} helperText={formik.errors.country} options={countriesOptions} placeholder="Select your country" label="COUNTRY" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <SelectElement value={formik.values.city} onChange={(e) => formik.setFieldValue("city", e.target.value)} error={formik.touched.city && !!formik.errors.city} helperText={formik.errors.city} options={citiesOptions} placeholder="Select your city" label="CITY" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <GeneralInputField type="text" value={formik.values.district} onChange={(e) => formik.setFieldValue("district", e.target.value)} error={formik.touched.district && !!formik.errors.district} helperText={formik.errors.district} label="DISTRICT" placeholder="Enter your district" disabled={false} />
                        </Grid>

                    </Grid>


                </Card>
                {/* third card about brand story */}
                <Card sx={{ bgcolor: "#F6F3EC", display: "flex", flexDirection: "column", gap: 1, boxShadow: "none" }}>
                    <TextAreaField label="ABOUT BRAND" placeholder="Enter your brand story" value={formik.values.aboutBrand} onChange={(e) => formik.setFieldValue("aboutBrand", e.target.value)} error={formik.touched.aboutBrand && !!formik.errors.aboutBrand} helperText={formik.errors.aboutBrand} disabled={false} />
                    <TextAreaField label="BRAND POLICY" placeholder="Enter your brand policy" value={formik.values.brandPolicy} onChange={(e) => formik.setFieldValue("brandPolicy", e.target.value)} error={formik.touched.brandPolicy && !!formik.errors.brandPolicy} helperText={formik.errors.brandPolicy} disabled={false} />
                </Card>
                {/* alert */}
                <Box mt={"12px"} bgcolor={"#78e9fd42"} overflow={"hidden"} width={"100%"}>
                    <DescriptiveAlert title="Almost There" description="Ensure all fields are accurate. This information will be used " strongText="for your public profile and official documentation." severity="info" />
                </Box>
                <Box display={"flex"} justifyContent={"center"} bgcolor={"red"} mx={"auto"} mt={"20px"} width={{ xs: "100%", sm: "70%", md: "50%" }}>
                    <GradientButton onClick={formik.handleSubmit} disabled={false} borderRadius="10px" width="100%" height="100%" >
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
            </Box>
        </Box>
    );
}