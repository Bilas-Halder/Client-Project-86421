import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';
//import UseFirebase from '../../Hook/UseFirebase';

const Register = () => {
  
    const {signInEmail, error, isloading}=UseAuth();
    
    const [email,setEmail]=useState({});
    const [pass,setPass]=useState({});
    //const history=useHistory;
    const handleRegistration=(e)=>
    {
        e.preventDefault();
    }
    const HandleEmail=(e)=>
    {
        setEmail(e.target.value)
    }
    const HandlePassword=(e)=>
    {
        setPass(e.target.value)
    }

    return (
        <div className='container'>
            <h1>Registartion from</h1>
           <Form onSubmit={handleRegistration}>
            
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className='w-50' onBlur={HandleEmail}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className='w-50' onBlur={HandlePassword}/>
                </Form.Group>
          
                <div>{error}</div>
                 
                
                   <button onClick={(e)=>{
                        e.preventDefault();
                       signInEmail(email,pass);

                   }} type="submit" className="sign-btn mt-2">Register</button>

               <NavLink to="/login" className="ms-3">Already Registerd?</NavLink>
               
            </Form>
         
        </div>
    );
};

export default Register;