export interface User {
    _id?: number;
    userName: string;
    passWord: string;
    email: string;
    phone: string;
}

export const initialUser: User = {
    userName: 'admin',
    passWord: '12345678x@X',
    email: 'tttlan@tma.com.vn',
    phone: '0123-456-789'
};