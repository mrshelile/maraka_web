import axios from 'axios';
import server  from "../boot/server";
export async function sendActivationLink(email:string,otpHashed:string,
    emailHashed:string,serverIp:string){
    let message: string = `
    <html>
    <body>
    <h2 style="color: #333;">Activate Your Maraka Account</h2>
    <p>Dear ${email},</p>
    <p>Thank you for registering on Maraka! We're excited to have you on board. To complete your registration, please click on the link below to activate your account.</p>
    <p><a href='${serverIp}/Auth/activate-account/${emailHashed}/${otpHashed}' style="background-color: #333; color: #fff; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Activate Your Account</a></p>
    <p>If you have any questions or need help, please don't hesitate to contact us at <a href="mailto:support@maraka.co.ls" style="color: #333;">info@maraka.co.ls</a>.</p>
    <p>Best regards,</p>
    <p>The Maraka Team</p>
    </body>
    </html>
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
    return await axios.post(server+"/sendEmail/",data);
}

export async function sendPasswordResetLink(email:string,serverIp:string,
    emailHashed:string,otpHashed:string) {
        const resetPasswordEmailTemplate = `
        <html>
          <body>
            <h2>Reset Your Maraka Password</h2>
            <p>Dear ${email},</p>
            <p>We received a request to reset your password for your Maraka account.</p>
            <p>To reset your password, please click on the following link:</p> 
            <p><a href="${serverIp}/auth/reset-password/${emailHashed}/${otpHashed}">Reset Password</a></p>
            <p>If you did not request a password reset, please ignore this email.</p>
            <p>Best regards,</p>
            <p>The Maraka Team</p>
          </body>
        </html>
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
        console.log(data)
        return await axios.post(server+"/sendEmail/",data);
}