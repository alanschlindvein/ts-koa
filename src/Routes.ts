import Koa from 'koa'

import UserRoutes from './controllers/user/UserRoutes'

export default class Routes {
  private readonly _app: Koa
  private readonly _userRoutes: UserRoutes

  public constructor (app: Koa) {
    this._app = app
    this._userRoutes = new UserRoutes()
  }

  public init (): void {
    this._app
      .use(this._userRoutes.router.routes())
      .use(this._userRoutes.router.allowedMethods())
  }
}
