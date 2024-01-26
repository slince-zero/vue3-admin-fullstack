import { IsNotEmpty, IsString } from 'class-validator'
export class UserLoginDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString()
  username: string

  @IsNotEmpty({ message: '密码不能为空' })
  @IsString()
  password: string

  @IsNotEmpty({ message: '验证码不能为空' })
  @IsString()
  captcha: string
}
