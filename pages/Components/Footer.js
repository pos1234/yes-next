import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container,Row,Col} from 'react-bootstrap'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import { StyledUrContent } from "./StyledUr";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
const Footer = () =>{
    return(
        <div>
            
            <Container className={styles["footer-container"]} fluid>
            <div className={styles["footer-background-overlay"]}></div>
            <div className={styles["footer-inner-content"]}>
            <Row className={styles["footer-contact"]} >
                              <Col >
                    <h1> Get <StyledUrContent texts='in'/> touch</h1>
                    <p><span className={styles["footer-contact-icons"]}><LocationOnIcon sx={{fontSize:30}} /></span>Suite 301E | Bethlehem Plaza, Megenagna, Addis Ababa, Ethiopia</p>
                    <p><span className={styles["footer-contact-icons"]}><CallIcon  sx={{fontSize:30}} /></span> +2519 42 07 07 07 | +2511 16 67 47 67</p>
                    <p><span className={styles["footer-contact-icons"]}><EmailIcon  sx={{fontSize:30}} /></span> info@yes.et | employ@yes.et | apply@yes.et</p>
                </Col>
                <Col>
                    <Row className={styles["footer-contact-yes"]} xs="auto">
                        <Row>
                        <Col className={styles["footer-contact-yes-col"]}>
                            <h2 className={styles["footer-contact-h3"]}>For Employers</h2>
                            <p>Find a Job</p>
                            <p>Build Resume</p>
                            <p>Upload Resume</p>
                            <p>My YES</p>
                        </Col>
                        <Col className={styles["footer-contact-yes-col"]}>
                        <h3 className={styles["footer-contact-h3"]}>For Job Seekers</h3>
                        <p>Post Job</p>
                        <p>Submit Job Order</p>
                        <p>Our Services</p>
                        <p>My YES</p>
                        </Col>
                        </Row>
                        <Col>
                        <ul>
                            <li><a href='https://www.facebook.com/youremploymentsolutionsethiopia/' target='_blank' aria-label="Read more about YES on facebook"><FacebookIcon/></a></li>
                            <li><a href='https://twitter.com/yesethiopia' target='_blank' aria-label="Read more about YES on twitter"><TwitterIcon/></a></li>
                            <li><a href='https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F10353818%3Ftrk%3Dprof-exp-company-name' target='_blank' aria-label="Read more about YES on linkedIn"><LinkedInIcon/></a></li>
                            <li><a href='mailto:info@yes.et' aria-label="Send Us an Email"><EmailIcon/></a></li>
                        </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
            <Row className={styles["footer-contact-term"]} xs="auto">
                <Col>
                    <p className={styles["silver-paragraph"]}>©2023 YES Your Employment Solution.</p>
                </Col>
                <Col>
                    <Link className={styles["silver-paragraph"]} href='/home/terms'>Terms and Conditions | </Link>  <Link className="silver-paragraph" href='/home/policy'>Privacy Policy</Link>
                </Col>
            </Row>
            
        </Container>
        </div>
    )
}
export default Footer