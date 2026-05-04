"use client";
import { useState } from "react";

import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/ui/container/PageContainer";
import { Typography, Box } from "@mui/material";
import { useParams } from "next/navigation";




const EditBlog = () => {
    const params = useParams();
    const blogId = params.blogId;
    const [blogTitle, setBlogTitle] = useState("edited blog title");
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
        <PageContainer title={`Edit Blog`} >
            <Breadcrumb title={`Edit Blog`} items={BCrumb} />
            <Box>
                <Typography variant="h1">this is the Edit Blog Page {blogTitle} </Typography>
            </Box>

        </PageContainer>
    );
};

export default EditBlog;
