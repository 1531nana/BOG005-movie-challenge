import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import logo from "../../resources/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <>
      {[width < 1024 ? false : "sm" || "xs"].map((expand, i) => (
        <Navbar key={i} collapseOnSelect expand={expand}>
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Link to="/">
                  <img src={logo} alt="" className="logo" />
                </Link>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/home">Home</Link>
                  <NavDropdown
                    title="Series"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/all-series">All series</Link>
                    <NavDropdown.Divider />
                    <Link to="/older-releases">Older releases</Link>
                    <NavDropdown.Divider />
                    <Link to="/top-five-ratings-series">Top five ratings</Link>
                  </NavDropdown>
                  <NavDropdown
                    title="Movies"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/all-movies">All movies</Link>
                    <NavDropdown.Divider />
                    <Link to="/top-five-ratings-movies">Top five ratings</Link>
                    <NavDropdown.Divider />
                    <Link to="/top-five-awards-movies">Top five awards</Link>
                  </NavDropdown>
                  <Link to="/random-surprise">Random surprise</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
