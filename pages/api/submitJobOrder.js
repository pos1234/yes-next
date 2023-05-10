import {transporter,mailOptions} from '../../config/nodemailer'

const generateEmailContent = (data)=>{
    const stringData = Object.entries(data).reduce((str,[key,val])=> str += `${key} : \n ${val} \n \n`
    ,"");
    const htmlData = Object.entries(data).reduce((str,[key,val])=>
    (str += `<h1> ${key}</h1> <p>${val}</p>`)
    ,"");
    return{
        text:stringData,
        html:`<html><head><title>YES | your employement solutions</title></head><body>${htmlData}</body></html>`,
    }
}

const handler = async (req,res)=>{
    console.log(req.body)
    if(req.method==="POST"){
        const data = req.body;
        try{
            await transporter.sendMail({
                ...mailOptions,
                ...generateEmailContent(data),
                subject:data.hiringPosition,
            })
            
        }catch(error){
            console.log(error)
        }
    }
   return res.json()
}
export default handler