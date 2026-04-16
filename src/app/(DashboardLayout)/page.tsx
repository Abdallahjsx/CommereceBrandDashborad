import { Box, Typography } from "@mui/material";
import PageContainer from "@/app/components/container/PageContainer";
import DashboardCard from "@/app/components/shared/DashboardCard";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";

const BCrumb = [
  {
    to: "/",
    title: "Dashboard",
  },

  {
    title: "Sample Page",
  },
];


const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <Breadcrumb title="Sample" items={BCrumb} />
      <DashboardCard title="Sample Page" >
        <Typography>This is a sample page</Typography>
      </DashboardCard>

    </PageContainer>
  );
};

export default SamplePage;
