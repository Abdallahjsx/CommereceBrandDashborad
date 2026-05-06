"use client";

import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import Image from "next/image";
import BlankCard from "../../shared/BlankCard";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";

export default function Greeting() {
  const theme = useTheme();

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  const getGreetingIcon = () => {
    if (greeting === "Good Morning" || greeting === "Good Afternoon") {
      return (
        <Icon
          icon="line-md:sunny-filled-loop"
          color="orange"
          width="25"
          height="25"
        />
      );
    } else {
      return (
        <Icon icon="line-md:moon-filled-alt-loop" width="25" height="25" />
      );
    }
  };
  return (
    <BlankCard sx={{ height: "100%" }}>
      <Box
        sx={{
          background: "linear-gradient(115.16deg, #1B2351 0%, #47C0D2 100%)",

          width: "100%",
          height: "100%",
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          {/* Left Side - Text (6 columns) */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2,
              p: 3,
            }}
          >
            <Typography variant="h4" color="white">
              <Box
                component="span"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  whiteSpace: "nowrap",
                }}
              >
                Welcome Back, BrandName 👋
              </Box>
            </Typography>
            <Typography
              color="rgba(255, 255, 255, 0.7)"
              variant="body1"
              fontWeight={500}
            >
              Manage your local brands, track orders, and monitor your store’s performance in real-time.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              href="/reel-stats"
              endIcon={<ArrowForwardTwoToneIcon />}
              sx={{
                color: "black",
                width: "fit-content",
                mt: 1,
                borderRadius: "12px",
                textTransform: "none",
                px: 3,
              }}
            >
              Explore Reel Stats 
            </Button>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
              alignItems: "flex-end",
              justifyContent: "flex-end",
              minHeight: 200,
            }}
          >
            <Box sx={{ position: "absolute", height: 200, width: 476 }}>
              <Image
                src="/images/dashboard/analytics/usergraph.png"
                alt="greeting"
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </BlankCard>
  );
}
