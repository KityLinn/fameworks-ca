import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Layout({ children }) {
  return (
    <>
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
      {children}
      <Container>
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">© 2024 Kitty-co</p>
        </footer>
      </Container>
    </>
  );
}
