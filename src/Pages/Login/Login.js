import React, { useState } from 'react';
import { Button, Col, Form, } from 'react-bootstrap';
import { NavLink, useHistory, useLocation} from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';

import './Login.css'

const Login = () => {
    ;
    const [email,setEmail]=useState({});
    const [pass,setPass]=useState({});
    const {loginUser,googleSignIn}=UseAuth();
    const emailLogin=(e)=>
    {
        setEmail(e.target.value)
        

    }
    const passLogin=(e)=>
    {
        setPass(e.target.value)
    }
    return (
        <div className='container'>
           
           <h1>Login Form</h1>
           <Form>
            
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className='w-50' onBlur ={emailLogin} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className='w-50' onBlur ={passLogin} />
                </Form.Group>
          
                <Button variant="primary" type="submit" className="mt-3" onClick={(e)=>{
                        e.preventDefault();
                        loginUser(email,pass);

                    }}>
                Sign In
               </Button>
               <NavLink to="/register" className="ms-3">Not registerd yet?</NavLink>
               <hr></hr>
               <button className="google-btn mt-2" onClick={(e)=>{
                        e.preventDefault();
                        googleSignIn();

                    }}>login With Google</button>
            </Form>
         
        </div>
    );
};

export default Login;