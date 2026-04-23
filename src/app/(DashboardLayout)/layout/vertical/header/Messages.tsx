'use client'
import React, { useState } from "react";
import {
  IconButton,
  Box,
  Badge,
  MenuItem,
  Avatar,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import * as dropdownData from "./data";
import Scrollbar from "@/components/custom-scroll/Scrollbar";
import { styled, alpha } from "@mui/material/styles";
import { Stack } from "@mui/system";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Messages = () => {
  const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null);

  const handleClick2 = (event: { currentTarget: React.SetStateAction<HTMLElement | null>; }) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      "& .MuiMenuItem-root": {

        "&:hover": {
          backgroundColor
            : `${theme.palette.primary.light}`,
        },
      },
    },
  }));

  return (
    <Box>
      <IconButton
        aria-label="show 4 new mails"
        onClick={handleClick2}
        size="small"
        color='inherit'
        sx={{
          color: anchorEl2 ? 'primary.main' : 'text.secondary',
        }}
      >
        <Box component="span" className="heartbit"></Box>
        <Icon icon="solar:settings-minimalistic-line-duotone" width="24" height="24" />
      </IconButton>

      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <StyledMenu
        id="msgs-menu2"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        sx={{
          "& .MuiMenu-paper": {
            width: "360px",
            maxHeight: "none",

            "& .MuiMenu-list": {
              paddingY: 0,
            },
          },
        }}
      >
        <Stack
          direction="row"
          py={2}
          px={3}
          alignItems="center"

          justifyContent="space-between"

        >
          <Typography variant="h5" fontSize="20px" >
            Inbox
          </Typography>

          <Chip label='3 New' color='warning' />
        </Stack>
        <Scrollbar sx={{ height: "365px" }}>
          {dropdownData.messages.map((notification, index) => {
            return (
              <Box key={index}>
                <MenuItem
                  sx={{
                    p: 2,
                    borderBottom: (theme) =>
                      `1px solid ${theme.palette.divider}`,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <Box
                      minWidth="40px"
                      height="40px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Badge
                        color="success"
                        overlap="circular"
                        badgeContent=" "
                        variant="dot"
                      >
                        <Avatar
                          src={notification.avatar}
                          alt={notification.avatar}
                          sx={{
                            width: 42,
                            height: 42,
                          }}
                        />
                      </Badge>
                    </Box>
                    <Box>
                      <Box display="flex" justifyContent="space-between">
                        <Typography
                          variant="subtitle2"
                          color="textPrimary"
                          fontWeight={500}
                          fontSize="14px"
                          width="fit-content"
                          noWrap
                          sx={{
                            width: "200px",
                          }}
                        >
                          {notification.title}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="subtitle2"
                          fontSize="12px"
                          lineHeight={1.25}
                          noWrap
                        >
                          {notification.time}
                        </Typography>
                      </Box>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        fontSize="12px"
                        lineHeight={1.25}
                        sx={{
                          width: "200px",
                        }}
                      >
                        {notification.subtitle}
                      </Typography>
                    </Box>
                  </Stack>
                </MenuItem>
              </Box>
            );
          })}
        </Scrollbar>

        <Box p={2} sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? theme.palette.background.paper : 'white',
          borderRadius: "0px"
        }}>
          <Button
            href="/apps/email"
            variant='contained'
            component={Link}
            color='primary'
            sx={{
              display: "flex",
              gap: "6px",
              lineHeight: 2,
            }}
            fullWidth
          >
            See all Messages
          </Button>
        </Box>
      </StyledMenu>
    </Box>
  );
};

export default Messages;
