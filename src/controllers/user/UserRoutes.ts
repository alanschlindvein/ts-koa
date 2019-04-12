import Router from 'koa-router'

import UserController from './UserController'

export default class UserRoutes {
  private readonly _router: Router
  private readonly _controller: UserController

  public constructor () {
    this._router = new Router()
    this._controller = new UserController()

    this.initRoutes()
  }

  public get router (): Router {
    return this._router
  }

  private initRoutes (): void {
    this._router.get('/users', this._controller.users)
  }
}
