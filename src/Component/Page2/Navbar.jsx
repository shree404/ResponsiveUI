import icon from "../../Assets/page2/Vector.svg";
import menu from '../../Assets/Page1/menu.png';
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";



function Navbar2() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav className="Navbar2-container">
        <div className="Navbar2">
          <div className="Navbar2-first">
            <div>
              <img src={icon} alt="Icon of Home" />
            </div>
            <div>
            <p className="Navbar2__list">Home</p>
            </div>
            </div>
            <div >
              <dl className="Navbar2-last">
                <dd className="Navbar2__list">PLayground</dd>
                <dd className="Navbar2__list">About ME</dd>
                <dd className="Navbar2__list">CONNECT</dd>
              </dl>
            </div>
        </div>
      </nav>
      <nav className="MobileNav">
        <div className="MobileNav-Container">
          <div className="MobileNav-Container__logo">
          <div className="Navbar2-first">
            <div>
              <img src={icon} alt="Icon of Home" />
            </div>
            </div>
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
                  title="PLAYGROUND"
                >
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                </div>
                <div >
                <DropdownButton
                  id="MobileNav-Container__Dropdownbutton"
                  title="ABOUT ME"
                >
                  <Dropdown.Item as="button">Action</Dropdown.Item>
                  <Dropdown.Item as="button">Another action</Dropdown.Item>
                  <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                </div>
                <div>
                <DropdownButton
                  id="MobileNav-Container__Dropdownbutton"
                  title="CONNECT"
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

export default Navbar2;
