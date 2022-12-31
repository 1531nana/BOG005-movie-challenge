import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import logo from "../../resources/logo.png";
import "./style.css";
import { Search } from "../Search/Search";
import { Link } from "react-router-dom";

interface InputSearch {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  pages: number;
  request: (search: string, pages: number) => {};
}

export const Header = ({
  handleInput,
  search,
  pages,
  request,
}: InputSearch) => {
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
                <img src={logo} alt="" className="logo" />
                <Search
                  search={search}
                  handleInput={handleInput}
                  pages={pages}
                  request={request}
                />
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/home">
                    <Nav.Link>Home</Nav.Link>
                  </Link>
                  <NavDropdown
                    title="Series"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/all-series">
                      <NavDropdown.Item href="#action2">
                        All series
                      </NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/older-releases">
                      <NavDropdown.Item href="#action3">
                        Older releases
                      </NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link to="/top-five-ratings-series">
                      <NavDropdown.Item href="#action4">
                        Top five ratings
                      </NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title="Movies"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/all-movies">
                      <NavDropdown.Item href="#action2">
                        All movies
                      </NavDropdown.Item>
                    </Link>

                    <NavDropdown.Divider />
                    <Link to="/top-five-ratings-movies">
                      <NavDropdown.Item href="#action3">
                        Top five ratings
                      </NavDropdown.Item>
                    </Link>

                    <NavDropdown.Divider />
                    <Link to="/top-five-awards-movies">
                      <NavDropdown.Item href="#action4">
                        Top five awards
                      </NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                  <Link to="/random-surprise">
                    <Nav.Link href="#action5">Random surprise</Nav.Link>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
