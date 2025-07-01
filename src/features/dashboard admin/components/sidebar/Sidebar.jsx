// Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import TimelineIcon from "@mui/icons-material/Timeline";
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
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/analytics" className="link">
              <li className={`sidebarListItem ${location.pathname === "/Analytics" ? "active" : ""}`}>
                <TimelineIcon className="sidebarIcon" />
                <span className="itemLabel">آمار</span>
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/userlists" className="link">
              <li className={`sidebarListItem ${location.pathname === "/userLists" ? "active" : ""}`}>
                <PermIdentityIcon className="sidebarIcon" />
                <span className="itemLabel">کاربران</span>
              </li>
            </Link>
            <Dropdown />
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              <span className="itemLabel">پیام ها</span>
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
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
    </div>
  );
}