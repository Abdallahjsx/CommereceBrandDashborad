import * as yup from "yup";

export const verificationSchema = yup.object({
    fullName: yup.string().required("Full Name is required"),
    nationalId: yup.string().required("National ID is required"),
    frontId: yup.mixed().required("Front ID is required"),
    backId: yup.mixed().required("Back ID is required"),
    selfie: yup.mixed().required("Selfie is required"),

});