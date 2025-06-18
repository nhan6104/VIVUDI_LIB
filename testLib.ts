import { authService } from "./services/authServices.js";
import { LoginDto } from "./dto/auth.dto.js";

const loginDto = new LoginDto()
loginDto.email = 'nhan.nguyen1606@hcmut.edu.vn'
loginDto.password = 'Test@123'

const res = await authService.login(loginDto)

console.log(res)