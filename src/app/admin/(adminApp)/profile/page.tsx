import PageContainer from "@/components/ui/container/PageContainer";
import { Typography, Box } from "@mui/material";


const Profile = () => {
    return (
        <PageContainer title="Profile" description="this is Profile">
            <Box>
                <Typography variant="h1">this is Profile Page for admin</Typography>
            </Box>
        </PageContainer>
    );
};

export default Profile;
