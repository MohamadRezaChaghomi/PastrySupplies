import React from "react";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CustomBadge from "../badge/Badge";
import "./NavBarAdmin.css";

export default function Topbar() {
  const navigate = useNavigate();

  const unreadMessages = 3;
  const newOrders = 5;

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">شادی لند</span>
        </div>

        <div className="topRight">

          <div
            className="topbarIconContainer"
            onClick={() => navigate("/analytics")}
            title="سفارش‌های جدید"
          >
            <CustomBadge count={newOrders}>
              <ShoppingCartOutlinedIcon className="iconPink" />
            </CustomBadge>
          </div>

          <div
            className="topbarIconContainer"
            onClick={() => navigate("/messages")}
            title="پیام‌ها"
          >
            <CustomBadge count={unreadMessages}>
              <MailOutlineIcon className="iconPink" />
            </CustomBadge>
          </div>

          <div
            className="topbarIconContainer"
            onClick={() => navigate("/settings")}
            title="پروفایل"
          >
            <AccountCircleOutlinedIcon className="iconPink" />
          </div>

        </div>
      </div>
    </div>
  );
}
