import Koa from 'koa'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

import Routes from './Routes'

class App {
    private readonly _app: Koa
    private readonly _routes: Routes

    public constructor () {
      this._app = new Koa()
      this._routes = new Routes(this._app)

      this.middlewares()
      this.initRoutes()
    }

    public get app (): Koa {
      return this._app
    }

    private initRoutes (): void {
      this._routes.init()
    }

    private middlewares (): void {
      this._app.use(helmet())
      this._app.use(cors())
      this._app.use(bodyParser())
    }
}

export default App
