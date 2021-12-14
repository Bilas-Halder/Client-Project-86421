import React from 'react';
import { Container, Navbar,NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import img from '../../apartment 1.png'
import UseAuth from '../../Context/UseAuth';
//import UseFirebase from '../../Hook/UseFirebase';
import './Header.css'

const Header = () => {
    const {user,logOut}=UseAuth();
   
    return (
        <div>
        <Navbar className="navbar " fixed="" mb-5>
            <Container>
                <img src={img} alt="" className="img-fluid icon"/>
                <h5>Luxury</h5>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center  justify-content-around">
                <NavLink to="/home" className="ankor">Home</NavLink>
                

            {user.email?<div>
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
            </div>:''}



           {user.email?<div><NavDropdown title="Dashboard" id="collasible-nav-dropdown">
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
           </NavDropdown></div>: ''}

                   
                
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                {user.email?
                   <div>
                        <Navbar.Text>
                    <Link to="/login"><button className="btn" onClick={logOut}>LogOut</button></Link>
                </Navbar.Text>
                   </div>
                :<div><Navbar.Text>
                    <Link to="/login"><button className="btn">Login</button></Link>
                </Navbar.Text>
                <Navbar.Text>
                    <Link to="/register"><button className="btn ms-2">Registration</button></Link>
                </Navbar.Text></div>}
                </Navbar.Collapse>
            </Container>
           </Navbar>
        </div>
    );
};

export default Header;