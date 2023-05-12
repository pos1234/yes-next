import nodemailer from 'nodemailer'
const email = 'paulosegebeyehu5@gmail.com'
const pass = 'eexmcsoxjwgconjj'
const sendConformationEmail = ({toUser,hash})=>{
    return new Promise ((req,res)=>{
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:email,
                pass:pass
            }
        })
        const message ={
            from:email,
            to:toUser.email,
            subject:'YES | your employement solutions - Activate Account',
            html:`
                <h3>Hello ${toUser.username}</h3>
                <p>Thank you for registering into our application. Just one more step...</p>
                <p>To activate you account please follow this link: <a target='_' href='${}/api/activate/user/${hash}'>Activate Link</a></p>
            `
        }
        transporter.sendMail(message,function(err,info){
            if(err){
                res(err)
            }else{
                res(info)
            }
        })
    })
}

export default sendConformationEmail