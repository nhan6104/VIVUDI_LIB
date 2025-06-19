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
 * ProfileService Class                                                          *
 ******************************************************************************/
class ProfileServiceClass {
    /******************************************************************************
     * Tạo instance cho service                                                   *
     ******************************************************************************/
    static instance;
    /******************************************************************************
     * Hàm khởi tạo private để đảm bảo chỉ có một instance duy nhất               *
     ******************************************************************************/
    constructor() { }
    /******************************************************************************
     * Hàm lấy instance của ProfileService                                           *
     * Sử dụng singleton pattern để đảm bảo chỉ có một instance duy nhất          *
     ******************************************************************************/
    static getInstance() {
        if (!ProfileServiceClass.instance) {
            ProfileServiceClass.instance = new ProfileServiceClass();
        }
        ;
        return ProfileServiceClass.instance;
    }
    ;
    async createUserProfile(payload, bearerToken) {
        return await baseApiService.post("/user/profile", { body: payload, headers: { "Authorization": `Bearer ${bearerToken}` } });
    }
    ;
    async updateUserProfile(payload, bearerToken) {
        return await baseApiService.put("/user/profile", { body: payload, headers: { "Authorization": `Bearer ${bearerToken}` } });
    }
    ;
    async getOwnUserProfile(bearerToken) {
        return await baseApiService.get("/user/profile", { headers: { "Authorization": `Bearer ${bearerToken}` } });
    }
    ;
    async getUserProfile(userId) {
        return await baseApiService.get(`/user/profile/${userId}`);
    }
    ;
}
;
/******************************************************************************\
 * Khởi tạo instance của AuthService                                           *
 ******************************************************************************/
export const profileService = ProfileServiceClass.getInstance();
