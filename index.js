const express = require('express')
const server = express()

const routes = require('./src/routes')

server.use(routes)

const PORT = 3333
server.listen(PORT, ()=>{
    console.log(`Aplicação rodando na porta ${PORT}`)
})