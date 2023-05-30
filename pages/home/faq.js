import Head from 'next/head'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Row, Col, Button, Container,Collapse} from 'react-bootstrap'
import Footer from '../../Components/Footer'
import NavbarJobs from '../../Components/NavbarJobs'
import {StyledUrContent} from '../../Components/StyledUr'
import styles from '@/styles/Faq.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
const ToggledContent = (props) => {

    //Using Inline Function and the The Logical Not (!) to toggle state
    const [toggle, setToggle] = useState(false)
    const [Key,setKey] = useState(false)
    const [open, setOpen] = useState(false);
    return (
      <>
         <Button id={styles["ToggledButton"]}
        onClick={() => {setOpen(!open);setKey(!Key)}}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.btnText}
            <span className={styles["toggle-button-spacer"]}>
              {Key ? (<KeyboardArrowUpIcon/>) : (<KeyboardArrowDownIcon/>)}
            </span>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <p className={styles["toggled-paragraph"]}>{props.paragraph}</p>
        </div>
      </Collapse>
      </>
    )
  }
const FAQ =()=> {
    const {status,data} = useSession();
    const router = useRouter();
    useEffect(()=>{
        if(status==="unauthenticated") router.replace("/jobs/sign-in");
    },[status]);
    if(status==="authenticated") {
        console.log(data);
  return (
        <>
        <Head>
                <title>FAQ YES | Empowering Ethiopian Business & Job Seekers</title>
                <meta name="description" content="View Frequently Asked Questions About Yes"/>
            </Head>
            <NavbarJobs  
                        hrefHome="/" home='Home'
                        hrefAbout="/home/about" about='About'
                        hrefClient="/home/about" client='Client Hub'
                        hrefJobs="/jobs" jobs='Find a Job'
                        hrefHris="/home/hris" hris='Products'
                        hrefBlog="/home/blog" blog='Blog'
                        hrefFaq="/home/faq" faq=''
                        hrefContact="/home/contact-us" contact='Get in Touch'
                />
            <Container>
                <Row className={styles['faq-container-title']}>
                <img src='/images/Message-1.svg' style={{width:'70px'}} width={70} alt='message-icon'/>
                <h1>{data.user.email} Frequently Asked Questions</h1>
                </Row>
                <Row>
                    <Col xs={12} md={3} className={styles['faq-order']}>
                           <ul>
                                <li>
                                <a href='#faq' style={{textDecoration:'none',color:'unset'}}>  FAQ </a>
                                </li>
                                <li>
                                   <a href='#service' style={{textDecoration:'none',color:'unset'}}> Service </a>
                                </li>
                                <li>
                                    <Link style={{textDecoration:'none',color:'unset'}} href='/home/contact-us'>Contact Us </Link>
                                </li>
                            </ul>
                    </Col>
                    <Col xs={12} md={9} className={styles['faq-toggled-content']}>
                        <Row id='faq'>
                            <h1 style={{lineHeight:'30px'}}> <StyledUrContent texts="FREQUENTLY ASKED QUESTIONS (FAQS)"/></h1>
                            <div className={styles['faq-toggled-items']}>
                                <ToggledContent 
                                    btnText='What services does YES offer?'
                                    paragraph="YES offers a wide range of HR solutions including employee recruitment, payroll management, outsourcing, executive search, and training"
                                />
                                <ToggledContent 
                                    btnText='What industries does YES work with?'
                                    paragraph="YES works with clients in a variety of industries such as manufacturing, engineering, HR management, sales & marketing, etc."
                                />
                                <ToggledContent 
                                    btnText="What is YES's recruitment process?"
                                    paragraph="YES's recruitment process includes job advertising, candidate sourcing, applicant screening, interviewing, assessment & background checks, and negotiation."
                                />
                                <ToggledContent 
                                    btnText='Does YES offer HR outsourcing services?'
                                    paragraph="YES offers comprehensive HR outsourcing services, including employment contracts, compliance, HRIS, payroll & pensions, and benefits administration."
                                />
                            </div>
                        </Row>
                        <Row id='service'>
                            <h1 style={{lineHeight:'30px'}}><StyledUrContent texts="SERVICES"/> </h1>
                            <div className={styles['faq-toggled-items']}>
                                <ToggledContent 
                                    btnText='Does YES offer executive search services?'
                                    paragraph="YES provides executive search services to help clients find the right leaders for their organization."
                                />
                                <ToggledContent 
                                    btnText='Does YES offer pre-employment assessments and background checks?'
                                    paragraph="YES offers pre-employment assessments and background checks to help clients make informed hiring decisions. This includes content/copywriting tests, computer proficiency tests, accounting tests, criminal history checks, prior employment verification, education verification, professional license & certificate verification, social media & internet checks, and reference checks."
                                />
                                <ToggledContent 
                                    btnText="What is YES's mission and vision?"
                                    paragraph="YES's mission is to bridge the gap between organizations and people who will shape our future communities with excellence, integrity, and respect at its core. The vision is to be the top HR service company in Ethiopia and the bridge between growing companies and growing minds for the future benefit of local communities."
                                />
                                <ToggledContent 
                                    btnText='How can YES help my organization find top talent?'
                                    paragraph="YES offers comprehensive staffing solutions designed to streamline the recruitment process and help clients find the ideal candidate faster. With YES's expertise and innovative approaches, clients can benefit from a more efficient and effective hiring process."
                                />
                                <ToggledContent 
                                    btnText='How can YES help my organization stay compliant with employment regulations?'
                                    paragraph="YES's HR outsourcing and payroll management services ensure clients are in full compliance with employment regulations while minimizing distractions from growing their business. With YES's comprehensive suite of offerings, clients can enjoy peace of mind knowing that their HR needs are being handled professionally and efficiently."
                                />
                            </div>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
             <Footer/>
        </>
  )
    } 
}
export default FAQ
