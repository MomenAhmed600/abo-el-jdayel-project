import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaHome } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { MdPermContactCalendar } from "react-icons/md";

function CustomNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',  // لجعل التمرير سلس
    });
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container dir="rtl" lang="ar">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="Logo.png" className=" logo" alt="Logo" />
            <span className="ms-2 name-comp">شركة أبو الجدايل</span>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleShow}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link id="name-nav" onClick={() => navigate("/")}>
                الصفحة الرئيسية
              </Nav.Link>
              <Nav.Link id="name-nav" onClick={() => navigate("/Contact-us")}>
                معلومات عنا
              </Nav.Link>
              <Nav.Link id="name-nav" onClick={() => navigate("/services")}>
                خدمات
              </Nav.Link>
              <Nav.Link id="name-nav" onClick={scrollToBottom}>
                <LuPhoneCall /> <span></span>تواصل معنا
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        dir="rtl"
        lang="ar"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link id="name-nav" onClick={() => navigate("/")}>
              <FaHome />
              <span></span> الصفحة الرئيسية
            </Nav.Link>
            <Nav.Link id="name-nav" onClick={() => navigate("/Contact-us")}>
              <MdPermContactCalendar /> <span></span> معلومات عنا
            </Nav.Link>
            <Nav.Link id="name-nav" onClick={() => navigate("/services")}>
              <FaHandHoldingDollar />
              <span></span>خدمات
            </Nav.Link>
            <Nav.Link id="name-nav" onClick={scrollToBottom}>
              <LuPhoneCall /> <span></span>تواصل معنا
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CustomNavbar;
