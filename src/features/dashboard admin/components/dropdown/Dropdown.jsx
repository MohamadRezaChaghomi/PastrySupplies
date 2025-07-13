import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import "./Dropdown.css";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleItemClick = () => setOpen(false);

  const activeRoutes = ["/category", "/category/create", "/product/create"];
  const isActive = activeRoutes.includes(location.pathname);

  return (
    <div className={`dropdown ${open ? "open" : ""}`} onMouseLeave={() => setOpen(false)}>
      <div
        className={`sidebarListItem dropdownToggle ${isActive ? "active" : ""}`}
        onMouseEnter={() => setOpen(true)}
      >
        <ListOutlinedIcon className="sidebarIcon" />
        <span className="itemLabel">لیست</span>
        <ExpandMoreIcon className={`arrowIcon ${open ? "rotate" : ""}`} />
      </div>

      {open && (
        <ul className="dropdownMenu">
          <li>
            <Link
              to="/category"
              className={`dropdownItem ${location.pathname === "/category" ? "active" : ""}`}
              onClick={handleItemClick}
            >
              <CategoryOutlinedIcon className="sidebarIcon" />
              <span className="itemLabel">دسته‌بندی‌ها</span>
            </Link>
          </li>
          <li>
            <Link
              to="/category/create"
              className={`dropdownItem ${location.pathname === "/category/create" ? "active" : ""}`}
              onClick={handleItemClick}
            >
              <AddCircleOutlineOutlinedIcon className="sidebarIcon" />
              <span className="itemLabel">ایجاد دسته‌بندی</span>
            </Link>
          </li>
          <li>
            <Link
              to="/product/create"
              className={`dropdownItem ${location.pathname === "/product/create" ? "active" : ""}`}
              onClick={handleItemClick}
            >
              <AddCircleOutlineOutlinedIcon className="sidebarIcon" />
              <span className="itemLabel">ایجاد محصول</span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
