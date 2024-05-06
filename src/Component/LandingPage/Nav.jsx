import logo from "../../Assets/Page1/Group 4.png";
import menu from "../../Assets/Page1/menu.png";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar-Container">
          <div className="Navbar-Container__logo">
            <img src={logo} alt="Logo of the website" />
          </div>
          <div className="Navbar-Container-link">
            <div className="Navbar-Container__list">LEARN</div>
            <div className="Navbar-Container__list">BLOG</div>
            <div className="Navbar-Container__list">ABOUT US</div>
            <div className="Navbar-Container__list">
              <button className="Navbar-Container__button">GET STARTED</button>
            </div>
          </div>
        </div>
      </nav>
      <nav className="MobileNav">
        <div className="MobileNav-Container">
          <div className="MobileNav-Container__logo">
            <img src={logo} alt="Logo of the website" />
          </div>
          <div className="MobileNav-Container__menu">
            <button onClick={handleShow}>
              <img
                src={menu}
                alt="Menu Items"
                className="MobileNav-Container__icon"
              />
            </button>
            <Offcanvas show={show} onHide={handleClose} responsive="lg">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="MobileNav-Container__DropdownMenu">
                <div>
                <DropdownButton
                  id="MobileNav-Container__Dropdownbutton"
                  title="LEARN"
                >
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                </div>
                <div>
                <DropdownButton
                  id="MobileNav-Container__Dropdownbutton"
                  title="BLOG"
                >
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                </div>
                <div >
                <DropdownButton
                  id="MobileNav-Container__Dropdownbutton"
                  title="ABOUT US"
                >
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                </div>
                <div>
                <button className="Navbar-Container__button">GET STARTED</button>
                </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
