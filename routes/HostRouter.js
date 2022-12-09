const Router = require('express').Router()
const controller = require('../controllers/HostController')
const middleware = require('../middleware')

Router.get('/', controller.GetHosts)
Router.get('/:host_id', controller.GetHostbyId)
Router.post('/register', controller.RegisterHost)
Router.put(
  '/:host_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateHost
)
Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
Router.delete(
  '/:host_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteHost
)

Router.post('/login', controller.LoginHost)

module.exports = Router
