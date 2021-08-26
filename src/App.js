import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import './App.css';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';


function App() {
  return ( 
    
    <div className="App">
<h1>login</h1>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="label"><EmailIcon/> Email address <span>*</span></Form.Label>
    <Form.Control  type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      <p>We'll never share your email with anyone else.</p>
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className="label"><LockIcon/>Password <span>*</span></Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="btn" variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
