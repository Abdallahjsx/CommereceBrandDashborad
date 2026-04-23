import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function GenderField({ selectedGender, setSelectedGender, error, helperText }: { selectedGender: string, setSelectedGender: (gender: string) => void, error: boolean | undefined, helperText: string | undefined }) {
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={1}>
            <Box display={"flex"} flexDirection={{ xs: "column", sm: "row", md: "column" }} gap={{ xs: 2, sm: 6, md: 2 }} alignItems={"center"} justifyContent={"center"}>
                <Typography variant="body1" sx={{ fontWeight: "500", color: "primary.main" }}>Gender</Typography>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        justifyContent: "center",
                        height: "100%",
                    }}
                >
                    {/* Male */}
                    <Box
                        onClick={() => {
                            setSelectedGender("male");
                        }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "4px",
                            cursor: "pointer",
                            transform: selectedGender === "male" ? "scale(1.05)" : "scale(1)",
                            transition: "0.2s ease",
                        }}
                    >
                        <Box sx={{
                            bgcolor: selectedGender === "male" ? "#1B2351" : "gray",
                            boxShadow: selectedGender === "male" ? "0 0 8px #1B2351" : "0 0 4px #0000001A",
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "none",
                            transition: "0.2s ease",
                        }}>
                            <Image
                                src="/images/svgs/maleIcon.svg"
                                alt="Male Icon"
                                width={20}
                                height={20}
                                style={{
                                    objectFit: "contain",
                                    filter: selectedGender === "male" ? "drop-shadow(0 0 2px #1B2351)" : "none",
                                }}
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "11px",
                                color: selectedGender === "male" ? "#1B2351" : "#6F7073",
                            }}
                        >
                            Male
                        </Typography>
                    </Box>

                    {/* Female */}
                    <Box
                        onClick={() => {
                            setSelectedGender("female");
                        }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "4px",
                            cursor: "pointer",
                            transform: selectedGender === "female" ? "scale(1.05)" : "scale(1)",
                            transition: "0.2s ease",
                        }}
                    >
                        <Box sx={{
                            bgcolor: selectedGender === "female" ? "#1B2351" : "gray",
                            boxShadow: selectedGender === "female" ? "0 0 8px #1B2351" : "0 0 4px #0000001A",
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "none",
                            transition: "0.2s ease",
                        }}>
                            <Image
                                src="/images/svgs/femaleIcon.svg"
                                alt="Female Icon"
                                width={20}
                                height={20}
                                style={{
                                    objectFit: "contain",
                                    filter: selectedGender === "female" ? "drop-shadow(0 0 2px #1B2351)" : "none",
                                }}
                            />
                        </Box>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "11px",
                                color: selectedGender === "female" ? "#1B2351" : "#6F7073",
                            }}
                        >
                            Female
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {error && <Typography variant="body2" color="error" sx={{ width: "100%", textAlign: "center" }}>{helperText}</Typography>}
        </Box>
    );
}
