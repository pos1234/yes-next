import React from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styles from '@/styles/FooterJobs.module.css'
const FooterJobs =()=> {
  return (
    <Container className={styles['jobs-footer']} fluid>
        <div className={styles['footer-overlay']}></div>
        <Row>
            <Col sm={12} md={4}>
               <p> ©2023 YES | Your Employment Solutions </p>
            </Col>
            <Col sm={12} md={4}>
               <p> Terms and Conditions | Privacy Policy </p>
            </Col>
            <Col sm={12} md={4}>
                <ul>
                <ul>
                            
                            <li><a href='https://www.facebook.com/youremploymentsolutionsethiopia/' target='_blank'><FacebookIcon sx={{ fontSize: 15}}/></a></li>
                            <li><a href='https://twitter.com/yesethiopia' target='_blank'><TwitterIcon sx={{ fontSize: 15}}/></a></li>                            
                            <li><a href='https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F10353818%3Ftrk%3Dprof-exp-company-name' target='_blank'><LinkedInIcon sx={{ fontSize: 15}}/></a></li>
                            <li><a href='https://www.google.com/maps/place/YES+%7C+Your+Employment+Solutions/@9.0198845,38.8004346,15z/data=!4m5!3m4!1s0x0:0x796ef37fcaad61dc!8m2!3d9.0198845!4d38.8004346' target='_blank'><LocationOnIcon sx={{ fontSize: 15}}/></a></li>
                            <li><a href='https://www.instagram.com/yesethiopia/' target='_blank'><InstagramIcon sx={{ fontSize: 15}}/></a></li>
                        </ul>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default FooterJobs