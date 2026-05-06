"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import BlankCard from "../../shared/BlankCard";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const BrandPerformance = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Brand data
  const brands = [
    {
      name: "Zara Local",
      category: "Fashion",
      orders: "1,240",
      label: "Active",
      color: "success",
    },
    {
      name: "Handmade Egypt",
      category: "Decor",
      orders: "850",
      label: "Pending",
      color: "warning",
    },
    {
      name: "Nile Fashion",
      category: "Clothing",
      orders: "2,100",
      label: "Active",
      color: "success",
    },
    {
      name: "Cairo Crafts",
      category: "Accessories",
      orders: "420",
      label: "Closed",
      color: "error",
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BlankCard sx={{ height: "100%", p: 3 }}>
      <>
        <Box mb={3}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5" fontWeight={600}>
              Brand Performance
            </Typography>
            <IconButton onClick={handleClick} size="small">
              <Icon icon={"solar:menu-dots-bold"} width={24} height={24} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>View All Brands</MenuItem>
              <MenuItem onClick={handleClose}>Add New Brand</MenuItem>
            </Menu>
          </Stack>
        </Box>
        <Stack spacing={3}>
          {brands.map((brand, index) => (
            <Box key={brand.name}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack direction={"row"} gap={2} alignItems={"center"}>
                  <Avatar
                    sx={{
                      bgcolor: "rgba(0,0,0,0.05)",
                      color: "text.primary",
                      fontWeight: 700,
                      fontSize: "14px",
                      borderRadius: "12px",
                    }}
                  >
                    {brand.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {brand.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {brand.orders} orders • {brand.category}
                    </Typography>
                  </Box>
                </Stack>
                    <Chip
                      label={brand.label}
                      size="small"
                      color={brand.color as any}
                      sx={{
                        fontWeight: 600,
                        borderRadius: "8px",
                        bgcolor: (theme) => {
                          if (brand.color === 'success') return 'rgba(71, 192, 210, 0.1)';
                          if (brand.color === 'warning') return 'rgba(255, 179, 0, 0.1)';
                          if (brand.color === 'error') return 'rgba(255, 82, 82, 0.1)';
                          return 'rgba(27, 35, 81, 0.1)';
                        },
                        color: (theme) => {
                          if (brand.color === 'success') return '#47C0D2';
                          if (brand.color === 'warning') return '#FFB300';
                          if (brand.color === 'error') return '#FF5252';
                          return '#1B2351';
                        }
                      }}
                    />
              </Stack>
              {index < brands.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Box>
          ))}
        </Stack>
      </>
    </BlankCard>
  );
};

export default BrandPerformance;
