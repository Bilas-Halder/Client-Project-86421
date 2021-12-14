import React from 'react';
import { Container, Navbar,NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import img from '../../apartment 1.png'
import './Header.css'

const Header = () => {
    return (
        <div>
        <Navbar className="navbar " fixed="" mb-5>
            <Container>
                <img src={img} alt="" className="img-fluid icon"/>
                <h5>Luxury</h5>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center  justify-content-around">
                <NavLink to="/home" className="ankor">Home</NavLink>
                

            <NavDropdown title="Workshop" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                    <NavLink to="/introduction" className="ankor">Introduction</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to="/questionworksetone" className="ankor">Question Set 1</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to="/questionworksettwo" className="ankor">Question Set 2</NavLink>
                 </NavDropdown.Item>
                    
                <NavDropdown.Divider />
                <NavDropdown.Item><NavLink to="/survey" className="ankor">Survey</NavLink> </NavDropdown.Item>
           </NavDropdown>



           <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                    <NavLink to="/profile" className="ankor">Profile</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to="/questionsetonedash" className="ankor">Question Set 1</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <NavLink to="/questionsettwodash" className="ankor">Question Set 2</NavLink>
                 </NavDropdown.Item>
                    
                <NavDropdown.Divider />
                <NavDropdown.Item><NavLink to="/dashsurvey" className="ankor">Survey</NavLink> </NavDropdown.Item>
           </NavDropdown>

                   
                
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Link to="/login"><button className="btn">Login</button></Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Link to="/login"><button className="btn ms-2">Registration</button></Link>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
           </Navbar>
        </div>
    );
};

export default Header;