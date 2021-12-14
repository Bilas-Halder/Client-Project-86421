import React, { useEffect } from 'react';
import './Header.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { BsFillCaretDownFill } from 'react-icons/bs';

const Header = () => {
    useEffect(() => {
        document.querySelectorAll('#navbarScrollingDropdown')[0]?.classList.add('nav-btn');
        document.querySelectorAll('#navbarScrollingDropdown')[1]?.classList.add('nav-btn');
        document.querySelectorAll('#navbarScrollingDropdown')[0]?.classList.add('text-center');
        document.querySelectorAll('#navbarScrollingDropdown')[1]?.classList.add('text-center');
    }, []);


    return (
        <Navbar className="nav-shadow" fixed='top' expand="lg">
            <Container>
                <Navbar.Brand as={HashLink} to="/">
                    <div className="d-flex align-items-center justify-content-center">
                        <h4 className="brand-name">Survey</h4>
                    </div>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav.Link className="text-center nav-btn" as={HashLink} to="/">Home</Nav.Link>

                    <div className="d-flex position-relative justify-content-center d-down">
                        <NavDropdown title="Workshop" id="navbarScrollingDropdown">
                            <Nav.Link className="text-center nav-btn nav-btn-2" as={HashLink} to="/">Introduction</Nav.Link>
                            <Nav.Link className="text-center nav-btn nav-btn-2" as={HashLink} to="/">Question Set 1</Nav.Link>
                            <Nav.Link className="text-center nav-btn nav-btn-2" as={HashLink} to="/">Question Set 2</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link className="text-center nav-btn nav-btn-2" as={HashLink} to="/">Survey</Nav.Link>
                        </NavDropdown>

                        <span className="drop-icon">
                            <BsFillCaretDownFill />
                        </span>

                    </div>


                    <div className="d-flex position-relative justify-content-center d-down">
                        <NavDropdown title="Dashboard" id="navbarScrollingDropdown">
                            <Nav.Link className="text-center nav-btn nav-btn-2" as={HashLink} to="/">Profile</Nav.Link>
                            <Nav.Link className="text-center nav-btn nav-btn-2" as={HashLink} to="/">Question Set 1</Nav.Link>
                            <Nav.Link className="text-center nav-btn nav-btn-2" as={HashLink} to="/">Question Set 2</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link className="text-center nav-btn nav-btn-2" as={HashLink} to="/">Survey</Nav.Link>
                        </NavDropdown>

                        <span className="drop-icon">
                            <BsFillCaretDownFill />
                        </span>

                    </div>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

