import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Session,
  UseGuards,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserLoginDto } from 'src/user/dtos/userLogin.dto'
import { AuthValidationPipe } from '../common/pipes/authValidation.pipe'
import { UserRegisterDto } from 'src/user/dtos/userRegister.dto'
import { Public } from 'src/decorator/skipAuth.decorator'
import { LoggedInGuard } from '../guard/login.guard'
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * 登录
   * @param username
   * @param password
   * @param captcha
   * @api {post} /api/auth/login 用户登录
   */
  @UseGuards(LoggedInGuard)
  @Public()
  @Post()
  signIn(@Body(new AuthValidationPipe()) body: UserLoginDto, @Req() req: any) {
    return this.authService.userAuthLogin(body, req)
  }

  /**
   * 用户注册
   * @param username
   * @param password
   * @api {post} /api/auth/register 用户注册
   */
  @UseGuards(LoggedInGuard)
  @Public()
  @Post('register')
  signUp(@Body(new AuthValidationPipe()) body: UserRegisterDto) {
    return this.authService.userAuthRegister(body)
  }

  // 生成验证码
  @Public()
  @Get('captcha')
  getCaptcha(@Session() session: any) {
    return this.authService.getCaptcha(session)
  }

  // 测试 token-返回所有注册用户
  @Get()
  testToken() {
    return this.authService.testToken()
  }

  // 退出登录
  @Public()
  @Get('logout')
  logout(@Session() session: any) {
    session.userId = null
    return { success: true, data: { message: '退出成功' } }
  }
}
