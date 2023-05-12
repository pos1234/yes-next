import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const DataProvider = ({children})=>{
    const [data,setData] = useState('')
    const [selectedId,setSelectedId]=useState()
    const [selectedData,setSelectedData]=useState('')
    const fetchdata = async ()=>{
        const url='https://yes.et/jobs/wp-json/wp/v2/job_listing/';
        const res = await fetch(url)
        const data = await res.json()
            setData(data)    
    } 
    const selectItem = (selects)=>{
        try{
            setSelectedId(selects)
            const post = data.find(post => post.id === selectedId)
/*             console.log(post)
 */            setSelectedData(post.id)
            console.log(selectedData) 
        }catch(error){
            console.log(error)
        }
    } 
     /*  {
        data && selectItem(data[1].id)
      } */
    /*  {
        data[0] && 
            selectItem(data[1].id)
        }  */
/*     console.log(selectedData)
 */    
    useEffect(()=>{
        fetchdata()
    },[])
   /*  { data &&
       
        console.log( ()=>selectItem(selectedId));
    } */
    
    return(
        <AppContext.Provider value={{data}}>
            {children}
        </AppContext.Provider>
    )
}