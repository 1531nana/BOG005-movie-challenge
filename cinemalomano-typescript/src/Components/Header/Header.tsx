import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";
import logo from "../../resources/logo.png";
import "./style.css";
import { Search } from "../Search/Search";

interface stateInputSearch {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  pages: number;
  request: (search: string, pages: number) => {};
}

export const Header: React.FC<stateInputSearch> = ({
  handleInput,
  search,
  pages,
  request,
}: stateInputSearch) => {
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
      {[width < 1024 ? false : "sm"].map((expand, i) => (
        <Navbar key={i} collapseOnSelect expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <img src={logo} alt="" className="logo" />
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <img src={search} alt="" className="search"/>
                </Form> */}
                <Search
                  search={search}
                  handleInput={handleInput}
                  pages={pages}
                  request={request}
                />
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <NavDropdown
                    title="Series"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action2">
                      All series
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">
                      Older releases
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Top five ratings
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="Movies"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action2">
                      All movies
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">
                      Top five ratings
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Top five awards
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action5">Random surprise</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
