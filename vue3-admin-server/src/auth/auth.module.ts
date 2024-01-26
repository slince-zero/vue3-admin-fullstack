import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { UserModule } from 'src/user/user.module'
import { PrismaService } from 'src/prisma/prisma.service'
import { JwtModule } from '@nestjs/jwt'
import { AuthGuard } from 'src/guard/auth.guard'
import { APP_GUARD } from '@nestjs/core'

/**
 * import { JwtService } from '@nestjs/jwt'
 * 注意，这是一个坑，如果导入它，再在providers里引入它会报错，secretOrPrivateKey must have a value
 * 这是因为，通过注册程序，会覆盖来自 jwt 模块的版本，并且直接注册的版本不使用传递给 jwt 模块的配置，因此传入的 secret 会为空
 * 尽管你在这个页面，能够打印出来 process.env.JSON_TOKEN_KEY 的值
 */

@Module({
  imports: [
    JwtModule.register({
      global: true, //  注册为全局模块
      secret: process.env.JSON_TOKEN_KEY,
      signOptions: { expiresIn: '10d' },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    {
      // 全局注册 Guard
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {}
