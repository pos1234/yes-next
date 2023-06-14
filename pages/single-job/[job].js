import { useRouter } from 'next/router'
import {useEffect,useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import styles from '@/styles/single-job/job.module.css'
import {Row, Dropdown, Col, Button, Container, Badge} from 'react-bootstrap'
import { LinkedinShareButton,FacebookShareButton,TwitterShareButton} from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavbarJobs from "@/Components/NavbarJobs";
import StructuredData from "@/Components/StructuredData";
import { loadPosts } from '@/lib/load-posts'
export async function getStaticProps() {
  const data = await loadPosts()
  return { props: { data } }
}
export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
/*   if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  } */
 
  // Call an external API endpoint to get posts
  const res = await fetch('https://yes.et/jobs/wp-json/wp/v2/job_listing/?per_page=100')
  const posts = await res.json()
 
  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = posts.map((post) => ({
    params: { job: `${post.id}` },
  }))
 
  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}
const Post = ( {data}) => {
 
  const [dataStore,setDataStore] = useState();
  const [selectedData,setSelected] = useState();
  const router = useRouter()
  const { job } = router.query
  useEffect(()=>{})
  const singleJob = ()=>{
     const post = (data) ? data.find(post => post.id == job) : <p>loading....</p>; 
    return post 
  }
 useEffect(()=>{
  setSelected(singleJob())
  },[data]) 

  const sanitizeHTML = (text) => {
    return text.replace(/<[^>]*>/g,'');
  };
  const structured =(selectedData) ? `{
  "@context": "http://schema.org",
  "@type": "JobPosting",
  "title": "${selectedData.title && selectedData.title.rendered}" ,
  "hiringOrganization": {
    "@type":"Organization",
    "name":"${selectedData.metas && selectedData.metas._job_employer_name}",
    "logo": "${(selectedData.metas) ? (selectedData.metas._job_logo) ? (selectedData.metas._job_logo) : 'https://www.yes.et/jobs/wp-content/uploads/wp-job-board-pro-uploads/_employer_featured_image/2023/01/YES_logo-150x150.png' : 'no_metas' }"
  },
  "jobLocation": {
    "@type": "Place",
    "address": "${selectedData.metas && selectedData.metas._job_location[194]}"
  },
  "datePosted": "${selectedData.date && selectedData.date}",
  "description": "${selectedData.content && sanitizeHTML(selectedData.content.rendered)}",
  "employmentType":"${selectedData.metas && selectedData.metas._job_type[47]}"
 }` : null
  return <>
  <StructuredData data={structured}/>
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
  {(data)? (selectedData) ? (
    selectedData.metas && 
    <Container xs={1} lg={3} className={styles['search-results']}>
    <Row>
        <Row className={styles['job-details']}>
              <Row>
                <Col style={{padding:"0"}} xs={12}>
                  <img style={{width:50,height:50,display:'inline',marginBottom:'20px'}} src={selectedData.metas._job_logo}/> <span>  <h1 style={{display:'inline'}} dangerouslySetInnerHTML={{__html:selectedData.title.rendered}}/> </span>
                </Col>
              <Col style={{padding:"0"}}>
                    <p><ApartmentIcon style={{fontSize:20}}/>  <span dangerouslySetInnerHTML={{__html:selectedData.metas._job_employer_name}}/> </p>
                    <LocationOnIcon style={{fontSize:20}}/> <span dangerouslySetInnerHTML={{__html:selectedData.metas._job_location[194]}}/> <span dangerouslySetInnerHTML={{__html:selectedData.metas._job_location[527]}}/>
                </Col>
                    <Col xs={12} sm={12} lg={6} className={styles["quickColContainer"]} style={{padding:"0"}}>
                        <Row>
                            <Col xs={2}>
                            <Dropdown>
                                <Dropdown.Toggle className={styles['shareIcon']}>
                                    <ShareIcon /> 
                                </Dropdown.Toggle>

                                <Dropdown.Menu  className={styles['copyIcons']}>
                                    <Dropdown.Item>
                                        <ContentCopyIcon /> <span>copy Link </span>
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
                             <div  className={styles['shareIcon']}>
                                  <FavoriteBorderIcon sx={{ fontSize: "28px" }}/>  
                            </div>
                        </Col>  
                            <Col xs={8}>
                            <Button as='a' href={selectedData.metas._job_apply_url} target='_blank' className={styles['quick-apply-button']}>Quick Apply</Button>   

                            </Col>
                        </Row> 
                 </Col>

                        </Row>

                        <hr className={styles['horizontal-rule']}/>



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
        <Row style={{padding:"0",margin:"0"}}> 
        <Col xs={2} sm={4} md={3} lg={6}>
        
        </Col>   
                    <Col xs={10} sm={8} md={9} lg={6} style={{padding:"0",paddingTop:"5%"}}>
                        <Row>
                            <Col xs={2}>
                            <Dropdown>
                                <Dropdown.Toggle className={styles['shareIcon']}>
                                    <ShareIcon /> 
                                </Dropdown.Toggle>

                                <Dropdown.Menu  className={styles['copyIcons']}>
                                    <Dropdown.Item>
                                        <ContentCopyIcon/> <span>copy Link </span>
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
                                <div  className={styles['shareIcon']}>
                                  <FavoriteBorderIcon sx={{ fontSize: "28px" }}/>  
                                </div>
                        </Col>  
                            <Col xs={8}>
                            <Button as='a' href={selectedData.metas._job_apply_url} target='_blank' className={styles['quick-apply-button']}>Quick Apply</Button>   

                            </Col>
                        </Row> 
                 </Col>
                         
        </Row>
    </Row>
</Container>
  ) :
   <div>
    <h1>Sorry 404 not found</h1> 
      <p>This job might be removed or expired.</p>

  </div> : <img className={styles['loading']} src='/images/Dual Ring-1s-200px.svg'/>}
                  
                
  </>
}
 /* const post = data.find(post => post.id === id) */
/* export const getStaticPaths = async () => {
  const {data} = useContext(AppContext);
  useEffect(()=>{
    console.log(data);
  },[data])
   var paths;
  {
    (data) ? paths = data.map(({ job }) => ({ params: { job } })) : null;
  } 
  

  return {
    paths,
    fallback: false,
  };
};
 
export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.job);
 
  return {
    props: { ...post },
  };
}; */
 
export default Post;