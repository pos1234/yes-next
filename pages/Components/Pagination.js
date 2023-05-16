import _ from 'lodash'
import { Pagination } from 'react-bootstrap';
import styles from '@/styles/Pagination.module.css'
const FPagination = ({item,pageSize,currentPage,onPageChange})=>{
    const pageCount = item / pageSize;
   
    if(Math.ceil(pageCount)===1) return null;
    const pages = _.range(1,pageCount +1);
    let active = 1;
    let items =[];
    for (let number = 1; number <= 10; number++) {
    items.push(
        <Pagination.Item onClick={()=>onPageChange(number)} key={number} className={number === currentPage ? [`${"page-item"} ${styles["active"]}`]: ["page-item"]} >
        {number}
        </Pagination.Item>,
    );
    }
    return (
   /*      <nav>
  <ul className={["pagination"]}>
    {pages.map((page)=>{
          <li key={page} className={page === currentPage ? ["page-item active"]: ["page-item"]}>
            <a onClick={()=>onPageChange(page)} className={["page-link"]}>
                {page}
            </a>
        </li>
    })
    }
  </ul>
</nav> */
<Pagination className={styles['paginationContainer']}>{items}</Pagination>
    )
}
export default FPagination