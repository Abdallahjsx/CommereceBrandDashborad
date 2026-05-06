"use client"


import BrandPerformance from "@/components/Home/analytics/Campaign";
import OrdersByRegion from "@/components/Home/analytics/CurrentVisits";
import Greeting from "@/components/Home/analytics/Greeting";
import OrderStatusOverview from "@/components/Home/analytics/KeyInsights";
import TotalOrders from "@/components/Home/analytics/NewUsers";
import ActiveCustomers from "@/components/Home/analytics/PurchaseOrders";
import TopSellingProducts from "@/components/Home/analytics/TopSellingProducts";
import SalesPerformance from "@/components/Home/analytics/WebsiteVisit";
import TotalRevenue from "@/components/Home/analytics/WeeklySales";
import PageContainer from "@/components/ui/container/PageContainer";
import { Box, Grid } from "@mui/material";



export default function Landingpage() {
  return (
     <PageContainer title='E-commerce Dashboard' description='Brand Management Dashboard'>
            <Box mt={3}>
                <Grid container spacing={3} alignItems="stretch">
                    {/* Header Row */}
                    <Grid
                        size={{
                            xs: 12,
                            lg: 8,
                        }}>
                        <Greeting />
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            lg: 4,
                        }}>
                        <OrderStatusOverview />
                    </Grid>
                      {/* Main Charts Row */}
                    <Grid
                        size={{
                            xs: 12,
                            lg: 8,
                        }}>
                        <SalesPerformance  />
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            lg: 4,
                        }}>
                        <OrdersByRegion  />
                    </Grid>

                    {/* Stats Cards Row */}
                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,
                            lg: 4,
                        }}>
                        <TotalRevenue />
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            sm: 6,
                            lg: 4,
                        }}>
                        <TotalOrders />
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            sm: 12,
                            lg: 4,
                        }}>
                        <ActiveCustomers />
                    </Grid>
                

                  

                    {/* Table and Performance Row */}
                    <Grid
                        size={{
                            xs: 12,
                            lg: 8,
                        }}>
                        <TopSellingProducts />
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            lg: 4,
                        }}>
                        <BrandPerformance />
                    </Grid>
                </Grid>

            </Box>
        </PageContainer>
  );
};

Landingpage.layout = "Blank";
