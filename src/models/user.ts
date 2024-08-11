// user.ts
export interface User {
    id: number;
    username: string;
    email: string;
    full_name:string,
    is_superuser:boolean,
    is_active:boolean,
    validated:true
    phone1:string,
    phone2?:string,
    otp:string,
    is_reset_password?:boolean
}
