import React, { useState } from "react";
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import MegaMenu from "./MegaMenu"; // مسیر را طبق پروژه‌ات تنظیم کن

export default function Header() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="pt-0 pb-0 navbar position-relative">
        <Container
          fluid
          className="justify-content-between"
          style={{ gap: 30 }}
        >
          <Navbar.Brand className="logo m-0 p-0" style={{ color: "#FF7CA8"}}>شادی لند</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar" className="justify-content-between" style={{ gap:30 }}>
            <Nav className="me-auto nav-font align-self-end" dir="rtl">
              <div className="d-flex" style={{ gap: 6 }}>
                <Nav.Link href="/">خانه</Nav.Link>
                {/* دسته‌بندی با مگا منو */}
                <Nav.Link
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                  style={{ position: "relative" }}
                >
                  محصولات <KeyboardArrowDownIcon />
                  <MegaMenu show={showMegaMenu} />
                </Nav.Link>
                <Nav.Link href="/about">درباره ما</Nav.Link>
                <Nav.Link href="/contact">تماس با ما</Nav.Link>
              </div>
            </Nav>

            <Form
              className="search-container"
            >
              <div className="search-box-wrapper">
                <SearchIcon className="search-icon" />
                <Form.Control
                  type="search"
                  placeholder="جستجوی محصولات..."
                  className="search-box"
                  aria-label="Search"
                />
              </div>
            </Form>

            <div className="d-flex align-items-center" style={{ gap: 15 }}>
              <Button className="d-flex align-items-center text-white login-register-btn">
                <LoginTwoToneIcon />
                ورود | ثبت‌نام
              </Button>

              <Button variant="light" className="position-relative cart-btn">
                <ShoppingCartIcon fontSize="large" />
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
