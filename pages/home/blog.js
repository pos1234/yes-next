import Head from 'next/head'
import {Row, Col, Button,Form, Container, Nav} from 'react-bootstrap'
import Footer from '../../Components/Footer'
import NavbarJobs from '../../Components/NavbarJobs'
import styles from '@/styles/Blog.module.css'
import { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Blog = () => { 
    const [data,setData] = useState("")
    const [number,setNumber] = useState()
    const [blog,setBlog] = useState('')
    const [comment,setComment]=useState({
        name:"",
        email:"",
        website:"",
        comment:""
    })
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
const handleClick =()=>{
    setNumber('')
} 
const handleSubmit = (e)=>{
    e.preventDefault();
    setComment({
        name:"",
        email:"",
        website:"",
        comment:""
    })
    console.log(comment);
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
        (number) ? (<Container fluid="xs" className={styles['blogDetailContainer']}>
            <Button className={styles['arrowBack']}><ArrowBackIcon sx={{ fontSize: 30 }} onClick={handleClick}/></Button>
            <Row>
                <Col>
                    <h1 className={styles['blogDetailHeading']}>{blog.title.rendered}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <div dangerouslySetInnerHTML={{__html:blog.content.rendered}}/>
                 </Col>
            </Row>
            <Row >
                <Col xs={11} md={7}>
            <Form onSubmit={handleSubmit}>
                    <h1  className='py-3' style={{color:'black'}}>Leave a comment</h1>
                    <Row>
                        <Col>
                        <Form.Group className="mb-4" >
                            <Form.Control type="text" value={comment.name} placeholder="name *"  onChange={(e)=>setComment({...comment,name:e.target.value})} required/>
                        </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-4">
                                <Form.Control type="email" placeholder="email *" value={comment.email} onChange={(e)=>setComment({...comment,email:e.target.value})} required/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" >
                            <Form.Control type="text" onChange={(e)=>setComment({...comment,website:e.target.value})} placeholder="Website" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Control as="textarea" cols={10} rows={10} onChange={(e)=>setComment({...comment,comment:e.target.value})} placeholder="Comment" />
                    </Form.Group>
                    <Button variant="dark" className='rounded-pill py-2 px-5' type="submit">
                        Submit
                    </Button>
            </Form>
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
                    
        <Col onClick={()=>blogDetail(oneBlog.id)} key={oneBlog.id} lg={5} xs={12} className={styles['single-blog']}>
            <Row>
                <Col sm={5}>
                    <div style={{backgroundColor:"red",height:"100%",position:"relative"}}>
                        <span>
                          <img src='/images/th.avif' height={100}/>
                        </span>
                    </div>

                  
                </Col> 
                <Col sm={7}>
                    <p>{oneBlog.title.rendered}</p>
                    <h1>{oneBlog.title.rendered}</h1>
                    <ArrowForwardIcon style={{position:'relative'}}/>
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
