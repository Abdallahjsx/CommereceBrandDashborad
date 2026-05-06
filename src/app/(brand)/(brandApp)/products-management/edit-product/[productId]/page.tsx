"use client";
import { useState } from "react";

import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/ui/container/PageContainer";
import { Typography, Box } from "@mui/material";
import { useParams } from "next/navigation";




const EditProduct = () => {
    const params = useParams();
    const productId = params.productId;
    const [productName, setProductName] = useState("edited product name");
    const BCrumb = [
        {
            title: "Products Management",
            to: "/products-management/products",
        },
        {
            to: "/products-management/products",
            title: "Products",
        },
        {
            title: productName,
        },
    ];

    return (
        <PageContainer title={`Edit Product`} >
            <Breadcrumb title={`Edit Product`} items={BCrumb} />
            <Box>
                <Typography variant="h1">this is the product Edit Page {productId} </Typography>
            </Box>

        </PageContainer>
    );
};

export default EditProduct;
