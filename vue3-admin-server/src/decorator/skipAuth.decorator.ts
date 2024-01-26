/**
 *  自定义装饰器，跳过鉴权
 */

import { SetMetadata } from '@nestjs/common'

// 元数据键
export const IS_PUBLIC_KEY = 'isPublic'
// 装饰器名
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true)
