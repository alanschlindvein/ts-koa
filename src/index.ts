import Koa, { BaseContext } from 'koa'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'

import { config } from 'dotenv'
config()

const app = new Koa()
const router = new Router()

app.use(helmet())
app.use(cors())
app.use(bodyParser())

router.get('/', (ctx: BaseContext): string => (ctx.body = 'toto'))

app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT || 5000)
