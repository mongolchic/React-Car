const port = process.env.PORT || 3003
const logger = require("morgan")
const Express = require("express")
const path = require("path")
const app = new Express()
const publicdir = path.resolve(__dirname, "public")
app.use(logger('dev'))
app.use(Express.static(publicdir))
app.listen(port)
