import React,{useState} from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import NavbarJobs from '../Components/NavbarJobs'
import FooterJobs from '../Components/FooterJobs';
import Link  from 'next/link';
import style from '@/styles/Fpwd.module.css'
const ForgetPassword=()=> {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  return (
    <>
                <NavbarJobs  
                        hrefHome="/" home='Home'
                        hrefAbout="/home/about" about='About'
                        hrefClient="/home/about" client='Client Hub'
                        hrefJobs="/jobs" jobs='Find a Job'
                        hrefHris="/home/hris" hris='Products'
                        hrefBlog="/home/blog" blog='Blog'
                        hrefFaq="/home/faq" faq='FAQ'
                        hrefContact="/home/contact-us" contact='Get in Touch'
                   />    <Container className={style['emp-can-form-container']} fluid>
        <Row>
            <Col className={style['emp-can-form-side-image']}>
            <img src='/images/image-1-4.avif'/>   
            </Col>
            <Col md={5}>
            <Form className={`${style['emp-can-form']} ${['pb-5']}`} noValidate validated={validated} onSubmit={handleSubmit}>
                <h1>Welcome to YES</h1>
                <Form.Group className={["mb-4"]} controlId="formBasicEmail">
                    <h2 style={{fontSize:'1.8rem'}} className='mt-4'>Reset Password</h2>
                    <Form.Label className={`${style['silver-paragraph']} ${['mb-4']}`}>Please Enter Username or Email </Form.Label>
                    <Form.Control className={style["text-field"]} type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Button style={{width:'50%'}} className={style['login-button']} variant="primary" type="submit">
                    Get New Password
                </Button>
                <Row>
                <Link href='/jobs/sign-in' className={`${['mt-5']} ${['mb-4']} ${style['register-link']}`} style={{textAlign:'left'}}>Back To Login</Link>
                </Row>
                <Row>
                <Link href='/jobs/register' className={style['register-link']}>Don't have an account? <span>Register</span></Link>
                </Row>
            </Form>
            </Col>
        </Row>
    </Container>
<FooterJobs /> 
</>
  )
}

export default ForgetPassword