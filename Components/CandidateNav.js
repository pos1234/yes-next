import React,{useState} from 'react'
import Link from 'next/link'
import {Row, Col, Navbar, Nav, Button, Container,Dropdown,Offcanvas,Badge} from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import styles from '@/styles/NavbarJobs.module.css'
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const NavbarJobs = (props)=> {
    const [open, setOpen] = useState(false);

    const handleMouseEnter = () => {
      setOpen(true);
    };
  
    const handleMouseLeave = () => {
      setOpen(false);
    };

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
        .dropdown-toggle::after {
            /* Remove the caret */
              display: none;
          }
          .toggleIcons{
           padding-top:30%;
            border:none;
            padding-bottom:0;
          }
          .toggleMenu{
            margin-left:-80%;
            margin-top:-15% !important;
            padding-bottom:0;
          }
          .toggleItem{
            margin-bottom:10px;
            color:unset;
            text-decoration:none;
          }
          .toggleItem:hover{
            background-color:rgba(37, 206, 209, 0.07);
            color:var(--color-primary);
          }

    `}
      </style>
    <Navbar key='expand' bg='' expand='expand' className={styles['navigation']} >
    <Container fluid>
         <Navbar.Brand as={Link} href='/' name="home" className={styles['logo-image']}><img src='/images/yes-logo.svg' alt='brand-logo'/></Navbar.Brand>

        <Row className={styles['candidateNav']}>
            <Col style={{paddingTop:"9px"}} xs={3}>
                 <Nav.Link as={Link} href='/users/candidate/user-candidate'>Dashboard</Nav.Link>
            </Col>
            <Col xs={3}>
                <Dropdown>
                <Dropdown.Toggle variant='' id="dropdown-basic">
                     My Jobs &nbsp; 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} href="/users/candidate/applied-jobs">Applied Jobs</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/users/candidate/saved-jobs">Saved Jobs</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/users/candidate/job-alerts">Job Alerts</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/users/candidate/saved-company">Saved Companies</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col xs={3}>
                        <Dropdown>
                <Dropdown.Toggle variant='' id="dropdown-basic">
                    My Resume &nbsp; 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Build Resume</Dropdown.Item>
                    <Dropdown.Item as={Link} href="/users/candidate/resume">Upload Resume</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Col>  
        </Row>
        <Row className={styles['navbar-sign-container']}>
        <Dropdown >
                <Dropdown.Toggle className='toggleIcons'  variant='' >
                    <PersonIcon style={{backgroundColor:"#e4e3e3",color:"#25CED1",borderRadius:"50%",marginBottom:"7px"}} sx={{fontSize:50}}/> <p>Candidate</p> 
                </Dropdown.Toggle>
                <Dropdown.Menu className='toggleMenu' id="dropdown-menu-without-caret" open={open}>
                    <Dropdown.Item className='toggleItem' as={Link} href="/users/candidate/profile"> <PersonIcon/> Profile</Dropdown.Item>
                    <Dropdown.Item className='toggleItem' as={Link} href="/users/candidate/change-password"> <HttpsIcon/> Change Password</Dropdown.Item>
                    <Dropdown.Item className='toggleItem' href="#/action-1"> <PowerSettingsNewIcon/> Log Out</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
        </Row>
         <Navbar.Toggle className={styles['toggle-button']} aria-controls={`offcanvasNavbarLabel-expand-${'expand'}`} >
              <span className={styles['navbar-toggler-icon-first']}></span>
              <span className={styles['navbar-toggler-icon-second']}></span>
              <span className={styles['navbar-toggler-icon-third']}></span>
         </Navbar.Toggle>
         <Navbar.Offcanvas className={styles['offcanvas-navbar']} id={`offcanvasNavbar-expand-${'expand'}`}
         aria-labelledby={`offcanvasNavbarLabel-expand-${'expand'}`}
         placement="end" backdrop="false">
         <Offcanvas.Header closeButton>
         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'expand'}`}>
                <Link href='/'> <img   src='/images/yes-logo.svg' alt='brand-logo-navbar' className={styles['logo-navbar']}/></Link>
             </Offcanvas.Title>
         </Offcanvas.Header> 
         <Offcanvas.Body>

         <Row style={{textAlign:"center"}}>
            <Col style={{justifyContent:"right"}}>
                    <PersonIcon style={{backgroundColor:"#e4e3e3",color:"#25CED1",borderRadius:"50%",marginBottom:"7px"}} sx={{fontSize:50}}/> <p>Candidate</p> 
            </Col>
        </Row>

         <Nav className={`${styles["justify-content-end"]} ${styles["flex-grow-1"]} ${styles["pe-3"]} ${styles["navbar-navs"]}`}>
        <Nav.Link as={Link} href='/'>Home</Nav.Link>   
            <Nav.Link as={Link} href='/home/about'>About</Nav.Link>   
            <Nav.Link as={Link} href='/home/about'>Client Hub</Nav.Link>   
            <Nav.Link as={Link} href='/jobs'>Find a Job</Nav.Link>   
            <Nav.Link as={Link} href='/home/hris' style={{position:'relative'}}>Products <Badge className={styles['badge']}>New</Badge></Nav.Link>   
            <Nav.Link as={Link} href='/home/blog'>Blog</Nav.Link>
            <Nav.Link as={Link} href='/home/faq'>Faq</Nav.Link>   
            <Nav.Link as={Link} href='/home/contanct-us'>Get in Touch</Nav.Link>   
          </Nav> 

          <Row style={{marginTop:"15%",marginBottom:"15%"}}>
                <Col xs={4}>
                <Link className='toggleItem' href="/users/candidate/profile"> <PersonIcon/> <p>Profile</p></Link>
                </Col>
                <Col xs={4}>
                <Link className='toggleItem' href="/users/candidate/change-password"> <HttpsIcon/><p>Password</p></Link>
                </Col>
                <Col xs={4}>
                <Link className='toggleItem' href="/"> <PowerSettingsNewIcon/> <p>Log Out</p></Link>
                </Col>
                
                
            </Row>

          <Row>
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
export default NavbarJobs