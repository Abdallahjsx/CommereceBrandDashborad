'use client';
import React, { ReactNode, useContext } from "react";
import { Typography, Breadcrumbs, useTheme, Box } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { CustomizerContext } from "@/app/context/customizerContext";

interface BreadCrumbItem {
  title: string;
  to?: string;
}

interface BreadCrumbType {
  subtitle?: string;
  items?: BreadCrumbItem[];
  title: string;
  children?: ReactNode;
}

const Breadcrumb = ({ subtitle, items, title, children }: BreadCrumbType) => {
  const theme = useTheme();
  const { isBorderRadius } = useContext(CustomizerContext);

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: `${isBorderRadius}px`,
        p: "20px",
        my: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Left side: Title  */}
        <Box>
          <Typography variant="h4" color="white">
            {title}
          </Typography>
        </Box>

        {/* Right side: Breadcrumbs */}
        <Breadcrumbs
          separator={
            <Icon
              icon="heroicons:slash-20-solid"
              color={theme.palette.whiteColor.white60}
              height={18}
            />
          }
          aria-label="breadcrumb"
          sx={{
            alignItems: "center",
            mt: { xs: 1, sm: 0 },
          }}
        >
          {items?.map((item) => (
            <Box key={item.title}>
              {item.to ? (
                <Link href={item.to} passHref>
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    color="whiteColor.white60"
                    sx={{ cursor: "pointer" }}
                  >
                    {item.title}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  variant="h6"
                  fontWeight={500}
                  color="whiteColor.white60"
                >
                  {item.title}
                </Typography>
              )}
            </Box>
          ))}
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default Breadcrumb;
