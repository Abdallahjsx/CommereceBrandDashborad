"use client";

import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  LinearProgress,
  useTheme,
  TableSortLabel,
  TablePagination,
  Chip,
} from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";
import CustomCheckbox from "../../ui/forms/theme-elements/CustomCheckbox";
import Search from "../../layout/vertical/brandHeader/Search";

interface OrderData {
  id: string;
  customer: string;
  status: "Delivered" | "Pending" | "Cancelled" | "Processing";
  price: string;
  date: string;
}

const rows: OrderData[] = [
  {
    id: "#ORD-7712",
    customer: "Ahmed Mohamed",
    status: "Delivered",
    price: "EGP 1,250",
    date: "2025-05-01",
  },
  {
    id: "#ORD-7713",
    customer: "Sara Ahmed",
    status: "Pending",
    price: "EGP 850",
    date: "2025-05-02",
  },
  {
    id: "#ORD-7714",
    customer: "Mohamed Ali",
    status: "Processing",
    price: "EGP 2,100",
    date: "2025-05-02",
  },
  {
    id: "#ORD-7715",
    customer: "Mona Hassan",
    status: "Delivered",
    price: "EGP 420",
    date: "2025-05-03",
  },
  {
    id: "#ORD-7716",
    customer: "Omar Khaled",
    status: "Cancelled",
    price: "EGP 150",
    date: "2025-05-03",
  },
];

type Order = "asc" | "desc";

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: any }, b: { [key in Key]: any }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


const TopSellingProducts = () => {
  const theme = useTheme();

  const [order, setOrder] = useState<Order>("desc");
  const [orderBy, setOrderBy] = useState<keyof OrderData>("date");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchText, setSearchText] = React.useState("");

  const handleSort = (property: keyof OrderData) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Pending":
        return "warning";
      case "Processing":
        return "primary";
      case "Cancelled":
        return "error";
      default:
        return "default";
    }
  };

  const filteredRows = rows.filter((row) =>
    [row.id, row.customer, row.status].some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase()),
    ),
  );
  const sortedRows = filteredRows.slice().sort(getComparator(order, orderBy));

  const paginatedRows = sortedRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <DashboardCard
      title="Recent Orders"
      action={<Search value={searchText} onChange={handleSearchChange} />}
    >
      <TableContainer sx={{ width: "100%", overflowX: "auto" }}>
        <Table sx={{ tableLayout: "fixed", minWidth: 700 }} size="medium">
          <TableHead>
            <TableRow>
              <TableCell sortDirection={orderBy === "id" ? order : false}>
                <TableSortLabel
                  active={orderBy === "id"}
                  direction={orderBy === "id" ? order : "asc"}
                  onClick={() => handleSort("id")}
                >
                  Order ID
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === "customer" ? order : false}>
                <TableSortLabel
                  active={orderBy === "customer"}
                  direction={orderBy === "customer" ? order : "asc"}
                  onClick={() => handleSort("customer")}
                >
                  Customer
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === "status" ? order : false}>
                <TableSortLabel
                  active={orderBy === "status"}
                  direction={orderBy === "status" ? order : "asc"}
                  onClick={() => handleSort("status")}
                >
                  Status
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === "price" ? order : false}>
                <TableSortLabel
                  active={orderBy === "price"}
                  direction={orderBy === "price" ? order : "asc"}
                  onClick={() => handleSort("price")}
                >
                  Price
                </TableSortLabel>
              </TableCell>
              <TableCell sortDirection={orderBy === "date" ? order : false}>
                <TableSortLabel
                  active={orderBy === "date"}
                  direction={orderBy === "date" ? order : "asc"}
                  onClick={() => handleSort("date")}
                >
                  Date
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedRows.map((row) => {
              return (
                <TableRow key={row.id} hover sx={{ cursor: "pointer" }}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight={600}
                      color="#1B2351"
                    >
                      {row.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" fontWeight={500}>
                      {row.customer}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      size="small"
                      color={getStatusColor(row.status) as any}
                      sx={{ fontWeight: 600, borderRadius: "8px" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body1" fontWeight={700}>
                      {row.price}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="textSecondary">
                      {row.date}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredRows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </DashboardCard>
  );
};
export default TopSellingProducts;
