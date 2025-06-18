export class CreateUserProfileDTO {
  /****************************
   * Tên của người dùng       *
   * Yêu cầu: 1-50 ký tự      *
   * pattern: .min(1).max(50) *
   ****************************/
  public first_name!: string;

  /****************************
   * Họ của người dùng        *
   * Yêu cầu: 1-50 ký tự      *
   * pattern: .min(1).max(50) *
   ****************************/
  public last_name!: string;

  /****************************
   * Giới tính                *
   * Yêu cầu: male, female, other *
   * pattern: .valid(...Object.values(SEXES)) *
   ****************************/
  public sex!: string;

  /****************************
   * Ngày sinh                *
   * Yêu cầu: không được trong tương lai *
   * pattern: .max('now')     *
   ****************************/
  public dob!: Date;

  /****************************
   * Tên hiển thị             *
   * Yêu cầu: 1-100 ký tự     *
   * pattern: .min(1).max(100) *
   ****************************/
  public display_name!: string;

  /****************************
   * Mô tả cá nhân            *
   * Yêu cầu: tối đa 500 ký tự, có thể rỗng *
   * pattern: .max(500).optional().allow('') *
   ****************************/
  public description?: string;

  /****************************
   * URL ảnh đại diện         *
   * Yêu cầu: URL hợp lệ, có thể rỗng *
   * pattern: .uri().optional().allow('') *
   ****************************/
  public avt_url?: string;

  /****************************
   * URL ảnh nền              *
   * Yêu cầu: URL hợp lệ, có thể rỗng *
   * pattern: .uri().optional().allow('') *
   ****************************/
  public background_url?: string;

  constructor() {
    this.first_name = '';
    this.last_name = '';
    this.sex = '';
    this.dob = new Date();
    this.display_name = '';
    this.description = '';
    this.avt_url = '';
    this.background_url = '';
  }
}

export class UpdateUserProfileDTO {
  /****************************
   * Tên của người dùng       *
   * Yêu cầu: 1-50 ký tự      *
   * pattern: .min(1).max(50) *
   ****************************/
  public first_name?: string;

  /****************************
   * Họ của người dùng        *
   * Yêu cầu: 1-50 ký tự      *
   * pattern: .min(1).max(50) *
   ****************************/
  public last_name?: string;

  /****************************
   * Giới tính                *
   * Yêu cầu: male, female, other *
   * pattern: .valid(...Object.values(SEXES)) *
   ****************************/
  public sex?: string;

  /****************************
   * Ngày sinh                *
   * Yêu cầu: không được trong tương lai *
   * pattern: .max('now')     *
   ****************************/
  public dob?: Date;

  /****************************
   * Tên hiển thị             *
   * Yêu cầu: 1-100 ký tự     *
   * pattern: .min(1).max(100) *
   ****************************/
  public display_name?: string;

  /****************************
   * Mô tả cá nhân            *
   * Yêu cầu: tối đa 500 ký tự, có thể rỗng *
   * pattern: .max(500).optional().allow('') *
   ****************************/
  public description?: string;

  /****************************
   * URL ảnh đại diện         *
   * Yêu cầu: URL hợp lệ, có thể rỗng *
   * pattern: .uri().optional().allow('') *
   ****************************/
  public avt_url?: string;

  /****************************
   * URL ảnh nền              *
   * Yêu cầu: URL hợp lệ, có thể rỗng *
   * pattern: .uri().optional().allow('') *
   ****************************/
  public background_url?: string;

  constructor() {
    this.first_name = '';
    this.last_name = '';
    this.sex = '';
    this.dob = new Date();
    this.display_name = '';
    this.description = '';
    this.avt_url = '';
    this.background_url = '';
  }
}