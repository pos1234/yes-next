
import React,{useState,useEffect} from 'react'
import EmployerNav,{Contain} from '../../../Components/EmployerNav'
import {FooterPart} from '@/Components/Footer';
import { Container,Row,Col,Navbar,Form,InputGroup, Button } from 'react-bootstrap'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import styles from '@/styles/users/employer/employer-jobs.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
const EmployerJobs =()=> {
   /*  const {status,data} = useSession();
    const router = useRouter();
    useEffect(()=>{
        if(status==="authenticated" && data.user.name==="candidate") router.replace("/users/candidate/user-candidate")
        if(status==="unauthenticated") router.replace("/jobs/sign-in");
    },[status]);
    if(status==="authenticated" && data.user.name==="employer") {
        console.log(data.user); */
  return (
    <>
    <EmployerNav/>
    <Contain>
      <Container>
         <Row className={styles['searchContainer']}>
                <Col sm={1} xs={12}>
                  <h5>Jobs</h5>
                </Col>
                
                <Col xs={8} sm={6} md={8} lg={4} >
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search Jobs"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        style={{height:"3rem"}}
                      />
                  <InputGroup.Text id="basic-addon1"><SearchIcon/></InputGroup.Text>
                  </InputGroup>
                </Col>
                <Col style={{textAlign:"right"}}>
                  <Button as={Link} href='/users/employer/post-job' className={styles['postJobButton']}>
                    Post Job
                  </Button>
                </Col>
              </Row>
      <Row>
        <Col className={styles['noJobsImag']} style={{minHeight:"55vh"}}>
          <img src='/images/undraw_job_hunt_re_q203.svg' />
           <p>No jobs found.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={{minHeight:"25vh"}}>
           <p>Messages (0)</p>
        </Col>
      </Row>
      </Container>
      
      </Contain>
      <Contain>
        <FooterPart/>
      </Contain>
    
    </>
  )
    }
//}

export default EmployerJobs