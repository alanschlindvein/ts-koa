import Router from 'koa-router'

import UserController from './UserController'

export default class UserRoutes {
  private readonly _router: Router
  private readonly _controller: UserController

  public constructor (prefix: string = '') {
    this._router = new Router()
    this._controller = new UserController()

    this.initRoutes(prefix)
  }

  public get router (): Router {
    return this._router
  }

  private initRoutes (prefix: string): void {
    this._router.get(`${prefix}/users`, this._controller.users)
  }
}
