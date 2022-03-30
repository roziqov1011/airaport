const http = require('http')
const express = require('express')
const app = express()
const { ApolloServer } = require('apollo-server-express')
const PORT = process.env.PORT || 4000
const modules = require('./modules')

app.get('/', (_, res) => res.send("Menman"))

const server = new ApolloServer({
    modules,
    introspection: true,
    playground: true
})

const httpServer = http.createServer(app)
server.applyMiddleware({ app })

httpServer.listen({ port: PORT}, () => {
    console.log(PORT + server.graphqlPath)
})