import PageContainer from "@/components/ui/container/PageContainer";
import { Typography, Box, Button } from "@mui/material";


const Blogs = () => {
    return (
        <PageContainer title="Blogs" description="this is Blogs">
            <Box>
                <Typography variant="h1">this is the blogs page where u should implement the blogs </Typography>
                <Button sx={{ mr: 2 }} href="/community/blogs/10">to blog details with id of 10</Button>
                <Button href="/community/edit-blog/10">to edit blog with id of 10</Button>

            </Box>
        </PageContainer>
    );
};

export default Blogs;
