import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'

@Injectable()
export class LoggedInGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 通过ExecutionContext获取Request对象
    const request = context.switchToHttp().getRequest()

    // 如果Session中有userId，说明用户已经登录
    if (request.session && request.session.userId) {
      return false // 返回false就会阻止继续执行请求
    }

    return true // 返回true就会继续执行请求
  }
}
