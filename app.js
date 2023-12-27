const http = require('http')
const dotenv = require('dotenv')  
const currENV = process?.env?.NODE_ENV?.trim() || 'dev' 
dotenv.config({path: `./${currENV}.env`})
const route = require('./routes')
const server = http.createServer(route.handler)
const port = process.env.PORT || 3030
server.listen(port)