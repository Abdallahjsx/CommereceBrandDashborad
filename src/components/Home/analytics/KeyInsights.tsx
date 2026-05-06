import {
  Badge,
  Box,
  Chip,
  Fab,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";
import { Icon } from "@iconify/react";
import { useState } from "react";

const OrderStatusOverview = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <DashboardCard
      title="Order Status"
      action={
        <Fab
          size="small"
          sx={{
            bgcolor: "transparent",
            boxShadow: 'none',
            "&:hover": {
              background: `rgba(0,0,0,0.05) !important`,
            },
          }}
          onClick={handleClick}
        >
          <Icon
            icon={"solar:menu-dots-bold"}
            width={24}
            height={24}
          />
        </Fab>
      }
    >
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>This Week</MenuItem>
        <MenuItem onClick={handleClose}>This Month</MenuItem>
        <MenuItem onClick={handleClose}>This Year</MenuItem>
      </Menu>
      <>
        <Typography
          variant="h6"
          fontWeight={400}
          color="textSecondary"
        >
          Total Orders Performance
        </Typography>
        <Stack direction={"row"} gap={1} alignItems={"center"} mt={0.5}>
          <Typography variant="h3" fontWeight={700}>92.4%</Typography>
          <Chip
            label="Success Rate"
            size="small"
            sx={{
              color: '#1B2351',
              bgcolor: 'rgba(71, 192, 210, 0.2)',
              fontWeight: 600
            }}
          />
        </Stack>
        <Box mt={3} sx={{ height: 15, width: '100%', display: 'flex', overflow: 'hidden' }}>
          <Box sx={{ width: '70%', bgcolor: '#1B2351' }} />
          <Box sx={{ width: '20%', bgcolor: '#47C0D2' }} />
          <Box sx={{ width: '10%', bgcolor: '#85D9E5' }} />
        </Box>
        <Stack direction={"row"} gap={2} mt={3} flexWrap="wrap">
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#1B2351' }} />
            <Typography variant="body2" color="textSecondary">Delivered</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#47C0D2' }} />
            <Typography variant="body2" color="textSecondary">Pending</Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#85D9E5' }} />
            <Typography variant="body2" color="textSecondary">Cancelled</Typography>
          </Stack>
        </Stack>
      </>
    </DashboardCard>
  );
};
export default OrderStatusOverview;
