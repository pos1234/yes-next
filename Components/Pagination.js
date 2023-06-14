import _ from 'lodash'
import { Pagination,Col } from 'react-bootstrap';
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
    const pageCount = item / pageSize;
    if(Math.ceil(pageCount)===1) return null;
    const pages = _.range(1,pageCount +1);
    let active = 1;
    let items =[];
    for (let number = num; number <= pageCount; number++) {
    items.push(
        <>
        <Pagination.Item key={number}  onClick={()=>onPageChange(number)} className={ (number === currentPage && number<numEnd) ? [`${"page-item"} ${styles["active"]}`] : [`${"page-item"}`] 
     && (number === numEnd) ? [`${styles["rightIcon"]}`] : [""]
    } >
        {(number < numEnd ) ?  number : number = (number <= pageCount) ? <button style={{display:'none'}}>heys</button> : null}
        </Pagination.Item>
        </>,
    );
    }
    return (
        <Col xs={12} style={{padding:"0",margin:"0"}}>
           
            <Pagination className={styles['paginationContainer']}>
            {
            (num == 1) ? null : <button className={styles['leftIcon']} onClick={numberLast}><ChevronLeftIcon/></button>
           }
            {
            (numEnd > 5 && numEnd < pageCount + 1) ? <button className={styles['rightIcons']} onClick={numberChanger}><ChevronRightIcon/></button> : null 
           }
           {
            items.map((item,index)=>{
                return <span className={styles['spans']} key={index}> {item} </span>
            })
           }
           {/* {items} */}</Pagination>

        </Col>
    )
}
export default FPagination