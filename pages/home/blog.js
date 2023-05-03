import Head from 'next/head'
import {Row, Col, Button, Container, Nav} from 'react-bootstrap'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import styles from '@/styles/Blog.module.css'
const Blogs =(props)=>{
    return(
        <Col sm={5} className={styles['single-blog']}>
            <Row>
                <Col sm={6}>
                    <img src={props.imageSrc}/>
                </Col>
                <Col sm={6}>
                    <p>{props.title}</p>
                    <h1>{props.content}</h1>
                </Col>
            </Row>
        </Col>
    )
}

const Blog = () => {
    return (
        <>
        <Head>
                <title>YES Blog | Expert Insights on Ethiopian Job Market & HR Trends</title>
                <meta name="description" content="Stay ahead with YES Blog, your source for expert insights on the Ethiopian job market, HR trends, and practical tips to navigate the ever-evolving labor landscape."/>
            </Head>
         <Navigation/>
        <Container fluid style={{padding:0}}>
            <Container fluid className={styles['blog-entry']}>
                <p>YES TO WORK PLACE SUCCESS</p>
                <h1>Empowering you to reach your career goals and find fulfillment in the world of work.</h1>
            </Container>
        <Container fluid className={styles['blog-content']}>
            <Row>
                <Blogs
                    imageSrc='/images/th.avif'
                    title={'CHANGE MANAGEMENT'}
                    content={'Why McLaren missed its efficiency targets for the start of F1 2023'}
                />
                <Blogs
                    imageSrc='/images/th.avif'
                    title={'CHANGE MANAGEMENT'}
                    content={'Why McLaren missed its efficiency targets for the start of F1 2023'}
                />
                <Blogs
                    imageSrc='/images/th.avif'
                    title={'CHANGE MANAGEMENT'}
                    content={'Why McLaren missed its efficiency targets for the start of F1 2023'}
                />
            </Row>
        </Container>
        </Container>
        <Footer/>
        </>
    );
}

export default Blog
