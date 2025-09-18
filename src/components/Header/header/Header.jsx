import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  Offcanvas,
  Modal,
  InputGroup,
} from "react-bootstrap";
import { IconButton, Popover, TextField, InputAdornment } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import MegaMenuProducts from "../megaMenu/MegaMenuProducts";
import MegaMenuEducation from "../megaMenu/MegaMenuEducation";
import MobileMenuProducts from "../mobileMenu/MobileMenuProducts";
import MobileMenuEducation from "../mobileMenu/MobileMenuEducation";

export default function Header() {
  const [showMegaMenuProducts, setShowMegaMenuProducts] = useState(false);
  const [showMegaMenuEducation, setShowMegaMenuEducation] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setShowOffcanvas(false);
      }

      if (window.innerWidth < 992) {
        setAnchorEl(null);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSearchClose = () => {
    setAnchorEl(null);
  };
  const openSearch = Boolean(anchorEl);
  return (
    <>
      <Navbar className="pt-0 pb-0 navbar position-relative" dir="rtl">
        {/* موبایل */}
        <Container
          fluid
          className="mx-4 d-lg-none d-flex justify-content-between align-items-center"
        >
          {/* آیکن همبرگر */}
          <div onClick={handleShow} style={{ cursor: "pointer" }}>
            <MenuIcon fontSize="large" />
          </div>

          {/* لوگو */}
          <Navbar.Brand className="m-0 p-0 text-center flex-grow-1">
            <span className="logo-header" style={{ color: "#FF7CA8" }}>
              شادی لند
            </span>
          </Navbar.Brand>

          {/* آیکن سبد خرید */}
          <div>
            <button className="position-relative cart-btn">
              <ShoppingCartIcon fontSize="large" />
            </button>
          </div>
        </Container>

        {/* دسکتاپ */}
        <Container
          fluid
          className="mx-4 d-none d-lg-flex justify-content-between align-items-center gap-4"
        >
          {/* لوگو */}
          <Navbar.Brand className="m-0 p-0">
            <span className="logo-header" style={{ color: "#FF7CA8" }}>
              شادی لند
            </span>
          </Navbar.Brand>

          {/* ناوبری */}
          <Nav
            className="nav-font d-flex align-items-end"
            style={{ gap: 15, height: 55 }}
          >
            <Nav.Link
              onMouseEnter={() => setShowMegaMenuProducts(true)}
              onMouseLeave={() => setShowMegaMenuProducts(false)}
              style={{ position: "relative" }}
            >
              محصولات <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
              <MegaMenuProducts show={showMegaMenuProducts} />
            </Nav.Link>
            <Nav.Link
              onMouseEnter={() => setShowMegaMenuEducation(true)}
              onMouseLeave={() => setShowMegaMenuEducation(false)}
              style={{ position: "relative" }}
            >
              زنگ آموزش <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
              <MegaMenuEducation show={showMegaMenuEducation} />
            </Nav.Link>
            <Nav.Link href="/about">پیگیری سفارش</Nav.Link>
            <Nav.Link href="/contact">ارتباط با فروشنده</Nav.Link>
          </Nav>

          {/* دکمه‌ها سمت راست */}
          <div className="header-actions d-flex align-items-center">
            {/* دکمه ورود */}
            {/* آیکن سرچ با Popover */}
            <IconButton onClick={handleSearchOpen}>
              <SearchIcon
                sx={{
                  fontSize: 28,
                }}
              />
            </IconButton>
            <button className="login-register-btn d-flex align-items-center">
              <LoginTwoToneIcon className="me-1" />
              ورود | ثبت‌نام
            </button>
            {/* سبد خرید */}
            <button className="position-relative cart-btn">
              <ShoppingCartIcon fontSize="large" />
            </button>
          </div>
        </Container>
      </Navbar>

      {/* Offcanvas موبایل */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="end"
        dir="rtl"
        style={{ width: 320 }}
      >
        <Offcanvas.Header className="p-0">
          <button  className="login-register-mobile-btn d-flex align-items-center justify-content-center">
            ورود | ثبت‌نام
          </button>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Form className="search-container">
            <div className="search-box-wrapper">
              <SearchIcon className="search-icon" />
              <input
                type="search"
                placeholder="جستجوی محصولات..."
                className="search-control"
              />
            </div>
          </Form>
          <Nav
            className="flex-column mt-2 categories-mobile"
            style={{ gap: 3 }}
          >
            <Nav.Link href="/">صفحه اصلی</Nav.Link>
            <MobileMenuProducts />
            <MobileMenuEducation />
            <Nav.Link href="/about">ارتباط با فروشنده</Nav.Link>
            <Nav.Link href="/contact">پیگیری سفارش</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      {/* Popover سرچ دسکتاپ */}
      <Popover
        open={openSearch}
        anchorEl={anchorEl}
        onClose={handleSearchClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            padding: 1,
            width: 300,
            borderRadius: 2,
            boxShadow: 3,
          },
        }}
      >
        <TextField
          autoFocus
          fullWidth
          placeholder="نام محصول را وارد کنید..."
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Popover>
    </>
  );
}
