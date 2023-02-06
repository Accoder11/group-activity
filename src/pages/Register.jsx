import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

const Register = () => {

    const [formData, setFormData] = useState({
        firstname : '',
        lastname : '',
        username : '',
        password : '',
        gender : '',
        techstack : []
})

const handleOnChange = (e) => {
    if(e.target.name === "techstack") {
        let formDataCopy = {...formData}
        if (e.target.checked) {
            formDataCopy.techstack.push(e.target.value)
            
        }else{
            const uncheckedValue = formDataCopy.techstack.indexOf(e.target.value)
            formDataCopy.techstack.splice(uncheckedValue,1);
            
            /*first get the index of e.target.value, then remove that element using splice*/

           /* console.log(`remove ${e.target.value}`)
            console.log(`length ${formDataCopy.techstack.length}`)
            console.log(`index ${uncheckedValue}`);
            console.log(formDataCopy)*/


            /* formDataCopy.techstack = formDataCopy.techstack.filter(el => el = !e.target.value); 
            */
        }
    
        setFormData(formDataCopy)

    }else{
        setFormData(() => ({
            ...formData,
            [e.target.name] : e.target.value
        }))
    }
}


const submitForm = (e) => {
    e.preventDefault();
    console.log(formData)
}

    return (
    <Container className="form-container">
    <Form action='#'>
        <Row className="my-2">
        <h2 className="py-3 bg-primary text-center">Student Registration Form</h2>
        <Col md={3} className='form-group'>
            <Form.Label htmlFor='firstname'>First Name</Form.Label>
        </Col>
        <Col>
            <Form.Control type="text" name="firstname" placeholder="Enter name" className='form-control' onChange={handleOnChange} />
        </Col>
        </Row>

        <Row className="my-2">
        <Col md={3} className='form-group'>
            <Form.Label htmlFor='lastname'>Last Name</Form.Label>
        </Col>
        <Col>
            <Form.Control type="text" name='lastname' placeholder="Enter Last Name" className='form-control' onChange={handleOnChange}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Col>
        </Row>
          
        <Row className="my-2" >
        <Col md={3} className='form-group'>
            <Form.Label htmlFor='username'>User Name</Form.Label></Col>
        <Col>
            <Form.Control type="text" name='username' placeholder="Enter username" className='form-control' onChange={handleOnChange}/>
        </Col>
        </Row>
          
        <Row className="my-2" >
        <Col md={3} className='form-group'>
            <Form.Label htmlFor='password'>Password</Form.Label>
        </Col>
        <Col>
            <Form.Control type="password" name='password' placeholder="Enter password" className='form-control' onChange={handleOnChange}/>
        </Col>
        </Row>

        <Row className="my-2" >
        <Col md={3}>
            <Form.Label htmlFor='gender'>Gender</Form.Label>
        </Col>
        <Col className='form-group'>
            <Form.Select className='form-control' name='gender' onChange={handleOnChange}>
            <option>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="n/a">Rather not say</option>
            </Form.Select>
        </Col>
        </Row>

        <Row className="my-2" >
        <Col md={3}>
            <Form.Label htmlFor='techstack'>Tech STACK</Form.Label>
        </Col>
        <Col className='form-group'>
            <Form.Text className="text-muted mb-5">
            Check all that apply.
            </Form.Text>
            
            <Form.Check 
            type="checkbox" 
            value="Java" 
            label="Java" 
            name="techstack" 
            onChange={handleOnChange} />

            <Form.Check 
            type="checkbox" 
            name="techstack" 
            value="Python" 
            label="Python"
            onChange={handleOnChange} />

            <Form.Check 
            type="checkbox" 
            name="techstack" value="Javascript" label="Javascript" 
            onChange={handleOnChange} />

            <Form.Check 
            type="checkbox" 
            name="techstack"
            value="PHP" 
            label="PHP"
            onChange={handleOnChange} />

            <Form.Check 
            type="checkbox" 
            name="techstack"
            value="C++" 
            label="C++"
            onChange={handleOnChange} />
        </Col>
        
        <Button onClick={submitForm} variant="primary" className="my-2" type="submit">
          Submit
        </Button>
        </Row>

      </Form>
      </Container>
    )
}

export default Register;