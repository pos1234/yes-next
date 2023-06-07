import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL_USERNAME,
    password: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
  },
});

const sendEmail = async (from, to, subject, text, attachments) => {
  const mailOptions = {
    from,
    to,
    subject,
    text,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
  }
};

export default sendEmail;