import { Controller, Get, Req } from '@nestjs/common'
import { Public } from 'src/decorator/skipAuth.decorator'

@Controller('user')
export class UserController {
  constructor() {}

  @Public()
  @Get()
  getHello(): string {
    return 'Hello Nest!'
  }

  // 获取当前用户信息
  @Public()
  @Get('current')
  getUser(@Req() req: any) {
    return req.session
  }
}
