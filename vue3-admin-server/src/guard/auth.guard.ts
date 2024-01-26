/**
 * 自定义守卫 - 这些代码来自官方文档
 */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'
import { IS_PUBLIC_KEY } from 'src/decorator/skipAuth.decorator'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    const request = context.switchToHttp().getRequest()
    const token = this.extractTokenFromHeader(request)

    if (isPublic) {
      // 💡 See this condition
      return true
    }

    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JSON_TOKEN_KEY,
      })
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload
    } catch {
      throw new UnauthorizedException()
    }
    return true
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }
}

// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
// import { JwtService } from '@nestjs/jwt'
// import { Observable } from 'rxjs'

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private readonly jwtService: JwtService) {}

//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const req = context.switchToHttp().getRequest()
//     const authHeader = req.headers.authorization
//     if (!authHeader) return false
//     const token = authHeader.split(' ')[1]
//     if (!token) return false
//     try {
//       const user = this.jwtService.verify(token)
//       req.user = user
//       return true
//     } catch (error) {
//       return false
//     }
//   }
// }

/**
 * 这两段代码都用于实现一个认证守卫（AuthGuard）以验证JWT令牌（Token）的有效性。
 * 然而，它们处理失败的认证和验证令牌的方式有所不同。
 *
 *
 * 异常处理：在第一段代码中，如果获取令牌失败或者JWT验证失败，都会抛出一个UnauthorizedException。
 * 这种方法让服务器能返回一个标准的HTTP 401 Unauthorized响应，这是提醒用户需要进行身份验证的常用
 * 方法。
 *
 * 与此不同，第二段代码在遇到相同情况时返回false，这会使得服务器返回一个HTTP 403 Forbidden响应，
 * 表示服务器拒绝执行。、
 *
 *
 * 抽取Token：第一段代码中使用了一个额外的方法extractTokenFromHeader来确保请求头中的authorization
 * 字段以Bearer作为前缀。
 * 如果没有这个前缀，会返回undefined并抛出异常。这是OAuth 2.0授权方案的一部分，通常用于以标准化方式
 * 发送令牌。
 * 而第二段代码没有进行这个检查，它只是简单地从authorization字段中提取出第二部分作为令牌。
 *
 *
 * 异步验证：第一段代码使用了async和await关键字，通过this.jwtService.verifyAsync进行异步的JWT验证。
 *
 * 同样，它提供了一个secret密钥作为参数。第二段代码中则使用了this.jwtService.verify进行同步的验证，
 * 没有显式地提供秘钥。
 * 需要注意的是，不论使用同步还是异步验证，关键在于你的服务器环境和应用需求。
 * 如果你的服务器能处理大量并发连接，或者你的应用中有大量密集型I/O操作，异步验证可能会更合适。
 * 总的来说，两段代码都实现了同样的功能，但第一段代码进行了更完整和符合标准的处理。
 */

/**
 * @Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request); //提前提取token

    if (token) { //如果请求头中含有token
      try {
        const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JSON_TOKEN_KEY,
      })
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;
      } catch {
        throw new UnauthorizedException();
      }
    } else if (isPublic) { //如果请求头中不含token，且路由被@Public修饰
      return true;
    } else { //如果请求头中不含token，且路由没有被@Public修饰
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
 */
