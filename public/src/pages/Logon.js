import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";

import { Layout, Card, Form, FormLayout, TextField, Button } from '@shopify/polaris';

import { BaseLayout } from '../layouts/BaseLayout';

function Logon() {
    // State management 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Navigation
    const navigate = useNavigate();

    // Polaris event handling
    const handleEmail = useCallback((value) => setEmail(value), []);
    const handlePassword = useCallback((value) => setPassword(value), []);

    const handleSubmit = useCallback((_event) => {
        // _event returns a node object
        formValidation(email, password); 
    }, [email, password]);

    const formValidation = (email, password) =>{
        // Temp validation until a backend contract is created
        if(email !== '' && password !== '') {
            navigate(`/dashboard`);
            setEmailError('');
            setPasswordError('');
        } else if(email === '' && password === '') {
            setEmailError('Pease enter a valid email');
            setPasswordError('Pease enter a valid email');
        } else if(email === '') {
            setEmailError('Pease enter a valid email');
        } else if(password === '') {
            setPasswordError('Pease enter a valid email');
        } 
    }

    // Temp img vars
    const imgContainer =  {
        width: "100%",
        height: "250px",
        borderRadius: "8px",
        // backdropFilter: "blur(5px)",
        boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
        backgroundColor: "rgba(255, 255, 255, .15)",
        marginBottom: "25px",
      }
    const imgSrc = "https://bestanimations.com/media/fish/1225845781pretty-goldfish-gif-3.gif#.YpT6ZWfxDo8.link";
    const imgStyle  = {
        width: "100%",
        height: "250px",
        background: `url(${imgSrc}) no-repeat`,
        backgroundSize: "cover",
        borderRadius: "8px",
        marginBottom: "25px",
    }

    const HeroImage = () => {
        return (
            <div style={imgStyle}>
                <div style={imgContainer}></div>
            </div>
        )
    }
    
    return (
        <BaseLayout className="App" fullWidth>
                <Layout.Section>
                    <Card title="Logon" sectioned>
                        <HeroImage/>
                        <Form 
                        onSubmit={handleSubmit} 
                        preventDefault={true}
                        method="get">
                            <FormLayout>
                                <TextField
                                label="Email"
                                type="email"
                                value={email}
                                onChange={handleEmail}
                                error={emailError}
                                autoComplete="email"
                                />
                                <TextField
                                label="Password"
                                type="password"
                                value={password}
                                onChange={handlePassword}
                                error={passwordError}
                                autoComplete="off"
                                />
                                <Button submit>Submit</Button>
                            </FormLayout>
                        </Form>
                    </Card>
                </Layout.Section>
        </BaseLayout>
    )

}

export default Logon;


