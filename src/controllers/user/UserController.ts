import { BaseContext } from 'koa'

export default class UserController {
  public users (ctx: BaseContext): string[] {
    return (ctx.body = ['1', '2'])
  }
}
