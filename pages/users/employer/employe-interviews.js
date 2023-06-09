
import React,{useState,useEffect} from 'react'
import EmployerNav,{Contain} from '../../../Components/EmployerNav'
import {FooterPart} from '@/Components/Footer';
import { Container,Row,Col,Navbar,Form,InputGroup, Button } from 'react-bootstrap'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import styles from '@/styles/users/employer/employer-interviews.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
const EmployerInterviews =()=> {
    const [open,setOpen] = useState();
    const handleUpcoming = ()=>{
            setOpen(!open)
    }
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
         <Row className={styles['interviewContain']}>
                <Col xs={12} lg={3} className={styles['chooseInterviews']}>
                  <h1>Interviews</h1>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={4} sm={3} lg={6}>
                                    <Button onClick={handleUpcoming} className={(open) ? styles['chooseButton'] : styles['chooseButtonBorder']}>Upcoming 0</Button>            
                                </Col>
                                <Col xs={5} sm={4} lg={6}>
                                    <Button onClick={handleUpcoming} className={(open) ? styles['chooseButtonBorder'] : styles['chooseButton']}>Past 0</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>

                        </Col>
                    </Row>
                </Col>
                
                <Col xs={12} lg={8} className={styles['listInterviews']}>
                    {
                        (open) ? <> <h1>You don't have past interviews</h1>
                        <p>All past interviews will show up here.</p> </>
                        :
                      <>  <h1>You don't have upcoming interviews</h1>
                        <p>All upcoming interviews will show up here.</p> </>
                    }
                    
                        <img src='/images/undraw_interview_re_e5jn.svg' />
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

export default EmployerInterviews