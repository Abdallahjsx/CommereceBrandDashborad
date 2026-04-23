import { Card, Typography, Box, Stack } from "@mui/material";
import InterestCard from "@/components/ui/cards/interestCard";
import { useState } from "react";
import useGetInterests from "../hooks/getInterestsOptions";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
export default function Interests() {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const { data, isLoading, error } = useGetInterests();
    return (
        <Box display={"flex"} flexDirection={"column"} sx={{ width: "100%" }} flexGrow={1} justifyContent={"center"}>
            {isLoading ? <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
                <CircularProgress />
            </Box> : <>
                <Box mb={"30px"}>
                    <Typography variant="h2" lineHeight={"40px"} sx={{ fontWeight: "800", color: "primary.main", mb: "16px", fontSize: { xs: "24px", sm: "40px" } }}>What defines your brand?</Typography>
                    <Typography variant="body1" sx={{ fontWeight: "400", color: "#46464F", mb: "16px", px: { xs: "7px", md: "20px" }, fontSize: { xs: "12px", sm: "18px" } }}>Select the interests that best align with your corporate identity. This helps us
                        curate the most relevant connections for your brand.</Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Box display={"flex"} flexWrap={"wrap"} gap={2} justifyContent={"center"} alignItems={"center"}>
                        {data?.data?.map((interest: any) => (
                            <InterestCard key={interest.id} id={interest.id} name={interest.name} setSelectedInterests={setSelectedInterests} selectedInterests={selectedInterests} />
                        ))}
                    </Box>
                </Box>
            </>
            }


        </Box>
    );
}