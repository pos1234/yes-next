import Head from 'next/head'
import {Row, Col, Button, Container, Nav} from 'react-bootstrap'
import Footer from '../Components/Footer'
import NavbarJobs from '../Components/NavbarJobs'
import styles from '@/styles/Blog.module.css'
import { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Blog = () => { 
    const [data,setData] = useState("")
    const [number,setNumber] = useState()
    const [blog,setBlog] = useState('')
    const fetchdata = async ()=>{
        const url='https://yes.et/home/wp-json/wp/v2/posts';
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
} 
    useEffect(()=>{
        fetchdata()
    },[])
   
  const blogDetail = (id)=>{
    const justOne = data.find(post => post.id == id);
    setBlog(justOne)
    setNumber(id)
  }   
    return (
       
        <>
        <Head>
                <title>YES Blog | Expert Insights on Ethiopian Job Market & HR Trends</title>
                <meta name="description" content="Stay ahead with YES Blog, your source for expert insights on the Ethiopian job market, HR trends, and practical tips to navigate the ever-evolving labor landscape."/>
                <link rel="shortcut icon" href="/images/yes-logo.svg" />
            </Head>
            <NavbarJobs
                        hrefHome="/" home='Home'
                        hrefAbout="/home/about" about='About'
                        hrefClient="/home/about" client='Client Hub'
                        hrefJobs="/jobs" jobs='Find a Job'
                        hrefHris="/home/hris" hris='Products'
                        hrefBlog="/home/blog" blog=''
                        hrefFaq="/home/faq" faq='FAQ'
                        hrefContact="/home/contact-us" contact='Get in Touch'
                />
       {
        (number) ? (<Container>
            <Row>
                <Col>
                    <h1>{blog.title.rendered}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <div dangerouslySetInnerHTML={{__html:blog.content.rendered}}/>
                </Col>
            </Row>
        </Container>) :
        (<Container fluid style={{padding:0}}>
        <Container fluid className={styles['blog-entry']}>
            <p>YES TO WORK PLACE SUCCESS</p>
            <h1>Empowering you to reach your career goals and find fulfillment in the world of work.</h1>
        </Container>
    <Container fluid className={styles['blog-content']}>
        <Row>
            {
                data && data.map(oneBlog=>(
                    
        <Col onClick={()=>blogDetail(oneBlog.id)} key={oneBlog.id} sm={5} className={styles['single-blog']}>
            <Row>
                <Col sm={5}>
                    <img src='/images/th.avif'/>
                </Col> 
                <Col sm={7}>
                    <p>{oneBlog.title.rendered}</p>
                    <h1>{oneBlog.title.rendered}</h1>
                    <ArrowForwardIcon style={{position:'relative',bottom:'-50px'}}/>
                </Col>
            </Row>
        </Col>     
                ))                    
            } 
        </Row>
    </Container>
    </Container> )
       }
        <Footer/>
        </>
    );
}

export default Blog
