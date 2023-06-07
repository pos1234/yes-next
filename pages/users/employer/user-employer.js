
import React,{useState,useEffect} from 'react'
import CandidateNav from '../../../Components/EmployerNav'
import Footer from '@/Components/Footer';
import { Container,Row,Col } from 'react-bootstrap'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import styles from '@/styles/users/userCandidate.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const userCandidate =()=> {
    const {status,data} = useSession();
    const router = useRouter();
    useEffect(()=>{
        if(status==="authenticated" && data.user.name==="candidate") router.replace("/users/candidate/user-candidate")
        if(status==="unauthenticated") router.replace("/jobs/sign-in");
    },[status]);
    if(status==="authenticated" && data.user.name==="employer") {
        console.log(data.user);
  return (
    <>
    <CandidateNav/>
        <Container className={styles['dashboardContainer']} fluid>
          
            <Row style={{justifyContent:"space-around",margin:"0",padding:"0"}}>
                  <h1 className={styles['dashboardH1']}>Dashboard</h1>
                <Col className={styles['dashboardCards']} xs={12} md={6} lg={3}>
                    <Row style={{justifyContent:"space-between"}}>
                        <Col xs={2} className={styles['dashboardIcons']} style={{backgroundColor:"#1967d21a"}}>
                            <BusinessCenterOutlinedIcon style={{color:"#1967d2"}}/>
                        </Col>
                        <Col xs={10} className={styles['dashboardTexts']}>
                            <p className={styles['dashboardNumbers']} style={{color:"#1967d2"}}>0</p>
                            <p>Applied Jobs(Internal Posts)</p>                       
                        </Col>
                    </Row>
                </Col>
                <Col className={styles['dashboardCards']} xs={12} md={6} lg={3}>
                    <Row style={{justifyContent:"space-between"}}>
                            <Col xs={2} className={styles['dashboardIcons']} style={{backgroundColor:"#d930251a"}}>
                                <RemoveRedEyeOutlinedIcon style={{color:"#D93025"}}/>
                            </Col>
                            <Col xs={9} className={styles['dashboardTexts']}>
                                <p className={styles['dashboardNumbers']} style={{color:"#D93025"}}>17</p>
                                <p>Views</p>                       
                            </Col>
                        </Row>
                </Col>
                <Col className={styles['dashboardCards']} xs={12} md={6} lg={3}>
                         <Row style={{justifyContent:"space-between"}}>
                            <Col xs={2} className={styles['dashboardIcons']} style={{backgroundColor:"#34a8531a"}}>
                                <BookmarkBorderOutlinedIcon style={{color:"#34a853"}}/>
                            </Col>
                            <Col xs={9} className={styles['dashboardTexts']}>
                                <p style={{color:"#34a853"}} className={styles['dashboardNumbers']}>17</p>
                                <p>Saved Jobs</p>                       
                            </Col>
                        </Row>
                </Col>
            </Row>
        </Container>
    <Container className={styles['notificationContainer']} style={{padding:"0"}} fluid="md">
        {/* <Row  className={styles["graphRow"]}>
            <Col   className={styles['notfCols']}  xs={12} md={8}>
                Your Profile Views
            </Col>
            <Col className={styles['notfCols']} xs={12} md={3}>
                Notifications
            </Col>
        </Row> */}
        <Row className={styles['recent']}  >
            <Col className={styles['notfCols']} xs={12}>
                    <p><b>Jobs Applied Recently</b></p>
                    <p>No Applicants found.</p>
            </Col>
        </Row>
    </Container>
    <Footer/>
    </>
  )
    }
}

export default userCandidate