import { IsNotEmpty, IsString, Matches } from 'class-validator'

export class UserRegisterDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString()
  @Matches(/^[a-zA-Z0-9_-]{4,16}$/, {
    message: '用户名必须是4-16位的字母数字下划线',
  })
  username: string

  @IsNotEmpty({ message: '密码不能为空' })
  @IsString()
  password: string
}
