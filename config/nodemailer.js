import nodemailer from 'nodemailer'
const email = 'paulosegebeyehu5@gmail.com'
const pass = 'eexmcsoxjwgconjj'
export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:email,
        pass:pass,
    }
});

export const mailOptions = {
    from:email,
    to:email,
}