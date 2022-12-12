const Router = require('express').Router()
const controller = require('../controllers/TailgateController')

Router.get('/', controller.GetAllTailgates)
Router.get('/:tailgate_id', controller.GetTailgateDetails)
Router.delete(
  '/:tailgate_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteTailgate
)
Router.post(
  '/create/:host_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateTailgate
)
Router.put(
  '/:tailgate_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateTailgate
)

module.exports = Router
