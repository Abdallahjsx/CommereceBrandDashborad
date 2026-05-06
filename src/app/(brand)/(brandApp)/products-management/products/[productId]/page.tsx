"use client";
import React from "react";
import { useState } from "react";
import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/ui/container/PageContainer";
import DashboardCard from "@/components/ui/shared/DashboardCard";
import { Typography, Box } from "@mui/material";
import { useParams } from "next/navigation";





const ProductDetails = () => {
    const params = useParams();
    const productId = params.productId;
    const [productName, setProductName] = useState("product name");

    const BCrumb = [
        {
            title: "Products Management",
            to: "/products-management/products",
        },
        {
            title: "Products",
            to: "/products-management/products",
        },
        {
            title: productName,
        },
    ];

    return (
        <PageContainer title={`Product Details ${productId}`} >
            <Breadcrumb title={`Product Details`} items={BCrumb} />
            <Box>
                <Typography variant="h1">this is the product Details Page </Typography>
            </Box>
        </PageContainer>
    );
};

export default ProductDetails;
