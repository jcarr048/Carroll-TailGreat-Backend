const Router = require('express').Router()
const controller = require('../controllers/TailgateController')

Router.get('/', controller.GetAllTailgates)
Router.get('/:tailgate_id', controller.GetTailgateDetails)
Router.delete('/:tailgate_id', controller.DeleteTailgate)
Router.post('/create', controller.CreateTailgate)

module.exports = Router
