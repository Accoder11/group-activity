import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useCallback, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false)
    
    
    const submit = (e) => {
        e.preventDefault()
        console.log(username, password, checkbox)
    }

    return (
    <Container className="login-container py-2">
        <h2 className="text-center py-4 my-2" >Login</h2>
    <Form onSubmit={submit}>
        <Row >
        <Col className='form-group'>
            <FloatingLabel
            htmlFor="username"
            controlId='floatingInput'
            label="Username"
            className='mb-3'>
        
            <Form.Control type="text" name="username" placeholder="Enter Username" className='form-control' onChange={e => setUsername(e.target.value)} />
            </FloatingLabel>
        </Col>
        </Row>

        <Row className="my-2">
        <Col className='form-group'>
            <FloatingLabel htmlFor="password"
            controlId='floatingPassword' label="Password">
        
            <Form.Control type="password" name='password' placeholder="Enter Password" className='form-control' onChange={e => setPassword(e.target.value)}/>
            </FloatingLabel>
        </Col>
        </Row>

        <Row className="my-2" >
        <Col className="mx-2">
        <Form.Check 
            type="checkbox" 
            value= {checkbox}
            label="Remember me"
            name="rememberMe"
            onChange={() => setCheckbox(checkbox => !checkbox)} />
        </Col>
        <Col className='form-group text-center'>
        <a href='#'>Forgot Password</a>
        </Col>
        
        <Button variant="primary" className="mt-5 mb-2" type="submit">
          LOGIN
        </Button>
        <span className="text-center" >Don't have an account? <a href="#">Register now</a></span>
        </Row>
      </Form>
      </Container>
    )
}

export default Login;