"use client";
import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";
import { PieChart } from "@mui/x-charts/PieChart";
import SkeletonCurrentVisit from "../skeleton/SkeletonCurrentVisit";
import { CustomizerContext } from "@/context/customizerContext";
import { useContext } from "react";

interface RevenueupdatestwoCardProps {
  isLoading?: boolean;
}

const OrdersByRegion = ({ isLoading }: RevenueupdatestwoCardProps) => {
  const theme = useTheme();
  const { activeTheme } = useContext(CustomizerContext);

  const data = [
    { id: 0, value: 1450, label: "Cairo", color: "#1B2351" },
    { id: 1, value: 650, label: "Alexandria", color: "#47C0D2" },
    { id: 2, value: 358, label: "Giza", color: "#85D9E5" },
  ];

  return (
    <>
      {isLoading ? (
        <SkeletonCurrentVisit />
      ) : (
        <DashboardCard title="Orders by Region">
          <>
            {/* CHART WRAPPER FIX */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 240,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: 240,
                  height: 240,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                }}
              >
                {/* Pie Chart */}
                <PieChart
                  series={[
                    {
                      data,
                      innerRadius: 65,
                      outerRadius: 90,
                      paddingAngle: 0,
                    },
                  ]}
                  height={240}
                  width={240}
                  margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                  slotProps={{
                    legend: { hidden: true } as any,
                  }}
                />

                {/* CENTER TEXT FIXED */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-69%, -55%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    pointerEvents: "none",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{
                      color: "#1B2351",
                      lineHeight: 1,
                      fontSize: "22px",
                    }}
                  >
                    2,458
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: "text.secondary",
                      fontWeight: 600,
                      fontSize: "12px",
                      mt: 0.5,
                    }}
                  >
                    Total Orders
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* LEGEND */}
            <Stack gap={1.5} mt={3}>
              {data.map((item) => (
                <Stack
                  key={item.id}
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack direction="row" alignItems="center" gap={1}>
                    <Box
                      sx={{
                        height: "14px",
                        width: "4px",
                        borderRadius: "2px",
                        bgcolor: item.color,
                      }}
                    />
                    <Typography variant="body1" fontWeight={500}>
                      {item.label}
                    </Typography>
                  </Stack>

                  <Stack direction="row" alignItems="center" gap={0.75}>
                    <Typography variant="body1" fontWeight={600}>
                      {item.value.toLocaleString()}
                    </Typography>

                    <Chip
                      label={
                        item.id === 0
                          ? "+12.5%"
                          : item.id === 1
                            ? "+4.7%"
                            : "+2.1%"
                      }
                      size="small"
                      sx={{
                        color: "#1B2351",
                        bgcolor: "rgba(71, 192, 210, 0.2)",
                        fontWeight: 600,
                      }}
                    />
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </>
        </DashboardCard>
      )}
    </>
  );
};

export default OrdersByRegion;
