import { Box, Typography, Card } from "@mui/material";
import { useState, useEffect } from "react";
import UploadIcon from "../icons/icons";
import Image from "next/image";

type imageCardUploaderProps = {
    value: File | null,
    setValue: (value: File | null) => void,
    error: boolean | undefined,
    helperText: string | undefined,
    type: "fid" | "bid" | "selfie",
    label: string,
}
export default function ImageCardUploader({ value, setValue, error, helperText, type, label }: imageCardUploaderProps) {
    const [preview, setPreview] = useState<string | null>(null);
    function getTitle() {
        switch (type) {
            case "fid":
                return "frontID.png";
            case "bid":
                return "backID.png";
            case "selfie":
                return "screen.png";
        }
    }


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setValue(file);
        }
    };

    useEffect(() => {
        if (!value) {
            setPreview(null);
            return;
        }

        const objectUrl = URL.createObjectURL(value);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [value]);
    return (
        <Box width={"100%"} bgcolor={"#F6F3EC"} padding={"22px"} borderRadius={"8px"}>
            <label htmlFor={`upload-${type}`} style={{ cursor: "pointer" }}>
                <Box
                    sx={{
                        position: "relative",
                        height: "200px",
                        width: "100%",
                        borderRadius: "4px",


                        "&:hover .hover-overlay": {
                            opacity: 1,
                        },
                    }}
                >

                    {!preview ? (
                        <Box
                            sx={{
                                bgcolor: "white",
                                height: "90%",
                                borderRadius: "4px",
                                border: "dashed 2px ",
                                borderColor: error ? "red" : "#0000001A",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 1,
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <Image src={`/images/profile/${getTitle()}`} width={120} height={100} alt="" style={{ objectFit: "contain", width: "100%", height: "100%" }} />
                            <Box sx={{ position: "absolute", bottom: "50%", right: "45%", bgcolor: "white", borderRadius: "50%", padding: "4px", opacity: 0.7 }}><UploadIcon /></Box>

                        </Box>
                    ) : (
                        <>
                            <Box sx={{ height: "90%", width: "100%", position: "relative", mx: "auto" }}>
                                <Image
                                    src={preview}
                                    alt="Preview"
                                    fill
                                    style={{ objectFit: "cover", borderRadius: "4px" }}
                                    unoptimized
                                />
                                <Box
                                    className="hover-overlay"
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        bgcolor: "rgba(255, 255, 255, 0.4)",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        opacity: 0,
                                        transition: "opacity 0.3s ease",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <UploadIcon />
                                    <Typography variant="h6" sx={{ color: "#1C1C18", fontWeight: "500", fontSize: "14px" }}>
                                        Replace image
                                    </Typography>

                                </Box>
                            </Box>

                        </>
                    )}
                </Box>
                <Typography textAlign={"center"} variant="h5" sx={{ color: "#1C1C18", fontWeight: "600", mb: "4px" }}>{label}</Typography>
                {error && <Typography variant="body2" textAlign={"center"} color="error" mt={"2px"}>{helperText}</Typography>}
                <input
                    type="file"
                    id={`upload-${type}`}
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />
            </label>
        </Box>
    )
}