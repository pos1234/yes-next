import _ from 'lodash'
import { Pagination,Col } from 'react-bootstrap';
<<<<<<< HEAD
import styles from '@/styles/jobs/Pagination.module.css'
import { useEffect, useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const FPagination = ({item,pageSize,currentPage,onPageChange})=>{
    const [num,setNum] = useState(1)
    const [numEnd,setNumEnd] = useState(6)
    const numberChanger=()=>{
        setNum(num+1)
        setNumEnd(numEnd+1)
    }
    const numberLast=()=>{
        if(num > 1){
             setNum(num!=1 && num-1)
            setNumEnd(numEnd-1)
        }
           
    }
=======
<<<<<<< HEAD:Components/Pagination.js
import styles from '@/styles/jobs/Pagination.module.css'
=======
import styles from '@/styles/Pagination.module.css'
>>>>>>> 696df3e77f1631134c09782ab1df04151e661e3d:pages/Components/Pagination.js
const FPagination = ({item,pageSize,currentPage,onPageChange})=>{
>>>>>>> 9a288ccd2a12e9bf6a89d5506ae83a2afbedb476
    const pageCount = item / pageSize;
    if(Math.ceil(pageCount)===1) return null;
    const pages = _.range(1,pageCount +1);
    let active = 1;
    let items =[];
<<<<<<< HEAD
    for (let number = num; number <= pageCount; number++) {
    items.push(
        <>
        <Pagination.Item onClick={()=>onPageChange(number)} key={number} className={ (number === currentPage) ? [`${"page-item"} ${styles["active"]}`] : ["page-item"] 
     && (number === numEnd) ? [`${styles["rightIcon"]}`] : [""]
    } >
        {(number < numEnd ) ?  number : number = (number <= pageCount) ? <button onClick={numberChanger}><ChevronRightIcon/></button> : null}
        </Pagination.Item>
        </>,
    );
    }
    return (
        <Col xs={12} style={{padding:"0",margin:"0"}}>
           
            <Pagination  className={styles['paginationContainer']}>{
            (num == 1) ? null :
               <button className={styles['leftIcon']} onClick={numberLast}><ChevronLeftIcon/></button>
           }
           {items}</Pagination>
=======
    for (let number = 1; number <= pageCount; number++) {
    items.push(
        <Pagination.Item onClick={()=>onPageChange(number)} key={number} className={number === currentPage ? [`${"page-item"} ${styles["active"]}`]: ["page-item"]} >
        {number}
        </Pagination.Item>,
    );
    }
    return (
        <Col style={{padding:"0",margin:"0"}}>
            <Pagination  className={styles['paginationContainer']}>{items}</Pagination>
>>>>>>> 9a288ccd2a12e9bf6a89d5506ae83a2afbedb476

        </Col>
    )
}
export default FPagination