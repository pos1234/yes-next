import _ from 'lodash'
import { Pagination } from 'react-bootstrap';
import styles from '@/styles/Pagination.module.css'
const FPagination = ({item,pageSize,currentPage,onPageChange})=>{
    const pageCount = item / pageSize;
    if(Math.ceil(pageCount)===1) return null;
    const pages = _.range(1,pageCount +1);
    let active = 1;
    let items =[];
    for (let number = 1; number <= pageCount; number++) {
    items.push(
        <Pagination.Item onClick={()=>onPageChange(number)} key={number} className={number === currentPage ? [`${"page-item"} ${styles["active"]}`]: ["page-item"]} >
        {number}
        </Pagination.Item>,
    );
    }
    return (
<Pagination className={styles['paginationContainer']}>{items}</Pagination>
    )
}
export default FPagination