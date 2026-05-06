"use client";
import { Grid, useTheme } from "@mui/material";
import BlankCard from "../../shared/BlankCard";
import TotalReels from "./AllRecords/TotalReels";
import PublishedReels from "./AllRecords/PublishedReels";
import ProductClicks from "./AllRecords/ProductClicks";
import EngagementRate from "./AllRecords/EngagementRate";

const AllRecords = () => {
  const theme = useTheme();

  return (
    <BlankCard>
      <Grid container size={12}>
        <Grid
          size={{ xs: 12, sm: 6, lg: 3 }}
          borderRight={1}
          borderColor={theme.palette.divider}
        >
          <TotalReels />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, lg: 3 }}
          borderRight={1}
          borderColor={theme.palette.divider}
        >
          <PublishedReels />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, lg: 3 }}
          borderRight={1}
          borderColor={theme.palette.divider}
        >
          <ProductClicks />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <EngagementRate />
        </Grid>
      </Grid>
    </BlankCard>
  );
};

export default AllRecords;
