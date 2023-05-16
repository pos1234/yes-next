import { useState } from 'react'
import {Row, Col, Button, Container,Form,Dropdown} from 'react-bootstrap'
import styles from '@/styles/SubmitJobOrder.module.css'
import {StyledUrContent} from '../Components/StyledUr'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import { sendJobOrder } from '@/lib/api'
const SubmitJobOrder = ()=>{
    const [error,setError]=useState('')
    const [submitJob,setSubmitJob] = useState({
        companyName:"",
        companyWebsite:"",
        sector:"",
        companyPersonEmail:"",
        fullName:"",
        contactPersonPhone:"",
        companyAdress:"",
        specialization:"",
        jobLocation:"",
        paymentRange:"",
        hiringPosition:"",
        preferredGender:"",
        numberOfOpenings:"",
        jobDescription:"",
        jobFile:"",
    });
    const handleSub = async (event)=>{
        event.preventDefault()
        try{
                await sendJobOrder(submitJob);
                setError('succesfully sent the data')
                setSubmitJob({
                    companyName:"",
                    companyWebsite:"",
                    sector:"",
                    companyPersonEmail:"",
                    fullName:"",
                    contactPersonPhone:"",
                    companyAdress:"",
                    specialization:"",
                    jobLocation:"",
                    paymentRange:"",
                    hiringPosition:"",
                    preferredGender:"",
                    numberOfOpenings:"",
                    jobDescription:"",
                    jobFile:"",
                })
        }catch(error){
            setError(error.message)
        }
          
     } 
    return (
        <>
        <Navigation/>
        <Container className={styles['submitJobOrderContainer']}>
            <Button className={styles['submitJobOrderButton']} href='' name='employers-button-link'>   REQUEST NEEDED TALENT</Button>
            <h1 className={styles['submitJobOrderTitle']}>Tell Us About Your <StyledUrContent texts="Hiring Needs"/></h1>
            <p>We’re committed to fulfilling your unique hiring needs. Fill out the form below & we’ll be in touch shortly</p>
            {
                error && (
                    <p> {error}</p>
                )
            }
        <Form className={styles['login-form']} onSubmit={handleSub}>
                <Row>
                    <Col>
                        <h1>Company Details</h1>
                        <h2>Please fill out your company details here.</h2>
                        <Row>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                                <Form.Control value={submitJob.companyName} onChange={(event)=>setSubmitJob({...submitJob,companyName : event.target.value})} placeholder="Company Name" type="text-field" required/>
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                                <Form.Control value={submitJob.companyWebsite} onChange={(event)=>setSubmitJob({...submitJob,companyWebsite : event.target.value})} placeholder="Website" type="text-field" />
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 " > 
                                <Form.Select className={styles["drop-downs"]} onChange={(event)=>setSubmitJob({...submitJob,sector : event.target.value})}>
                                        <option  value='' disabled>Sector</option>
                                        <option value='Accounting/Finance' >Accounting/Finance</option>
                                        <option value='Manufacturing' >Manufacturing</option>
                                        <option value='Garment' >Garment</option>
                                        <option value='IT'>IT</option>
                                </Form.Select>
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                                <Form.Control  value={submitJob.companyPersonEmail} onChange={(event)=>setSubmitJob({...submitJob,companyPersonEmail : event.target.value})}  placeholder="Contact Person Email" type="email" required/>
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                                <Form.Control  value={submitJob.fullName} onChange={(event)=>setSubmitJob({...submitJob,fullName : event.target.value})} placeholder="Full Name" type="text-field" required/>
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                                <Form.Control  value={submitJob.contactPersonPhone} onChange={(event)=>setSubmitJob({...submitJob,contactPersonPhone : event.target.value})} placeholder="Contact Person Phone" type="text-field" required/>
                            </Form.Group>   
                            </Col>
                            <Col xs={12}>
                            <Form.Group className="mb-4 ">
                                <Form.Control  value={submitJob.companyAdress} onChange={(event)=>setSubmitJob({...submitJob,companyAdress : event.target.value})} placeholder="Company Address" type="text-field" />
                            </Form.Group>   
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={6}>
                        <h1>Request Talent</h1>
                        <h2>Here you can leave your job details & Submit your job post.</h2>
                        <Row>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                                <Form.Select className={styles["drop-downs"]} onChange={(event)=>setSubmitJob({...submitJob,specialization : event.target.value})}>
                                        <option  value='' disabled>Specialization</option>
                                        <option value='Accounting/Finance' >Service</option>
                                        <option value='Manufacturing' >Manufacturing</option>
                                        <option value='Garment' >Finance</option>
                                        <option value='IT'>IT</option>
                                </Form.Select>
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                                <Form.Control value={submitJob.jobLocation} onChange={(event)=>setSubmitJob({...submitJob,jobLocation: event.target.value})} placeholder="Job Location" type="text-field" required/>
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                                <Form.Control value={submitJob.paymentRange} onChange={(event)=>setSubmitJob({...submitJob,paymentRange: event.target.value})} placeholder="Pay Rate Range" type="text-field" required/>
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                                <Form.Control value={submitJob.hiringPosition} onChange={(event)=>setSubmitJob({...submitJob,hiringPosition: event.target.value})} placeholder="Position hiring for" type="text-field" required />
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                            <Form.Select className={styles["drop-downs"]} onChange={(event)=>setSubmitJob({...submitJob,preferredGender : event.target.value})}>
                                        <option  value='' disabled>Preferred Gender</option>
                                        <option value='Male' >Male</option>
                                        <option value='Male' >Female</option>
                                </Form.Select>
                            </Form.Group>   
                            </Col>
                            <Col md={6}>
                            <Form.Group className="mb-4 ">
                            <Form.Select className={styles["drop-downs"]} onChange={(event)=>setSubmitJob({...submitJob,numberOfOpenings : event.target.value})}>
                                        <option  value='' disabled> Number of Openings</option>
                                        <option value='1' >1</option>
                                        <option value='2' >2</option>
                                        <option value='3' >3</option>
                                        <option value='4+'>4+</option>
                                </Form.Select>
                            </Form.Group>   
                            </Col>
                            <Col xs={12}>
                            <Form.Group className="mb-4">
                                <Form.Control as={'textarea'} value={submitJob.jobDescription} onChange={(event)=>setSubmitJob({...submitJob,jobDescription: event.target.value})} placeholder="Job Description" rows={5} required/>
                            </Form.Group>   
                            </Col>
                            <Col xs={12}>
                            <Form.Group className="mb-4 ">
                                <Form.Label style={{color:'#7A7A7A'}}>Or upload the Job description:</Form.Label>
                                <Form.Control value={submitJob.jobFile} onChange={(event)=>setSubmitJob({...submitJob,jobFile: event.target.value})} placeholder="choose file" type="file" />
                            </Form.Group>   
                            </Col>
                        </Row>
                    </Col>
                </Row>
               <Row>
                    <Col>
                       <Button type="submit" className={styles['home-last-content-button']}>Post Your Order</Button>
                    </Col>
                    <Col>
                    <Button type='reset' className={styles['home-last-content-button']}>Clear</Button>
                    </Col>
               </Row>
        </Form>
        </Container>
        <Footer/>
        </>
    )
}


export default SubmitJobOrder