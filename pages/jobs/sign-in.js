import {useState,useEffect} from 'react'
import { signIn, signOut } from "next-auth/react"
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import  Link  from 'next/link'
import NavbarJobs from '../../Components/NavbarJobs'
import GoogleIcon from '@mui/icons-material/Google'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Footer from '../../Components/Footer'
import styles from '@/styles/jobs/Login.module.css'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const Login = ()=>{
    /* const [validated, setValidated] = useState(false);
    const { data: session } = useSession() */
  /*   const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    }; */

    
const router = useRouter();
const {session,data} = useSession();
    const [userInfo,setUserInfo] = useState({email:"",password:""});
    const [stat,setStat] = useState()
  const validate =  async()=>{
        const res = await signIn('credentials',{
            redirect:false,
            email:userInfo.email,
            password:userInfo.password,
            callbackUrl:"/",
          })
          if(res.status== 200){
                setStat(res.status)
          }
    }
useEffect(()=>{
    if(stat==200 && data.user.name === "candidate") router.push("/users/candidate/user-candidate");
    if(stat==200 && data.user.name === "employer") router.push("/users/employer/user-employer");

},[data])
 const handleSub = (event)=>{
    event.preventDefault()
    validate()
             /*  const res = await signIn('credentials',{
                redirect:false,
                email:userInfo.email,
                password:userInfo.password,
                callbackUrl:"/",
              })
<<<<<<< HEAD
              if(res.status==200 && data.user.name === "candidate") router.push("/users/candidate/user-candidate");
                    if(res.status==200 && data.data.name === "employer") router.push("/users/employer/user-employer"); */
          
              
=======
              if(res.status==200){
                router.push("/home/faq");
                console.log('worked')
              } 
>>>>>>> 9a288ccd2a12e9bf6a89d5506ae83a2afbedb476
 } 
    return(
     
        <>
                <NavbarJobs  
                        hrefHome="/" home='Home'
                        hrefAbout="/home/about" about='About'
                        hrefClient="/home/about" client='Client Hub'
                        hrefJobs="/jobs" jobs='Find a Job'
                        hrefHris="/home/hris" hris='Products'
                        hrefBlog="/home/blog" blog='Blog'
                        hrefFaq="/home/faq" faq='FAQ'
                        hrefContact="/home/contact-us" contact='Get in Touch'
                   />       
        <Container fluid className={styles['login-container']}>
        <Row>
            <Col xs={12} lg={6} className={styles['log-side-image']}>
                <img src='/images/Group12.svg'/>
            </Col>
            <Col xs={12} lg={6}>
            <Form className={styles['login-form']} onSubmit={handleSub}>
                <h1>Welcome to YES</h1>
                <Form.Group className="mb-4 " >
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={userInfo.email} onChange={(event)=>setUserInfo({...userInfo,email : event.target.value})} className={styles["text-field"]} type="email text-field" placeholder="Enter email" required/>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={userInfo.password} onChange={(event)=>setUserInfo({...userInfo,password : event.target.value})} className={`${styles["text-field"]} ${["mb-3"]}`} type="password" placeholder="Password" required/>
                </Form.Group>
                <Row>
                    <Col>
                    <Form.Group className="mb-3" >
                        <Form.Check type="checkbox" label="Keep me signed in" />
                    </Form.Group>
                    </Col>
                    <Col>
                        <Link href='/jobs/fpwd' className={styles['forgot-pwd']}>Forgot password?</Link>
                    </Col>
                </Row>
                <Button className={styles['login-button']} variant="primary" type="submit">
                    Login
                </Button>
                <Row className={styles['or-hr']}>
                    <Col>
                        <hr/>
                    </Col>
                        Or
                    <Col>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Link href='https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?response_type=code&redirect_uri=https%3A%2F%2Fwww.yes.et%2Fjobs%2F&client_id=129148473375-18tipkfdajd846t8l0qdnua0t79t5i4a.apps.googleusercontent.com&scope=email&access_type=online&approval_prompt=auto&service=lso&o2v=1&flowName=GeneralOAuthFlow' target='_blank'>
                        <Button className={styles['google-button']}>
                        <GoogleIcon sx={{fontSize:18}}/> &nbsp;   Google
                        </Button>
                        </Link>
                    </Col>
                    <Col>
                    <Link href='https://www.linkedin.com/uas/login?session_redirect=%2Foauth%2Fv2%2Flogin-success%3Fapp_id%3D207741079%26auth_type%3DAC%26flow%3D%257B%2522state%2522%253A%2522FVw9KSJm8KOQ%2522%252C%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522appId%2522%253A207741079%252C%2522clientId%2522%253A%2522783clxl4xyz37y%2522%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1682401570417%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fwww.yes.et%252Fjobs%252F%253Faction%253Dwp_job_board_pro_linkedin_login%2522%257D&fromSignIn=1&trk=oauth&cancel_redirect=%2Foauth%2Fv2%2Flogin-cancel%3Fapp_id%3D207741079%26auth_type%3DAC%26flow%3D%257B%2522state%2522%253A%2522FVw9KSJm8KOQ%2522%252C%2522scope%2522%253A%2522r_liteprofile%2Br_emailaddress%2522%252C%2522appId%2522%253A207741079%252C%2522clientId%2522%253A%2522783clxl4xyz37y%2522%252C%2522authorizationType%2522%253A%2522OAUTH2_AUTHORIZATION_CODE%2522%252C%2522currentStage%2522%253A%2522LOGIN_SUCCESS%2522%252C%2522currentSubStage%2522%253A0%252C%2522authFlowName%2522%253A%2522generic-permission-list%2522%252C%2522creationTime%2522%253A1682401570417%252C%2522redirectUri%2522%253A%2522https%253A%252F%252Fwww.yes.et%252Fjobs%252F%253Faction%253Dwp_job_board_pro_linkedin_login%2522%257D' target='_blank'>
                        <Button className={styles['linked-button']}>
                          <LinkedInIcon sx={{fontSize:18}}/> &nbsp;  LinkedIn
                        </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Link href='/jobs/register' className={styles['register-link']}>Don't have an account? <span>Register</span></Link>
                </Row>
            </Form>
            </Col>
        </Row>
    </Container>
    <Footer /> 
    </>
    )
}
 export default Login