import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";

function Header() {
    const [navbarClass, setNavbarClass] = useState("my-navbar nav-transparent");

    function updateNavbarClass() {
        window.onscroll = () => {
            if (window.scrollY >= 100) {
                setNavbarClass("my-navbar nav-active");
            } else {
                setNavbarClass("my-navbar nav-transparent");
            }
        };
    }

    window.addEventListener("scroll", updateNavbarClass);

    return (
        <header>
            <Navbar className={navbarClass} collapseOnSelect expand="md" variant="dark">
                <Container >
                    <Navbar.Brand className="brand-name" href="#home">Pritish</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="navlink" href="#home">Home</Nav.Link>
                            <Nav.Link className="navlink" href="#about">About</Nav.Link>
                            <Nav.Link className="navlink" href="#resume">Resume</Nav.Link>
                            <Nav.Link className="navlink" href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
