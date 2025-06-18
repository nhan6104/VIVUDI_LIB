/******************************************************************************\
 *                   © ViVuDi 2025. All rights reserved.                      *
 *******************************************************************************
 *  File        : auth.service.ts                                             *
 *  Author      : Minh Nhật                                                   *
 *  Created     : 13/06/2025                                                  *
 *  Updated by  :                                                             *
 *  Modified    :                                                             *
\******************************************************************************/

import { UpdateUserProfileDTO, CreateUserProfileDTO } from "../dto/profile.dto.js";
import { baseApiService } from "./base.service.js";

/******************************************************************************
 * AuthService Class                                                          *
 ******************************************************************************/
class AuthServiceClass {
  /******************************************************************************
   * Tạo instance cho service                                                   *
   ******************************************************************************/
  private static instance: AuthServiceClass;

  /******************************************************************************
   * Hàm khởi tạo private để đảm bảo chỉ có một instance duy nhất               *
   ******************************************************************************/
  private constructor() { }

  /******************************************************************************
   * Hàm lấy instance của AuthService                                           *
   * Sử dụng singleton pattern để đảm bảo chỉ có một instance duy nhất          *
   ******************************************************************************/
  static getInstance(): AuthServiceClass {
    if (!AuthServiceClass.instance) {
      AuthServiceClass.instance = new AuthServiceClass();
    };

    return AuthServiceClass.instance;
  };

  /******************************************************************************
   * Hàm đăng nhập người dùng                                                   *
   * @param payload: LoginDTO - Dữ liệu đăng nhập của người dùng                *
   * @returns Promise<any> - Kết quả trả về từ API                              *
   ******************************************************************************/
  public async createUserProfile(payload: CreateUserProfileDTO, bearerToken: string) {
    return await baseApiService.post<any>("/user/profile", { body: payload, headers: { "Authorization": `Bearer ${bearerToken}` } });
  };

  public async updateUserProfile(payload: UpdateUserProfileDTO, bearerToken: string) {
    return await baseApiService.put<any>("/user/profile", { body: payload, headers: { "Authorization": `Bearer ${bearerToken}` } });
  };

  public async getOwnUserProfile(bearerToken: string) {
    return await baseApiService.get<any>("/user/profile", { headers: { "Authorization": `Bearer ${bearerToken}` } });
  };

  public async getUserProfile(userId: string) {
    return await baseApiService.get<any>("/user/profile", { params: { "id": userId } });
  };

};

/******************************************************************************\
 * Khởi tạo instance của AuthService                                           *
 ******************************************************************************/
export const authService = AuthServiceClass.getInstance();