const nodemailer = require('nodemailer');

const EmailSend = async (EmailTo,EmailText,EmailSubject)=>{
   const CreateTransport =  nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs'},
        tls: {rejectUnauthorized: false},
    })

    const mailOption = {
       from:"MERN Ecommerce Solution <info@teamrabbil.com>",
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    }

    return  await CreateTransport.sendMail(mailOption)
}

module.exports = EmailSend