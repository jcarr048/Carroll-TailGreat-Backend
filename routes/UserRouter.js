const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetUsers)
Router.post('/register', controller.RegisterUser)
Router.post('/login', controller.LoginUser)
Router.put(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUser
)
Router.delete(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)

Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
Router.get('/:user_id', controller.GetUserbyId)
module.exports = Router
