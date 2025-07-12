import React from "react";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./NavBarAdmin.css";

export default function Topbar() {
  const navigate = useNavigate();

  const unreadMessages = 3;
  const newOrders = 5;

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo" style={{ fontFamily: "DimaFantasy" }}>
            شادی لند
          </span>
        </div>

        <div className="topRight">
          
          {/* آیکون سفارش‌ها */}
          <div
            className="topbarIconContainer"
            onClick={() => navigate("/analytics")}
            title="سفارش‌های جدید"
          >
            <ShoppingCartOutlinedIcon className="iconPink" />
            {newOrders > 0 && (
              <span className="topIconBadge badgeGreen">{newOrders}</span>
            )}
          </div>

          {/* آیکون پیام‌ها */}
          <div
            className="topbarIconContainer"
            onClick={() => navigate("/messages")}
            title="پیام‌ها"
          >
            <MailOutlineIcon className="iconPink" />
            {unreadMessages > 0 && (
              <span className="topIconBadge badgePurple">{unreadMessages}</span>
            )}
          </div>

          {/* آواتار با آیکون outline */}
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
