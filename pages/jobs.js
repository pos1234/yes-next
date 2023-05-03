import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row, Dropdown, Col,Form, Nav, Button, Container, Badge} from 'react-bootstrap'
import NavbarJobs from './Components/NavbarJobs'
import Head from 'next/head'
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FooterJobs from './Components/FooterJobs'
import styles from '@/styles/Jobs.module.css'

const App=()=>{
    const [disp,setDisp]=useState(true);
    const [disp2,setDisp2]=useState(true);
    const [data,setData]=useState([])
    const [selectedId,setSelectedId]=useState(null)
    const [selectedData,setSelectedData]=useState([])
    const url='https://jsonplaceholder.typicode.com/todos/';
    useEffect(()=>{
        axios.get(`${url}`)
        .then(response=>setData(response.data.slice(0,10)))
        .then(response=>handleItemClick(1))
    },[]);
    function handleItemClick(id){
        setSelectedId(id);
        axios.get(`${url}${id}`)
        .then(response=>setSelectedData(response.data));
    }
    function hideShow(){
        setDisp(false)
    }
    function showHide(){
        setDisp(true);
    } 
  
    return(
        <Container className={styles['search-results']}>
        <Row style={{margin:0,padding:0}}>
        <Col>    
      <Nav className={disp ? `${styles['sidebar']} ${styles['displays']}`:`${styles['sidebar']} ${styles['no-displays']}`} onClick={hideShow} /* style={{display: disp ? 'block':'none'}} */>
        {
            data.map(select=>(
               <Nav.Item key={select.id} style={{margin:0,padding:0,width:'100%'}} onClick={()=>handleItemClick(select.id)}>
        <Nav.Link  eventKey={select.id}>
            <Row className={styles['one-search']} tabIndex={1}>
                <Col  >
                    <h1>{select.title}</h1>
                    <h2>{select.title}</h2>
                    <p className={styles['content']}>{select.title}</p>
                    <p>Estimated: {select.title} &nbsp; <InfoIcon sx={{fontSize:20}}/> <span className='quick'>Quick Apply</span></p>
                    </Col>
                <Col xs={1}>
                    <FavoriteBorderIcon style={{color:'black'}}/>
                </Col>
            </Row>
        </Nav.Link>
    </Nav.Item>  
            ))
        }
        </Nav>
        </Col>
      <Col xs={12} md={7} className={disp ? `${styles['click-result']} ${styles['no-displays']}`: `${styles['click-result']} ${styles['displays']}`} /* style={{display: disp ? 'none':'block'}} */>
            <Row>
                {
                    selectedData && (
                        <Col sx={12}>
                            <Button className={styles['jobs-show-button']} onClick={showHide}>Back To Search Result</Button>
                        <h1>{selectedData.title}</h1>
                        <Row>
                            <Row >
                                <Col md={6}>
                                    <p><ApartmentIcon style={{fontSize:20}}/> Digital Reach Agency</p>
                                    <p><LocationOnIcon style={{fontSize:20}}/> Ohio, IL</p>
                                </Col>
                                <Col className={`${styles['quick-padding']} ${['col-12 col-md-6 text-end']}`}>
                                    <ul>
                                        <li>
                                            <ReplyIcon className={`${['bg-light border border-secondary rounded-circle']}`}  style={{transform:'rotateY(180deg)',fontSize:50,padding:'10px',paddingTop:'12px'}}/>
                                        </li>
                                        <li>
                                          <span> <FavoriteBorderIcon  className={`${['bg-light border border-secondary rounded-circle']}`}  style={{fontSize:50,padding:'10px',paddingTop:'12px'}}/></span>
                                        </li>
                                        <li>
                                        <Button as='a' className={styles['quick-apply-button']}>Quick Apply</Button>   
                                        </li>
                                    </ul>
                                </Col>
                                <hr className={styles['horizontal-rule']}/>
                            </Row>
                            <Row className={styles['job-details']}>
                                <Col className={styles['col-md-6']}>
                                    <h1>Job Details</h1>
                                    <p><BusinessCenterIcon style={{fontSize:20,marginTop:'-5px'}}/> Contract</p>
                                </Col>
                                <Col className={['col-md-6 d-flex align-items-center']}>
                                    <p className={['mt-4 pt-2']}><AttachMoneyIcon/>$50-$90 an hour</p>
                                </Col>
                             
                                <Col xs={12}>
                                    <h1 className={styles['qual']}>Qualifications</h1>
                                    <Badge>AJAX</Badge>
                                </Col>
                                <hr className={styles['horizontal-rule']}/>
                                <Col md={12} className={styles['discription']}>
                                <h1 className={styles['qual']}>Full Job Description</h1>
                                    <p>
                                    Digital Reach Agency is a full-service digital marketing agency for B2B SaaS & Tech companies. We're an enthusiastic, open-minded team of compassionate and talented people. Our company prides itself on the amazing people who are a part of our team – employee well-being is our priority, our work matters to us, we foster growth & learning in the workplace, and have implemented initiatives to ensure we're engaging our team and empowering every member to succeed.
                                    </p>
                                </Col>
                            </Row>
                            <hr className={styles['horizontal-rule']}/>
                            <Row className={['d-flex']}>
                                <Col>
                                </Col>
                                <Col className={`${styles['quick-padding']} ${['col-12 col-md-6 text-end']}`}>
                                    <ul>
                                        <li>
                                            <ReplyIcon className={`${['bg-light border border-secondary rounded-circle']}`} style={{transform:'rotateY(180deg)',fontSize:50,padding:'10px',paddingTop:'12px'}}/>
                                        </li>
                                        <li>
                                          <span> <FavoriteBorderIcon className={`${['bg-light border border-secondary rounded-circle']}`}  style={{fontSize:50,padding:'10px',paddingTop:'12px'}}/></span>
                                        </li>
                                        <li>
                                        <Button as='a' className={styles['quick-apply-button']}>Quick Apply</Button>   
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                    )
                }  
            </Row>
      </Col>
      </Row>
      </Container>
    )
}


const FindJob=()=> {
      return (
        <>
          <Head>
                <title>Explore Job Vacancies in Ethiopia | YES Job Search</title>
                <meta name="description" content="Find your dream job in Ethiopia with YES. Browse our extensive listings for fresh graduates, experienced professionals, skilled workers, UN jobs, NGO positions, and more"/>
            </Head>
        <NavbarJobs/>
          <Container className={styles['search-bar-container']} fluid='xs'>
                <Row className={styles['search-bar-inner-container']}>
                    <Row>
                        <Col sm={12} md={'auto'} className={styles['search-bar-cols']}>
                            
                            <Form>
                                <Form.Group  controlId="formJobTitle">
                                  <Form.Control className={styles["input-text"]} type="text" placeholder="Job title, keywords..." />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} md={'auto'} className={styles['search-bar-cols']}>
                            <Form>
                                <Form.Group controlId="formCity">
                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-basic" className={styles["drop-down-buttons"]}>
                                    <LocationOnIcon/> City or "Remote"
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className={styles["drop-down-menus"]}>
                                        <Dropdown.Item href="#/action-1">Addis Ababa</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Assosa</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Bahir Dar</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Debre Birhan</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Ethiopia</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Jijiga</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Mekelle</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Remote</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} md={'auto'} className={styles['search-bar-cols']}>
                            <Form>
                                <Form.Group  controlId="formCity">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic" className={styles["drop-down-buttons"]}>
                                    <BusinessCenterIcon/> All Categories
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className={styles["drop-down-menus"]}>
                                        <Dropdown.Item href="#/action-1">Agriculture, Food & Natural Resources</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Arts, Audio/ Video Technology & Communications</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Business Management and Administration</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Education & Training</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Finance</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Government & Public Administration</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Health Science</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Hospitality & Tourism</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Human Resources</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Information Technology</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">International Trade & Development</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Manufacturing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Marketing</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Science, Technology, Engineering & Mathematics</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Transportation, Distribution & Logistics</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col className={styles['search-bar-cols']}>
                            <Form>
                                <Form.Group  controlId="formCity">
                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-basic" className={styles["drop-down-buttons"]}>
                                    <LocationOnIcon/> City or "Remote"
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className={styles["drop-down-menus"]}>
                                        <Dropdown.Item href="#/action-1">
                                            Type
                                        <Form>
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Contrat"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Freelance"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Full Time"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Internship"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Part-Time"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Remote"
                                            />
                                            </Form>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            Qualification
                                        <Form>
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Certificate"/>
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Bachelor Degr.."
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Master's Degree"
                                            />
                                            <Form.Check 
                                                type="switch"
                                                id="custom-switch"
                                                label="Doctorate Deg.."
                                            />
                                            </Form>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            Salary Range
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">0 - 10,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">10,001 - 30,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">60,001 - 100,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">100,001 - 200,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">200,001 - 400,000 Monthly</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">400,001 and above in a Month</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Row>
          </Container>


                <App/>
         
          <FooterJobs/>
      </>
      )
    }

export default FindJob