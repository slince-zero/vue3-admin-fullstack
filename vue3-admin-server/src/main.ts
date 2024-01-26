import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.use(
    session({
      secret: 'vue3-admin',
      resave: false,
      saveUninitialized: false,
      rolling: false, // 每次请求添加cookie
      name: 'vue3-admin-server-session', // 存在浏览器cookie中的key
      // 这里的过期时间是个坑，如果时间太短，后端打印不出来生来的验证码
      cookie: { maxAge: null }, // 过期时间 ms
    }),
  )
  app.enableCors({
    origin: true,
    credentials: true,
  })
  await app.listen(3080)
}
bootstrap()
