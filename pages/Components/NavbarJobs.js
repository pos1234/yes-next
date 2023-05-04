import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import styles from '@/styles/NavbarJobs.module.css'
import {Row, Dropdown, Col,Form, Navbar, Nav, Button, Container,Offcanvas} from 'react-bootstrap'
const NavbarJobs =()=> {
    const expand='md';
  return (
    <Navbar  key={expand} bg="light" expand={expand} className={styles['job-navigation']}>
    <Container className={styles['job-navigation']} fluid>
      <Navbar.Brand href="#" ><img className={styles['logo-navbar']} src='/images/yes-logo.svg' alt='yes-logo'/></Navbar.Brand>
      <Navbar.Toggle className={styles['toggle-button']} aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <span className={styles['navbar-toggler-icon-first']}></span>
              <span className={styles['navbar-toggler-icon-second']}></span>
              <span className={styles['navbar-toggler-icon-third']}></span>
      </Navbar.Toggle>
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
        style={{width:'70%'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <img src='/images/yes-logo.svg' style={{width:'150px',height:'150px'}}/>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className={`${["justify-content-left flex-grow-1 pe-3"]} ${styles['links']}`}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/home/about">About</Nav.Link>
            <Nav.Link href="/home/about">Client Hub</Nav.Link>   
            <Nav.Link href="/jobs">Find a Job</Nav.Link>   
            <Nav.Link href="/home/hris">Products</Nav.Link>   
            <Nav.Link href="/home/blog">Blog</Nav.Link>
            <Nav.Link href="/home/faq">FAQ</Nav.Link>   
            <Nav.Link href="/home/contact-us">Get in Touch</Nav.Link> 
          </Nav>
         
     <Row className={styles['navbar-sign-container']}>
         <Col><Button as='a' href='/jobs/sign-in' id={styles['navbar-sign-in']} className={styles['navbar-sign-in']}>Sign In/ Sign Up</Button></Col>
         <Col><Button as='a' href='/jobs/sign-in'  id={styles['navbar-post']}  className={styles['navbar-sign-in']}>Post Job</Button></Col>
     </Row>
      
     <Row className={styles['navbar-socials-container']} >
         <Col>
             <ul className={styles['navbar-socials']}>
                 <li><FacebookIcon/></li>
                 <li><TwitterIcon/></li>
                 <li><LinkedInIcon/></li>
                 <li><EmailIcon/></li>
             </ul>
         </Col>
     </Row>
     <Row className={styles['navbar-socials-container']}>
         <Col><p className={styles['navbar-copy']}>©2022 YES | Your Employment Solutions</p></Col>
     </Row>

        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
  )
}
export default NavbarJobs