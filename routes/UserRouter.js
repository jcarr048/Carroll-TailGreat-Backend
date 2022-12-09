const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)
Router.get('/:user_id', controller.GetUserbyId)
Router.post('/register', controller.RegisterUser)

module.exports = Router
