import React from 'react'
import Link from 'next/link'
import {Row, Col, Navbar, Nav, Button, Container,Offcanvas,Badge} from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import styles from '@/styles/NavbarJobs.module.css'
export default function Navigation() {
  return (
    <>
     <style type="text/css">
        {`
    .btn-close {
         position: relative !important;
         left: -90% !important;
         top: -30px !important; 
    }
            .btn-close,
        .btn-close:hover,
        .btn-close:focus,
        .btn-close:active{
        border:none !important;
        outline:none !important;
        box-shadow: none !important;
        outline-offset: none !important;
        } 
    `}
      </style>
    <Navbar key='expand' bg='' expand='expand' className={styles['navigation']}>
    <Container >
         <Navbar.Brand as={Link} href='/' name="home" className={styles['logo-image']}><img src='/images/yes-logo.svg' alt='brand-logo'/></Navbar.Brand>
         <Row className={styles['navbar-sign-container']}>
         <Col><Button as='a' href='/jobs/sign-in' className={styles['navbar-sign-in']}>Sign In/ Sign Up</Button></Col>
         <Col><Button as='a' href='/jobs/sign-in'  className={styles['navbar-sign-in']} >Post Job</Button></Col>
     </Row>
         <Navbar.Toggle className={styles['toggle-button']} aria-controls={`offcanvasNavbarLabel-expand-${'expand'}`} >
              <span className={styles['navbar-toggler-icon-first']}></span>
              <span className={styles['navbar-toggler-icon-second']}></span>
              <span className={styles['navbar-toggler-icon-third']}></span>
         </Navbar.Toggle>
         <Navbar.Offcanvas className={styles['offcanvas-navbar']} id={`offcanvasNavbar-expand-${'expand'}`}
         aria-labelledby={`offcanvasNavbarLabel-expand-${'expand'}`}
         placement="end">
         <Offcanvas.Header closeButton>
         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'expand'}`}>
                <Link href='/'> <img   src='/images/yes-logo.svg' alt='brand-logo-navbar' className={styles['logo-navbar']}/></Link>
             </Offcanvas.Title>
         </Offcanvas.Header> 
         <Offcanvas.Body>
         <Nav className={`${styles["justify-content-end"]} ${styles["flex-grow-1"]} ${styles["pe-3"]} ${styles["navbar-navs"]}`}>
         <Nav.Link as={Link} href='/'>Home</Nav.Link>   
         <Nav.Link as={Link} href='/home/about'>About</Nav.Link>   
         <Nav.Link as={Link} href='/home/about/section'>Client Hub</Nav.Link>   
         <Nav.Link as={Link} href='/home/hris' style={{position:'relative'}}>Products <Badge className={styles['badge']}>New</Badge></Nav.Link>   
         <Nav.Link as={Link} href='/home/blog'>Blog</Nav.Link>
         <Nav.Link as={Link} href='/home/faq'>FAQ</Nav.Link>   
         <Nav.Link as={Link} href='/home/contact-us'>Get in Touch</Nav.Link>   
          </Nav> 
          <Row>
             <Row>
                 <Col xs={6}><Button as={Link} id={styles['navbar-sign-in']} href='/jobs/sign-in'>Sign In/ Sign Up</Button></Col>
                 <Col xs={6}><Button as={Link} id={styles['navbar-sign-in']} href='/jobs/sign-in'>Post Job</Button></Col>
             </Row>
             <Row>
                 <Col>
                     <ul className={styles['navbar-socials']}>
                         <li><a href='https://www.facebook.com/youremploymentsolutionsethiopia/' target='_blank'><FacebookIcon/></a></li>
                         <li><a href='https://twitter.com/yesethiopia' target='_blank'><TwitterIcon/></a></li>
                         <li><a href='https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F10353818%3Ftrk%3Dprof-exp-company-name' target='_blank'><LinkedInIcon/></a></li>
                         <li><a href='mailto:info@yes.et'><EmailIcon/></a></li>
                     </ul>
                 </Col>
             </Row>
             <Row>
                 <Col><p className={styles['navbar-copy']}>©2023 YES | Your Employment Solutions</p></Col>
             </Row>
          </Row>
         </Offcanvas.Body>
         </Navbar.Offcanvas>
     </Container>
 </Navbar>
 </>
  )
}
