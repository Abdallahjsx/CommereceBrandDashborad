"use client";

import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Chip,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import BlankCard from "../../shared/BlankCard";

const TotalOrders = () => {
  const theme = useTheme();
  return (
    <BlankCard>
      <Box p={3} display="flex" gap={1} flexDirection="column">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5" fontWeight={600}>Total Orders</Typography>
          <Avatar
            sx={{
              bgcolor: 'rgba(71, 192, 210, 0.1)',
              color: '#1B2351',
              borderRadius: '12px'
            }}
            variant="rounded"
          >
            <Icon icon={"solar:cart-large-linear"} width={24} height={24} />
          </Avatar>
        </Stack>
        <Box>
          <Stack direction={"row"} gap={1} alignItems={"center"} mt={1}>
            <Typography variant="h4" fontWeight={700}>2,845</Typography>
            <Chip
              label="+8.2%"
              size="small"
              sx={{
                color: '#1B2351',
                bgcolor: 'rgba(71, 192, 210, 0.2)',
                fontWeight: 600
              }}
            />
          </Stack>
          <Typography color="textSecondary" variant="body2" mt={0.5}>
            vs last month
          </Typography>
        </Box>
      </Box>
    </BlankCard>
  );
};

export default TotalOrders;
