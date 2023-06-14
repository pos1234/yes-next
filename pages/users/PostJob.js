import React,{useState} from 'react'
import Link from 'next/link'
import {Row, Col, Navbar, Nav, Button, Container,Dropdown,Offcanvas,Badge} from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import styles from '@/styles/users/CandidateNav.module.css'
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
const PostJob = (props)=> {
   const [open,setOpen] = useState(true);
   const collapse = "Collapse"
   const handleCollapse = ()=>{
        setOpen(!open)
          console.log("hey");
   }
  
  return (
    <>
      <Container fluid style={{width:(open) ? "90%" : "96%",backgroundColor:"red",marginLeft:"0%"}}>
              <Row>
                <Col>
                <Navbar.Brand as={Link} href='/' name="home" className={styles['logoImage']}><img src='/images/yes-logo.svg' alt='brand-logo'/></Navbar.Brand>
                </Col>
                <Col>
                <Row>
                  <Col>
                   <NotificationsIcon/> Notifications
                  </Col>
                  <Col>
                  <ApartmentIcon/> paulosegebeyehu5@gmail.com
                  </Col>
                </Row>
                </Col>
              </Row>
      </Container>
    
 </>
  )
}
export default PostJob