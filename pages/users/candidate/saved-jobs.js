
import React, { useEffect, useState } from 'react'
import CandidateNav from '../../../Components/CandidateNav'
import Footer from '@/Components/Footer';
import { Container,Row,Col,Button,InputGroup,Form} from 'react-bootstrap'
import styles from '@/styles/users/resume.module.css'
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';

const userCandidate =()=> {
  const [userInput,setUserInput] = useState('');
 useEffect(()=>{
    console.log(userInput);
 },[userInput])
    
    
 
 
  return (
    <>
    <CandidateNav/>
        <Container className={styles['resumeContainer']}>
            <Row>
                <Col xs={12} style={{padding:"0"}}>
                                <h1 style={{fontSize:"2rem"}}>Saved Jobs</h1>
                </Col>
            </Row>
            <Row className={styles['resumeCols']}>
                <Col xs={8} md={6} lg={3}>
    
        <InputGroup className="my-3 ">
        <InputGroup.Text id="basic-addon1"><SearchIcon/></InputGroup.Text>
        <Form.Control
          placeholder="Search...."
          aria-label="search"
          aria-describedby="basic-addon1"
         onChange={(e)=>setUserInput(e.target.value)}/>
      </InputGroup>
                    <p style={{fontSize:"0.8rem"}}>No application found</p>
                   
             </Col>
            </Row>
        </Container>
    <Footer/>
    </>
  )
}

export default userCandidate