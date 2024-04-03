import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar className="bg-white shadow-sm mb-3">
          <Container>
            <Nav>
              <Nav.Link to="/" as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link to="/contact" as={NavLink}>
                Contact
              </Nav.Link>
            </Nav>
            <Button
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
            >
              hi
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              >
                1
              </div>
            </Button>
          </Container>
        </Navbar>
      </header>
      {children}
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link px-2 text-muted">
              About
            </Link>
          </li>
        </ul>
        <p className="text-center text-muted">© 2024 Kitty-co</p>
      </footer>
    </>
  );
}
