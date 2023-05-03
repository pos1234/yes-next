import React,{useState} from 'react'
import { Container,Row,Col,Form,Button,FormGroup } from 'react-bootstrap';
import NavbarJobs from './NavbarJobs'
import FooterJobs from './FooterJobs';
import Link  from 'next/link';
import styles from '@/styles/RegisterForm.module.css'
const RegisterForm=(props)=>{
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    };
    return(
        <>
        <NavbarJobs/>
        <Container className={styles['emp-can-form-container']} fluid>
        <Row>
            <Col className={styles['emp-can-form-side-image']}>
            <img src='/images/image-1-4.avif'/>   
            </Col>
            <Col md={5}>
            <Form className={styles['emp-can-form']} noValidate validated={validated} onSubmit={handleSubmit}>
                <h1>{props.title}</h1>
                <Form.Group className={["mb-4"]} controlId="formBasicEmail">
                    <Form.Label>Email <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control className={styles["text-field"]} type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className={["mb-4"]} controlId="formBasicPassword">
                    <Form.Label>Password <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control className={`${["mb-3"]} ${styles["text-field"]}`} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className={["mb-4"]} controlId="formBasicPassword">
                    <Form.Label>Confirm Password <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control className={`${["mb-3"]} ${styles["text-field"]}`} type="password" placeholder="Confirm Password" required/>
                </Form.Group>
                <Button className={styles['login-button']} variant="primary" type="submit">
                    Register Now
                </Button>
                <Row>
                    <Link href='/jobs/sign-in' className={styles['register-link']}>Already have an account? <span>Sign in</span></Link>
                </Row>
            </Form>
            </Col>
        </Row>
    </Container>
    <FooterJobs/>
    </>
    )
}


export default RegisterForm