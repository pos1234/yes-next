
import React from 'react'
import CandidateNav from '@/Components/CandidateNav'
import Footer from '@/Components/Footer';
import { Container,Row,Col,Button } from 'react-bootstrap'
import styles from '@/styles/users/resume.module.css'


const userCandidate =()=> {
  return (
    <>
    <style type="text/css">
        {`
            input{
                height:50px !important;
                margin-bottom:3%;
                margin-top:1%;
                border:1px solid silver;
            }
            .input{
                width:100%;
                height:50px;
                border:1px solid silver;
            }

    `}
      </style>
    <CandidateNav/>
        <Container className={styles['resumeContainer']}>
            <Row>
                <Col xs={12} style={{padding:"0"}}>
                                <h1 style={{fontSize:"2rem"}}>Change Password</h1>
                </Col>
            </Row>
            
            <Row className={styles['resumeCols']}>
                    <Col xs={12} lg={6}>
                        <Row>
                            <Col xs={12}>
                                Old Password <span style={{color:"red"}}>*</span>
                            </Col>
                            <Col xs={12} className={styles['inputs']}>
                            <input  type='password' required/>
                            </Col>
                            <Col xs={12}>
                                New Password <span style={{color:"red"}}>*</span>
                            </Col>
                            <Col xs={12} className={styles['inputs']}>
                                <input type='password' required/>
                            </Col>
                            <Col xs={12}>
                                Retype Password <span style={{color:"red"}}>*</span>
                            </Col>
                            <Col xs={12} className={styles['inputs']}>
                                <input  type='password' required/>
                            </Col>
                        </Row>
                       
                    </Col>
                
               
    


            </Row>
            
            
            

            <Row>
                <Button className={styles['submitButton']} type="submit">
                    Change Password
                </Button>
            </Row>
        </Container>
    <Footer/>
    </>
  )
}

export default userCandidate