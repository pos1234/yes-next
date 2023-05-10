import Head from 'next/head'
import Link from 'next/link'
import {Row, Col, Button, Container} from 'react-bootstrap'
import styles from '@/styles/Home.module.css'
import StarIcon from '@mui/icons-material/Star';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Navigation from './Components/Navigation'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import StyledUr,{StyledUrContent} from './Components/StyledUr'
import Footer from './Components/Footer'
const YourHr = (props)=>{
  return(
          <Row className={styles['home-your-hr-lists']} >
              <Col className={styles['icon-image-container']}>
                  <img alt='icon-image' width={35} height={35} src={props.imageSrc} style={{ display: 'block',maxWidth:'35px', maxHeight:'35px',width:'auto',height:'auto'}}/>
              </Col>
              <Col xm={6} className={styles['home-hr-texts']}>
                  <h2>{props.title}</h2>
                  <p>{props.content}</p>
                  <Button role='link' as={Link} href={props.To} aria-label='your HR is good' className={styles['list-button']} name='button-down-home'><ArrowRightAltIcon/></Button>
              </Col>
          </Row>
  )
}
const HowHelp = (props)=>{
  return(
      <Row className={styles['how-we-help-rows']}>
          <Col className={styles['how-we-help-image']}>
              <img src={props.imageSrc} alt='how-we-help-image' width={35} height={35} style={{ display: 'block',maxWidth:'35px', maxHeight:'35px',width:'auto',height:'auto'}}/>
          </Col>
          <Col xs={11} >
              <h2>{props.title}</h2>
              <p className={styles['silver-paragraph']}>{props.content}</p>
          </Col>
      </Row>
  )
}
const Seeker = (props)=>{
  return (
      <Col className={styles['home-seeker-lists']}>
          <img src={props.imageSrc} alt='home-seeker-image' width={80}/>
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <Button role='link' as={Link} href={props.To} aria-label='links' className={styles['list-button']} name='link-button' ><ArrowRightAltIcon/></Button>
      </Col>
  )
}

const Home = ()=>{
  return(
          <>
          <Head>
            <title>YES | Ethiopia's Leading Recruitment & HR Solutions Agency</title>
            <meta name="description" content="Empower your business with YES, Ethiopia's top recruitment and HR solutions agency, offering job placement, payroll management, and outsourcing services."/>
            <link rel="shortcut icon" href="/images/yes-logo.svg" />
          </Head>

          <div className={styles['home-container']}>
              {/* Home entry */}
              <div className={styles['home-entry']} >
                  <div className={styles['home-entry-content']} >
                   <Navigation />
                      <Row className={styles['home-entry-headings']} data-aos="fade-up" data-aos-duration="2000">
                          <h1 className={styles['h1']}>Right &nbsp;
                              <StyledUr text='fit!' />
                          </h1>
                          <h1 className={`${styles['right-now']} ${styles['h1']}`}><span></span></h1>
                          <Row className={styles['home-button-container']}>
                              <Col><Button as='a' href='#employer' className={styles['home-entry-button']}>Find Talent <span  className={styles['button-icons']}><StarIcon/></span></Button></Col>
                              <Col><Button as='a' href='#jobseeker'  className={styles['home-entry-button']}>Find a Job <span  className={styles['button-icons']}><BusinessCenterIcon className='button-icons'/></span></Button></Col>
                          </Row>
                      </Row> 
                  </div>
              </div>
              {/* home bridge */}
              <Container className={styles['home-bridge']} >
                   <Row data-aos="fade-up" data-aos-duration="2000">
                      <h1>We  <StyledUrContent texts='bridge' /> the gap</h1>
                  </Row>
                  <Row>
                      <Col data-aos="fade-up" data-aos-duration="2000">
                      <p className={styles['silver-paragraph']}>Whether you're looking to hire or get hired let us do the searching and find you
                       the right fit while you focus on what you do best</p>
                      </Col>
                  </Row>
                  <Row className={styles['home-bridge-box-container']}>
                      <Col data-aos="fade-up" data-aos-duration="2000">
                          <div className={styles["scene"]}>
                              <div className={styles["card"]}>
                                  <div className={`${styles["face"]} ${styles["front"]}`}>
                                      <Button className={styles['bridge-button']}>Employers</Button>
                                      <h2>Find Talent</h2>
                                  </div>
                                  <div className={`${styles["face"]} ${styles["back"]}`}>
                                  <Button as='a' href='#employer' className={styles['bridge-button']}>Submit a Job Order</Button>
                                  </div>
                              </div>
                          </div>
                      </Col>
                      <Col data-aos="fade-up" data-aos-duration="2000">
                      <div className={styles["scene"]}>
                              <div className={styles["card"]}>
                                  <div className={`${styles["face"]} ${styles["front"]} ${styles['second-front']}`}>
                                      <Button className={styles['bridge-button']}>Job Seekers</Button>
                                      <h2>Find a Job</h2>
                                  </div>
                                  <div className={`${styles["face"]} ${styles["back"]}`}>
                                  <Button  as={Link} href='/jobs' className={styles['bridge-button']}>Browse Jobs</Button>
                                  </div>
                              </div>
                          </div>
                      </Col>
                  </Row>
                  </Container>
              {/* Your HR */}
              <Container className={styles['home-your-hr']} id='employer'>
                  <Row>
                      <Col className={styles['home-your-hr-content']} data-aos="fade-up" data-aos-duration="2000">
                          <Button as='a' className={styles['home-your-hr-button']} href='' name='employers-button-link'>EMPLOYERS</Button>
                          <h1>Your HR <StyledUrContent texts='one-stop-shop'/></h1>
                          <p className={`${styles['home-hr-p']} ${styles['silver-paragraph']}`}>Need the perfect addition to your team? Search no more! YES has got you covered - with just a few clicks, we connect employers and employees together like peanut butter & jelly. So why wait? Get tapping today – it's time for greatness!</p>
                          <div className={styles['home-your-hr-content-lists']}>
                          <YourHr imageSrc='/images/icon-image-7.avif'
                           title='Find Talent'
                           content='Hiring made easy! Let us do the hard work for you by finding top talent for your open positions.'
                           To='/home/submit-job-order'/>
                          <YourHr imageSrc='/images/icon-image-8.avif'
                          title='Post a Job'
                          content='Click, Post, Hire'
                          To='/jobs/sign-in'/>
                          <YourHr imageSrc='/images/icon-image-9.avif'
                          title='Our Services'
                          content='Find out more about all our HR solutions'
                          To='/home/about/'/>
                          </div>
                      </Col>
                      <Col data-aos="fade-up" data-aos-duration="2000" className={styles['home-your-hr-side-image']} sm={12} lg={5}>
                          <img src='/images/image-1-11.avif' alt='home-side-image'/>
                      </Col>
                  </Row>
              </Container>
              {/* how we help */}
              <Container fluid className={styles['home-how-help']}>
                  <div className={styles['home-how-help-center']}>
                  <Button as='a' className={styles['home-how-help-button']} href='' name='home-how-help-link-button' data-aos="fade-up" data-aos-duration="2000">EMPLOYERS</Button>
                  <Row data-aos="fade-up" data-aos-duration="2000">
                      <h1>How we help you</h1>
                  </Row>
                  <Row data-aos="fade-up" data-aos-duration="2000">
                      <Col>
                      <p className={styles['silver-paragraph']}>Our specialist recruiters use state-of the-art technology with in-depth labour market and industry knowledge that cover every 
                          stage of the talent acquisition and engagement process to find you the right fit. </p>
                      </Col>
                  </Row>
                  </div>
                  <Row className={styles['how-help-boxes-container']}>
                      <Col xs={12} md={6} data-aos="fade-up" data-aos-duration="2000">
                          <HowHelp imageSrc='/images/icon-image-10.avif'
                           title='RECRUITMENT & STAFFING'
                           content='YES delivers full-cycle recruitment services to find the right talent for your open roles. Our innovative approaches focus on matching you with top talent in a wide range of industries. With YES’s expert services at your fingertips – hiring just got easier!'
                          />    
                      </Col>
                      <Col xs={12} md={6} data-aos="fade-up" data-aos-duration="2000">
                      <HowHelp imageSrc='/images/icon-image-11.avif' 
                           title='EXECUTIVE SEARCH'
                           content='Behind every successful business is a great leader. YES’ Executive Search will empower your organization by finding leaders of tomorrow today that will drive sustainable growth. With our deep and connected network, knowledge, and proven experience, we will find a leader who fits the business needs'
                          />  
                      </Col>
                  </Row>
                  <Row className={styles['how-help-boxes-container']}>
                      <Col xs={12} sm={12} md={6} data-aos="fade-up" data-aos-duration="2000">
                          <HowHelp imageSrc='/images/icon-image-12.avif'
                           title='OUTSOURCING'
                           content='Focus on your core business and outsource some or all HR functions. YES will be your HR partner and function as an extension of your HR staff. We can handle hiring, engagement, employee issues, payroll, benefits, compensation, talent, compliance and more.'
                           />    
                      </Col>
                      <Col xs={12} sm={12} md={6} data-aos="fade-up" data-aos-duration="2000">
                      <HowHelp imageSrc='/images/icon-image-13.avif'
                           title='TRAINING AND ONBOARDING'
                           content='In addition to training on vital skills that are necessary in today’s job market, we also work together with clients to facilitate the onboarding process for new hires. Our training and onboarding processes are designed to create smooth and efficient experience for both job seekers and employers.'
                          />  
                      </Col>
                  </Row>

                  <Row className={styles['home-how-help-center-see']}>
                      <Col data-aos="fade-up" data-aos-duration="2000">
                      <Button as={Link} href='/home/about' className={styles['home-how-help-see-more']} name='see-more-button-link'>About Us</Button>
                      </Col>
                  </Row>
              </Container>
              {/* JOB SEEKERS */}
              <Container className={styles['home-seekers']} id='jobseeker' data-aos="fade-up">
                  <div className={styles['home-seekers-center']}>
                  <Button as='a' className={styles['home-seekers-button']} href='' data-aos="fade-up" data-aos-duration="2000">JOB SEEKERS</Button>
                  <Row data-aos="fade-up" data-aos-duration="2000">
                      <h1>Let the <StyledUrContent texts='right job'/> find you</h1>
                  </Row>
                  <Row>
                      <Col data-aos="fade-up" data-aos-duration="2000">
                      <p className={styles['silver-paragraph']}>Get the job you've always dreamed of! We'll go beyond just your qualifications to identify how we can best help you reach success. 
                          Our resources are here to make sure you get a head - open those doors and let's move towards making that dream career yours! </p>
                      </Col>
                  </Row>
                  </div>
                  <Row className={styles['home-seeker-boxes']} data-aos="fade-up" data-aos-duration="2000">
                      <Seeker 
                      imageSrc='/images/icon-image-14.avif'
                      title='Build a Resume '
                      content='Ready to earn that dream job? Break through the ranks with our personalized resume creator and get a winning CV in no time!'
                      To='https://yes-resume-builder.vercel.app/'
                      />
                      <Seeker 
                      imageSrc='/images/cloud-svg.svg'
                      title='Upload Your Resume '
                      content="Need a job but feeling like you don't have the time? Don’t worry, we've got your career search covered!"
                      To='/jobs/sign-in'
                      />
                      <Seeker 
                      imageSrc='/images/arrow-svg.svg'
                      title='Start Applying!'
                      content="Say goodbye to monotonous 9-5s, and start a journey that'll have you head over heels for your career!"
                      To='/jobs'
                      />
                  </Row>
              </Container>
              {/* Home Last Content */}
              <Container className={styles['home-last-content']} fluid>
                  <Row>
                      <Col className={styles['home-last-content-texts']}>
                          <h1>We bridge the gap between talent and businesses in Ethiopia.</h1>
                          <Button as={Link} href='/home/contact-us' className={styles['home-last-content-button']} name='home-last-content-start-button'>Start Now</Button>
                      </Col>
                      <Col>
                      <img src='/images/Man.svg' alt='last-content-image'/>
                      </Col>
                  </Row>
              </Container>
              <Footer /> 
          </div>
          
      </>
  )
}
export default Home
