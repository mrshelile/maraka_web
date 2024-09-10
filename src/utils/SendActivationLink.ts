import axios from 'axios';
import {server}  from "../boot/server";
export async function sendActivationLink(email:string,otpHashed:string,
    emailHashed:string,serverIp:string){
    let message: string = `
    
    Dear ${email}
    Thank you for registering on Maraka! We're excited to have you on board. To complete your registration, please click on the link below to activate your account
    ${serverIp}/Auth/activate-account/${emailHashed}/${otpHashed}
    If you have any questions or need help, please don't hesitate to contact us at support@maraka.co.ls
    
    Best regards
    
    The Maraka Team
    `;

    
    message = message.replace(`[email]`, email);
    message = message.replace(`[serverIp]`, serverIp);
    message = message.replace(`[emailHashed]`, emailHashed);
    message = message.replace(`[otpHashed]`, otpHashed);
    let subject = "Activate Account"
    const data ={
        email:email,
        subject:subject,
        body:message.toString()
    }
    console.log(data)
     await axios.post(server+"/sendEmail/",data);
    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        message: "Email sent",
      });
    });
}

export async function sendPasswordResetLink(email:string,serverIp:string,
    emailHashed:string,otpHashed:string) {
        const resetPasswordEmailTemplate = `
            Reset Your Maraka Password
            Dear ${email}
            We received a request to reset your password for your Maraka account.
            To reset your password, please click on the following link:
            ${serverIp}/auth/reset-password/${emailHashed}/${otpHashed}
            If you did not request a password reset, please ignore this email.
            Best regards

            The Maraka Team
        `;

        const emailBody = resetPasswordEmailTemplate
          .replace('${email}', email).replace('${emailHashed}',emailHashed)
          .replace('${otpHashed}', otpHashed);
        
        let subject = "Reset Account"
        const data ={
            email:email,
            subject:subject,
            body:emailBody.toString()
        }
        // console.log(data)
        await axios.post(server+"/sendEmail/",data);
        return new Promise((resolve, reject) => {
          resolve({
            status: 200,
            message: "Email sent",
          });
        });
}