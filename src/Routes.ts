import Koa from 'koa'

import UserRoutes from './controllers/user/UserRoutes'

export default class Routes {
  private readonly _app: Koa
  private readonly _prefix: string

  public constructor (app: Koa, prefix: string = '') {
    this._app = app
    this._prefix = prefix
  }

  public init (): void {
    const userRoutes: UserRoutes = new UserRoutes(this._prefix)

    this._app
      .use(userRoutes.router.routes())
      .use(userRoutes.router.allowedMethods())
  }
}
