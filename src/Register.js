import React,{useState} from 'react';
import { Form,Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { register } from './features/userSlice.js';

const Register = () => {


    const [email,setEmail] = useState("") ; 
    const [password,setPassword] = useState("") ; 
    const [firstName,setFirstName] = useState("") ;
    const [lastName,setLastName] = useState("") ; 

    const dispatch = useDispatch() ; 

    const handleSubmit = (e) =>{
     e.preventDefault() ;

     dispatch(register({
         email:email,
         password:password,
         first_name:firstName,
         last_name:lastName
     }))
 }

  return (
      <Container className='my-5' >
<Form onSubmit={(e)=>handleSubmit(e)} >
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" required value={firstName} onChange={(e)=>setFirstName(e.target.value)}  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" required  value={lastName} onChange={(e)=>setLastName(e.target.value)} />
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required  value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
)
};

export default Register;
