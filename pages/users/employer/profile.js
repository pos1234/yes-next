
import React from 'react'
/* import CandidateNav from '@/Components/CandidateNav'
 */import Footer from '@/Components/Footer';
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
{/*     <CandidateNav/>
 */}        <Container className={styles['resumeContainer']}>
            <Row>
                <Col xs={12} style={{padding:"0"}}>
                                <h1 style={{fontSize:"2rem"}}>Edit Profile</h1>
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
             </Col>
            </Row>
            <Row className={styles['resumeCols']}>
                <h1>Education</h1>
                       
                
                <Row>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Full Name
                            </Col>
                            <Col className={styles['inputs']}>
                            <input  type='text'/>
                            </Col>
                        </Row>
                       
                    </Col>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Date of Birth
                            </Col>
                            <Col className={styles['inputs']}>
                            <input  type='date'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Gender
                            </Col>
                            <Col className={styles['inputs']}>
                                <select className='input'>
                                    <option>male</option>
                                    <option>female</option>
                                </select>
                            </Col>
                        </Row>
                       
                    </Col>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Age
                            </Col>
                            <Col className={styles['inputs']}>
                            <input  type='number'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Phone Number
                            </Col>
                            <Col className={styles['inputs']}>
                            <input  type='number'/>
                            </Col>
                        </Row>
                       
                    </Col>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Email
                            </Col>
                            <Col className={styles['inputs']}>
                            <input  type='email'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Qualification
                            </Col>
                            <Col className={styles['inputs']}>
                                <select className='input'>
                                    <option>Certificate</option>
                                    <option>Associate Degree</option>
                                    <option>Bachelor Degree</option>
                                    <option>Master's Degree</option>
                                    <option>Doctorate Degree</option>
                                </select>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Years of Experience
                            </Col>
                            <Col className={styles['inputs']}>
                            <input  type='number'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Languages
                            </Col>
                            <Col className={styles['inputs']}>
                            <input  type='text'/>
                            </Col>
                        </Row>
                       
                    </Col>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Salary Type
                            </Col>
                            <Col className={styles['inputs']}>
                            <select className='input'>
                                    <option>Monthly</option>
                                    <option>Weekly</option>
                                    <option>Daily</option>
                                    <option>Hourly</option>
                                    <option>Yearly</option>
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Salary (ETB)
                            </Col>
                            <Col className={styles['inputs']}>
                            <input  type='text'/>
                            </Col>
                        </Row>
                       
                    </Col>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Categories
                            </Col>
                            <Col className={styles['inputs']}>
                            <select className='input'>
                                    <option>Agriculture, Food & Natural Resources</option>
                                    <option>Architecture & Construction</option>
                                    <option>Arts, Audio/Video Technology & Communications</option>
                                    <option>Business Management and Administration</option>
                                    <option>Education & Training</option>
                                    <option>Finance</option>
                                    <option>Government & Public Administration</option>
                                    <option>Health Science</option>
                                    <option>Hospitality & Tourism</option>
                                    <option>Human Services</option>
                                    <option>International Trade & Development</option>
                                    <option>International Trade & Development</option>
                                    <option>Law, Public Safety, Correction & Security</option>
                                    <option>Manufacturing</option>
                                    <option>Marketing</option>
                                    <option>Science, Technology,Engineering & Mathematics</option>
                                    <option>Transportation, Distribution & Logistics</option>
                                </select>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Show my profile
                            </Col>
                            <Col className={styles['inputs']}>
                                <select className='input'>
                                    <option>Show</option>
                                    <option>Hide</option>
                                </select>
                            </Col>
                        </Row>
                       
                    </Col>
                    <Col xs={12} sm={6}>
                        <Row>
                            <Col xs={12}>
                                Job Title
                            </Col>
                            <Col className={styles['inputs']}>
                            <input  type='text'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12}>
                                Description
                            </Col>
                            <Col className={styles['inputs']}>
                                <textarea rows={10}>

                                </textarea>
                            </Col>
                        </Row>
                    </Col>
                </Row>
    


            </Row>
            
            
            

            <Row>
                <Button className={styles['submitButton']} type="submit">
                    Save Profile
                </Button>
            </Row>
        </Container>
    <Footer/>
    </>
  )
}

export default userCandidate