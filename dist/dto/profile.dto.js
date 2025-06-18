export class CreateUserProfileDTO {
    /****************************
     * Tên của người dùng       *
     * Yêu cầu: 1-50 ký tự      *
     * pattern: .min(1).max(50) *
     ****************************/
    first_name;
    /****************************
     * Họ của người dùng        *
     * Yêu cầu: 1-50 ký tự      *
     * pattern: .min(1).max(50) *
     ****************************/
    last_name;
    /****************************
     * Giới tính                *
     * Yêu cầu: male, female, other *
     * pattern: .valid(...Object.values(SEXES)) *
     ****************************/
    sex;
    /****************************
     * Ngày sinh                *
     * Yêu cầu: không được trong tương lai *
     * pattern: .max('now')     *
     ****************************/
    dob;
    /****************************
     * Tên hiển thị             *
     * Yêu cầu: 1-100 ký tự     *
     * pattern: .min(1).max(100) *
     ****************************/
    display_name;
    /****************************
     * Mô tả cá nhân            *
     * Yêu cầu: tối đa 500 ký tự, có thể rỗng *
     * pattern: .max(500).optional().allow('') *
     ****************************/
    description;
    /****************************
     * URL ảnh đại diện         *
     * Yêu cầu: URL hợp lệ, có thể rỗng *
     * pattern: .uri().optional().allow('') *
     ****************************/
    avt_url;
    /****************************
     * URL ảnh nền              *
     * Yêu cầu: URL hợp lệ, có thể rỗng *
     * pattern: .uri().optional().allow('') *
     ****************************/
    background_url;
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
    first_name;
    /****************************
     * Họ của người dùng        *
     * Yêu cầu: 1-50 ký tự      *
     * pattern: .min(1).max(50) *
     ****************************/
    last_name;
    /****************************
     * Giới tính                *
     * Yêu cầu: male, female, other *
     * pattern: .valid(...Object.values(SEXES)) *
     ****************************/
    sex;
    /****************************
     * Ngày sinh                *
     * Yêu cầu: không được trong tương lai *
     * pattern: .max('now')     *
     ****************************/
    dob;
    /****************************
     * Tên hiển thị             *
     * Yêu cầu: 1-100 ký tự     *
     * pattern: .min(1).max(100) *
     ****************************/
    display_name;
    /****************************
     * Mô tả cá nhân            *
     * Yêu cầu: tối đa 500 ký tự, có thể rỗng *
     * pattern: .max(500).optional().allow('') *
     ****************************/
    description;
    /****************************
     * URL ảnh đại diện         *
     * Yêu cầu: URL hợp lệ, có thể rỗng *
     * pattern: .uri().optional().allow('') *
     ****************************/
    avt_url;
    /****************************
     * URL ảnh nền              *
     * Yêu cầu: URL hợp lệ, có thể rỗng *
     * pattern: .uri().optional().allow('') *
     ****************************/
    background_url;
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
