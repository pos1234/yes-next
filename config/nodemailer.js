import nodemailer from 'nodemailer'
<<<<<<< HEAD
const email = "paulosegebeyehu5@gmail.com"
const pass = "iozqnxevapzzefdo"
=======
const email = process.env.YES_EMAIL
const pass = process.env.YES_EMAIL_PASSWORD
>>>>>>> 9a288ccd2a12e9bf6a89d5506ae83a2afbedb476
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
