import React,{useState} from 'react'
import Link from 'next/link'
import {Row, Col, Navbar, Nav, Button, Container,Dropdown,Offcanvas,Badge} from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import styles from '@/styles/users/employer/employer-nav.module.css'
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ApartmentIcon from '@mui/icons-material/Apartment';
export const Contain = ({children})=>{
    return(
      <Container  className={styles['dashboardContainer']} fluid>
            {children}
      </Container>
    )
  }
  const EmployerNav = (props)=> {
   const [open,setOpen] = useState(true);
   const handleCollapse = ()=>{
        setOpen(!open)
   }
   
  return (
    <>
      <Navbar fixed="top" style={{padding:"0 !important",margin:"0"}} className={(open) ? styles['employerNavBar'] : styles['employerNavBarSmall'] } fluid>
        <Nav.Item className={styles['navItem']}>
            <Nav.Link className={styles['navLink']} onClick={handleCollapse}>
              <Row>
                {
              (open) ? <>
              <Col xs={3}>
                <CloseIcon sx={{color:"#25CED1"}}/>
              </Col>
              <Col xs={9}> 
              Collapse
              </Col>
              </>
               :
               <Col style={{textAlign:"center"}} xs={12}><MenuIcon sx={{color:"#25CED1"}}/></Col> 
              }
              </Row>
               
            </Nav.Link>
            <Nav.Link as={Link}  href='/users/employer/employe-post-job' className={styles['navLink']}>
              <Row>
                {
              (open) ? <>
              <Col xs={3}>
                <AddIcon />
              </Col>
              <Col xs={9}> 
              Post a job
              </Col>
              </>
               :
               <Col style={{textAlign:"center"}} xs={12}><AddIcon /></Col> 
              }
              </Row>
               
            </Nav.Link>
            <Nav.Link as={Link} href='/users/employer/employe-jobs' className={styles['navLink']} >
              <Row>
                {
              (open) ? <>
              <Col xs={3}>
                <BusinessCenterIcon />
              </Col>
              <Col xs={9}> 
                  Jobs
              </Col>
              </>
               :
               <Col style={{textAlign:"center"}} xs={12}><BusinessCenterIcon /></Col> 
              }
              </Row>
               
            </Nav.Link>
            <Nav.Link as={Link} href='/users/employer/employe-candidates' className={styles['navLink']} >
              <Row>
                {
              (open) ? <>
              <Col xs={3}>
                <PeopleAltIcon />
              </Col>
              <Col xs={9}> 
                  Candidates
              </Col>
              </>
               :
               <Col style={{textAlign:"center"}} xs={12}><PeopleAltIcon /></Col> 
              }
              </Row>
               
            </Nav.Link>
            <Nav.Link as={Link} href='/users/employer/employe-interviews' className={styles['navLink']} >
              <Row>
                {
              (open) ? <>
              <Col xs={3}>
                <CalendarTodayIcon />
              </Col>
              <Col xs={9}> 
                  Interviews
              </Col>
              </>
               :
               <Col style={{textAlign:"center"}} xs={12}><CalendarTodayIcon /></Col> 
              }
              </Row>
      
            </Nav.Link>
            <Nav.Link as={Link} href='/home/contact-us'  className={styles['navLink']} >
              <Row>
                {
              (open) ? <>
              <Col xs={3}>
                <LocalPhoneIcon />
              </Col>
              <Col xs={9}> 
                  Conctact Us
              </Col>
              </>
               :
               <Col style={{textAlign:"center"}} xs={12}><LocalPhoneIcon /></Col> 
              }
              </Row>
      
            </Nav.Link>
           
            
        </Nav.Item>
      </Navbar>
      <Contain>
              <Row>
                <Col xs={2} md={4} lg={6}>
                <Navbar.Brand as={Link} href='/' name="home" className={styles['logoImage']}><img src='/images/yes-logo.svg' alt='brand-logo'/></Navbar.Brand>
                </Col>
                <Col xs={9} md={8} lg={6}>
                <Row className={styles['navTextsContain']}>
                  <Col xs={12} lg={4} className={styles['notification']}>
                   <NotificationsIcon/> Notifications
                  </Col>
                  <Col xs={12}  lg={8} className={styles['companyName']}>
                  <ApartmentIcon/> paulosegebeyehu5@gmail.com
                  </Col>
                </Row>
                </Col>
              </Row>
      </Contain>
    
 </>
  )
}
export default EmployerNav