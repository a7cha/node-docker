/*
* @Author: kukqvfnv
* @Date:   2021-09-06 22:57:52
* @Last Modified by:   kukqvfnv
* @Last Modified time: 2021-09-09 09:53:40
*/
const ronin = require('ronin-server')
const mocks = require('ronin-mocks')
const database = require("ronin-database")
const server = ronin.server()

database.connect( process.env.CONNECTIONSTRING )
server.use('/', mocks.server(server.Router(), false, true))
server.use('/foo', (req, res) => {
	return res.json({"foo": "bar"})
})

server.start()