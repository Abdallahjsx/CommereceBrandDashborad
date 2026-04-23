"use client";
import PageContainer from "@/components/ui/container/PageContainer"
import { Typography } from "@mui/material"
import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";

export default function RequestsPage() {
    const breadcrumbitems = [
        { title: "Admin", to: "/admin" },
        { title: "Requests Page", to: "/admin/requests" },
    ];
    return (
        <PageContainer title="Requests Page" description="this is Requests page">
            <Breadcrumb title="Requests Page" items={breadcrumbitems} />
            <Typography>Requests Page under the selection of a proper table.</Typography>
        </PageContainer>
    );
}