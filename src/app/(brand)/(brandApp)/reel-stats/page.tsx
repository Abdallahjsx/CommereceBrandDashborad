"use client"
import AllRecords from "@/components/Home/reel-stats/AllRecords";
import Carousel from "@/components/Home/reel-stats/Carousel";
import AudienceSegmentation from "@/components/Home/reel-stats/AudienceSegmentation";
import MostViewedProducts from "@/components/Home/reel-stats/MostViewedProducts";
import MonthlyEngagement from "@/components/Home/reel-stats/MonthlyEngagement";
import ReelsPerformanceOverTime from "@/components/Home/reel-stats/ReelsPerformanceOverTime";
import TopReels from "@/components/Home/reel-stats/TopReels";
import ReelsGrowth from "@/components/Home/reel-stats/ReelsGrowth";
import ContentReachAnalysis from "@/components/Home/reel-stats/TotalAssets";
import TotalViews from "@/components/Home/reel-stats/TotalViews";
import UserInteraction from "@/components/Home/reel-stats/UserInteraction";
import Welcome from "@/components/layout/shared/welcome/Welcome";
import PageContainer from "@/components/ui/container/PageContainer";
import { Box, Grid } from "@mui/material";



export default function ReelStats() {
    return (
         <PageContainer title='Reels Analytics' description='Overview of your content performance'>
      <Box mt={3}>
        <Grid container spacing={3} alignItems="stretch">
          <Grid
            size={{
              xs: 12,
              lg: 5,

            }}>
            <TotalViews />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6,
              lg: 4,
            }}>
            <MonthlyEngagement />
          </Grid>
          <Grid
            size={{
              xs: 12,
              sm: 6,
              lg: 3,
            }}>
            <ReelsGrowth />
          </Grid>
          <Grid
            size={{
              xs: 12,
            }}>
            <AllRecords />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
              lg: 3,
            }}>
            <AudienceSegmentation />
          </Grid>
          <Grid
            size={{
              xs: 12,
              md: 6,
              lg: 6,
            }}>
            <ReelsPerformanceOverTime />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 3,
            }}>
            <UserInteraction />
          </Grid>
          <Grid size={12}>
            <TopReels />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}>
            <MostViewedProducts />
          </Grid>
          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}>
            <ContentReachAnalysis />
          </Grid>

        </Grid>
        <Welcome />
      </Box>
    </PageContainer>
    );
}

ReelStats.layout = "Blank";
