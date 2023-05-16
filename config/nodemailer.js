import nodemailer from 'nodemailer'
const email = process.env.YES_EMAIL
const pass = process.env.YES_EMAIL_PASSWORD
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
