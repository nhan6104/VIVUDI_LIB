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
 * ProfileService Class                                                          *
 ******************************************************************************/
class ProfileServiceClass {
  /******************************************************************************
   * Tạo instance cho service                                                   *
   ******************************************************************************/
  private static instance: ProfileServiceClass;

  /******************************************************************************
   * Hàm khởi tạo private để đảm bảo chỉ có một instance duy nhất               *
   ******************************************************************************/
  private constructor() { }

  /******************************************************************************
   * Hàm lấy instance của ProfileService                                           *
   * Sử dụng singleton pattern để đảm bảo chỉ có một instance duy nhất          *
   ******************************************************************************/
  static getInstance(): ProfileServiceClass {
    if (!ProfileServiceClass.instance) {
      ProfileServiceClass.instance = new ProfileServiceClass();
    };

    return ProfileServiceClass.instance;
  };


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
    return await baseApiService.get<any>(`/user/profile/${userId}`);
  };

};

/******************************************************************************\
 * Khởi tạo instance của AuthService                                           *
 ******************************************************************************/
export const profileService = ProfileServiceClass.getInstance();