const Router = require('express').Router()
const controller = require('../controllers/HostController')
const middleware = require('../middleware')

Router.get('/', controller.GetHosts)
Router.get('/:host_id', controller.GetHostbyId)
Router.post('/register', controller.RegisterHost)

module.exports = Router
