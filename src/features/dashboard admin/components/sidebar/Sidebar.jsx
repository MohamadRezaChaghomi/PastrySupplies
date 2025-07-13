import React from "react";
import { Link, useLocation } from "react-router-dom";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Dropdown from "../dropdown/Dropdown";
import "./Sidebar.css";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarLogo">
          <CakeOutlinedIcon className="sidebarIconOnly" />
          <span className="sidebarLogoText">پنل ادمین</span>
        </div>

        <div className="sidebarSectionTitle">مدیریت</div>
        <ul className="sidebarList">
          <Link to="/userlists" className="link">
            <li className={`sidebarListItem ${location.pathname === "/userlists" ? "active" : ""}`}>
              <PermIdentityIcon className="sidebarIcon" />
              <span className="itemLabel">کاربران</span>
            </li>
          </Link>
          <Dropdown />
        </ul>

        <div className="sidebarSectionTitle">ارتباطات</div>
        <ul className="sidebarList">
          <Link to="/messages" className="link">
            <li className={`sidebarListItem ${location.pathname === "/messages" ? "active" : ""}`}>
              <MailOutlineIcon className="sidebarIcon" />
              <span className="itemLabel">پیام‌ها</span>
            </li>
          </Link>
        </ul>

        <div className="sidebarSectionTitle">تنظیمات</div>
        <ul className="sidebarList">
          <Link to="/settings" className="link">
            <li className={`sidebarListItem ${location.pathname === "/settings" ? "active" : ""}`}>
              <SettingsOutlinedIcon className="sidebarIcon" />
              <span className="itemLabel">تنظیمات</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
