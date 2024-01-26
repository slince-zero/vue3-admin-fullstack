import {
  BadRequestException,
  Injectable,
  Session,
  UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserLoginDto } from 'src/user/dtos/userLogin.dto'
import { JwtService } from '@nestjs/jwt'
import * as svgCaptcha from 'svg-captcha'
import { UserRegisterDto } from 'src/user/dtos/userRegister.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async userAuthLogin(body: UserLoginDto, req: any) {
    const { username, password, captcha } = body
    const user = await this.prisma.user.findFirst({ where: { username } })

    if (!user) {
      throw new UnauthorizedException({
        success: false,
        message: '用户名不存在',
      })
    }

    if (user.password !== password) {
      throw new UnauthorizedException({
        success: false,
        message: '密码错误',
      })
    }

    if (req.session.captcha !== captcha) {
      throw new UnauthorizedException({
        success: false,
        message: '验证码错误',
      })
    } else {
      // 保存用户信息到 session
      req.session.user = { username: user.username }
      // 删除验证码
      delete req.session.captcha
    }
    req.session.userId = user.id
    const payload = { sub: user.id, username: user.username }
    return {
      success: true,
      data: {
        message: '登录成功',
        access_token: await this.jwtService.sign(payload, {
          expiresIn: '1d',
        }),
      },
    }
  }

  async userAuthRegister(body: UserRegisterDto) {
    const { username, password } = body
    const user = await this.prisma.user.findFirst({ where: { username } })
    if (user) {
      throw new BadRequestException({
        success: false,
        message: '用户名已存在',
      })
    }
    await this.prisma.user.create({ data: { username, password } })
    return { success: true, data: { message: '注册成功' } }
  }

  // 测试token，返回所有注册用户信息
  async testToken() {
    const users = await this.prisma.user.findMany()
    return { success: true, data: { users } }
  }

  // 生成验证码
  async getCaptcha(@Session() session: any) {
    const captcha = svgCaptcha.create({
      size: 4, // 验证码长度
      ignoreChars: '0o1i', // 验证码字符中排除 0o1i
      noise: 2, // 干扰线条的数量
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: '#eee',
    })
    session.captcha = captcha.text.toLowerCase()
    return {
      success: true,
      data: {
        captcha,
      },
    }
  }
}
