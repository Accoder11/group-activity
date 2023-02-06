import { useState } from 'react';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  return (
    <div className="App">
    <Container fluid className='mt-5'>
      <Row>
        <Col>
        <Login></Login>
        </Col>
        <Col>
        <Register></Register>
        </Col>
      </Row>
    </Container>
    

    

      
      
    </div>
  );
}

export default App;