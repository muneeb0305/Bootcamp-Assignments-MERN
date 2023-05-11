import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <Navbar bg="dark">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand className="text-white" href="#home">
          Weather APP
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
