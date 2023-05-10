export const sendJobOrder = async (data) => fetch('/api/submitJobOrder',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
    },
}).then((res)=>{
    if(!res.ok) throw new Error ("Faild to send Job Order")
    return res
}) 