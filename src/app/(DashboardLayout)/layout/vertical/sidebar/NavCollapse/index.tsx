"use client";
import { CustomizerContext } from "@/app/context/customizerContext";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import NavItem from "../NavItem";
import { isNull } from "lodash";
import { Icon } from "@iconify/react";

type NavGroupProps = {
  [x: string]: any;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
};

interface NavCollapseProps {
  menu: NavGroupProps;
  level: number;
  pathWithoutLastPart: any;
  pathDirect: any;
  hideMenu: any;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function NavCollapse({
  menu,
  level,
  pathWithoutLastPart,
  pathDirect,
  hideMenu,
  onClick,
}: NavCollapseProps) {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));
  const { isBorderRadius } = useContext(CustomizerContext);

  const theme = useTheme();
  const pathname = usePathname();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  //checks if the menu or any of its children is active
  const isMenuOrChildSelected = (
    menuItem: any,
    currentPath: string
  ): boolean => {
    if (!menuItem) return false;
    if (menuItem.href === currentPath) return true;
    if (menuItem.children) {
      return menuItem.children.some((child: any) =>
        isMenuOrChildSelected(child, currentPath)
      );
    }
    return false;
  };

  const isTopLevel = level === 1;
  const active = isMenuOrChildSelected(menu, pathname);

  const menuIcon = Icon ? (
    !isTopLevel ? (
      <Icon icon={menu.icon || ""} height={14} />
    ) : (
      <Icon
        icon={menu.icon || ""}
        height={24}
        color={open && active ? theme.palette.secondary.main : ""}
      />
    )
  ) : null;

  const handleClick = () => {
    setOpen(!open);
  };

  // menu collapse for sub-levels
  React.useEffect(() => {
    setOpen(false);
    menu?.children?.forEach((item: any) => {
      if (item?.href === pathname) {
        setOpen(true);
      }
    });
  }, [pathname, menu.children]);

  const ListItemStyled = styled(ListItemButton)(() => ({
    marginBottom: "2px",
    padding: "6px 10px",
    paddingLeft: hideMenu
      ? "7px"
      : (level ?? 2) > 2
        ? `${(level ?? 1) * 15}px`
        : "10px",
    backgroundColor:
      (active || (open && level < 2)) ? theme.palette.primary.main : "transparent",
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor:
        active || (open && level < 2)
          ? theme.palette.primary.main
          : theme.palette.primary.light,
      color:
        active || (open && level < 2)
          ? theme.palette.secondary.main
          : theme.palette.blackColor.black80,
    },
    color:
      open && level < 2
        ? theme.palette.secondary.main
        : level > 1 && open
          ? theme.palette.primary.main
          : theme.palette.blackColor.black80,

    borderRadius: isBorderRadius / 1.5,
  }));

  // If Menu has Children
  const submenus = menu.children?.map((item: any) => {
    if (item.children) {
      return (
        <NavCollapse
          key={item?.id}
          menu={item}
          level={level + 1}
          pathWithoutLastPart={pathWithoutLastPart}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={onClick}
        />
      );
    } else {
      return (
        <NavItem
          key={item.id}
          item={item}
          level={level + 1}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={lgDown ? onClick : isNull}
        />
      );
    }
  });

  return (
    <>
      <ListItemStyled
        onClick={handleClick}
        selected={pathWithoutLastPart === menu.href}
        key={menu?.id}
      >
        <ListItemIcon
          sx={{
            minWidth: "36px",
            p: "3px 0",
            color: "inherit",
          }}
        >
          {menuIcon}
        </ListItemIcon>

        <ListItemText>
          {hideMenu ? (
            ""
          ) : (
            <Typography variant="caption" fontSize="15px" fontWeight={400}>
              {t(`${menu.title}`)}
            </Typography>
          )}
        </ListItemText>
        {!open ? (
          <IconChevronDown size="1rem" />
        ) : (
          <IconChevronUp size="1rem" />
        )}
      </ListItemStyled>
      <Collapse in={open} timeout="auto">
        {submenus}
      </Collapse>
    </>
  );
}
