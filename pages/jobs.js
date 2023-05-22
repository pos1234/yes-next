import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import {Row, Dropdown, Col,Form, Nav, Button, Container, Badge} from 'react-bootstrap'
import NavbarJobs from './Components/NavbarJobs'
import Head from 'next/head'
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FooterJobs from './Components/FooterJobs'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import styles from '@/styles/Jobs.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import {AppContext} from '../lib/AppContext'
import { set } from 'react-hook-form'
import CheckIcon from '@mui/icons-material/Check';
import FPagination from './Components/Pagination'
import { paginate } from '@/utils/paginate'
import { LinkedinShareButton,FacebookShareButton,TwitterShareButton} from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
/* const App=()=>{
   
    return(
       
    )
} */


const FindJob=()=> {
/*     const {status,data} = useSession();
    const router = useRouter();
    useEffect(()=>{
        if(status==="unauthenticated") router.replace("/jobs/sign-in");
    },[status]);
    if(status==="authenticated") */

    const {data,loading,one} = useContext(AppContext)
    const [disp,setDisp]=useState(true);
    const [disp2,setDisp2]=useState(true);
    const [datas,setDatas]=useState([])
    const [selectedData,setSelectedData]=useState(one)
    const [clip,setClip]  = useState (false)
    const [currentPage,setCurrentPage] = useState (1);
    const [show, setShow] = useState(false);
    const [search,setSearch]=useState("");
 
    const pageSize = 10;

    
  
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
  
    useEffect(()=>{
        setSelectedData(one)
    },[one])    
    const handlePageChange =(page)=>{
        setCurrentPage(page);
    }
    const paginatePosts = paginate (data,currentPage,pageSize);
   function clipBoard(){
     navigator.clipboard.writeText(selectedData.metas._job_apply_url);
        setClip(true)
        clipReset();
   }
   function clipReset(){
            if(clip){
                setClip(false)
            }
   }
    function handleItemClick(id){
        
        const post = data.find(post => post.id === id)
            setSelectedData(post) 
    }  
        function hideShow(){
        setDisp(false)
    }
    useEffect(()=>{
        if(!disp){
            setDisp2(false)
        }
        else{
            setDisp2(true)
        }
    },[disp])
    function showHide(){
        setDisp(true);
    } 
        
      return (
        <div className={styles['jobs-container']} style={{overflowX:'hidden'}}>
          <Head>
                <title>Explore Job Vacancies in Ethiopia | YES Job Search</title>
                <meta name="description" content="Find your dream job in Ethiopia with YES. Browse our extensive listings for fresh graduates, experienced professionals, skilled workers, UN jobs, NGO positions, and more"/>
                <link rel="shortcut icon" href="/images/yes-logo.svg" />
            </Head>
            <NavbarJobs  
                        hrefHome="/" home='Home'
                        hrefAbout="/home/about" about='About'
                        hrefClient="/home/about" client='Client Hub'
                        hrefJobs="/jobs" jobs=''
                        hrefHris="/home/hris" hris='Products'
                        hrefBlog="/home/blog" blog='Blog'
                        hrefFaq="/home/faq" faq='FAQ'
                        hrefContact="/home/contact-us" contact='Get in Touch'
                   />
     
                   

          <Container className={styles['search-bar-container']} fluid>
                <Row className={styles['search-bar-inner-container']}>
                    <Row>
                        <Col sm={12} md={'auto'} className={styles['search-bar-cols']}>
                            
                            <Form>
                                <Form.Group  controlId="formJobTitle">
                                  <Form.Control className={styles["input-text"]} type="text" placeholder="Job title, keywords..." onChange={(e)=>setSearch(e.target.value)}/>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} md={'auto'} className={styles['search-bar-cols']}>
                            <Form>
                                <Form.Group controlId="formCity">
                                <Form.Select className={styles["drop-downs"]} onChange={(event)=>setSubmitJob({...submitJob,sector : event.target.value})}>
                                        <option  value='' disabled> {/* <LocationOnIcon/> */} City or "Remote" </option>
                                        <option value='AddisAbeba'>Addis Abeba</option>
                                        <option value='Assosa'>Assosa</option>
                                        <option value='BahirDar'>Bahir Dar</option>
                                        <option value='Ethiopia'>Ethiopia</option>
                                        <option value='Jigjiga'>Jigjiga</option>
                                        <option value='Mekelle'>Mekelle</option>
                                        <option value='Remote'>Remote</option>
                                </Form.Select>
                              
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} md={'auto'} className={styles['search-bar-cols']}>
                            <Form>
                                <Form.Group  controlId="formCity">
                                <Form.Select className={styles["drop-downs"]} onChange={(event)=>setSubmitJob({...submitJob,sector : event.target.value})}>
                                        <option  value='' > {/* <BusinessCenterIcon/> */}  All Categories</option>
                                        <option value='Agriculture, Food & Natural Resources'>Agriculture, Food & Natural Resources</option>
                                        <option value='Arts, Audio/ Video Technology & Communications'>Arts, Audio/ Video Technology & Communications</option>
                                        <option value='Business Management and Administration'>Business Management and Administration</option>
                                        <option value='Education & Training'>Education & Training</option>
                                        <option value='Finance'>Finance</option>
                                        <option value='Government & Public Administration'>Government & Public Administration</option>
                                        <option value='Health Science'>Health Science</option>
                                        <option value='Hospitality & Tourism'>Hospitality & Tourism</option>
                                        <option value='Human Resources'>Human Resources</option>
                                        <option value='Information Technology'>Information Technology</option>
                                        <option value='International Trade & Development'>International Trade & Development</option>
                                        <option value='Manufacturing'>Manufacturing</option>
                                        <option value='Marketing'>Marketing</option>
                                        <option value='Other'>Other</option>
                                        <option value='Science, Technology, Engineering & Mathematics'>Science, Technology, Engineering & Mathematics</option>
                                        <option value='Transportation, Distribution & Logistics'>Transportation, Distribution & Logistics</option>
                                </Form.Select>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col className={styles['search-bar-cols']} style={{borderRight:'none'}}>
                            <Button type='submit'> Find Jobs</Button>
                            {/* <Form>
                                <Form.Group  controlId="formCity">
                                <Dropdown >
                                    <Dropdown.Toggle id="dropdown-basic" className={styles["drop-down-buttons"]}>
                                    <span>  <LocationOnIcon/> City or "Remote" </span>
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
                            </Form> */}
                        </Col>
                    </Row>
                </Row>
          </Container>

          <>
        {
            (data) ? 
       
        <Container className={styles['search-results']} fluid>
                   {
                clip &&
             <div className={styles['clipBoard']}>
                <Row>
                    <Col xs={1} style={{paddingTop:'15px',paddingRight:'10px'}}>
                        <CheckIcon/>
                    </Col>
                    <Col>
                    <p>The Link is Copied to the clipboard.</p>
                 <p>Share with your friend</p>
                    </Col>
                </Row>
            </div> 
}
        <Row style={{margin:0,padding:0}}>
        <Col  className={styles['sidebarColContainer']}>    
      <Nav  className={disp ? `${styles['sidebar']} ${styles['displays']}`:`${styles['sidebar']} ${styles['no-displays']}`} onClick={hideShow} /* style={{display: disp ? 'block':'none'}} */>
        { 
        data && paginatePosts.filter((data) => {
            const titleLower = data.title.rendered.toLowerCase();
            const inputLower = search.toLowerCase();
            return titleLower.includes(inputLower)        
        }) .map(select=>(
               <Nav.Item key={select.id} style={{margin:0,padding:0,width:'100%'}} onClick={()=>handleItemClick(select.id)}>
        <Nav.Link  eventKey={select.id}>
            <Row className={styles['one-search']} tabIndex={1}>
                <Col  >
                    <h1 dangerouslySetInnerHTML={{__html:select.title.rendered}}/>
                    <h2 dangerouslySetInnerHTML={{__html:select.metas._job_employer_name}}/>
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
        <div  className={disp ? `${styles['displays']}`:`${styles['no-displays']}`}>
            <FPagination 
            item={data.length} 
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={handlePageChange} 
           
        />
          </div>
        
        </Col>
      <Col xs={12} md={8} className={disp ? `${styles['click-result']} ${styles['no-displays']}`: `${styles['click-result']} ${styles['displays']}`} /* style={{display: disp ? 'none':'block'}} */>
            <Row>
                {
                    (selectedData) ?  ( 
                        <Col sx={12} >
                            <Button className={styles['jobs-show-button']} onClick={showHide}>Back To Search Result</Button>
                          <img style={{width:50,height:50,borderRadius:'0px',display:'inline',marginBottom:'20px'}} src={selectedData.metas._job_logo}/> <span>  <h1 style={{display:'inline'}} dangerouslySetInnerHTML={{__html:selectedData.title.rendered}}/> </span>
                        <Row>
                            <Row >
                                <Col md={6}>
                                  <p><ApartmentIcon style={{fontSize:20}}/>  <span dangerouslySetInnerHTML={{__html:selectedData.metas._job_employer_name}}/> </p>
                                    <LocationOnIcon style={{fontSize:20}}/> <span dangerouslySetInnerHTML={{__html:selectedData.metas._job_location[194]}}/> <span dangerouslySetInnerHTML={{__html:selectedData.metas._job_location[527]}}/>
                                </Col>
                                <Col className={`${styles['quick-padding']} ${['col-12 col-md-6 text-end']}`}>
                                <Row >
                                            <Col xs={2}>
                                            <Dropdown show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                                    <Dropdown.Toggle className={styles['shareIcon']}>
                                                        <ShareIcon /> 
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu  className={styles['copyIcons']}>
                                                        <Dropdown.Item>
                                                            <ContentCopyIcon onClick={clipBoard}/> <span>copy Link </span>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <FacebookShareButton
                                                                url={selectedData.metas._job_apply_url}
                                                                title="Share job to Facebook"
                                                            >
                                                            <FacebookIcon/> <span>Facebook </span>
                                                        </FacebookShareButton>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <TwitterShareButton 
                                                                url={selectedData.metas._job_apply_url}
                                                                title="Share job to Twitter"                                                    >
                                                            <TwitterIcon/><span>Twitter </span>
                                                        </TwitterShareButton>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                        <LinkedinShareButton 
                                                            url={selectedData.metas._job_apply_url}
                                                            title="Share job to LinkedIn"                                                    >
                                                        <LinkedInIcon/> <span>LinkedIn </span>
                                                    </LinkedinShareButton>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                    </Dropdown>
                                                
      
                                            </Col>
                                            <Col xs={2}>
                                                <FavoriteBorderIcon className={styles['shareIcon']}/>
                                            </Col>
                                            <Col xs={6}  >
                                            <Button as='a' href={selectedData.metas._job_apply_url} target='_blank' className={styles['quick-apply-button']}>Quick Apply</Button>   

                                            </Col>
                                        </Row>
                                </Col>
                                <hr className={styles['horizontal-rule']}/>
                            </Row>
                            <Row className={styles['job-details']}>
                                <Col className={styles['col-md-6']}>
                                    <h1>Job Details</h1>
                                    <p><BusinessCenterIcon style={{fontSize:20,marginTop:'-5px'}}/> <span dangerouslySetInnerHTML={{__html:selectedData.metas._job_type[47]}}/></p>
                                </Col>
                                <Col className={['col-md-6 d-flex align-items-center']}>
                                  {selectedData.metas._job_salary_type &&  <p className={['mt-4 pt-2']}><AttachMoneyIcon/><span dangerouslySetInnerHTML={{__html:selectedData.metas._job_salary_type}}/></p> }
                                </Col>
                             {selectedData.metas._job_qualification &&
                                <Col xs={12}>
                                     <h1 className={styles['qual']}>Qualifications</h1>
                                   <Badge className={styles['badge']}><span dangerouslySetInnerHTML={{__html:selectedData.metas._job_qualification}}/></Badge> 
                                </Col>
}
                                <hr className={styles['horizontal-rule']}/>
                                <Col md={12} className={styles['discription']}>
                                <h1 className={styles['qual']}>Full Job Description</h1>
                                <span dangerouslySetInnerHTML={{__html:selectedData.content.rendered}}/>
                                </Col>
                            </Row>
                            <hr className={styles['horizontal-rule']}/>
                            <Row className={['d-flex']}>
                                <Col>
                                </Col>
                                <Col className={`${styles['quick-padding']} ${['col-12 col-md-6 text-end']}`}>
                                  
                                        <Row >
                                            <Col xs={2}>
                                            <Dropdown show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                                                    <Dropdown.Toggle className={styles['shareIcon']}>
                                                        <ShareIcon /> 
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu  className={styles['copyIcons']}>
                                                        <Dropdown.Item>
                                                            <ContentCopyIcon onClick={clipBoard}/> <span>copy Link </span>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <FacebookShareButton
                                                                url={selectedData.metas._job_apply_url}
                                                                title="Share job to Facebook"
                                                            >
                                                            <FacebookIcon/> <span>Facebook </span>
                                                        </FacebookShareButton>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            <TwitterShareButton 
                                                                url={selectedData.metas._job_apply_url}
                                                                title="Share job to Twitter"                                                    >
                                                            <TwitterIcon/><span>Twitter </span>
                                                        </TwitterShareButton>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                        <LinkedinShareButton 
                                                            url={selectedData.metas._job_apply_url}
                                                            title="Share job to LinkedIn"                                                    >
                                                        <LinkedInIcon/> <span>LinkedIn </span>
                                                    </LinkedinShareButton>
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                    </Dropdown>
                                                
      
                                            </Col>
                                            <Col xs={2}>
                                                <FavoriteBorderIcon className={styles['shareIcon']}/>
                                            </Col>
                                            <Col xs={6}  >
                                            <Button as='a' href={selectedData.metas._job_apply_url} target='_blank' className={styles['quick-apply-button']}>Quick Apply</Button>   

                                            </Col>
                                        </Row>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                    ) : <div>no data to display</div>
                }  
            </Row>
      </Col>
      </Row>
      </Container> : <img className={styles['loading']} src='/images/Dual Ring-1s-200px.svg'/>
        }
        </>
         
          <FooterJobs />
      </div>
      )
    }

export default FindJob


