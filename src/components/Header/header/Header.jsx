import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  Offcanvas,
} from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";
import MegaMenu from "../megaMenu/MegaMenu";
import MobileMenu from "../mobileMenu/MobileMenu";
import AuthModal from '../../AuthModal/AuthModal';

export default function Header() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);
  const handleOpenAuthModal = () => setShowAuthModal(true);
  const handleCloseAuthModal = () => setShowAuthModal(false);

  return (
    <>
      <Navbar className="pt-0 pb-0 navbar position-relative" dir="rtl">
        <Container
          fluid
          className="mx-4 d-lg-none d-flex justify-content-between align-items-center"
        >
          {/* آیکن همبرگر - راست */}
          <div onClick={handleShow} style={{ cursor: "pointer" }}>
            <MenuIcon fontSize="large" />
          </div>

          {/* لوگو - وسط */}
          <Navbar.Brand className="m-0 p-0 text-center flex-grow-1">
            <span className="logo-header" style={{ color: "#FF7CA8" }}>
              شادی لند
            </span>
          </Navbar.Brand>

          {/* آیکن سبد خرید - چپ */}
          <div>
            <button className="position-relative cart-btn">
              <ShoppingCartIcon fontSize="large" />
            </button>
          </div>
        </Container>

        {/* آیتم‌های دسکتاپ */}
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

          {/* ناوبری دسکتاپ */}
          <Nav
            className="nav-font d-flex align-items-end"
            style={{ gap: 15, height: 55 }}
          >
            <Nav.Link href="/">خانه</Nav.Link>
            <Nav.Link
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
              style={{ position: "relative" }}
            >
              محصولات <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
              <MegaMenu show={showMegaMenu} />
            </Nav.Link>
            <Nav.Link href="/about">درباره ما</Nav.Link>
            <Nav.Link href="/contact">تماس با ما</Nav.Link>
          </Nav>

          {/* فرم جستجو در دسکتاپ */}
          <Form className="search-container d-none d-lg-block">
            <div className="search-box-wrapper">
              <SearchIcon className="search-icon" />
              <input
                type="search"
                placeholder="جستجوی محصولات..."
                className="search-control"
              ></input>
            </div>
          </Form>

          {/* دکمه‌ها در دسکتاپ */}
          <div className="d-flex align-items-center" style={{ gap: 20 }}>
            <button onClick={handleOpenAuthModal} className="login-register-btn d-flex align-items-center">
              <LoginTwoToneIcon className="me-1" />
              ورود | ثبت‌نام
            </button>

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
        backdrop={true} // اختیاری چون پیش‌فرض فعاله
        scroll={false} // باعث میشه بقیه صفحه اسکرول نشه
        dir="rtl"
        style={{ width: 320 }}
      >
        <Offcanvas.Header className="p-0">
          <button onClick={handleOpenAuthModal} className="login-register-mobile-btn d-flex align-items-center justify-content-center">
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
              ></input>
            </div>
          </Form>
          <Nav
            className="flex-column mt-2 categories-mobile"
            style={{ gap: 3 }}
          >
            <Nav.Link href="/">خانه</Nav.Link>
            <MobileMenu />
            <Nav.Link href="/about">درباره ما</Nav.Link>
            <Nav.Link href="/contact">تماس با ما</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <AuthModal open={showAuthModal} onClose={handleCloseAuthModal} />
    </>
  );
}
