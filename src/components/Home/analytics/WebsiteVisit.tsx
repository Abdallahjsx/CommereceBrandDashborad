"use client";
import React, { useContext } from "react";
import BlankCard from "../../shared/BlankCard";
import {
  Avatar,
  Box,
  Chip,
  Grid,
  MenuItem,
  SelectChangeEvent,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import SkeletonRevenueUpdatesTwoCard from "../skeleton/RevenueUpdatesTwoCard";
import CustomSelect from "../../ui/forms/theme-elements/CustomSelect";

interface RevenueupdatestwoCardProps {
  isLoading?: boolean;
}

const SalesPerformance = ({ isLoading }: RevenueupdatestwoCardProps) => {
  const [year, setYear] = React.useState("2025");
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setYear(event.target.value);
  };

  const xLabels = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
  ];

  return (
    <>
      {isLoading ? (
        <SkeletonRevenueUpdatesTwoCard />
      ) : (
        <BlankCard>
          <Box p={3}>
            {/* Header Row */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
            >
              <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Total Orders / Sales
                </Typography>
                <Grid container alignItems="center" spacing={1}>
                  <Grid>
                    <Typography variant="h3" fontWeight={700}>
                      8,150
                    </Typography>
                  </Grid>
                  <Grid>
                    <Chip
                      label="+18%"
                      size="small"
                      sx={{
                        color: "#1B5E20",
                        bgcolor: "rgba(27, 94, 32, 0.1)",
                        fontWeight: 600,
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>
                  <Grid>
                    <Typography variant="body2" color="textSecondary">
                      than last year
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={3}
              >
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Stack direction="row" gap={3}>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "#1B2351",
                        }}
                      />
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        color="textSecondary"
                      >
                        Orders
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: "#47C0D2",
                        }}
                      />
                      <Typography
                        variant="body2"
                        fontWeight={500}
                        color="textSecondary"
                      >
                        Sales
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
                <CustomSelect value={year} size="small" onChange={handleChange}>
                  <MenuItem value="2025">2025</MenuItem>
                  <MenuItem value="2024">2024</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                </CustomSelect>
              </Box>
            </Box>

            {/* Chart Section */}
            <Box sx={{ height: 350, width: "100%" }}>
              <BarChart
                height={350}
                series={[
                  {
                    data: [
                      4000, 5000, 4100, 6700, 2200, 4300, 1300, 2300, 2000, 800,
                      1300, 2700,
                    ],
                    label: "Orders",
                    color: "#1B2351",
                    stack: "total",
                  },
                  {
                    data: [
                      4400, 2000, 4100, 5000, 2200, 4300, 1300, 2300, 3000, 800,
                      1300, 2700,
                    ],
                    label: "Sales",
                    color: "#47C0D2",
                    stack: "total",
                  },
                ]}
                xAxis={[
                  {
                    data: xLabels,
                    scaleType: "band",
                    categoryGap: 0.7,
                    barGap: 0,
                    disableTicks: true,
                  } as any,
                ]}
                yAxis={[
                  {
                    valueFormatter: (value: number) => `${value / 1000}k`,
                    disableTicks: true,
                  },
                ]}
                slotProps={{
                  legend: { hidden: true } as any,
                  bar: {
                    style: {
                      stroke: "none",
                    },
                  },
                }}
                sx={{
                  "& .MuiBarElement-series-SiteB": {
                    rx: 5,
                  },
                  "& .MuiBarElement-series-SiteA": {
                    rx: 0,
                  },
                }}
                margin={{ top: 20, bottom: 40, left: 40, right: 10 }}
                grid={{ horizontal: true }}
              />
            </Box>
          </Box>
        </BlankCard>
      )}
    </>
  );
};
export default SalesPerformance;
