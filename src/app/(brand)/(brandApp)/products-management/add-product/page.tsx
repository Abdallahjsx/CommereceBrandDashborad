import React from "react";
import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/ui/container/PageContainer";
import DashboardCard from "@/components/ui/shared/DashboardCard";
import { Typography, Box } from "@mui/material";

const BCrumb = [
    {
        title: "Products Management",
        to: "/products-management/products",
    },
    {
        title: "Add Product",
    },
];


const AddProduct = () => {
    return (
        <PageContainer title="Add Product">
            <Breadcrumb title="Add Product" items={BCrumb} />
            <Box>
                <Typography variant="h1">this is the  Add Product page </Typography>
            </Box>

        </PageContainer>
    );
};

export default AddProduct;
