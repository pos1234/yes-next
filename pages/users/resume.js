
import React, { useEffect, useState } from 'react'
import CandidateNav from '../../Components/CandidateNav'
import Footer from '@/Components/Footer';
import { Container,Row,Col,Button } from 'react-bootstrap'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import styles from '@/styles/users/resume.module.css'
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const userCandidate =()=> {
    const [numEducation,setNumEducation] = useState(1);
    const [showEducation,setShowEducation] = useState(true);
    const [toggleEducation,setToggleEducation] = useState(false);
    const [numExp,setNumExp] = useState(1);
    const [showExp,setShowExp] = useState(true);
    const [toggleExp,setToggleExp] = useState(false);
    const [numAward,setNumAward] = useState(1);
    const [showAward,setShowAward] = useState(true);
    const [toggleAward,setToggleAward] = useState(false);
    const handleAdd = ()=>{
        setNumEducation(numEducation + 1);
    }
     const handleRemove = ()=>{
        if(numEducation > 1){
            setNumEducation(numEducation - 1)
        }/* else{
            setNumExp(1)
            setShowExp(false);
        } */
    }
   const toggleEducate = ()=>{
        setToggleEducation(!toggleEducation)
    }


    const handleAddExp = ()=>{
        setNumExp(numExp + 1);
    }
     const handleRemoveExp = ()=>{
        if(numExp > 1){
            setNumExp(numExp - 1)
        }
    }
    const toggleExpr = ()=>{
        setToggleExp(!toggleExp)
    }



    const handleAddAward = ()=>{
        setNumAward(numAward + 1);
    }
     const handleRemoveAward = ()=>{
        if(numAward > 1){
            setNumAward(numAward - 1)
        }
    }
    const toggleAwards = ()=>{
        setToggleAward(!toggleAward)
    }
    const EducationFrom = (props)=>{
        return(
            <Col xs={12} id={props.number} onClick={toggleEducate}>
            <Row className={styles['resumeDrop']}>
                <Col >
                <span>
                    <CloseIcon onClick={handleRemove} className={styles['exIcons']}/>
                </span>
                    Education {props.number}
                </Col>
                <Col>
                <span style={{marginLeft:"90%"}}>
                  { (toggleEducation) ? <ArrowDropDownIcon/>:<ArrowDropUpIcon/>}  
                </span>
                </Col>
            </Row>
            {
                toggleEducation &&  <Row>
                <Row>
                    <Col xs={12} sm={2}>
                       Title 
                    </Col>
                    <Col className={styles['inputs']}>
                        <input  type='text'/>
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col xs={12} sm={2}>
                       Academy
                    </Col>
                    <Col className={styles['inputs']}>
                        <input  type='text'/>
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col xs={12} sm={2}>
                       Year
                    </Col>
                    <Col className={styles['inputs']}>
                        <input  type='text'/>
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col xs={12} sm={2}>
                       Description
                    </Col>
                    <Col className={styles['inputs']}>
                        <textarea rows={8}>
                            
                        </textarea> 
                    </Col>
                </Row>
            </Row>
            }
           
        </Col>
        )
    }
    const ExpFrom = (props)=>{
        return(
            <Col xs={12} id={props.number} onClick={toggleExpr}>
            <Row className={styles['resumeDrop']}>
                <Col >
                <span>
                    <CloseIcon onClick={handleRemoveExp} className={styles['exIcons']}/>
                </span>
                    Experience {props.number}
                </Col>
                <Col>
                <span style={{marginLeft:"90%"}}>
                  { (toggleExp) ? <ArrowDropDownIcon/>:<ArrowDropUpIcon/>}  
                </span>
                </Col>
            </Row>
            {
                toggleExp &&  <Row>
                <Row>
                    <Col xs={12} sm={2}>
                       Title 
                    </Col>
                    <Col className={styles['inputs']}>
                        <input  type='text'/>
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col xs={12} sm={2}>
                       Academy
                    </Col>
                    <Col className={styles['inputs']}>
                        <input  type='text'/>
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col xs={12} sm={2}>
                       Year
                    </Col>
                    <Col className={styles['inputs']}>
                        <input  type='text'/>
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col xs={12} sm={2}>
                       Description
                    </Col>
                    <Col className={styles['inputs']}>
                        <textarea rows={8}>
                            
                        </textarea> 
                    </Col>
                </Row>
            </Row>
            }
           
        </Col>
        )
    }
    const AwardFrom = (props)=>{
        return(
            <Col xs={12} id={props.number} onClick={toggleAwards}>
            <Row className={styles['resumeDrop']}>
                <Col >
                <span>
                    <CloseIcon onClick={handleRemoveAward} className={styles['exIcons']} />
                </span>
                    Award {props.number}
                </Col>
                <Col>
                <span style={{marginLeft:"90%"}}>
                  { (toggleAward) ? <ArrowDropDownIcon/>:<ArrowDropUpIcon/>}  
                </span>
                </Col>
            </Row>
            {
                toggleAward &&  <Row>
                <Row>
                    <Col xs={12} sm={2}>
                       Title 
                    </Col>
                    <Col className={styles['inputs']}>
                        <input  type='text'/>
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col xs={12} sm={2}>
                       Academy
                    </Col>
                    <Col className={styles['inputs']}>
                        <input  type='text'/>
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col xs={12} sm={2}>
                       Year
                    </Col>
                    <Col className={styles['inputs']}>
                        <input  type='text'/>
                    </Col>
                </Row>
                <Row style={{marginTop:"30px"}}>
                    <Col xs={12} sm={2}>
                       Description
                    </Col>
                    <Col className={styles['inputs']}>
                        <textarea rows={8}>
                            
                        </textarea> 
                    </Col>
                </Row>
            </Row>
            }
           
        </Col>
        )
    }
   
 
    
    
 
 
  return (
    <>
    <CandidateNav/>
        <Container className={styles['resumeContainer']}>
            <Row>
                <Col xs={12} style={{padding:"0"}}>
                                <h1 style={{fontSize:"2rem"}}>Edit Resume</h1>
                </Col>
            </Row>
            <Row className={styles['resumeCols']}>
                <Col>
                    <h1>My Resume</h1>
                    <p>CV Attachment</p>
                    <Button variant='' style={{padding:"0"}}>
                        <input type='file'/>
                    </Button>
                    <p style={{fontSize:"0.8rem"}}>Upload file .pdf, .doc, .docx</p>
             </Col>
            </Row>
            <Row className={styles['resumeCols']}>
                <h1>Education</h1>
                        {
                            showEducation && [...Array(numEducation)].map((_,index)=>(
                                <EducationFrom key={index} number={index + 1}/>
                            ))
                        }
                <Col xs={12} style={{padding:"0"}}>
                    <Button onClick={handleAdd} className={styles['buttons']}> Add Another Education</Button>
                </Col>
            </Row>
            <Row className={styles['resumeCols']}>
                <h1>Experience</h1>
                        {
                            showExp && [...Array(numExp)].map((_,index)=>(
                                <ExpFrom key={index} number={index + 1}/>
                            ))
                        }
                <Col xs={12} style={{padding:"0"}}>
                    <Button onClick={handleAddExp} className={styles['buttons']}> Add Another Experience</Button>
                </Col>
            </Row>
            <Row className={styles['resumeCols']}>
                <Col>
                    <h1>Portfolio</h1>
                    <Button variant='' style={{padding:"0"}}>
                        <input type='file'/>
                    </Button>
                    <p style={{fontSize:"0.8rem"}}>Upload file .pdf, .doc, .docx</p>
             </Col>
            </Row>
            <Row className={styles['resumeCols']}>
                <h1>Award</h1>
                        {
                            showAward && [...Array(numAward)].map((_,index)=>(
                                <AwardFrom key={index} number={index + 1}/>
                            ))
                        }
                <Col xs={12} style={{padding:"0"}}>
                    <Button onClick={handleAddAward} className={styles['buttons']}> Add Another Award</Button>
                </Col>
            </Row>

            <Row>
                <Button className={styles['submitButton']} type="submit">
                    Save Resume
                </Button>
            </Row>
        </Container>
    <Footer/>
    </>
  )
}

export default userCandidate