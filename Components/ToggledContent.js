import React from "react"
import { useState } from 'react'
import {Button,Collapse} from 'react-bootstrap'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from '@/styles/About.module.css'

const ToggledContent = (props) => {

    //Using Inline Function and the The Logical Not (!) to toggle state
    const [toggle, setToggle] = useState(false)
    const [Key,setKey] = useState(false)
    const [open, setOpen] = useState(false);
    return (
      <>
         <Button id={styles["ToggledButton"]}
        onClick={() => {setOpen(!open);setKey(!Key)}}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.btnText}
            <span className={styles["toggle-button-spacer"]}>
              {Key ? (<KeyboardArrowUpIcon/>) : (<KeyboardArrowDownIcon/>)}
            </span>
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <p className={styles["toggled-paragraph"]}>{props.paragraph}</p>
        </div>
      </Collapse>
      </>
    )
  }
  export default ToggledContent