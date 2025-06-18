export class RegisterDto {
    /****************************
     * Email người dùng
     * Phải đúng định dạng email
     ****************************/
    email;
    /****************************
     * Số điện thoại
     * Yêu cầu: 10 chữ số
     * Pattern: /^[0-9]{10}$/
     ****************************/
    phone_number;
    /****************************
     * Mật khẩu
     * Yêu cầu: tối thiểu 8 ký tự, có chữ hoa, chữ thường, số, ký tự đặc biệt
     * Pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/
     ****************************/
    password;
    constructor() {
        this.email = '';
        this.phone_number = '';
        this.password = '';
    }
}
export class LoginDto {
    /****************************
     * Email đăng nhập
     ****************************/
    email;
    /****************************
     * Mật khẩu đăng nhập
     ****************************/
    password;
    constructor() {
        this.email = '';
        this.password = '';
    }
}
export class ForgotPasswordDto {
    /****************************
     * Email để đặt lại mật khẩu
     ****************************/
    email;
    constructor() {
        this.email = '';
    }
}
export class ResetPasswordDto {
    /****************************
     * Mã OTP xác thực
     * Yêu cầu: đúng 6 chữ số
     * pattern: /^\d{6}$/
     ****************************/
    otp;
    /****************************
     * Mật khẩu mới
     * Yêu cầu: ít nhất 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt
     * pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
     ****************************/
    password;
    constructor() {
        this.otp = '';
        this.password = '';
    }
}
export class ChangePasswordDto {
    /****************************
     * Mật khẩu hiện tại
     ****************************/
    current_password;
    /****************************
     * Mật khẩu mới
     * Yêu cầu: ít nhất 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt
     * pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
     ****************************/
    new_password;
    constructor() {
        this.current_password = '';
        this.new_password = '';
    }
}
export class VerifyOtpDto {
    /****************************
     * Mã OTP xác thực
     * Yêu cầu: đúng 6 chữ số
     * pattern: /^\d{6}$/
     ****************************/
    otp;
    constructor() {
        this.otp = '';
    }
}
