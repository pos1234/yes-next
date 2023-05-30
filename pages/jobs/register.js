import { Container,Row,Col,Form,Button } from 'react-bootstrap';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import NavbarJobs from '../../Components/NavbarJobs'
import Footer from '../../Components/Footer';
import Link  from 'next/link'
import style from '@/styles/jobs/Register.module.css'
const Register=()=> {
    
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
                   />
    <Container className={style['reg-type-container']} fluid>
<Row>
    <Col xs={12} lg={6} className={style['log-side-image']}>
    <img src='/images/Group12.svg'/>
    </Col>
    <Col xs={12} lg={6}>
        <div className={style['login-form']}>
        <h1>Create a YES Account</h1>
        <Row >
            <Row className={style['reg-type-buttons']}>
                <Link href='/jobs/register/candidate'>
                <Button className={style['can-button']}>
                   <PersonOutlineOutlinedIcon sx={{fontSize:20}}/> &nbsp; Candidate
                </Button>
                </Link>
            </Row>
            <Row className={style['reg-type-buttons']}>
                <Link href='/jobs/register/employer'>
                <Button className={style['emp-button']}>
                  <BusinessCenterOutlinedIcon sx={{fontSize:20}}/>  &nbsp; Employer
                </Button>
                </Link>
            </Row>
        </Row>
        <Row>
            <Link href='/jobs/sign-in' className={style['sign-link']}>Already have an account? <span>Sign in</span></Link>
        </Row>
        </div>
    </Col>
</Row>
</Container>
<Footer /> 
</>
  )
}

export default Register