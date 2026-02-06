import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, DropdownToggle } from "react-bootstrap";

function MyNavbar() {
  return (
    <>
      <Navbar expand="lg" className="py-0 bg-dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-light">
            <img src="/assets/logo.png" alt="logo" height="70" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="text-light fs-6 me-3 fw-bold active">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-secondary fs-6 me-3 fw-bold">
                Tv Shows
              </Nav.Link>
              <Nav.Link href="#link" className="text-secondary fs-6 me-3 fw-bold">
                Movies
              </Nav.Link>
              <Nav.Link href="#link" className="text-secondary fs-6 me-3 fw-bold">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#link" className="text-secondary fs-6 me-3 fw-bold">
                My List
              </Nav.Link>
            </Nav>
            {/* LATO DESTRO INIZIO */}
            <Nav className="d-flex flex-row align-items-center">
              <Nav.Link href="#search" className="text-white fs-6 me-3 fw-bold">
                <i className="bi bi-search"></i>
              </Nav.Link>
              <Nav.Link href="#kids" className="text-white fs-6 me-3 fw-bold">
                KIDS
              </Nav.Link>
              <Nav.Link href="#notifications" className="text-white fs-6 me-3 fw-bold">
                <i className="bi bi-bell"></i>
              </Nav.Link>
              <Nav.Link href="#profile" className="text-white fs-6 fw-bold">
                <i className="bi bi-person-circle"></i>
              </Nav.Link>
            </Nav>
            {/* LATO DESTRO FINE */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="d-flex align-items-center" fluid>
        <h1 className="text-light ms-2 me-4 mb-4">TV Shows</h1>
        <Dropdown>
          <Dropdown.Toggle
            type="button"
            className="btn btn-secondary btn-sm dropdown-toggle rounded-0 px-2 mb-3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ backgroundColor: "#221f1f", height: "30px" }}
          >
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu bg-dark">
            <Dropdown.Item className="dropdown-item text-light">Comedy</Dropdown.Item>
            <Dropdown.Item className="dropdown-item text-light">Drama</Dropdown.Item>
            <Dropdown.Item className="dropdown-item text-light">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="d-flex ms-auto">
          <i className="text-light bi bi-grid icons me-4 ms-2"></i>
          <i className="text-light bi bi-grid-3x3 icons me-2"></i>
        </div>
      </Container>
    </>
  );
}

export default MyNavbar;
