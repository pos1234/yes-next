import {Col,Row,Container} from 'react-bootstrap'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import styles from '@/styles/Privacy.module.css'

function Policy() {
  return (
    <>
    <Navigation/>
    <Container className={styles['terms-conditions']}>
    <h1>PRIVACY POLICY</h1>
     <Row>
         <Col>
             <h2>General</h2>
             <p>
             <b>YES | Your Employment Solutions</b><br/>
             We at YES | Your Employment Solutions are committed to respecting and protecting your privacy. The nature of our business requires us to collect and maintain personal information and we understand we have the responsibility to protect it. All employees of YES adhere to this policy and will treat your personal information with the utmost respect and in accordance with this Privacy Policy. This policy outlines the type of information we collect, how we may utilize that information and how we protect it.
             </p>
             <h2>Information We Collect</h2>
             <p>
             We have structured our website so that, in general, you can visit this website without identifying yourself or revealing any personal information. However for added value and increased customer service we may collect your:   
             </p>
             <ul>
                 <li>
                 Your name, phone number, email address, address and other contact information;
                 </li>
                 <li>
                 Information related to your current and past employment;   
                 </li>
                 <li>
                 Your education background, work experience, skills and abilities; 
                 </li>
                 <li>
                 Your preferences regarding the type of employment;  
                 </li>
             </ul>
             <p>
             You also may elect to upload a resume or curriculum vitae, which will provide any personal information you have chosen to disclose to us by including it in the file you upload. If you decide to contact us directly or through an internet application, we will receive the contact information you provided so that we could respond and any other personal information you chose to include in your message. You may elect not to provide us with all of the information we request. However, if you do not provide the information we have requested, we will not be able to provide you with an account or be able to use our internet applications that facilitate job placement.
             </p>
             <h2>How We Use Your Information</h2>
                 <p>
                 YES uses your information to provide you with employment services. We also may use your information for a variety of related purposes such as:  
                 </p>
             <ul>
                 <li>
                 To establish and maintain an employment or staffing/placement relationship with you;   
                 </li>
                 <li>
                 To fulfill your requests for information and to communicate with you;
                 </li>
                 <li>
                 To provide you with training, career counseling, or career transition services;  
                 </li>
                 <li>
                 To provide referral services, such as if you refer a friend or colleague to us, or if we refer you to a client;  
                 </li>
                 <li>
                 To help us administer or improve our business and our services, the applications and other processes we use to deliver those services, and the promotional materials we have developed to describe those services;  
                 </li>
                 <li>
                 For research and analyses purposes   
                 </li>
                 <li>
                 To protect the integrity of or to improve our websites, information systems, and security;  
                 </li>
                 <li>
                 To prevent physical harm or financial loss; and 
                 </li>
                 <li>
                 For certain administrative purposes, such as risk management, to fulfill legal obligations or address compliance needs, and to resolve or defend legal claims.   
                 </li>
             </ul>
             <h2>Information We Share</h2>
             <p>
             We may share information about you with our clients in order to identify appropriate job opportunities for you. We also may share your information:  
             </p>
             <ul>
                 <li>
                 With clients who may have job opportunities available or interest in placing our candidates;    
                 </li>
                 <li>
                 With business partners, such as job placement consultants;
                 </li>
                 <li>
                 When reasonably requested or required by law enforcement authorities or other government officials;  
                 </li>
                 <li>
                 When otherwise required by law or in response to legal process;
                 </li>
                 <li>
                 When we believe disclosure is appropriate to prevent physical harm or financial loss;
                 </li>
                 <li>
                 When reasonably necessary to an investigation of suspected or actual illegal activity;
                 </li>
                 <li>
                 As needed to protect the vital interests of an individual; and
                 </li>
                 <li>
                 In the event we sell or transfer all or a portion of our business or assets.
                 </li>
             </ul>
             <h2>Security</h2>
             <p>
             YES | Your Employment Solutions is committed to ensuring that the information you provided on our website is secure. We have therefore implemented appropriate technical and organizational measures to secure your personal data against loss and any form of unlawful processing. We have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect on line. Your YES account is protected by your log-in credentials, which you must keep secure and confidential.  
             </p>
             <h2>Updating Your Information</h2>
             <p>
             YES endeavors to maintain accurate information and provides you with options to update your information. You can log into your account and modify your information at any time using your log-in credentials. You also may request that we update your information by contacting us through one of the methods specified in the “How to Contact Us” section of this notice. 
             </p>
             <h2>Changes to Privacy Policy</h2>
             <p>
             This policy may be updated without prior notice to you to reflect changes in our information collection, use and security practices. You will be notified of any changes to our Privacy Policy on the website homepage and the update will be included in the updated Privacy Statement. 
             </p>
         </Col>
     </Row> 
 </Container>
    <Footer/>
 </>
  )
}

export default Policy