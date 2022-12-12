const Router = require('express').Router()
const controller = require('../controllers/TailgateController')

Router.get('/', controller.GetAllTailgates)
Router.get('/:tailgate_id', controller.GetTailgateDetails)
Router.delete('/:tailgate_id', controller.DeleteTailgate)
Router.post('/create/:host_id', controller.CreateTailgate)
Router.put('/:tailgate_id', controller.UpdateTailgate)

module.exports = Router
