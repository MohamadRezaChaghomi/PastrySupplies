import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CustomBadge from "../badge/Badge";
import "./NavBarAdmin.css";
import AuthModal from '../../../../components/AuthModal/AuthModal'; 

export default function Topbar({ onAuthClick }) {
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
            onClick={() => navigate("/reportspage")}
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

          <div className="topbarIconContainer">
            <Button
              variant="outlined"
              size="small"
              onClick={onAuthClick}
            >
              ورود / ثبت‌نام
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
