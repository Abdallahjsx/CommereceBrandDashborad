import React from "react";
import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/ui/container/PageContainer";
import DashboardCard from "@/components/ui/shared/DashboardCard";
import { Typography, Box,Button } from "@mui/material";


const Products = () => {
    return (
        <PageContainer title="Products" description="this is Products">
            <Box>
                <Typography variant="h1">this is the products page where u should implement the products table </Typography>
                <Button sx={{mr:2}} href="/products-management/products/10">to product details with id of 10</Button>
                <Button href="/products-management/edit-product/10">to edit product with id of 10</Button>

            </Box>
        </PageContainer>
    );
};

export default Products;
