import { Card, Typography, Box, Stack } from "@mui/material";
import InterestCard from "@/components/cards/interestCard";
import { useState } from "react";
import useGetInterests from "../hooks/getInterestsOptions";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
export default function Interests() {
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const { data, isLoading, error } = useGetInterests();
    return (
        <Box display={"flex"} flexDirection={"column"} sx={{ width: { xs: '100vw', sm: '70vw' } }} >
            {isLoading && <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "50vh" }}>
                <CircularProgress />
            </Box>}
            <Box maxWidth={{ sm: "100%", md: "70%" }} mx={"auto"} mb={"30px"}>
                <Typography variant="h2" sx={{ fontWeight: "800", color: "primary.main", mb: "16px", fontSize: "40px" }}>What defines your brand?</Typography>
                <Typography variant="body1" sx={{ fontWeight: "400", color: "#46464F", mb: "16px", ml: "20px", fontSize: "18px" }}>Select the interests that best align with your corporate identity. This helps us
                    curate the most relevant connections for your brand.</Typography>
            </Box>

            <Grid columns={{ xs: 1, sm: 2, md: 3 }} container spacing={4} justifyContent={"center"}>
                {data?.data?.map((interest: any) => (
                    <InterestCard key={interest.id} id={interest.id} name={interest.name} setSelectedInterests={setSelectedInterests} selectedInterests={selectedInterests} />
                ))}
            </Grid>


        </Box>
    );
}