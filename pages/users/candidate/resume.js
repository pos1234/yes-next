
import React, { useEffect, useState } from 'react'
import CandidateNav from '../../../Components/CandidateNav'
import Footer from '@/Components/Footer';
import { Container,Row,Col,Button } from 'react-bootstrap'
import styles from '@/styles/users/resume.module.css'
import Link from 'next/link';


const userCandidate =()=> {
  
 
    
    
 
 
  return (
    <>
    <CandidateNav/>
        <Container className={styles['resumeContainer']}>
            <Row>
                <Col xs={12} style={{padding:"0"}}>
                                <h1 style={{fontSize:"2rem"}}>Upload Resume</h1>
                </Col>
            </Row>
            <Row className={styles['resumeCols']}>
                <Col>
                    <h1>My Resume</h1>
                    <p>CV Attachment</p>
                    <Button variant='' style={{padding:"0"}}>
                        <input type='file'/>
                    </Button>
                    <p style={{fontSize:"0.8rem"}}>Upload file .pdf, .doc, .docx</p>
                    <Row>
                        <Col xs={6}>
                        <Button type='submit' className={styles['buttons']}>Submit</Button>
                        </Col>
                        <Col xs={6}>
                        <Button as={Link} href='/' className={styles['buttons']}>Build Resume</Button>
                        </Col>
                    </Row>
             </Col>
            </Row>
        </Container>
    <Footer/>
    </>
  )
}

export default userCandidate