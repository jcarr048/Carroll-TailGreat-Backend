const Router = require('express').Router()
const controller = require('../controllers/FeedbackController')

Router.get('/', controller.GetAllFeedback)
Router.post('/create', controller.CreateFeedback)
Router.put('/:feedback_id', controller.UpdateFeedback)
Router.delete('/:feedback_id', controller.DeleteFeedback)

module.exports = Router
