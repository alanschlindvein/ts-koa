import { config } from 'dotenv'

import App from './App'

config()

const app = new App().app

app.listen(process.env.PORT || 5000)
