import * as Yup from "yup";

export const verificationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    nationalId: Yup.string().required("National ID is required"),
    frontId: Yup.mixed().required("Front ID is required"),
    backId: Yup.mixed().required("Back ID is required"),
    selfie: Yup.mixed().required("Selfie is required"),

});