/******************************************************************************\
 *                   © ViVuDi 2025. All rights reserved.                      *
 *******************************************************************************
 *  File        : auth.service.ts                                             *
 *  Author      : Minh Nhật                                                   *
 *  Created     : 13/06/2025                                                  *
 *  Updated by  :                                                             *
 *  Modified    :                                                             *
\******************************************************************************/
import { baseApiService } from "./base.service.js";
/******************************************************************************
 * AuthService Class                                                          *
 ******************************************************************************/
class AuthServiceClass {
    /******************************************************************************
     * Tạo instance cho service                                                   *
     ******************************************************************************/
    static instance;
    /******************************************************************************
     * Hàm khởi tạo private để đảm bảo chỉ có một instance duy nhất               *
     ******************************************************************************/
    constructor() { }
    /******************************************************************************
     * Hàm lấy instance của AuthService                                           *
     * Sử dụng singleton pattern để đảm bảo chỉ có một instance duy nhất          *
     ******************************************************************************/
    static getInstance() {
        if (!AuthServiceClass.instance) {
            AuthServiceClass.instance = new AuthServiceClass();
        }
        ;
        return AuthServiceClass.instance;
    }
    ;
    /******************************************************************************
     * Hàm đăng nhập người dùng                                                   *
     * @param payload: LoginDTO - Dữ liệu đăng nhập của người dùng                *
     * @returns Promise<any> - Kết quả trả về từ API                              *
     ******************************************************************************/
    async login(payload) {
        return await baseApiService.post("/auth/login", { body: payload });
    }
    ;
    async register(payload) {
        return await baseApiService.post("/auth/register", { body: payload });
    }
    ;
    async forgotPassword(payload) {
        return await baseApiService.post("/auth/forgot_password", { body: payload });
    }
    ;
    async resetPassword(payload) {
        return await baseApiService.post("/auth/reset_password", { body: payload });
    }
    ;
    async changePassword(payload, bearerToken) {
        return await baseApiService.post("/auth/change_password", { body: payload, headers: { "Authorization": `Bearer ${bearerToken}` } });
    }
    ;
    async verifyOtp(payload) {
        return await baseApiService.post("/auth/verify_otp", { body: payload });
    }
    ;
}
;
/******************************************************************************\
 * Khởi tạo instance của AuthService                                           *
 ******************************************************************************/
export const authService = AuthServiceClass.getInstance();
