function generateOTP(size:any) { 
  
    // Declare a digits variable 
    // which stores all digits  
    let digits = '0123456789'; 
    let OTP = ''; 
    let len = digits.length 
    for (let i = 0; i < size; i++) { 
        OTP += digits[Math.floor(Math.random() * len)]; 
    } 
     
    return  Number.parseInt(OTP); 
} 
export default generateOTP