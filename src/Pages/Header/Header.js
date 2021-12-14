import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
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
                <NavLink to="/introduction" className="ankor">Introduction</NavLink>
                <NavLink to="/home" className="ankor">Home</NavLink>
                <NavLink to="/home" className="ankor">Home</NavLink>
                   
                
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