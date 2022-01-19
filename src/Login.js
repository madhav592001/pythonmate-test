import React,{useState} from 'react';
import {Form,Button,Container} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Login = () => {

  const [email,setEmail] = useState("") ; 
  const [password,setPassword] = useState("") ; 

  const user = useSelector(selectUser) ; 
  
  const dispatch = useDispatch() ; 

  const handleSubmit = (e) =>{
   e.preventDefault() ;

   dispatch(login({
       email:email,
       password:password,
   }))
}


  return user ? (<h1>Welcome {user.email}</h1>) : (
  <Container className='my-5' >
  <Form onSubmit = {e=>handleSubmit(e)} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
)
};

export default Login;
