import PageContainer from "@/components/ui/container/PageContainer";
import { Typography, Box, Button } from "@mui/material";


const Home = () => {
    return (
        <PageContainer title="Home" description="this is Home">
            <Box>
                <Typography variant="h1">this is Home Page </Typography>
            </Box>
        </PageContainer>
    );
};

export default Home;
