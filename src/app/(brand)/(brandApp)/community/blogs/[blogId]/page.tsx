"use client";
import React from "react";
import { useState } from "react";
import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/ui/container/PageContainer";
import DashboardCard from "@/components/ui/shared/DashboardCard";
import { Typography, Box } from "@mui/material";
import { useParams } from "next/navigation";





const BlogDetails = () => {
    const params = useParams();
    const blogId = params.blogId;
    const [blogTitle, setBlogTitle] = useState("blog title");

    const BCrumb = [
        {
            title: "Community",
            to: "/community/blogs",
        },
        {
            title: "Blogs",
            to: "/community/blogs",
        },
        {
            title: blogTitle,
        },
    ];

    return (
        <PageContainer title={`Blog Details ${blogId}`} >
            <Breadcrumb title={`Blog Details`} items={BCrumb} />
            <Box>
                <Typography variant="h1">this is the blog Details Page </Typography>
            </Box>
        </PageContainer>
    );
};

export default BlogDetails;
