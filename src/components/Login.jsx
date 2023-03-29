import {React , useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    const [value , setValue] = useState({
        email : " ",
        password : " "
    })
    const getData=(e)=>{
        const[value,name]=e.target;
    setValue(()=>{
        return{
            ...value,
            [name]: value
        }
    })
}

const addData=(e)=>{
    e.preventDefault();
}
  return (
    <div className='container'>
        <section>
            <div className='left-data'>
                <h3>Login</h3>
                <Form>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Control className='input-field-start' type='email' onChange={getData} email='email' placeholder='USERNAME'/>
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                    <Form.Control  className="input-field" type='password' password='password' placeholder='PASSWORD'/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={addData}>Login</Button>
                </Form>
                <p className='paragraph'> Don't have an account? <span className='span'>Register!</span></p>
                {/* <h1>H</h1> */}
            </div>
        </section>
    </div>
  )
}

export default Login;