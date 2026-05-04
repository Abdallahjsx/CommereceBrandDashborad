import React from "react";
import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/ui/container/PageContainer";
import DashboardCard from "@/components/ui/shared/DashboardCard";
import { Typography, Box } from "@mui/material";

const BCrumb = [
    {
        title: "Community",
        to: "/community/blogs",
    },
    {
        title: "Add Blog",
    },
];


const AddBlog = () => {
    return (
        <PageContainer title="Add Blog">
            <Breadcrumb title="Add Blog" items={BCrumb} />
            <Box>
                <Typography variant="h1">this is the Add Blog page </Typography>
            </Box>

        </PageContainer>
    );
};

export default AddBlog;
