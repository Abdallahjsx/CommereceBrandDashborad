import { uniqueId } from "lodash";
import { IconifyIcon } from "@iconify/react";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: string | IconifyIcon;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const Menuitems: MenuitemsType[] = [
  {
    id: uniqueId(),
    title: "Home",
    icon: "solar:chart-square-line-duotone",
    href: "/home",
  },
  // products management elements
  {
    id: uniqueId(),
    title: "Products Management",
    icon: "solar:box-minimalistic-line-duotone",
    navlabel: false,
    children: [
      {
        id: uniqueId(),
        title: "Products",
        icon: "solar:stop-circle-line-duotone",
        href: `/products-management/products`,
      },
      {
        id: uniqueId(),
        title: "Add Product",
        icon: "solar:stop-circle-line-duotone",
        href: "/products-management/add-product",
      },
    ],
  },
  // community elements
  {
    id: uniqueId(),
    title: "Community",
    icon: "solar:widget-4-line-duotone",
    navlabel: false,
    children: [
      {
        id: uniqueId(),
        title: "Blogs",
        icon: "solar:stop-circle-line-duotone",
        href: `/community/blogs`,
      },
      {
        id: uniqueId(),
        title: "Add Blog",
        icon: "solar:stop-circle-line-duotone",
        href: `/community/add-blog`,
      },
    ],
  },

  // { divider: true },
  // chat elements
  {
    id: uniqueId(),
    title: "Chat",
    icon: "solar:chat-round-dots-outline",

    href: "/chat",
    chip: "9",
    chipColor: "primary",
  },
  // {
  //   navlabel: true,
  //   subheader: "Other",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Menu Level",
  //   icon: "solar:layers-minimalistic-line-duotone",

  //   href: "/menulevel/",
  //   children: [
  //     {
  //       id: uniqueId(),
  //       title: "Level 1",
  //       icon: "solar:stop-circle-line-duotone",
  //       href: "/l1",
  //     },
  //     {
  //       id: uniqueId(),
  //       title: "Level 1.1",
  //       icon: "solar:stop-circle-line-duotone",
  //       href: "/l1.1",
  //       children: [
  //         {
  //           id: uniqueId(),
  //           title: "Level 2",
  //           icon: "solar:stop-circle-line-duotone",
  //           href: "/l2",
  //         },
  //         {
  //           id: uniqueId(),
  //           title: "Level 2.1",
  //           icon: "solar:stop-circle-line-duotone",
  //           href: "/l2.1",
  //           children: [
  //             {
  //               id: uniqueId(),
  //               title: "Level 3",
  //               icon: "solar:stop-circle-line-duotone",
  //               href: "/l3",
  //             },
  //             {
  //               id: uniqueId(),
  //               title: "Level 3.1",
  //               icon: "solar:stop-circle-line-duotone",
  //               href: "/l3.1",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: uniqueId(),
  //   title: "Disabled",
  //   icon: "solar:forbidden-circle-line-duotone",
  //   href: "",
  //   disabled: true,
  // },
  // {
  //   id: uniqueId(),
  //   title: "SubCaption",
  //   subtitle: "This is the sutitle",
  //   icon: "solar:star-fall-minimalistic-2-line-duotone",
  //   href: "",
  // },

  // {
  //   id: uniqueId(),
  //   title: "Chip",
  //   icon: "solar:shield-check-line-duotone",

  //   href: "",
  //   chip: "9",
  //   chipColor: "primary",
  // },
  // {
  //   id: uniqueId(),
  //   title: "Outlined",
  //   icon: "solar:smile-circle-line-duotone",

  //   href: "",
  //   chip: "outline",
  //   variant: "outlined",
  //   chipColor: "primary",
  // },
  // {
  //   id: uniqueId(),
  //   title: "External Link",
  //   external: true,
  //   icon: "solar:link-square-line-duotone",
  //   href: "https://google.com",
  // },
  // { divider: true },
];

export default Menuitems;
