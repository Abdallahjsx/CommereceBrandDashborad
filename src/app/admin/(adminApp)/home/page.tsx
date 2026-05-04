import { Box } from "@mui/material"
import PageContainer from "../../../../components/ui/container/PageContainer"
import Breadcrumb from "@/components/layout/shared/breadcrumb/Breadcrumb";


// const BCrumb = [
//     {
//         to: "/admin",
//         title: "Admin",
//     },
//     {
//         title: "Main Page",
//     },
// ];


export default function AdminPage() {
    return (
        <PageContainer title="Admin Page" description="this is Main page">
            <Box borderRadius={'12px'} py={5}>
              this is home page for admin 
            </Box>
        </PageContainer>
    )
}