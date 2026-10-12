// {
//     "success": true,
//     "message": "Success",
//     "data": {
//         "user": {
//             "id": 4,
//             "name": "Demo Operations",
//             "email": "operations@example.com",
//             "phone": "01011111111",
//             "role": "operations",
//             "avatar": null
//         },
//         "requires_2fa": false,
//         "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NtYXJ0LXJldHVybnMuaHVtYS12b2x2ZS5jb20vYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3OTE4MjEyNDQsImV4cCI6MzE3OTE4MjEyNDQsIm5iZiI6MTc5MTgyMTI0NCwianRpIjoibUtuUEN5SDdWQjVIN29NTiIsInN1YiI6IjQiLCJwcnYiOiJhY2MwN2UzYTk3Mzc2Y2M2YmU3ZTJlOWNhZjRlZTllNjQ5MGU0MDVhIiwidG9rZW5faWQiOiI0Y2ZhNGFhOS0xMDUyLTQ5NjgtYTE1Yy00MWE0NzJiNWY1M2MifQ.U9FhuDVSFUkOfANx7ETFWb_VAqJbe6eEUHJMDVBlTJI",
//         "refresh_token": "Nzm4tJvZ4aG6a55TQcXdh1HACJLVil8cXV1Lrsd3DNY6NxcGB5ZRTVphkwZ6tsUy"
//     }
// }
export interface AuthUser{
    id:number;
    name:string;
    email:string;
    phone:string;
    role:string;
    avatar:string|null;
}

export interface LoginResponse{
    success:boolean;
    message:string;
    user:AuthUser;
    requires_2fa:boolean;
    access_token:string;
    refresh_token:string;
}
export interface LoginCredentials{
    email:string;
    password:string;
    device_name:string;
}