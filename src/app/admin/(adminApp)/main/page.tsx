import { Box } from "@mui/material"
import PageContainer from "../../../../components/ui/container/PageContainer"
import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";


const BCrumb = [
    {
        to: "/admin",
        title: "Admin",
    },
    {
        title: "Main Page",
    },
];


export default function AdminPage() {
    return (
        <PageContainer title="Admin Page" description="this is Main page">
            <Breadcrumb title="Admin" items={BCrumb} />
            <Box borderRadius={'12px'} py={5}>
                Hello World
            </Box>
        </PageContainer>
    )
}