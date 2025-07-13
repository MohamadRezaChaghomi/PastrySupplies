// components/CustomBadge.jsx
import React from "react";
import { Badge } from "@mui/material";

export default function CustomBadge({ count, children }) {
  return (
    <Badge
      badgeContent={count}
      color="secondary"
      overlap="circular"
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: "#ec407a",
          color: "#fff",
          fontSize: "11px",
          fontWeight: "bold",
          minWidth: "18px",
          height: "18px",
          padding: "0 5px",
        },
      }}
    >
      {children}
    </Badge>
  );
}
