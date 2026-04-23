"use client";
import React, { useContext, useState } from "react";
import Scrollbar from "@/components/custom-scroll/Scrollbar";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const router = useRouter();
  const userName = "Cameron";

  const handleLogout = async () => {
    // logout();
    router.push("/auth/auth1/login");
  };

  const theme = useTheme();

  const listItemButtonStyle = {
    p: "3px",
    gap: "10px",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor:
        theme.palette.mode === "dark" ? "primary" : "primary.light",
      "& .MuiListItemIcon-root, & svg, & .MuiTypography-root": {
        color:
          theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : theme.palette.primary.main,
      },
    },
  };
  return (
    <Box>
      <IconButton
        size="small"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          src={"/images/profile/avtar.png"}
          alt={"ProfileImg"}
          sx={{
            width: 30,
            height: 30,
          }}
        />
      </IconButton>

      <Drawer
        anchor="right"
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        slotProps={{
          paper: {
            sx: {
              width: " 330px",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 1,
            cursor: "pointer",
          }}
          onClick={handleClose2}
        >
          <Icon icon="solar:close-circle-line-duotone" fontSize={24} />
        </Box>

        <Scrollbar sx={{ height: "calc(100% - 75px)" }}>
          <Stack direction="column" alignItems="center" pt={2.5} gap={4}>
            <Avatar
              src={"/images/profile/avtar.png"}
              alt={"ProfileImg"}
              sx={{ width: 84, height: 84 }}
            ></Avatar>
            <Box textAlign="center">
              <Typography variant="h5" fontWeight={600}>
                {" "}
                {userName}
              </Typography>

              <Typography
                variant="subtitle2"
                color="blackColor.black60"
                display="flex"
                alignItems="center"
                gap={1}
                sx={{
                  color:
                    theme.palette.mode === "dark"
                      ? theme.palette.whiteColor.white60
                      : theme.palette.blackColor.black60,
                }}
              >
                <Icon icon="solar:mailbox-line-duotone" width={16}></Icon>
                info@niceadmin.com
              </Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              borderTop: `1px dashed ${theme.palette.blackColor.black10}`,
              pt: "24px",
              px: "20px",
              mt: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <List
              sx={{
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.whiteColor.white60
                    : theme.palette.blackColor.black60,
              }}
            >
              {[
                {
                  icon: "solar:home-smile-angle-outline",
                  label: "Home",
                  href: "/",
                },
                {
                  icon: "solar:user-broken",
                  label: "Profile",
                  href: "/",
                },
                {
                  icon: "solar:folder-with-files-broken",
                  label: "Invoice",
                  badge: 3,
                  href: "/",
                },
                {
                  icon: "solar:keyboard-linear",
                  label: "Subscription",
                  href: "/",
                },
                {
                  icon: "solar:settings-linear",
                  label: "Account Settings",
                  href: "/",
                },
              ].map((item, index) => (
                <ListItemButton key={index} sx={listItemButtonStyle} component={Link} href={item.href}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <Icon icon={item.icon} width={20} height={20} />
                  </ListItemIcon>

                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        fontWeight={500}
                        color="inherit"
                      >
                        {item.label}
                        {item.badge && (
                          <Box
                            component="span"
                            sx={{
                              ml: 1,
                              color: "primary.main",
                              fontWeight: 500,
                              fontSize: "12px",
                              backgroundColor: "primary.light",
                              px: "8px",
                              borderRadius: "4px",
                            }}
                          >
                            {item.badge}
                          </Box>
                        )}
                      </Typography>
                    }
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              borderTop: `1px dashed ${theme.palette.blackColor.black10}`,
              pt: "24px",
              mt: "24px",
            }}
          >
            <Stack alignItems="center" px="24px" p={2}>
              <Image
                src="/images/backgrounds/sidebarbuynow.svg"
                alt="sidebar_bg"
                width={80}
                height={80}
              />

              <Box textAlign="center" mt={3}>
                <Typography variant="h5">Grab Nice Admin</Typography>
                <Typography variant="subtitle1">
                  Customize your dashboard
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                sx={{ color: "black", fontWeight: 500, mt: 2 }}
              >
                Log out
              </Button>
            </Stack>
          </Box>
        </Scrollbar>
      </Drawer>
    </Box>
  );
};

export default Profile;
