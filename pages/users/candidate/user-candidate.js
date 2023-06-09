
import React,{useState,useEffect} from 'react'
import CandidateNav from '../../../Components/CandidateNav'
import Footer from '@/Components/Footer';
import { Container,Row,Col } from 'react-bootstrap'
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import styles from '@/styles/users/userCandidate.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
const userCandidate =()=> {
    const {status,data} = useSession();
    const router = useRouter();
    useEffect(()=>{
        if(status==="authenticated" && data.user.name==="candidate") router.replace("/users/candidate/user-candidate")
        if(status==="unauthenticated") router.replace("/jobs/sign-in");
    },[status]);
    if(status==="authenticated" && data.user.name==="candidate") {
        console.log(data.user);
  return (
    <>
    <CandidateNav/>
      
  
   
    </>
  )}
}

export default userCandidate