import { createContext, useEffect, useState } from "react";

export const AppContext = createContext()

export const DataProvider = ({children})=>{
    const [data,setData] = useState("")
    const [one,setOne] = useState('')
        
    const fetchdata = async ()=>{
        const url='https://yes.et/jobs/wp-json/wp/v2/job_listing/?per_page=100';
        const res = await fetch(url)
        const data = await res.json()
        const justOne = data.find(post => post.id === data[0].id);
             setData(data)
           setOne(justOne)  
} 
    useEffect(()=>{
        fetchdata()
    },[])
    return(
        <AppContext.Provider value={{data,one}}>
            {children}
        </AppContext.Provider>
    )
}