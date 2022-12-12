const Router = require('express').Router()
const controller = require('../controllers/FeedbackController')
const middleware = require('../middleware')

Router.get('/', controller.GetAllFeedback)
Router.post(
  '/:tailgate_id/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateFeedback
)
Router.put(
  '/:feedback_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateFeedback
)
Router.delete(
  '/:feedback_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteFeedback
)

module.exports = Router
