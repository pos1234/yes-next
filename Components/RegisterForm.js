import React,{useState} from 'react'
import { Container,Row,Col,Form,Button,FormGroup } from 'react-bootstrap';
import { useRouter } from 'next/router'
import NavbarJobs from './NavbarJobs'
import Footer from './Footer';
import Link  from 'next/link';
import styles from '@/styles/jobs/RegisterForm.module.css'
const RegisterForm=(props)=>{
    const [error, setError] = useState("");
    const [col,setCol] = useState ("");
    const router = useRouter();
    const [register,setRegister] = useState({
        email:"",
        password:"",
        confirmPassword:"",
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(register.password == register.confirmPassword){
              const res = await fetch ('https://jsonplaceholder.typicode.com/users',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                register,
                userId:1
            })
        })
         const data = await res.json()
        console.log(data)
        setError('Successfully Registerd')
        setCol('#FF6D00');
/*         router.push("/jobs/sign-in");
 */        }else{
            setError('Password does not match')
            setCol('red');
        }
      
      
    };
    return(
        <>
         <NavbarJobs
                        hrefHome="/" home='Home'
                        hrefAbout="/home/about" about='About'
                        hrefClient="/home/about" client='Client Hub'
                        hrefJobs="/jobs" jobs='Find a Job'
                        hrefHris="/home/hris" hris='Products'
                        hrefBlog="/home/blog" blog=''
                        hrefFaq="/home/faq" faq='FAQ'
                        hrefContact="/home/contact-us" contact='Get in Touch'
                />
        <Container className={styles['emp-can-form-container']} fluid>
        <Row>
            <Col xs={12} lg={6} className={styles['emp-can-form-side-image']}>
            <img src='/images/Group12.svg'/>   
            </Col>
            <Col xs={12} lg={6}>
            <Form className={styles['emp-can-form']} onSubmit={handleSubmit}>
                <h1>{props.title}</h1>
                <Form.Group className={["mb-4"]} >
                    <Form.Label>Email <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control min={5} value={register.email} onChange={(event)=>setRegister({...register,email : event.target.value})} className={styles["text-field"]} type="email" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className={["mb-4"]} >
                    <Form.Label>Password <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control minLength={8} value={register.password} onChange={(event)=>setRegister({...register,password : event.target.value})} className={`${["mb-3"]} ${styles["text-field"]}`} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group value={register.confirmPassword} onChange={(event)=>setRegister({...register,confirmPassword : event.target.value})} className={["mb-4"]} controlId="formBasicPassword">
                    <Form.Label>Confirm Password <span style={{color:'red'}}>*</span></Form.Label>
                    <Form.Control min={5} className={`${["mb-3"]} ${styles["text-field"]}`} type="password" placeholder="Confirm Password" required/>
                </Form.Group>
                {
                error && (
                    <p className={styles['error-message']} style={{backgroundColor:`${col}`}}> {error}</p>
                )
                }
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
    <Footer/>
    </>
    )
}


export default RegisterForm